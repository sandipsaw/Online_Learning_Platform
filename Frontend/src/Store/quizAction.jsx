import axios from '../Api/axios.config'
import {loadQuiz} from '../Store/quizSlice'
export const asyncCreateCourseCard = (data) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/api/quiz/create', data);
        dispatch(asyncLoadQuiz())
        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
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