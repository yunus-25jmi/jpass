import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'card',
  initialState: {
    siteName: '',
    siteUsername: '',
    sitePassword: '',
    siteUrl: '',
    notes: '',
    cardNum: 0
  },
  reducers: {
    changeName: (state, action)=>{
      state.siteName = action.payload
    },
    changeSiteUsername: (state, action)=>{
      state.siteUsername = action.payload;
    },
    changeSitePassword: (state, action)=>{
      state.sitePassword = action.payload;
    },
    changeSiteUrl: (state, action)=>{
      state.siteUrl = action.payload;
    },
    changeNotes: (state, action)=> {
      state.notes = action.payload;
    },
    changeCardNum: (state, action)=>{
      state.cardNum = state.cardNum +1;
    }
  }
})

export const { changeCardNum, changeName, changeSiteUrl, changeSiteUsername, changeSitePassword, changeNotes } = counterSlice.actions;
export default counterSlice.reducer;