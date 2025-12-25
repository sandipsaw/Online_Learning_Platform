import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import CreateQuesOpt from "./CreateQuesOpt";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const AttempQuiz = () => {
  const [selected, setSelected] = useState(null);
  const [click, setclick] = useState(false)
  const navigate = useNavigate()
  const params = useParams();
  const id = params.quizeId;
  console.log(id);

  const quizz = useSelector((state) => state.quizReducers.quizes.quiz);
  const quizes = quizz.filter(quiz => quiz._id == id)[0];
  console.log(quizes);

  var marks = quizes.questions;
  let [score, setScore] = useState(0);
  let [idx, setIdx] = useState(0)
  const quiz = quizes.quiz[idx];
  console.log(quiz);

  if (idx >= quizes.quiz.length && idx > 0) {
    alert(`Quiz Finished 🎉 Your Score: ${score} out of ${marks}`);
    navigate('/quizes')
  }

  const checkedAnswer = (selected) => {
    if (!selected) return
    if (quiz.ans == selected) {
      setScore(prev => prev + 1)
    }
    setIdx(prev => prev + 1);
    setSelected(null)
  }
  console.log(quizes.time);

  const time = quizes.time
  const TOTAL_TIME = time * 60;
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return quiz ? (
    <section className={`min-h-screen bg-gray-50 flex ${click ? "justify-left" : "justify-center"} items-center px-4`}>
      <div className="bg-white w-full  max-w-3xl rounded-2xl shadow-md p-6 md:p-10">

        {/* ===== Quiz Header ===== */}
        <div className="border-b pb-4 mb-6 flex justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {quizes.title}
            </h1>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Lesson: {quizes.lesson}
            </p>
          </div>
          <div className="text-3xl font-semibold">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>

        {/* ===== Question ===== */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Q{idx + 1}. {quiz.question}
          </h2>

          {/* ===== Options ===== */}
          <div className="space-y-3">
            {[quiz.optA, quiz.optB, quiz.optC, quiz.optD].map((option, index) => (
              <label
                key={index}
                className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition
                  ${selected === option
                    ? "border-indigo-600 bg-indigo-50"
                    : "hover:bg-gray-50"
                  }
                
                  `}

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
            onClick={() => checkedAnswer(selected)}
            disabled={!selected}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>

          <button
            onClick={() => setIdx(prev => prev + 1)}
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Skip
          </button>
        </div>

      </div>

      <div onClick={() => setclick(true)} className={`flex items-center flex-col p-5 shadow-sm rounded-xl fixed top-20 md:right-10 right-5 bg-white ${click ? "hidden" : "block"}`}>
        <IoMdAddCircleOutline size={40} className="text-indigo-600" />
        <p className="md:block hidden mt-3 text-lg font-semibold text-gray-800">create quiz </p>
        <p className="md:block hidden mt-1 text-sm text-gray-500">Tap to add Question</p>
      </div>
      {click ? <CreateQuesOpt setclick={setclick} /> : " "}

    </section>
  ) : (
    <div>
      <div onClick={() => setclick(true)} className={`flex items-center flex-col p-5 shadow-sm rounded-xl fixed top-20 md:right-10 right-5 bg-white ${click ? "hidden" : "block"}`}>
        <IoMdAddCircleOutline size={40} className="text-indigo-600" />
        <p className="md:block hidden mt-3 text-lg font-semibold text-gray-800">create quiz </p>
        <p className="md:block hidden mt-1 text-sm text-gray-500">Tap to add Question</p>
      </div>
      {click ? <CreateQuesOpt setclick={setclick} /> : " "}
    </div>
  );
}

export default AttempQuiz