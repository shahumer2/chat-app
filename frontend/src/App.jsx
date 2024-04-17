import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import {  useAuthContext } from './context/AuthContext'

function App() {
const {authUser}=useAuthContext();


  return (
    <div className='p-4 h-screen flex justify-center items-center '>
      <Routes>
<Route path='/' element={authUser?<Home/>:<Login/>}/>
<Route path='/login' element={authUser?<Navigate to="/" />:<Login/>}/>
<Route path='/signup' element={authUser?<Navigate to="/" />:<SignUp/>}/>




      </Routes>
      <Toaster/>
      
  
    
    </div>
  )
}

export default App
