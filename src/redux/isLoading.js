import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'isLoading',
  initialState: {
    isLoading: false,
    cardLoading: false
  },
  reducers: {
    switchLoading: (state, action)=>{
      state.isLoading = !state.isLoading;
    },
  }
})

export const { switchLoading } = counterSlice.actions;
export default counterSlice.reducer;