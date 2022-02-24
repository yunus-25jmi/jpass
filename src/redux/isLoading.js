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
    switchCardLoading: (state, action)=>{
      state.cardLoading = !state.cardLoading;
    }
  }
})

export const { switchLoading, switchCardLoading } = counterSlice.actions;
export default counterSlice.reducer;