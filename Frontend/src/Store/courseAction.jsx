import axios from '../Api/axios.config';
import { loadCourse } from './courseSlice';

export const asyncLoadCourse = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get('/api/course/');
        console.log(data);
        dispatch(loadCourse(data))
    } catch (error) {
        console.log(error);

    }
}

export const asyncCreateCourse = (formData) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/api/course/', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res);

        dispatch(asyncLoadCourse())

    } catch (error) {
        console.log(error);
    }
}
export const asyncCreateLesson = (formData, id) => async (dispatch, getState) => {
    try {
        const res = await axios.put('/api/course/'+id+'/lesson', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        console.log(res);
        dispatch(asyncLoadCourse())
    } catch (error) {
        console.log(error);
    }
}