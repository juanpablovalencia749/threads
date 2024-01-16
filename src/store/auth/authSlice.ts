import {  createSlice } from '@reduxjs/toolkit'


interface AuthState {
  value: boolean
  screen:string
  user: string
  errorMessage: undefined  
}

const initialState: AuthState = {
  value: true,
  // screen: 'not-authenticated',
  screen: 'authenticated',
  user: 'user',
  errorMessage:undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChangeScreen: (state) => {
      state.screen = 'not-authenticated'
      state.value = !state.value
    },
    // onLogin: ( state, { payload } ) => {
      onLogin: ( state,  ) => {
      state.screen = 'authenticated';
      // state.user = payload;
      state.errorMessage = undefined;
    },
  },
})

export const { onChangeScreen, onLogin } = authSlice.actions

export default authSlice.reducer