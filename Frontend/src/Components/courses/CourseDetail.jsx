import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import CreateLesson from '../Lessons/CreateLesson';
import { BsClipboardPlusFill } from "react-icons/bs";
import Lesson from '../Lessons/Lesson'
import videos from '../../images/blog.mp4'
import DOMPurify from 'dompurify'
const CourseDetail = () => {
  const params = useParams();
  const id = params.CourseId

  const courses = useSelector((state) => state.courseReducers.courses.course);

  const course = courses?.find((course) => id == course._id)
  const lessons = course.lesson;

  const [selectedLesson, setSelectedLesson] = useState(
    course?.lesson?.[0]   // default = lesson 1
  );
  console.log(selectedLesson);

  const [open, setopen] = useState(false)

  return course ? (
    <div className=''>
      <button onClick={() => setopen(true)} className='px-5 py-4 text-green-100 bg-green-500 rounded-xl  top-20 right-2 fixed  z-1 cursor-pointer'><BsClipboardPlusFill className='text-2xl text-white ' /></button>
      {open ? <CreateLesson setopen={setopen} id={id} /> : ""}

      <div className='flex justify-between relative w-full pt-2 h-full'>
        <div className='w-3/10 border sticky top-18 self-start'><Lesson lessons={lessons} selectedLesson={selectedLesson} setSelectedLesson={setSelectedLesson} /></div>

        <div className='w-full h-screen p-2'>
          <video
            src={videos}
            controls muted
            className="w-full rounded-lg"
          />
          <div
            className="prose prose-lg max-w-none pl-2"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(selectedLesson.assignment),
            }}
          />

          <div className='w-1/2 h-110 rounded border p-7 mt-20 text-zinc-800'>
            <h1 className='text-2xl font-semibold text-blue-500'>Solve Questions</h1>
            <hr className='h-0.5 my-3  bg-blue-500 border-0'/>
            <h3 className='text-xl font-normal '>1. Which device is required for internet connection.</h3>
            <ul className='flex flex-col gap-3  mt-3 '>
              <li className='border py-2 pl-5 rounded border-blue-400'>A. Modem</li>
              <li className='border py-2 pl-5 rounded border-blue-400'>B. Router</li>
              <li className='border py-2 pl-5 rounded border-blue-400'>C. LAN Cable</li>
              <li className='border py-2 pl-5 rounded border-blue-400'>D. Pen drive</li>
            </ul>
            <ul className='flex justify-around gap-5'>
              <button className='border py-2 text-lg mt-3 rounded w-full bg-blue-600 text-white shadow-md hover:shadow-lg hover:scale-103 duration-300 '>Submit</button>
            <button className='border py-2 text-lg mt-3 rounded w-full bg-purple-600 text-white shadow-md hover:shadow-lg hover:scale-103 duration-300'>Next</button>
            </ul>
            <p className='text-end my-3 text-blue-500'>1 of 5 question</p>
          </div>

        </div>



      </div>


    </div>
  ) : "loading..."
}

export default CourseDetail