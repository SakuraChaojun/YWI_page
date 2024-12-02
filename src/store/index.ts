import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./logins/authSlice";
export const store = configureStore({
    reducer:{
        authSlice

    }
})