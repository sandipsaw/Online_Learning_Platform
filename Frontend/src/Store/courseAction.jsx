import axios from '../Api/axios.config';

export const asyncCreateCourse = (formData) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/api/course/', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

    } catch (error) {
        console.log(error);
    }
}