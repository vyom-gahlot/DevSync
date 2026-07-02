import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateRoom from './pages/CreateRoom'
import JoinRoom from './pages/JoinRoom'
import PageNotFound from './components/PageNotFound'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { useAppContext } from '../context/AppContext'
import {Toaster} from 'react-hot-toast'




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


        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
