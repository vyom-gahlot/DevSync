import { v4 as uuidv4 } from "uuid";
import { rooms } from "../store/rooms.js";


export const createRoom = async (req, res) =>{
    try {
        const roomId = uuidv4();

        rooms[roomId] = {
            users : new Set()
        }

        console.log("Room created:", roomId);

        res.status(201).json({
            success : true,
            message : "Room Created Successfully",
            roomId
        })

    } catch (error) {
        res.status(500).json({
        success: false,
        message: error.message
    });
    }

}

export const joinRoom = async (req, res) => {
  try {
    const { roomId } = req.body;

   
    if (!roomId || !rooms[roomId]) {
      return res.status(400).json({
        success: false,
        message: "Invalid room Id"
      });
    }

    return res.status(200).json({
      success: true,
      roomId
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};