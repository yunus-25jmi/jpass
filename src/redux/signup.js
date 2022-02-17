import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'signup',
  initialState: {
    signUp: false
  },
  reducers: {
    switchSignup: (state, action)=>{
      state.signUp = !state.signUp;
    }
  }
})

export const { switchSignup } = counterSlice.actions;
export default counterSlice.reducer;