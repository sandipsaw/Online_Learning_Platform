import React from 'react'
import { useSelector } from 'react-redux'

const Lesson = ({lessons,SelectedLesson,setSelectedLesson}) => { 
  return lessons? (
    <div>

      {lessons.map((lesson,index)=>(
        <div
          key={lesson._id}
          onClick={() => setSelectedLesson(lesson)}
          className={`p-3 cursor-pointer border-b 
            ${SelectedLesson?._id === lesson._id ? "bg-blue-100" : ""}`}
        >
          Lesson {index + 1} : {lesson.topic}
        </div>
      ))}

    </div>
  ) :"loadding..."
}

export default Lesson
