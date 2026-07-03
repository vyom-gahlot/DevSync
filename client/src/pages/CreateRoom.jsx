import React, { useState } from "react";
import "./CreateRoom.css";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const CreateRoom = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const clickHandler = async ()=>{

    if(loading){
      return;
    }
    setLoading(true)
    try {
      const {data} = await api.post('/api/room/create');

      if (data.success) {

        const id = data.roomId;

        navigate(`/room/${id}`);
      }
      if (!data.success || !data.roomId) {
        toast.error("Failed to create room");
        return;
      }


    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }finally{
      setLoading(false)
    }
  }



  return (
    <div className="create-room-container">
      <div className="create-room-card">
        <h1>Create a Room</h1>
        <p>Start a new coding session and invite others</p>

        <button
          onClick={clickHandler}
          disabled={loading}
          className="create-room-btn"
        >
          {loading ? "Creating..." : "Create Room"}
        </button>
      </div>
    </div>
  );
};

export default CreateRoom;