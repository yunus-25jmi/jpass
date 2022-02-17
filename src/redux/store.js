import { configureStore } from "@reduxjs/toolkit";
import changeUserReducer from './changeUser';

export default configureStore({
  reducer: {
    changeUser: changeUserReducer
  }
})