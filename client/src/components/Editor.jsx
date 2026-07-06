import { useEffect, useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { socket } from "../Socket.js";
import "./Editor.css";

const CodeEditor = ({ roomId, language }) => {
  const [code, setCode] = useState("");
  const timeoutRef = useRef(null);
  const isRemoteUpdate = useRef(false);

  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  const widgetsRef = useRef({});
  const domNodesRef = useRef({});

  const handleMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    editor.onDidChangeCursorPosition((e) => {
      socket.emit("cursorMove", {
        roomId,
        position: e.position,
      });
    });
  };

  const handleChange = (value) => {
    if (isRemoteUpdate.current) return;

    setCode(value);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      socket.emit("codeChange", { roomId, code: value });
    }, 300);
  };

  useEffect(() => {
    const handler = (newCode) => {
      isRemoteUpdate.current = true;
      setCode(newCode);

      setTimeout(() => {
        isRemoteUpdate.current = false;
      }, 0);
    };

    socket.on("codeUpdate", handler);
    return () => socket.off("codeUpdate", handler);
  }, []);

  useEffect(() => {
    const handler = ({ socketId, position, username, color }) => {
      if (
        !editorRef.current ||
        !monacoRef.current ||
        !position ||
        socketId === socket.id
      )
        return;

      const editor = editorRef.current;
      const monaco = monacoRef.current;

      if (!domNodesRef.current[socketId]) {
        const el = document.createElement("div");
        el.className = "cursor-widget";

        const line = document.createElement("div");
        line.className = "cursor-line";
        line.style.background = color;

        const label = document.createElement("div");
        label.className = "cursor-label";
        label.innerText = username;
        label.style.background = color;

        el.appendChild(line);
        el.appendChild(label);

        domNodesRef.current[socketId] = el;
      }

      const domNode = domNodesRef.current[socketId];

      if (widgetsRef.current[socketId]) {
        editor.removeContentWidget(widgetsRef.current[socketId]);
      }

      const widget = {
        getId: () => "cursor-" + socketId,
        getDomNode: () => domNode,
        getPosition: () => ({
          position,
          preference: [
            monaco.editor.ContentWidgetPositionPreference.BELOW,
          ],
        }),
      };

      editor.addContentWidget(widget);
      editor.layout();

      widgetsRef.current[socketId] = widget;
    };

    socket.on("cursorUpdate", handler);
    return () => socket.off("cursorUpdate", handler);
  }, []);

  return (
    <Editor
      height="100%"
      language={language}
      value={code}
      theme="vs-dark"
      onChange={handleChange} 
      onMount={handleMount}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
      }}
    />
  );
};

export default CodeEditor;