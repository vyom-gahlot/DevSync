import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate();

  return (
    <div className='signup-card'>
      <div className="signup-box">
      <div className="signup-title">
        <h1>Create your account</h1>
        <p>Sign up to get started</p>
      </div>
      <div className="signup-form">
        <form >
          <div className="email-input">
          <label>Email</label>
          <input type="email" name="" placeholder='Enter email' required />
          </div>
          <div className="password-input">
            <label>Password</label>
            <input type="password" name="" placeholder='password' required />
          </div>
          <div className="signup-button-container">
            <button className='signup-button'>Sign Up</button>
          </div>
        </form>
      </div>
          <p className="signup-footer">
            Already have an account? <span onClick={()=>navigate('/sign-in')}>Sign in</span>
          </p>
      
      </div>
    </div>
  )
}

export default SignUp