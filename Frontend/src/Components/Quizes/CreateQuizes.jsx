import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const CreateQuizes = ({ setOpen }) => {
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
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
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Quiz Title"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            type="text"
            placeholder="Quiz Lesson"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            type="number"
            placeholder="Total Marks"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            type="number"
            placeholder="Passing Marks"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            type="number"
            placeholder="Time Limit (minutes)"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <button
          onClick={()=>setOpen(false)}
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
