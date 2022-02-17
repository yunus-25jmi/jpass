import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    firstname: 'initial',
    lastname: 'initial',
    email: 'initial',
    username: 'initial',
  },
  reducers: {
    changeFirstName: (state, action) =>{
      state.firstname = action.payload;
    },
    changeLastName: (state, action)=>{
      state.lastname = action.payload;
    },
    changeEmail: (state, action)=>{
      state.email = action.payload;
    },
    changeUsername: (state, action)=>{
      state.username = action.payload;
    }
  }
})

export const { changeFirstName, changeUsername, changeLastName, changeEmail } = counterSlice.actions;
export default counterSlice.reducer;