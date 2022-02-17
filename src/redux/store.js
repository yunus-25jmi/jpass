import { configureStore } from "@reduxjs/toolkit";
import changeUserReducer from './changeUser';
import signupReducer from './signup';
import loginReducer from './login';
import userReducer from './user'
import isLoggedInReducer from "./isLoggedIn";
import cardReducer from './card';
import showCardReducer from './showCard';

export default configureStore({
  reducer: {
    changeUser: changeUserReducer,
    signup: signupReducer,
    login: loginReducer,
    user: userReducer,
    isLoggedIn: isLoggedInReducer,
    card: cardReducer,
    showCard: showCardReducer
  }
})