import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../Store/userSlice'
import courseSlice from '../Store/courseSlice'
export const store = configureStore({
  reducer: {
    userReducers:userSlice,
    courseReducers:courseSlice,
  },
})

