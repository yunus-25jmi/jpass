import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'card',
  initialState: {
    originalSiteName: '',
    siteName: '',
    siteUsername: '',
    sitePassword: '',
    siteUrl: '',
    notes: ''
  },
  reducers: {
    originalSiteName: (state, action)=>{
      state.originalSiteName = action.payload
    },
    changeName: (state, action)=>{
      let name = action.payload.replace(/\s/g, "");
      state.siteName = name;
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
    }
  }
})

export const { originalSiteName, changeName, changeSiteUrl, changeSiteUsername, changeSitePassword, changeNotes } = counterSlice.actions;
export default counterSlice.reducer;