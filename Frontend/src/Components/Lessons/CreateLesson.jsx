import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { asyncCreateCourse, asyncCreateLesson } from '../../Store/courseAction'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import TinyMce from '../TinyMce'
const CreateLesson = ({ setopen, id }) => {

  const { register, control, reset, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = (courseData) => {
    if (!courseData.video || !courseData.video[0]) {
      toast.error("Please select a video");
      return;
    }
    console.log(courseData);
    const formData = new FormData();
    formData.append('topic', courseData.topic);
    formData.append('duration', courseData.duration);
    formData.append('assignment', courseData.assignment);
    // // ⚠️ yahan FileList ka first element bhejna hai
    formData.append("video", courseData.video[0]);
    // console.log(video);

    dispatch(asyncCreateLesson(formData, id));
    setopen(false)
    // reset();

    toast.success("course created successfully")

  }
  return (
    <div  >
      <div className='max-w-4xl bg-white lg:border-gray-200 border mb-15 items-center lg:w-full w-full  '>
        <form onSubmit={handleSubmit(submitHandler)} className='flex-col  p-5 flex  rounded-xl '>

          <h1 className='lg:text-3xl md:text-3xl text-xl font-bold tracking-tight  max-w-5xl  mx-auto text-center'>Create Lesson</h1>

          <input {...register('topic')} placeholder='topic' className=' mt-6 border px-4 py-2 rounded focus:border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 bg-[#f4f7ff]' type='text' ></input>

          <label htmlFor="videoLesson" className='pb-2 font-medium mt-8 '>
            <span className='px-5 py-2 border bg-[#f4f7ff] rounded'><span className='text-blue-600'>upload a video</span> or drag and drop</span>
            <input {...register('video')} id="videoLesson" type='file' accept="video/*" capture="environment" className='hidden' />
          </label>

          <input {...register('duration')} placeholder='duration' className='border mt-6 mb-8 px-4 py-2 rounded focus:border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 bg-[#f4f7ff]' type='text' ></input>

          <Controller
            name="assignment"
            control={control}
            render={({ field }) => (
              <TinyMce
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <button className='mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded text-sm tracking-wide transition '><p>Create Lesson</p></button>
        </form>
      </div>

    </div>
  )
}

export default CreateLesson


