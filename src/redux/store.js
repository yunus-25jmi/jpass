import { configureStore } from "@reduxjs/toolkit";
import signupReducer from './signup';
import loginReducer from './login';
import userReducer from './user'
import isLoggedInReducer from "./isLoggedIn";
import cardReducer from './card';
import showCardReducer from './showCard';
import sitesReducer from './sites';
import keyReducer from './key';
import isLoadingReducer from './isLoading';
import smallScreenReducer from "./smallScreen";

export default configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    user: userReducer,
    isLoggedIn: isLoggedInReducer,
    card: cardReducer,
    showCard: showCardReducer,
    sites: sitesReducer,
    key: keyReducer,
    isLoading: isLoadingReducer,
    smallScreen: smallScreenReducer
  }
})