import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Courses from '../Pages/Courses'
import Quizes from '../Pages/Quizes'
import Create from '../Pages/Create'
const Mainroute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/quizes' element={<Quizes />} />
        <Route path='/create' element={<Create />} />
    </Routes>
  )
}

export default Mainroute