import {  createSlice } from '@reduxjs/toolkit'


interface AuthState {
  value: boolean
}

const initialState: AuthState = {
  value: true,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authChangeScreen: (state) => {
      state.value = !state.value
    }
  },
})

export const { authChangeScreen } = authSlice.actions

export default authSlice.reducer