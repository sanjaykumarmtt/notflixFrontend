import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './Pages/NavBar'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProtectedRoutes from './Components/ProtectedRoutes'
import { useAuth } from './Api/AuthContext'
import VideoPlayer from './Pages/VideoPlayer'


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
