import React from 'react'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Lost in the code?</h2>
        <p>The page you’re looking for doesn’t exist or was moved.</p>

        <button onClick={() => navigate('/')}>
          Go to Homepage
        </button>
      </div>
    </div>
  )
}

export default PageNotFound
