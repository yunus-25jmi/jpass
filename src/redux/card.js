import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'card',
  initialState: {
    siteName: '',
    username: '',
    password: '',
    siteUrl: '',
    notes: ''
  },
  reducers: {
    changeName: (state, action)=>{
      state.siteName = action.payload;
    },
    changeUsername: (state, action)=>{
      state.username = action.payload;
    },
    changePassword: (state, action)=>{
      state.password = action.payload;
    },
    changeSiteUrl: (state, action)=>{
      state.siteUrl = action.payload;
    },
    changeNotes: (state, action)=> {
      state.notes = action.payload;
    }
  }
})

export const { changeName, changeSiteUrl, changeUsername, changePassword, changeNotes } = counterSlice.actions;
export default counterSlice.reducer;