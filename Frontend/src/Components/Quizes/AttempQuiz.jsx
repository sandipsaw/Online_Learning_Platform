import React, { useState } from "react";

const AttempQuiz = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-md p-6 md:p-10">
        
        {/* ===== Quiz Header ===== */}
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            JavaScript Basics Quiz
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-1">
            Lesson: Variables & Data Types
          </p>
        </div>

        {/* ===== Question ===== */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Q1. Which keyword is used to declare a variable in JavaScript?
          </h2>

          {/* ===== Options ===== */}
          <div className="space-y-3">
            {["var", "define", "int", "letvar"].map((option, index) => (
              <label
                key={index}
                className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition
                  ${
                    selected === option
                      ? "border-indigo-600 bg-indigo-50"
                      : "hover:bg-gray-50"
                  }`}
              >
                <input
                  type="radio"
                  name="quiz"
                  value={option}
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                  className="accent-indigo-600"
                />
                <span className="text-gray-800">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ===== Action Buttons ===== */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            disabled={!selected}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>

          <button
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Skip
          </button>
        </div>

      </div>
    </section>
  );
}

export default AttempQuiz