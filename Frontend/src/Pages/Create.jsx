import React from 'react'
import image from '../images/file.png'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { asyncCreateCourse } from '../Store/courseAction'
const Create = () => {

  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const submitHandler = (courseData) => {

    console.log(courseData);
    console.log(courseData.thumbnail);

    const formData = new FormData();
    formData.append('title', courseData.title);
    formData.append('description', courseData.description);
    formData.append('price', courseData.price);
    formData.append('category', courseData.category);
    formData.append('level', courseData.level);

    // ⚠️ yahan FileList ka first element bhejna hai
    if (courseData.thumbnail && courseData.thumbnail[0]) {
      formData.append('thumbnail', courseData.thumbnail[0]);
    }

    dispatch(asyncCreateCourse(formData));
  }
  return (
    <div className='lg:pt-10 md:pt-10 lg:pl-30 lg:pr-30 md:pl-15 md:pr-15 flex flex-col items-center w-full h-full '>
      <h1 className='lg:block md:block hidden lg:text-6xl md:text-4xl text-3xl font-bold tracking-tight max-w-5xl  mx-auto text-center'>Turn Your Knowledge Into a Professional Course</h1>
      <p className='text-[20px] lg:block md:hidden hidden text-center pt-10 w-4/5 leading-relaxed mx-auto max-w-5xl'>Your skills have value — now is the time to monetize them.  Customize your course with thumbnails, pricing, and categories to reach the right audience and build a powerful learning ecosystem.</p>


      <p className='text-[20px] md:block lg:hidden hidden text-center pt-10 w-full leading-relaxed mx-auto max-w-5xl'> Customize your course with thumbnails, pricing, and categories to reach the right audience and build a powerful learning ecosystem.</p>

      <div className='max-w-4xl bg-white lg:w-3/4 md:w-full justify-center lg:mt-15 md:mt-10  lg:border-gray-200 lg:shadow-md md:border-gray-200 md:shadow-md rounded-2xl mb-15'>

        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col  w-full p-10  '>

          <h1 className=' block md:hidden lg:hidden lg:text-6xl md:text-4xl text-2xl font-bold tracking-tight max-w-5xl  mx-auto text-center'>Turn Your Knowledge Into a Professional Course</h1>

          <label className='pb-2 mt-4 font-medium'>Title</label>
          <input {...register('title')} className='border px-4 py-2 rounded focus:border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 bg-[#f4f7ff]' type='text' />
          <label className='pb-2 mt-4 font-medium'>Short Description</label>
          <input {...register('description')} className='border px-4 py-2 rounded focus:border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 bg-[#f4f7ff]' type='text' />

          <label className='pb-2 mt-4 font-medium'>Price</label>
          <input {...register('price')} className='border px-4 py-2 rounded focus:border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 bg-[#f4f7ff]' type='text' />

          <label className='pb-2 mt-4 font-medium'>Category</label>
          <select {...register('category')} id="category" name="category" className='p-2 outline-none border rounded bg-[#f4f7ff]'>
            <option value="">Select a category</option>
            <option value="web-development">Web Development</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full Stack</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="data-structures">Data Structures & Algorithms</option>
            <option value="programming">Programming Basics</option>
          </select>

          <label className='pb-2 mt-4 font-medium'>Thumbnail</label>
          <label htmlFor="thumbnail" className='p-10 border flex flex-col items-center justify-center  border-dashed bg-[#f4f7ff] rounded-xl'>
            <img src={image} className='w-15' />
            <p><span className='text-blue-600'>upload a file</span> or drag and drop</p>
            <p className='text-md'>PNG, JPG, GIF up to 10MB</p>
            <input {...register('thumbnail')} id="thumbnail" type='file' accept="image/*" className='hidden' />
          </label>

          <label className='pb-2 mt-4 font-medium'>Level</label>
          <div className='flex justify-left items-center gap-4'>
            <label className="cursor-pointer flex gap-2">
              <input {...register('level')} type='radio' value="Beginner" name="level" />
              <span>Beginner</span>
            </label>
            <label className=" cursor-pointer flex gap-2">
              <input {...register('level')} type='radio' value="Intermediate" name="level" />
              <span>Intermediate</span>
            </label>
            <label className="cursor-pointer flex gap-2">
              <input {...register('level')} type='radio' value="Advanced" name="level" />
              <span>Advanced</span>
            </label>
          </div>


          <button className='mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded text-sm tracking-wide transition'><p>Create Courses</p></button>
        </form>
      </div>
    </div>

  )
}

export default Create