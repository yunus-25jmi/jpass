import { configureStore } from "@reduxjs/toolkit";
import changeUserReducer from './changeUser';
import signupReducer from './signup';
import loginReducer from './login';

export default configureStore({
  reducer: {
    changeUser: changeUserReducer,
    signup: signupReducer,
    login: loginReducer
  }
})