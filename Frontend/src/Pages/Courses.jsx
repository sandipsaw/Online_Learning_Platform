import React from 'react'
import CourseCard from '../Components/courses/courseCard'
import { useSelector } from 'react-redux'
const Courses = () => {
  const courses = useSelector((state) => state.courseReducers.courses.course)
  console.log("courses --> ",courses);
  
  return courses ? (
    <div className="min-h-screen flex flex-wrap bg-slate-100 border">
      <section className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-slate-50">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
                Popular Courses
            </h2>

            <div className="grid gap-5 md:gap-6 lg:gap-8 lg:grid-cols-4 md:grid-cols-2 p-1 ">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    </div>

  ) : "loading..."
}

export default Courses