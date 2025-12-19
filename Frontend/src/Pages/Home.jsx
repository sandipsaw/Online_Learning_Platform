import React from 'react'
import header from '../images/header.png'
import WhyChooseUs from '../Components/WhyChooseUs';
import std1 from '../images/std1.png'
import Slider from "react-slick";
import { FaUserGraduate, FaInfinity, FaAward, FaTags, FaProjectDiagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate();
  const categorySettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // time between auto transitions
    speed: 800,          // transition duration
    slidesToShow: 5,     // desktop (laptop) -> 5
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablet and below
        settings: {
          slidesToShow: 3, // tablet -> 3
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 2, // mobile -> 3 (as requested)
          slidesToScroll: 1,
        }
      }
    ]
  };
  const testimonialSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 4,   // desktop -> 4
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2, // tablet -> 2
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1, // mobile -> 1
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='w-100% text-[#3c3c3c]'>
      <div className=' w-full bg-gradient-to-r from-[#EAF3FE] via-[#FFFFFF] to-[#FFFFFF] '>

        <div className='md:mt-25 lg:mt-0 lg:flex-row md:flex lg:justify-around md:justify-around lg:items-center pl-5 pr-5 '>
          <div className=''>
            <img className='lg:w-150 md:w-100 w-screen lg:ml-10 ' src={header} />

          </div>
          <div className='lg:w-1/2 md:w-7/8 lg:ml-50 md:ml-10 -pt-16 lg:block md-block flex flex-col lg:items-left items-center'>
            <p className='lg:text-xl md:text-lg text-2xl md:text-left text-center mt-5 font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text font-satisfy'>Start your favouriate course</p>
            <h1 className='lg:text-6xl md:text-4xl text-[32px] lg:max-w-2xl md:text-left text-center max-w-full text-4xl font-semibold font-sans lg:mt-3 mt-1 text-black '>Now Learning from Anywhere and Build your <span className=' bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text'>bright Future</span></h1>

            <p className='lg:text-xl md:text-xl text-xl text-md font-medium lg:mt-9 md:mt-4 lg:block md:block  lg:max-w-xl md:max-w-11/13 text-black lg:px-0 px-5 mt-4 lg:text-left text-center'>Our mission is to help you discover the best learning resources and grow with expert-led courses.</p>
            <button onClick={() => navigate('/courses')} className=' lg:mt-5 md:mt-3 mt-4 lg:text-lg md:text-lg text-md "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 md:px-5 md:py-3 px-3 py-2 lg:w-60 w-50 mb-4 cursor-pointer'>Start Learning</button>
          </div>
        </div>


      </div>
      {/* // ---------------------------------- Choose the gategory ---------------------------------------------------------------------- */}
      <div className=' rounded-xl  lg:px-15 md:px-5 px-3   mt-3'>
        <div className=' lg:p-7 md:p-4 p-3 lg:mt-3 md:mt-2 mt-1 text-blue-700 lg:text-lg md:text-lg text-md rounded bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 '>
          <Slider {...categorySettings}>
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
          <h1 className='lg:text-4xl md:text-3xl text-xl font-medium mb-3'>Growth & Career Focused</h1>
          <p className='lg:text-lg lg:block md:block hidden md:text-md text-sm px-10 '>Our Commitment to your wellness goes beyond just classes and training session.<br className='lg:block hidden' /> Discover the unique benifit that set us apart and ensure you have best experience on your learning journey</p>
        </div>

        <div className='flex lg:flex-row md:flex-row md:flex-wrap flex-col lg:justify-center lg:items:center justify-center items-center lg:gap-7 md:gap-10 gap-5 mt-5 text-[#3c3c3c] w-full px-5'>

          <div className='flex flex-col lg:w-1/6 md:w-4/10 w-1/1 p-5 lg:h-80 md:h-80 h-auto  border items-center  py-4 rounded-xl bg-blue-50 border-2 border-blue-400 '>
            <div><FaUserGraduate size={50} className="text-blue-600 border rounded-full object-contain p-1 border-blue-200" /></div>
            <h1 className='mt-5 text-lg'>Learn From Experts</h1>
            <p className='text-center text-md mt-4'>All our courses are taught by experienced industry professionals who share real-world knowledge, practical examples, and career guidance.</p>
          </div>

          <div className='flex flex-col lg:w-1/6 md:w-4/10 w-1/1 p-5 lg:h-80 md:h-80 h-auto  border items-center  py-4 rounded-xl bg-orange-50 border-2 border-orange-400'>
            <div><FaAward size={50} className="text-orange-600 border rounded-full object-contain p-1 " /></div>
            <h1 className='mt-5 text-lg text-center'>Certificate After Completion</h1>
            <p className='text-center text-md mt-4'>Receive a verified certificate when you complete the course. Add it to your resume or LinkedIn profile to showcase your skills.</p>
          </div>

          <div className='flex flex-col lg:w-1/6 md:w-4/10 w-1/1 p-5 lg:h-80 md:h-80 h-auto  border items-center  py-4 rounded-xl bg-green-50 border-2 border-green-400'>
            <div><FaInfinity size={50} className="text-green-500 border rounded-full object-contain p-1 " /></div>
            <h1 className='mt-5 text-lg'>Lifetime Access</h1>
            <p className='text-center text-md mt-4'>Once enrolled, you get lifetime access to the course content, including free updates, so you can learn anytime and revisit lessons whenever needed.</p>
          </div>

          <div className='flex flex-col lg:w-1/6 md:w-4/10 w-1/1 p-5 lg:h-80 md:h-80 h-auto  border items-center  py-4 rounded-xl bg-pink-50 border-2 border-pink-400'>
            <div><FaTags size={50} className="text-pink-600 border rounded-full object-contain p-1 " /></div>
            <h1 className='mt-5 text-lg'>Affordable Pricing</h1>
            <p className='text-center text-md mt-4'>Our courses are priced to be student-friendly, offering high-quality education at lower rates without compromising value or content quality.</p>
          </div>
          <div className='flex flex-col lg:w-1/6 md:w-4/10 w-1/1 p-5 lg:h-80 md:h-80 h-auto  border items-center  py-4 rounded-xl bg-yellow-50 border-2 border-yellow-400'>
            <div><FaProjectDiagram size={50} className="text-yellow-600 border rounded-full object-contain p-1 " /></div>
            <h1 className='mt-5 text-lg'>Hands-On Projects</h1>
            <p className='text-center text-md mt-4'>Every course includes real, practical projects to help you build a strong portfolio, gain experience, and become fully job-ready.</p>
          </div>
        </div>
      </div>
      {/* //-------------------------------------------- Trusted Compony ------------------------------------------------------------------- */}
      <div className='px-8 lg:mt-16 md:mt-5 mt-5 flex flex-col w-full items-center lg:py-10 py-4 md:py-6 gap-3 lg:gap-10 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200'>
        <h1 className='lg:text-xl text-sm text-center'>Trusted by over 1500 companies and millions of learners around the world</h1>
        <div className='text-blue-900 grid lg:grid-cols-8 md:gap-5 gap-2 md:grid-cols-4 grid-cols-4 justify-items-center items-center'>
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg" alt="Volkswagen logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg" alt="Samsung logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg" alt="Vimeo logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg" alt="Procter &amp; Gamble logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg" alt="Hewlett Packard Enterprise logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg" alt="Citi logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg" alt="Ericsson logo" />
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------------- */}
      <div className="w-full p-7 text-[#3c3c3c] font-medium lg:mt-10  ">
        <h1 className='lg:text-4xl text-2xl mb-5 text-center'>What Our Students Say</h1>
        <Slider {...testimonialSettings}>

          <div className="flex flex-col space-y-5 border p-7 h-auto lg:h-65 rounded-xl shadow">
            <p>
              <span className='text-blue-700'>Live Classes + Quizzes</span> This platform made learning so easy for me. Live classes are super interactive, and the quizzes after every module help me check my understanding instantly.
            </p>

            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full object-cover" src={std1} />
              <div>
                <p className="text-blue-700 font-semibold">Riya Sharma</p>
                <p>BCA Student, 2nd Year</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 border p-7 h-65 rounded-xl shadow">
            <p>
              <span className='text-blue-700'>Video Lectures + Notes</span> “I love how all the video lectures are short, clear, and easy to follow.Plus, the downloadable notes save a lot of time during revision.
            </p>

            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full object-cover" src={std1} />
              <div>
                <p className="text-blue-700 font-semibold">Aditya Verma</p>
                <p>Computer Science Student</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 border p-7 h-65 rounded-xl shadow">
            <p>
              <span className='text-blue-700'>Doubt Support + Assignments</span> The doubt-solving support is amazing.Whenever I get stuck, I receive quick help.Assignments after each chapter help me practice more and feel confident.
            </p>

            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full object-cover" src={std1} />
              <div>
                <p className="text-blue-700 font-semibold">Neha Patel</p>
                <p>B.Tech Student, 1st Year</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 border p-7 h-65 rounded-xl shadow">
            <p>
              <span className='text-blue-700'>Course Quality + Practical Learning</span> The courses are truly practical.Everything is taught from basics to advanced levels, and real-world projects helped me build confidence for interviews.”
            </p>

            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full object-cover" src={std1} />
              <div>
                <p className="text-blue-700 font-semibold">Arjun Singh</p>
                <p>Full Stack Development Learner</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 border p-7  h-65 rounded-xl shadow">
            <p>
              <span className='text-blue-700'>Affordable + Self-Paced</span> What I like most is that I can learn at my own speed.Video lectures, quizzes, assignments — everything is structured so well.And the courses are very affordable too.
            </p>

            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full object-cover" src={std1} />
              <div>
                <p className="text-blue-700 font-semibold">Pooja Deshmukh</p>
                <p>BCA 3rd Semester</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 border p-7 h-65 rounded-xl shadow">
            <p>
              <span className='text-blue-700'>Tests + Progress Tracking</span> The progress tracking and weekly tests keep me motivated.I can clearly see how much I’ve improved every week.
            </p>

            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full object-cover" src={std1} />
              <div>
                <p className="text-blue-700 font-semibold">Mohit Gupta</p>
                <p>Engineering Aspirant</p>
              </div>
            </div>
          </div>

        </Slider>
      </div>


    </div>
  )
}

export default Home