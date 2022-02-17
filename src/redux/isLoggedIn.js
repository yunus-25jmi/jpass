import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'isLoggedIn',
  initialState: {
    isLoggedIn: false
  },
  reducers: {
    switchLoginStatus: (state, action)=>{
      state.login = action.payload;
    }
  }
})

export const { switchLoginStatus } = counterSlice.actions;
export default counterSlice.reducer;