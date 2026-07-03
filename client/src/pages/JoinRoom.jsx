import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./JoinRoom.css";
import toast from "react-hot-toast";
import api from "../api/axios";

const JoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

 const onClickHandler = async (e) => {
  e.preventDefault();

  if (!roomId.trim()) {
    toast.error("Enter Room ID");
    return;
  }

  setLoading(true);

  try {
    const { data } = await api.post('/api/room/join', { roomId });

    if (!data.success) {
      toast.error(data.message);
      return;
    }

    navigate(`/room/${roomId}`);

  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="join-room-container">
      <div className="join-room-card">
        <h1>Join a Room</h1>
        <p>Enter a Room ID to join a session</p>

        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="room-input"
        />

        <button onClick={onClickHandler} disabled={loading} className="join-room-btn">
          {loading ? 'Joining' : 'Join Room'}
        </button>
      </div>
    </div>
  );
};

export default JoinRoom;