import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'changeUser',
  initialState: {
    firstname: 'initial',
    lastname: 'initial',
    email: 'initial',
    username: 'initial',
    password: 'initial'
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
    },
    changePassword: (state, action)=>{
      state.password = action.payload;
    }
  }
})

export const { changeFirstName, changePassword, changeUsername, changeLastName, changeEmail } = counterSlice.actions;
export default counterSlice.reducer;