import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './layouts/UserLayout'
import Homepage from './pages/user/Homepage'
import Contact from './pages/user/Contact'
import About from './pages/user/About'
import Shop from './pages/user/Shop'
import Login from './pages/user/Login'
import Register from './pages/user/Register'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path='/shop' element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
