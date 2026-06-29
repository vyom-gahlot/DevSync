import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateRoom from './pages/CreateRoom'
import JoinRoom from './pages/JoinRoom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create-room' element={<CreateRoom/>}/>
        <Route path='/join-room' element={<JoinRoom/>}/>

      </Routes>
    </div>
  )
}

export default App
