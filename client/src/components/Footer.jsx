import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='footer-container'>
      <div className="footer-top">
        <div className="tagline">
          <img className='footer-logo' src={assets.dev_sync_logo} alt="" />
          <p>Code together. Instantly.</p>
        </div>
        <div className="nav-links">
            <h4>Links</h4>
            <p className='nav-link-element' onClick={()=>navigate('/')}>Home</p>
            <p className='nav-link-element' onClick={()=>navigate('/join-room')}>Join Room</p>
            <p className='nav-link-element' onClick={()=>navigate('/create-room')}>Create Room</p>
        </div>
        <div className="github">
          <h4>Developer</h4>
          <a href="https://github.com/vyom-gahlot" target='_blank'>Github</a>
          <a href="https://github.com/vyom-gahlot/devsync.git" target="_blank">Source Code</a>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 DevSync — Built for developers</p>
        <p>Built by Vyom</p>
      </div>
    </div>
  )
}

export default Footer
