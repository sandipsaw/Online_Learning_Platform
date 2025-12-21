import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../Store/userSlice'
import courseSlice from '../Store/courseSlice'
import quizSlice from '../Store/quizSlice'
export const store = configureStore({
  reducer: {
    userReducers:userSlice,
    courseReducers:courseSlice,
    quizReducers:quizSlice,
  },
})

