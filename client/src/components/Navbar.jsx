import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar-full'>
        <div className="navbar-top">
            <img src={assets.dev_sync_logo} alt="logo" className='navbar-logo' />
            <button onClick={()=>navigate('/sign-in')} className='sign-in-button'> Sign In</button>
        </div>
        <div className='navbar-bottom'>

            <div className='navbar-bottom-options' onClick={()=>navigate('/')}>Home</div>
            <div className='navbar-bottom-options' onClick={()=>navigate('/create-room')}>Create Room</div>
            <div className='navbar-bottom-options' onClick={()=>navigate('/join-room')}>Join Room</div>
            <div className='navbar-bottom-options' onClick={()=>navigate('/')}>Help</div>
            <div className='navbar-bottom-options' onClick={()=>navigate('/')}>Features</div>
            <div className='navbar-bottom-options' onClick={()=>navigate('/')}>Recent</div>

        
          
        </div>
      
    </div>
  )
}

export default Navbar
