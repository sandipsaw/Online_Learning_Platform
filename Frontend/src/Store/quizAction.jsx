import axios from '../Api/axios.config'
import {loadQuiz} from '../Store/quizSlice'
export const asyncCreateQuizCard = (data) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/api/quiz/create/quizcard', data);
        dispatch(asyncLoadQuiz())
        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
}

export const asyncCreateQuizQuestion = (data,id) => async(dispatch,getState)=>{
    const res = await axios.put('/api/quiz/'+id+'/create/quizQuestion',data);
    console.log(res);
    dispatch(asyncLoadQuiz())
    
}
export const asyncLoadQuiz = () => async (dispatch, getState) => {
    try {
        const {data} = await axios.get('/api/quiz/get')
        console.log(data);
        dispatch(loadQuiz(data))
    } catch (error) {
        console.log(error);
    }
}