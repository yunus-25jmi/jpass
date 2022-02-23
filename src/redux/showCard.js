import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'showCard',
  initialState: {
    hidden: false,
    edit: false
  },
  reducers: {
    switchHidden: (state, action)=>{
      state.hidden = action.payload;
    },
    switchEdit: (state, action)=> {
      state.edit = action.payload;
    }
  }
})

export const { switchHidden, switchEdit } = counterSlice.actions;
export default counterSlice.reducer;