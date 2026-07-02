import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import api from '../api/axios.js'
import { useAppContext } from '../../context/AppContext.jsx'



const SignUp = () => {

  const{  login, token} = useAppContext();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    setLoading(true);
    try {
      const user = {
        username,
        email,
        password
      }


      const {data} = await api.post('/api/auth/sign-up', user);

      if(data.success){
        toast.success("User Signed up Successfully");
        login(data.token);
        navigate('/');
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally{
      setLoading(false);
    }
  }

  return (
    <div className='signup-card'>
      <div className="signup-box">
      <div className="signup-title">
        <h1>Create your account</h1>
        <p>Sign up to get started</p>
      </div>
      <div className="signup-form">
        <form onSubmit={onSubmitHandler} >
          <div className="email-input">
          <label>Email</label>
          <input onChange={e=>setEmail(e.target.value)} value={email} type="email" name="" placeholder='Enter email' required />
          </div>
          <div className="username-input">
            <label>Username</label>
            <input onChange={e=>setUsername(e.target.value)} value={username} type="text" name="" placeholder='Enter username' required />
          </div>
          <div className="password-input">
            <label>Password</label>
            <input onChange={e=>setPassword(e.target.value)} value={password} type="password" name="" placeholder='Enter password' required />
          </div>
          <div className="signup-button-container">
            <button disabled={loading} type='submit' className='signup-button'>{loading ? "Signing Up": "Sign Up"}</button>
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