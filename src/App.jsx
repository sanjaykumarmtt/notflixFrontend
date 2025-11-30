import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './Pages/NavBar.jsx'

import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import ProtectedRoutes from './Components/ProtectedRoutes.jsx'
import { useAuth } from './Api/AuthContext.jsx'
import VideoPlayer from './Pages/VideoPlayer.jsx'
import Signup from './Pages/Signup.jsx'


function App() {

  const {token}=useAuth()

  return (
    <>
  
     
       <NavBar/>
     <Routes>
      <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>}></Route>
      <Route path='/' element={ token ?<Navigate to="/home" /> : <Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/video/:id' element={<VideoPlayer/>}></Route>

     </Routes>
       </>
     
       
     
  )
}

export default App
