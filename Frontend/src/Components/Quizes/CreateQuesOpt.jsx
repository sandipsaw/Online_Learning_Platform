import React from 'react'
import { useForm } from 'react-hook-form'
import {useDispatch} from 'react-redux' 
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { asyncCreateQuizQuestion } from '../../Store/quizAction';

const CreateQuesOpt = ({ setclick }) => {
    const params = useParams();
    const id = params.quizeId;
    console.log(id);
    
    const { register, reset, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const submitHandler = (data) => {
        console.log(data);
        dispatch(asyncCreateQuizQuestion(data,id));
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40  px-5">
            <div className='bg-white p-6 md:right-10 right-0 md:w-1/3 w-full rounded-xl relative'>
                <div className='flex justify-between '>
                    <h2 className='text-xl text-gray-900 font-semibold text-center'>Create Question & Otions</h2>
                    <AiOutlineClose onClick={() => setclick(false)} className='text-gray-800 text-xl'/>
                </div>
                <form onSubmit={handleSubmit(submitHandler)} className="mt-6 space-y-4">
                    <input
                        {...register('question')}
                        type="text"
                        placeholder="Ques 1 : An online learning platform is used for:"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />

                    <input
                        {...register('optA')}
                        type="text"
                        placeholder=" A : Gaming"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                    <input
                        {...register('optB')}
                        type="text"
                        placeholder=" B : Teaching and learning"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                    <input
                        {...register('optC')}
                        type="text"
                        placeholder=" C : Shopping"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                    <input
                        {...register('optD')}
                        type="text"
                        placeholder=" D : Banking"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                    <input
                        {...register('ans')}
                        type="text"
                        placeholder="ANS-> B : Teaching and learning"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                    <button className='w-full border bg-indigo-400 text-white rounded-xl text-lg font-medium py-2'>
                        Create Quiz
                    </button>

                </form>
            </div>
        </div>
    )
}

export default CreateQuesOpt