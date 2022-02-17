import { configureStore } from "@reduxjs/toolkit";
import changeUserReducer from './changeUser';
import signupReducer from './signup';
import loginReducer from './login';
import userReducer from './user'

export default configureStore({
  reducer: {
    changeUser: changeUserReducer,
    signup: signupReducer,
    login: loginReducer,
    user: userReducer
  }
})