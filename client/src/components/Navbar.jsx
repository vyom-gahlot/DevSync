import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar-full'>
        <div className="navbar-top">
            <img src={assets.dev_sync_logo} alt="" />
            <button> Sign In</button>
        </div>
      
    </div>
  )
}

export default Navbar
