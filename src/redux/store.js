import { configureStore } from "@reduxjs/toolkit";
import signupReducer from './signup';
import loginReducer from './login';
import userReducer from './user'
import isLoggedInReducer from "./isLoggedIn";
import cardReducer from './card';
import showCardReducer from './showCard';
import sitesReducer from './sites';

export default configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    user: userReducer,
    isLoggedIn: isLoggedInReducer,
    card: cardReducer,
    showCard: showCardReducer,
    sites: sitesReducer
  }
})