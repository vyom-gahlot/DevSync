import React, { useEffect, useState } from "react";
import "./Room.css";
import RoomHeader from "../components/RoomHeader";
import Chat from "../components/Chat";
import { useParams } from "react-router-dom";
import CodeEditor from "../components/Editor.jsx";
import { socket } from "../socket";

const Room = () => {
  const { id: roomId } = useParams();
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    if (!roomId) return;

    const join = () => {
      socket.emit("joinRoom", { roomId });
    };

    socket.connect();

    if (socket.connected) join();
    else socket.on("connect", join);

    return () => {
      socket.emit("leaveRoom", { roomId });
      socket.off("connect", join);
    };
  }, [roomId]);

  // 🔥 SYNC LANGUAGE
  useEffect(() => {
    const handler = ({ language }) => {
      setLanguage(language);
    };

    socket.on("languageChange", handler);
    return () => socket.off("languageChange", handler);
  }, []);

  return (
    <div className="room">
      <RoomHeader language={language} setLanguage={setLanguage} />

      <div className="room-body">
        <div className="editor-section">
          <CodeEditor roomId={roomId} language={language} />
        </div>

        <div className="chat-section">
          <Chat roomId={roomId} />
        </div>
      </div>
    </div>
  );
};

export default Room;