// CourseCards.jsx
import React from "react";
import { FaUsers } from "react-icons/fa";
import { GoClock } from "react-icons/go";

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-103 transition-all duration-300 overflow-hidden flex flex-col relative">
           
            <div>
                <div>
                    <img src={course.image[0].url} className="h-45 w-full object-cover"/>
                </div>
                <div className="absolute top-35 right-3 flex items-center">
                    <span className="font-semibold text-green-800 text-sm md:text-base shadow p-1">
                        {course.price}Rs
                    </span>
                </div>
                <div className="absolute top-0 left-2 flex items-center  gap-1 shadow p-1 rounded">
                    <span className="font-semibold text-white text-sm md:text-base">
                        {course.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col px-4 md:px-5 pt-3 pb-4">
                {/* author + date */}


                {/* title */}
                <h3 className="font-semibold text-[20px] md:text-xl text-gray-900 leading-snug mb-1 line-clamp-2">
                    {course.title},<span className="text-sm text-gray-800">({course.level})</span>
                </h3>
                <p className="text-sm font-medium  text-gray-600 mb-2">
                    {course.description}
                </p>


                {/* duration + rating */}
                <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                        <GoClock className="text-lg" />
                        {/* <span>{course.duration}</span> */}
                        5hr 30min
                    </div>

                    <div className="flex items-center gap-2">
                        <FaUsers className="text-xl" />
                        <p>20 student</p>
                    </div>
                </div>

                <div className="border rounded text-center py-2 mb-4 text-md font-semibold bg-green-500 text-white"><button>Enroll Now</button></div>
            

                <hr className="text-gray-500" />
                <div className="flex items-center justify-between text-md md:text-md lg:text-md text-gray-500 mt-3">

                    {/* // user image */}
                    <div className="flex flex-cols items-center gap-1 text-red-400 font-semibold">
                        <p className=" text-xs md:text-[15px] text-gray-500 mb-1">
                            <p className="font-semibold text-gray-700">{course.teacher.username}</p>
                            <p>{course.date}</p>
                        </p>
                    </div>

                    <div className="flex items-center gap-2 font-semibold">
                        <p className="text-green-700">View Detail</p>
                    </div>
                </div>

                {/* button */}

            </div>
        </div>
    );
};

export default CourseCard;