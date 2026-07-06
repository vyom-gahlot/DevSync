import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateRoom from './pages/CreateRoom.jsx'
import JoinRoom from './pages/JoinRoom.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/Signup.jsx'
import { useAppContext } from './context/AppContext.jsx'
import {Toaster} from 'react-hot-toast'
import Room from './pages/Room.jsx'




const App = () => {

  const {token} = useAppContext();

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create-room' element={token ?  <CreateRoom/> : <SignIn/>}/>
        <Route path='/join-room' element={ token ?  <JoinRoom/> : <SignIn/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/room/:id' element= {token ? <Room/> : <SignIn/>}/>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;
