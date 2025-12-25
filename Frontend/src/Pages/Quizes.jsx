import React, { useEffect } from 'react'
import { VscQuestion } from "react-icons/vsc";
import { FiClock } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineCheckCircle } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import CreateQuizes from '../Components/Quizes/CreateQuizes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadQuiz } from '../Store/quizAction';

const quizzes = [
  {
    
_id: 1,
title:"JavaScript Basics Quiz",
lesson: "Variable and Data Types",
questions: 10,
passing: 80,
time:15,
  }
]
const Quizes = () => {
  const [Open, setOpen] = useState(false)
  const naviate = useNavigate()
  const dispatch = useDispatch()
  console.log(Open);
  

  const quizz = useSelector((state)=>state.quizReducers.quizes.quiz)
  console.log(quizz);
  
  return quizz ? (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Course Quizzes
          </h1>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Test your knowledge, track your progress, and strengthen your
            understanding by completing quizzes after each lesson.
          </p>
        </div>

        {/* Quiz Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {quizz && quizz.map((quiz) => (
            <div
              key={quiz._id}
              className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Quiz Title */}
              <h2 className="text-xl font-semibold text-gray-900">
                {quiz.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Lesson: {quiz.lesson}
              </p>

              {/* Quiz Info */}
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <VscQuestion size={20} />
                  {quiz.questions} Questions
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiClock size={18} />
                  {quiz.time}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MdOutlineCheckCircle size={18} />
                  Passing: {quiz.passing}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaAward size={18} />
                  Certificate Eligible
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-5 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Each question has only one correct answer</li>
                  <li>You cannot skip questions</li>
                  <li>Quiz must be completed in one attempt</li>
                </ul>
              </div>

              {/* Action Button */}
              <button
              onClick={()=>naviate(`/quizes/${quiz._id}`)}
                className="
                  mt-6 w-full py-3
                  bg-indigo-600 text-white
                  font-medium rounded-lg
                  hover:bg-indigo-700
                  transition
                "
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>

        {/* create quiz */}
        <div 
        onClick={()=>setOpen(true)} 
        className="cursor-pointer bg-white border border-dashed border-indigo-400 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-50 hover:shadow-md transition mt-15" >
          <IoMdAddCircleOutline size={40} className="text-indigo-600" />
          <h3 className="mt-3 text-lg font-semibold text-gray-900">
            Create New Quiz
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Tap to add questions and settings
          </p>
        </div>
        {Open && <CreateQuizes setOpen={setOpen} />}

        {/* Tips Section */}
        <div className="mt-15 bg-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl md:text-2xl font-semibold">
            Quiz Tips for Success
          </h3>
          <p className="mt-3 text-indigo-100 max-w-2xl mx-auto text-sm md:text-base">
            Read each question carefully, manage your time wisely, and review
            lesson content before starting the quiz to score better.
          </p>
        </div>
      </div>
    </section>
  ) : "loadding...";
}

export default Quizes