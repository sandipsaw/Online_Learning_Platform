import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizes : []
}

const quizSlice = createSlice({
    name:'quiz',
    initialState,
    reducers:{
        loadQuiz:(state,action)=>{
            state.quizes = action.payload
        }
    }
})

export const {loadQuiz} = quizSlice.actions
export default quizSlice.reducer