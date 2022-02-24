import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'smallScreen',
  initialState: {
    small: false
  },
  reducers: {
    switchSmall: (state, action)=>{
      state.small = action.payload;
    }
  }
})

export const { switchSmall } = counterSlice.actions;
export default counterSlice.reducer;