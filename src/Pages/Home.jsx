import React from 'react'
import header from '../images/header.png'
import HtmlIcon from '../assets/html5.svg'

import coderabbit from '../assets/coderabbit.svg'
import cplusplus from '../assets/cplusplus.svg'

import docker from '../assets/docker.svg'
import leetcode from '../assets/leetcode.svg'
import mongodb from '../assets/mongodb.svg'
import nextdotjs from '../assets/nextdotjs.svg'
import nodedotjs from '../assets/nodedotjs.svg'
import postman from '../assets/postman.svg'
import python from '../assets/python.svg'
import react from '../assets/react.svg'
import sass from '../assets/sass.svg'
import socket from '../assets/socket.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import socketdotio from '../assets/socketdotio.svg'
const Home = () => {
  return (
    <div className='w-100% h-screen bg-gradient-to- from-[#818cf8] via-[#6366f1] to-[#2563eb]'>
      <div className='flex justify-around items-center'>
        <div>
          <img className='w-130 border' src={header}/>
        </div>
        <div className='w-4/10 text-[#1f1f1f]'>
          <p className='text-2xl font-medium'>Start your favouriate course</p>
          <h1 className='text-6xl font-semibold font-sans mt-3'>Now learning from anywhere and build your <span className='text-blue-300'>bright carrer</span></h1>
          <p className='text-2xl font-medium mt-10'>Our mission is to help people to find the<br/> best course and learn with eperts</p>
          <button className='mt-5 text-xl bg-blue-700 font-medium  text-blue-200 rounded px-10 py-4 '>Start A Course</button>
        </div>
      </div>
      <img src={HtmlIcon} className="w-12 h-12 bg-[#E34F26] rounded p-1 absolute top-20 left-10" />
      
      <img src={cplusplus} className="w-12 h-12 bg-[rgb(0,89,156)] rounded p-1 absolute top-50 left-10" />
      <img src={mongodb} className="w-12 h-12 bg-[#47A248] rounded p-1 absolute top-80 left-10" />
      
      <img src={docker} className="w-12 h-12 bg-[#2496ED] rounded p-1 absolute top-20 left-10" />
      <img src={leetcode} className="w-12 h-12 bg-[#FFA116] rounded p-1" />
      <img src={nextdotjs} className="w-12 h-12 bg-[#FF6384] rounded p-1" />
      <img src={nodedotjs} className="w-12 h-12 bg-[#5FA04E] rounded p-1" />
      <img src={postman} className="w-12 h-12 bg-[#FF6C37] rounded p-1" />
      <img src={python} className="w-12 h-12 bg-[#3776AB] rounded p-1" />
      <img src={coderabbit} className="w-12 h-12 bg-[#FF570A] rounded p-1 " />
      <img src={react} className="w-12 h-12 bg-[#61DAFB] rounded p-1" />
      <img src={sass} className="w-12 h-12 bg-[#CC6699] rounded p-1" />
      <img src={socket} className="w-12 h-12 bg-[#C93CD7] rounded p-1" />
      <img src={tailwindcss} className="w-12 h-12 bg-[#06B6D4] rounded p-1" />
      <img src={socketdotio} className="w-12 h-12 bg-[#F5455C] rounded p-1" />
    </div>
  )
}

export default Home