import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

  return (
    <div className='header-container'>
        <div className="header-text">
            <h1 className='header-heading'>Collaborative  <span className='gradient-text'>coding</span>, simplified</h1>
            <p className='header-subheading'> Create or join a room and start coding together immediately</p>
        </div>
        <div className="header-buttons">
            <button onClick={()=>navigate('/join-room')} className="join-room-button"> Join Room</button>
            <button onClick={()=>navigate('/create-room')} className="create-room-button">Create Room</button>
        </div>
    </div>
  )
}

export default Header
