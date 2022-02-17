import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'login',
  initialState: {
    login: false
  },
  reducers: {
    switchLogin: (state, action)=>{
      state.login = !state.login;
    },
    switchLoginType: (state, action)=>{
      state.login = action.payload
    }
  }
})

export const { switchLogin, switchLoginType } = counterSlice.actions;
export default counterSlice.reducer;