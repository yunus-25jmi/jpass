import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'showCard',
  initialState: {
    hidden: false
  },
  reducers: {
    switchHidden: (state, action)=>{
      state.hidden = action.payload;
    }
  }
})

export const { switchHidden } = counterSlice.actions;
export default counterSlice.reducer;