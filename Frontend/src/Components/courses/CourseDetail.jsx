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

  return courses ? (
    <div className='w-full'>
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

          

        </div>



      </div>


    </div>
  ) : (<div>
    <button onClick={() => setopen(true)} className='px-5 py-4 text-green-100 bg-green-500 rounded-xl  top-20 right-2 fixed  z-1 cursor-pointer'><BsClipboardPlusFill className='text-2xl text-white ' /></button>
  </div>)
}

export default CourseDetail