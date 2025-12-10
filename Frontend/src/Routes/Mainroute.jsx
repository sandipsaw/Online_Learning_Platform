import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Courses from '../Pages/Courses'
import Quizes from '../Pages/Quizes'
import Create from '../Pages/Create'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import CourseDetail from '../Pages/CourseDetail'
import CreateLesson from '../Components/CreateLesson'

const Mainroute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/quizes' element={<Quizes />} />
        <Route path='/create/course' element={<Create />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/course/:CourseId' element={<CourseDetail/>}/>
      </Routes>
  )
}

export default Mainroute