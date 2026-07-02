import React, { useState, useEffect } from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import api from '../api/axios.js';

const SignIn = () => {

  const{  login, token} = useAppContext(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true)
    try {
      const {data} = await api.post('/api/auth/sign-in', {email, password});

      if(data.success){
        login(data.token);
        navigate("/");
      }
      else{
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
  if (token) {
    navigate("/");
  }
  }, [token]);


  return (
    <div className='signin-card'>
      <div className="signin-box">
      <div className="signin-title">
        <h1>Welcome back</h1>
        <p>Sign in to your account to continue</p>
      </div>
      <div className="signin-form">
        <form  onSubmit={handleSubmit}>
          <div className="email-input">
          <label>Email</label>
          <input onChange={e=>setEmail(e.target.value)} value={email} type="email" name="" placeholder='Enter email' required />
          </div>
          <div className="password-input">
            <label>Password</label>
            <input onChange={e=>setPassword(e.target.value)} value={password} type="password" name="" placeholder='password' required />
          </div>
          <div className="signin-button-container">
            <button type='submit' disabled={loading} className='signin-button'>{loading ? "Signing In" : "Sign In" }</button>
          </div>
        </form>
      </div>
          <p className="signin-footer">
            Don’t have an account? <span onClick={()=>navigate('/sign-up')}>sign up</span>
          </p>
      
      </div>
    </div>
  )
}

export default SignIn
