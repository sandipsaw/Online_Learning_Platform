import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import CreateLesson from '../Lessons/CreateLesson';
import { BsClipboardPlusFill } from "react-icons/bs";
// import Lesson from '../Lessons/Lesson'

const CourseDetail = () => {
  const params = useParams();
  const id = params.CourseId
  const courses = useSelector((state) => state.courseReducers.courses.course);
  const course = courses?.find((course) => id == course._id)

  const [open, setopen] = useState(false)
  const lessons = course.lesson;
  
  return course ? (
    <div>
      {/* <Lesson lessons={lessons} /> */}
      <button onClick={() => setopen(true)} className='px-5 py-4 text-green-100 bg-green-500 rounded-xl  top-20 right-2 fixed cursor-pointer'><BsClipboardPlusFill className='text-2xl text-white' /></button>

      {open ? <CreateLesson setopen={setopen} id={id} /> : ""}
    </div>
  ) : "loading..."
}

export default CourseDetail