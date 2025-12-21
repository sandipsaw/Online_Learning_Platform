import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {useForm} from 'react-hook-form' 
import {useDispatch} from 'react-redux'
import { asyncCreateCourseCard } from "../../Store/quizAction";
const CreateQuizes = ({ setOpen }) => {
  
  const {register,reset,handleSubmit} = useForm()
  const dispatch = useDispatch()
  const submitHandler = (data)=>{
    dispatch(asyncCreateCourseCard(data))
    console.log(data)
    
}
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative">
        {/* Close */}
        <button
          onClick={()=>setOpen(false)}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <AiOutlineClose/>
        </button>

        <h2 className="text-xl font-semibold text-gray-900">
          Create Quiz
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(submitHandler)} className="mt-6 space-y-4">
          <input
            {...register('title')}
            type="text"
            placeholder="Quiz Title"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
          {...register('lesson')}
            type="text"
            placeholder="Quiz Lesson"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
          {...register('questions')}
            type="number"
            placeholder="Total Question"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
          {...register('passing')}
            type="number"
            placeholder="Passing Marks"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
          {...register('time')}
            type="number"
            placeholder="Time Limit (minutes)"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <button
          
            type="submit"
            className="
              w-full mt-4 py-3
              bg-indigo-600 text-white
              font-medium rounded-lg
              hover:bg-indigo-700 transition
            "
          >
            Save Quiz
          </button>
        </form>
      </div>
    </div>
  ) ;
};

export default CreateQuizes;
