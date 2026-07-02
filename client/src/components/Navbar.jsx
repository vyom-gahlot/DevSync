import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';


const Navbar = () => {

  const {axios, token, setToken, logout} =  useAppContext();

  const navigate = useNavigate();

  const handleClick = async ()=>{
    if(token){
      logout();
      toast.success("Logged out successfully")
    }
    else{
      navigate('/sign-in')
    }
  }

  
  return (
    <div className='navbar-full'>
        <div className="navbar-top">
            <img src={assets.dev_sync_logo} alt="logo" className='navbar-logo' />
            <button onClick={handleClick} className='sign-in-button'>{token ? 'Sign out' : 'Sign in'}</button>
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
