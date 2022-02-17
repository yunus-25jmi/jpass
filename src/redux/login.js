import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'login',
  initialState: {
    login: false
  },
  reducers: {
    switchLogin: (state, action)=>{
      state.login = !state.login;
    }
  }
})

export const { switchLogin } = counterSlice.actions;
export default counterSlice.reducer;