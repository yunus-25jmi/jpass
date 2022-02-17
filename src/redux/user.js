import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    firstname: '',
    lastname: '',
    email: '',
    username: ''
  },
  reducers: {
    changeFirstName: (state, action) =>{
      state.firstname = action.payload;
      localStorage.setItem('firstname', state.firstname)
    },
    changeLastName: (state, action)=>{
      state.lastname = action.payload;
      localStorage.setItem('lastname', state.lastname)
    },
    changeEmail: (state, action)=>{
      state.email = action.payload;
      localStorage.setItem('email', state.email)
    },
    changeUsername: (state, action)=>{
      state.username = action.payload;
      localStorage.setItem('username', state.username)
    },
    revert: (state, action)=>{
      state.firstname = '';
      state.lastname = '';
      state.email = '';
      state.username = '';
    }
  }
})

export const { changeFirstName, changeUsername, changeLastName, changeEmail, revert } = counterSlice.actions;
export default counterSlice.reducer;