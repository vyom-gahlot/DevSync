import React from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const navigate = useNavigate();

  return (
    <div className='signin-card'>
      <div className="signin-box">
      <div className="signin-title">
        <h1>Welcome back</h1>
        <p>Sign in to your account to continue</p>
      </div>
      <div className="signin-form">
        <form >
          <div className="email-input">
          <label>Email</label>
          <input type="email" name="" placeholder='Enter email' required />
          </div>
          <div className="password-input">
            <label>Password</label>
            <input type="password" name="" placeholder='password' required />
          </div>
          <div className="signin-button-container">
            <button className='signin-button'>Sign In</button>
          </div>
        </form>
      </div>
          <p className="signin-footer">
            Don’t have an account? <span onClick={()=>navigate('/sign-up')}>Sign up</span>
          </p>
      
      </div>
    </div>
  )
}

export default SignIn
