import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'key',
  initialState: {
    password: ''
  },
  reducers: {
    hashPassword: (state, action)=>{
      state.password = action.payload;
    },
    clearKey: (state, action)=>{
      state.password = ''
    }
  }
})

export const { hashPassword, clearKey } = counterSlice.actions;
export default counterSlice.reducer;