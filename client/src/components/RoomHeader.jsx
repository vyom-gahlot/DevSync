import React from "react";
import "./RoomHeader.css";
import { socket } from "../socket";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const RoomHeader = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const { id: roomId } = useParams();

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Room link copied!");
    } catch {
      toast.error("Failed to copy link");
    }
  };

  const handleCopyRoomId = async () => {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success("Room ID copied!");
    } catch {
      toast.error("Failed to copy Room ID");
    }
  };

  const handleLeave = () => {
    socket.emit("leaveRoom", { roomId });
    socket.disconnect();
    navigate("/");
  };


  const handleLanguageChange = (e) => {
    const lang = e.target.value;

    setLanguage(lang);

    socket.emit("languageChange", {
      roomId,
      language: lang,
    });
  };

  return (
    <div className="room-header">
      <div className="header-left">
        <img src={assets.dev_sync_logo} className="logo" />

        <div className="room-id-box">
          <span className="label">Room:</span>
          <span className="room-id">{roomId}</span>

          <img
            src={assets.copy_room_id}
            className="copy-roomid"
            onClick={handleCopyRoomId}
          />
        </div>
      </div>

      <div className="header-center">
        <span className="language-selection">Language</span>
        <select
          className="language-dropdown"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
      </div>

      <div className="header-right">
        <button className="btn share-btn" onClick={handleShare}>
          Share
        </button>
        <button className="btn leave-btn" onClick={handleLeave}>
          Leave
        </button>
      </div>
    </div>
  );
};

export default RoomHeader;