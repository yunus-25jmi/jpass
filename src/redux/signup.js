import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'signup',
  initialState: {
    signUp: false
  },
  reducers: {
    switchSignup: (state, action)=>{
      state.signUp = !state.signUp;
    },
    switchSignupType: (state, action)=>{
      state.signUp = action.payload;
    }
  }
})

export const { switchSignup, switchSignupType } = counterSlice.actions;
export default counterSlice.reducer;