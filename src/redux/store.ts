import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import loginReducer, { authSlice } from "./loginReducer";



const rootReducer = combineReducers({
    user: userReducer,
    auth: loginReducer
  });
  
  export const store = configureStore({
    reducer: rootReducer,
  });
  