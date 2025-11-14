import React from 'react'
import header from '../images/header.png'

import Slider from "react-slick";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,   // <= 768px (small tablet / large phone)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,   // <= 480px (mobile)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
     ]
  };
  return (
    <div className='w-screen'>

      <div className='flex lg:justify-around md:justify-around items-center w-screen bg-blue-500 '>
        <div>
          <img className='lg:w-150 md:w-100 w-90' src={header} />
        </div>
        <div className='lg:w-1/2 md:w-5/10  -pt-16 lg:block md-block '>
          <p className='lg:text-2xl md:text-xl text-sm font-medium'>Start your favouriate course</p>
          <h1 className='lg:text-6xl md:text-4xl text-2xl font-semibold font-sans lg:mt-3 mt-1 '>Now learning from anywhere and build <br/> your <span className='text-blue-300'>bright carrer</span></h1>
          <p className='lg:text-2xl md:text-2xl text-sm text-md font-medium lg:mt-7 mt-1 lg:block md:block hidden'>Our mission is to help people to find the<br/> best course and learn with eperts</p>
          <button className='lg:mt-5 md:mt-3 mt-2 lg:text-lg md:text-lg text-sm bg-blue-700 font-medium  text-blue-200 rounded lg:px-10 lg:py-4 md:px-5 md:py-2 px-3 py-2 '>Start A  Course</button>
        </div>
      </div>

      <div className=' rounded-xl  lg:px-15 md:px-5 px-3 lg:mt-10 md:mt-5 mt-3'>
        <h1 className='lg:text-4xl md:text-2xl text-md lg:font-medium font-semibold text-center'>Choose the category you want to learn</h1>
        <div className=' lg:p-7 md:p-4 p-3 lg:mt-3 md:mt-2 mt-1 text-blue-700 lg:text-lg md:text-lg text-md rounded bg-blue-500'>
        <Slider {...settings}>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>Development</div>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>Mobile App</div>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>AI & ML</div>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>DevOps</div>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>Cloudinary</div>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>UI/UX Design</div>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>Data Science</div>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>Languages</div>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>Soft Skills </div>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>Blockchain</div>
          <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-[#f5f5fa] rounded'>Web3</div>
          </Slider>
        </div>
      </div>

      <div>
        <h1></h1>
      </div>
    </div>
  )
}

export default Home