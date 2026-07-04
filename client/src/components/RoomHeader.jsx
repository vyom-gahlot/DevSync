import React from 'react'
import './RoomHeader.css'
import { assets } from '../assets/assets'
import toast from 'react-hot-toast'

const RoomHeader = ({ roomId }) => {

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId)
    toast.success("Room ID copied")
  }

  return (
    <div className='roomheader-container'>

      <div className='roomheader-left'> 
        <img src={assets.dev_sync_logo} alt="DevSync" className='room-logo'/>

        <p className='header-seperation'>/</p>

        <div className="room-id">
          <div className="room-id-text">
            <p className='id-heading'>Room :</p>
            <p className="id-content">{roomId}</p>
          </div>
        
          <img 
            className='room-id-copy' 
            src={assets.copy_room_id} 
            alt="Copy"
            onClick={copyRoomId}
          />
        </div>
      </div>

      <div className='roomheader-right'>
        <button className='header-btn share-btn'>
            <img src={assets.copy_room} alt="" />
          Share Room
        </button>

        <button className='header-btn leave-btn'>
            <img src={assets.exit_room} alt="" />
          Leave
        </button>
      </div>

    </div>
  )
}

export default RoomHeader
