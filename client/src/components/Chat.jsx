import React, { useState, useEffect } from "react";
import "./Chat.css";
import { socket } from "../socket";

const Chat = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    const handler = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("receiveMessage", handler);
    return () => socket.off("receiveMessage", handler);
  }, []);

  useEffect(() => {
    const handler = (usersList) => {
      setUsers(usersList);
    };

    socket.on("roomUsers", handler);
    return () => socket.off("roomUsers", handler);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    socket.emit("sendMessage", {
      roomId,
      message: input,
    });

    setInput("");
  };

  return (
    <div className="chat-wrapper">
      {showUsers && (
        <div className="users-panel">
          <h3>Users</h3>
          {users.map((user, i) => (
            <div key={i} className="user-item">
              {user.username}
            </div>
          ))}
        </div>
      )}

      <div className="chat-container">
        <div className="chat-header">
          Live Chat
          <button
            className="toggle-users-btn"
            onClick={() => setShowUsers(!showUsers)}
          >
            {showUsers ? "Close" : "Users"}
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className="chat-message-block">
              <div className="chat-user">{msg.user}</div>
              <div className="chat-text">{msg.text}</div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            value={input}
            placeholder="Type message..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;