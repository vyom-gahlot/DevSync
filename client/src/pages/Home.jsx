import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import './Home.css'
import Features from '../components/Features'

const Home = () => {
  return (
    <div className='home-div'>
      <Navbar/>
      <div className='content-container'>
        <Header/>
        <Features/>
      </div>
      
    </div>
  )
}

export default Home
