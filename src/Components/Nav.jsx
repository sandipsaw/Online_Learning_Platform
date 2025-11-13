import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import image from '../images/logo.png'
const Nav = () => {
  const [Open, setOpen] = useState(false);

  return (
    <div className='flex justify-between items-center px-5 w-full h-16 bg-[#f5f5fa]'>
      <div>
        <img className='lg:w-60 w-50 h-auto' src={image} />
      </div>

      <div className='text-lg font-medium lg:flex md:flex hidden items-center gap-5'>
        <NavLink className={(e) => e.isActive ? "text-blue-500 " : ""} to='/'>Home</NavLink>
        <NavLink className={(e) => e.isActive ? "text-blue-500 " : ""} to='/courses'>Courses</NavLink>
        <NavLink className={(e) => e.isActive ? "text-blue-500 " : ""} to='/create'>Create</NavLink>
        <NavLink className={(e) => e.isActive ? "text-blue-500 " : ""} to='/quizes'>Quizes</NavLink>
        <NavLink className={(e) => e.isActive ? "text-blue-500 " : ""} to='/about'>About</NavLink>
      </div>

      <button onClick={() => setOpen(true)} className='lg:hidden md:hidden'><FaBars /></button>

      {Open && (
        <div className='text-xl font-medium flex lg:hidden  flex-col absolute -top-5 left-0 bg-[#f5f5fa]  w-full items-center gap-5 min-h-screen pt-5'>
        <div className='flex justify-between items-center bg-[#f5f5fa] w-full p-2 h-16 px-5'>
          <h1>Menu</h1>
          <button onClick={()=>setOpen(false)} ><RiCloseLargeFill/></button>
        </div>
        <NavLink onClick={()=>setOpen(false)} className={(e) => e.isActive ? "text-blue-500 " : ""} to='/'>Home</NavLink>
        <NavLink onClick={()=>setOpen(false)} className={(e) => e.isActive ? "text-blue-500 " : ""} to='/courses'>Courses</NavLink>
        <NavLink onClick={()=>setOpen(false)} className={(e) => e.isActive ? "text-blue-500 " : ""} to='/create'>Create</NavLink>
        <NavLink onClick={()=>setOpen(false)} className={(e) => e.isActive ? "text-blue-500 " : ""} to='/quizes'>Quizes</NavLink>
        <NavLink onClick={()=>setOpen(false)} className={(e) => e.isActive ? "text-blue-500 " : ""} to='/about'>About</NavLink>
      </div>)}
    </div>
  )
}

export default Nav