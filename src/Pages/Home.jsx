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
import duolingo from '../assets/duolingo.svg'
import linux from '../assets/linux.svg'
import socketdotio from '../assets/socketdotio.svg'
import parsedotly from '../assets/parsedotly.svg'

const Home = () => {
  return (
    <div className='w-100% h-screen bg-gradient-to- from-[#818cf8] via-[#6366f1] to-[#2563eb] '>
      <div className='flex lg:justify-around md:justify-center items-center relative'>
        <div>
          <img className='lg:w-130 md:w-100' src={header}/>
        </div>
        <div className='lg:w-4/10 md:w-5/10 text-[#1f1f1f] -pt-16'>
          <p className='text-2xl font-medium'>Start your favouriate course</p>
          <h1 className='lg:text-6xl md:text-5xl font-semibold font-sans mt-3'>Now learning from anywhere and build your <span className='text-blue-300'>bright carrer</span></h1>
          <p className='text-2xl font-medium mt-10'>Our mission is to help people to find the<br/> best course and learn with eperts</p>
          <button className='mt-5 text-xl bg-blue-700 font-medium  text-blue-200 rounded px-10 py-4 '>Start A Course</button>
        </div>
      </div>

      <div className='lg:block md:hidden hidden'>
      <img src={HtmlIcon} className="w-12 h-12 bg-[#E34F26] rounded p-1 absolute top-30 left-10" />
      
      <img src={cplusplus} className="w-12 h-12 bg-[rgb(0,89,156)] rounded p-1 absolute top-60 left-10" />
      <img src={mongodb} className="w-12 h-12 bg-[#47A248] rounded p-1 absolute top-90 left-10" />
      
      <img src={docker} className="w-12 h-12 bg-[#2496ED] rounded p-1 absolute top-120 left-10" />
      <img src={leetcode} className="w-12 h-12 bg-[#FFA116] rounded p-1 absolute top-45 left-30" />
      <img src={nextdotjs} className="w-12 h-12 bg-[#FF6384] rounded p-1 absolute top-75 left-30" />
      <img src={nodedotjs} className="w-12 h-12 bg-[#5FA04E] rounded p-1 absolute top-105 left-30" />
      <img src={postman} className="w-12 h-12 bg-[#FF6C37] rounded p-1 absolute top-30 left-50" />
      <img src={python} className="w-12 h-12 bg-[#2496ED] rounded p-1 absolute top-60 left-50" />
      <img src={react} className="w-12 h-12 bg-[#61DAFB] rounded p-1 absolute top-30 left-120"/>
      <img src={coderabbit} className="w-12 h-12 bg-[#FF570A] rounded p-1 absolute top-60 left-120" />
      <img src={sass} className="w-12 h-12 bg-[#CC6699] rounded p-1 absolute top-45 left-140" />
      <img src={tailwindcss} className="w-12 h-12 bg-[#06B6D4] rounded p-1 absolute top-75 left-140" />
      <img src={socket} className="w-12 h-12 bg-[#47A248] rounded p-1 absolute top-105 left-140" />
      <img src={socketdotio} className="w-12 h-12 bg-[#FFA116] rounded p-1 absolute top-30 left-160" />
      <img src={parsedotly} className="w-12 h-12 bg-[#5BA745] rounded p-1 absolute top-60 left-160" />
      <img src={linux} className="w-12 h-12 bg-[#FCC624] rounded p-1 absolute top-90 left-160" />
      <img src={duolingo} className="w-12 h-12 bg-[#58CC02] rounded p-1 absolute top-120 left-160" /></div>
    </div>
  )
}

export default Home