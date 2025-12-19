import React from 'react'
import { FaUserGraduate, FaInfinity, FaAward, FaTags, FaProjectDiagram } from "react-icons/fa";
import about from '../images/about.jpg'

const About = () => {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          About <span className="text-indigo-600">Learnify</span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
          Learnify is an online learning platform designed to help students,
          professionals, and beginners gain real-world skills through
          structured courses, expert instructors, and hands-on practice.
        </p>
      </div>

      {/* Mission + Image */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to make quality education accessible and affordable
            for everyone. We focus on practical learning, industry-relevant
            skills, and continuous improvement so learners can confidently
            achieve their career goals.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you are a student, working professional, or a beginner,
            Learnify provides the right tools and guidance to help you grow.
          </p>
        </div>

        <div className="w-full h-64 md:h-80 bg-indigo-100 rounded-xl object-cover overflow-hidden flex items-center justify-center">
          <img src={about} />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900">
            Why Choose Us
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">
                Expert Instructors
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Learn from industry experts with real-world experience and
                practical teaching methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">
                Hands-on Learning
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Practice with real projects, quizzes, and assignments designed
                to strengthen your skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">
                Career Focused
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Courses aligned with industry demand to improve job readiness
                and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">10K+</h3>
            <p className="text-gray-600 text-sm">Students</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">100+</h3>
            <p className="text-gray-600 text-sm">Courses</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">50+</h3>
            <p className="text-gray-600 text-sm">Instructors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">95%</h3>
            <p className="text-gray-600 text-sm">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Start Learning With Us Today
          </h2>
          <p className="mt-3 text-indigo-100 max-w-2xl mx-auto">
            Join thousands of learners who are upgrading their skills and
            building successful careers with Learnify.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}

export default About