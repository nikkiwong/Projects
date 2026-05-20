import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Checkout from "./pages/Checkout"
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import AuthProvider from './context/AuthContext'

function App() {
  return (
    <div className='app'>
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
