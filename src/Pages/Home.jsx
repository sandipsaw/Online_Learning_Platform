import React from 'react'
import header from '../images/header.png'
import Slider from "react-slick";
import { FaUserGraduate, FaInfinity, FaAward, FaTags, FaProjectDiagram } from "react-icons/fa";
const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className='w-100%'>

      <div className='flex lg:justify-around md:justify-around items-center w-full bg-blue-500 '>
        <div>
          <img className='lg:w-150 md:w-100 w-90' src={header} />
        </div>
        <div className='lg:w-1/2 md:w-5/10  -pt-16 lg:block md-block '>
          <p className='lg:text-2xl md:text-xl text-sm font-medium'>Start your favouriate course</p>
          <h1 className='lg:text-6xl md:text-4xl text-2xl font-semibold font-sans lg:mt-3 mt-1 '>Now learning from anywhere and build <br /> your <span className='text-blue-300'>bright carrer</span></h1>
          <p className='lg:text-2xl md:text-2xl text-sm text-md font-medium lg:mt-7 mt-1 lg:block md:block hidden'>Our mission is to help people to find the<br /> best course and learn with eperts</p>
          <button className='lg:mt-5 md:mt-3 mt-2 lg:text-lg md:text-lg text-sm bg-blue-700 font-medium  text-blue-200 rounded lg:px-10 lg:py-4 md:px-5 md:py-2 px-3 py-2 '>Start A  Course</button>
        </div>
      </div>
{/* // ---------------------------------- Choose the gategory ---------------------------------------------------------------------- */}
      <div className=' rounded-xl  lg:px-15 md:px-5 px-3 lg:mt-10 md:mt-5 mt-3'>
        <h1 className='lg:text-4xl md:text-2xl text-md lg:font-medium font-semibold text-center'>Choose the category you want to learn</h1>
        <div className=' lg:p-7 md:p-4 p-3 lg:mt-3 md:mt-2 mt-1 text-blue-700 lg:text-lg md:text-lg text-md rounded bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200'>
          <Slider {...settings}>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>Development</div>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>Mobile App</div>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>AI & ML</div>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>DevOps</div>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>Cloudinary</div>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>UI/UX Design</div>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>Data Science</div>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>Languages</div>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>Soft Skills </div>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>Blockchain</div>
            <div className='lg:px-7 lg:py-4 md:px-2 md:p-3 px-0  py-1 text-center bg-white rounded'>Web3</div>
          </Slider>
        </div>
        <hr className='lg:hidden mt-5' />
      </div>
{/* //------------------------------------------ Why Choose Us ------------------------------------------------------------- */}
      <div className='lg:mt-15 md:mt-10 mt-5'>
        <div className='text-center'>
          <h1 className='lg:text-4xl md:text-3xl text-xl font-medium'>Why Choose Us</h1>
          <p className='lg:text-lg md:text-md text-sm px-10'>Our Commitment to your wellness goes beyond just classes and training session.<br className='lg:block hidden' /> Discover the unique benifit that set us apart and ensure you have best experience on your learning journey</p>
        </div>

        <div className='flex lg:flex-row md:flex-row md:flex-wrap flex-col lg:justify-center lg:items:center justify-center items-center lg:gap-7 md:gap-10 gap-5 mt-5'>

          <div className='flex flex-col lg:w-1/6 md:w-4/10 w-3/4 p-5 lg:h-80 md:h-80 h-auto  border items-center  py-4 rounded-xl bg-blue-50'>
            <div><FaUserGraduate size={50} className="text-blue-600 border rounded-full object-contain p-1 border-blue-200" /></div>
            <h1 className='mt-5 text-lg'>Learn From Experts</h1>
            <p className='text-center text-md mt-4'>All our courses are taught by experienced industry professionals who share real-world knowledge, practical examples, and career guidance.</p>
          </div>
          <div className='flex flex-col lg:w-1/6 md:w-4/10 w-3/4 p-5 lg:h-80 md:h-80 h-auto  border items-center  py-4 rounded-xl bg-orange-50'>
            <div><FaAward size={50} className="text-orange-600 border rounded-full object-contain p-1 " /></div>
            <h1 className='mt-5 text-lg text-center'>Certificate After Completion</h1>
            <p className='text-center text-md mt-4'>Receive a verified certificate when you complete the course. Add it to your resume or LinkedIn profile to showcase your skills to employers.</p>
          </div>
          <div className='flex flex-col lg:w-1/6 md:w-4/10 w-3/4 p-5 lg:h-80 md:h-80 h-auto  border items-center  py-4 rounded-xl bg-green-50'>
            <div><FaInfinity size={50} className="text-green-500 border rounded-full object-contain p-1 " /></div>
            <h1 className='mt-5 text-lg'>Lifetime Access</h1>
            <p className='text-center text-md mt-4'>Once enrolled, you get lifetime access to the course content, including free updates, so you can learn anytime and revisit lessons whenever needed.</p>
          </div>
          <div className='flex flex-col lg:w-1/6 md:w-4/10 w-3/4 p-5 lg:h-80 md:h-80 h-auto  border items-center  py-4 rounded-xl bg-pink-50'>
            <div><FaTags size={50} className="text-pink-600 border rounded-full object-contain p-1 " /></div>
            <h1 className='mt-5 text-lg'>Affordable Pricing</h1>
            <p className='text-center text-md mt-4'>Our courses are priced to be student-friendly, offering high-quality education at lower rates without compromising value or content quality.</p>
          </div>
          <div className='flex flex-col lg:w-1/6 md:w-4/10 w-3/4 p-5 lg:h-80 md:h-80 h-auto  border items-center  py-4 rounded-xl bg-yellow-50'>
            <div><FaProjectDiagram size={50} className="text-yellow-600 border rounded-full object-contain p-1 " /></div>
            <h1 className='mt-5 text-lg'>Hands-On Projects</h1>
            <p className='text-center text-md mt-4'>Every course includes real, practical projects to help you build a strong portfolio, gain experience, and become fully job-ready.</p>
          </div>
        </div>
      </div>
{/* //-------------------------------------------- Trusted Compony ------------------------------------------------------------------- */}
      <div className='px-8 lg:mt-16 md:mt-5 mt-5 flex flex-col w-full items-center lg:py-10 py-4 md:py-6 gap-5 lg:gap-10 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200'>
        <h1 className='lg:text-xl text-sm text-center'>Trusted by over 1500 companies and millions of learners around the world</h1>
        <div className='text-blue-900 grid lg:grid-cols-8 md:gap-5 gap-2 md:grid-cols-4 grid-cols-4 justify-items-center items-center'>
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg" />
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg" alt="Volkswagen logo" />
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg" alt="Samsung logo" />
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg" alt="Vimeo logo" />
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg" alt="Procter &amp; Gamble logo" />
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg" alt="Hewlett Packard Enterprise logo" />
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg" alt="Citi logo" />
          <img src="https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg" alt="Ericsson logo" />
        </div>
      </div>

      
    </div>
  )
}

export default Home