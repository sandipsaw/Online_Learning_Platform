import React from 'react'
import { NavLink } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";

const Login = () => {
    return (
        <div className='w-full '>
            <form className='flex flex-col lg:w-1/3 md:w-2/3 w-1/1 absolute bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 md:top-1/3 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 lg:p-10 p-5 lg:rounded-xl lg:mt-8 shadow-lg'>
                <h1 className='lg:text-3xl text-2xl mb-1 text-center text-blue-700 font-medium'>Login to your account</h1>
                <label className='pb-2 mt-4 font-medium'>Email address</label>
                <input className='border px-4 py-2 rounded focus:border-blue-500 border-2 outline-none focus:ring-2 focus:ring-blue-300 ' type='email' />
                <label className='pb-2 mt-4 font-medium'>Password</label>
                <input className='border px-4 py-2 rounded focus:border-blue-500 border-2 outline-none focus:ring-2 focus:ring-blue-300 ' type='password' />
                <div className='flex justify-between items-center mt-1'>
                    <p className='font-medium'>Remember me</p>
                    <p className='text-blue-700 font-medium'>Forgot Password?</p>
                </div>
                <button className='px-5 py-2 mt-5 rounded text-white bg-blue-600 font-medium'>Login Account</button>
                <p className=' font-medium mt-1'>Don’t have an account? <NavLink to='/register' className='text-blue-700'>Register</NavLink></p>
                <div className='flex items-center justify-between'><hr className='mt-6 lg:w-1/3 w-1/4'/><p className='mt-5 font-medium'>or Continue with</p><hr className='mt-6 lg:w-1/3 w-1/4'/></div>

                <div className='w-full flex gap-5 '>
                    <button className='px-5 py-2 mt-5 rounded shadow border-2 cursor-pointer hover:scale-105 transition-all duration-200 border-blue-600 text-blue-600 font-medium w-full flex justify-center items-center gap-2 text-xl'><FcGoogle/><p>Google</p></button>
                    <button className='px-5 py-2 mt-5 rounded shadow  border-2 cursor-pointer hover:scale-105 transition-all duration-200 border-blue-600 text-blue-600 font-medium w-full flex justify-center items-center gap-2 text-xl'><VscGithubInverted className='text-center'/><p>Github</p></button>
                </div>
            </form>

        </div>
    )
}

export default Login