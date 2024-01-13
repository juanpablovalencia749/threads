import { configureStore } from '@reduxjs/toolkit'
import authReduce from './auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReduce,
  
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch