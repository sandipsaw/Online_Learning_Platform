import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import CreateLesson from '../Components/CreateLesson';
import { BsClipboardPlusFill } from "react-icons/bs";

const CourseDetail = () => {
  const params = useParams();
  const courses = useSelector((state) => state.courseReducers.courses.course);
  const course = courses?.find((course) => params.CourseId == course._id)

  const [open , setopen] = useState(false)
  
  return course ? (
    <div className=''>
      {/* {course.description} */}
      <button onClick={()=>setopen(true)} className='px-5 py-4 text-green-100 bg-green-500 rounded-xl  top-20 right-2 fixed cursor-pointer'><BsClipboardPlusFill className='text-2xl text-white'/></button>

      {open?<CreateLesson setopen={setopen}/>:""}
    </div>
  )  : "loading..."
}

export default CourseDetail