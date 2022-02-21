import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'sites',
  initialState: {
    sites: []
  },
  reducers: {
    updateSites: (state, action)=>{
      state.sites = [...state.sites, action.payload]
    }
  }
})

export const { updateSites } = counterSlice.actions;
export default counterSlice.reducer;