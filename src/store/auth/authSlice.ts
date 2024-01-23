import {  createSlice } from '@reduxjs/toolkit'


interface AuthState {
  value: boolean
  screen:string
  user: string
  errorMessage: undefined  
}

const initialState: AuthState = {
  value: true,
  screen: 'checking',
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
    // onLogout:( state, { payload } ) => {
      onLogout:( state ) => {
      state.screen = 'not-authenticated';
      // state.user = {};
      // state.errorMessage = payload;
    },
  },
})

export const { onChangeScreen, onLogin, onLogout } = authSlice.actions

export default authSlice.reducer