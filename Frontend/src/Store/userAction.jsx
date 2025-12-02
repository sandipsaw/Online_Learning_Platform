import axios from "../Api/axios.config";

export const asyncRegisterUser = (userData) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/api/auth/register', userData);
        
    } catch (error) {
        console.log(error);
    }
}
export const asyncLoginUser = (user_data) => async (dispatch, getState) => {   
    try {
        const res = await axios.post('/api/auth/login', user_data)
    } catch (error) {
        console.log(error);

    }
}

export const asyncGetUser = ()=>async(dispatch,getState) =>{
    const res = await axios.get('/api/auth/me')
    return res.data.user.username;
   
    
    
}