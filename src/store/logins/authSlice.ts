import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        token:sessionStorage.getItem('token')||null
    },

    reducers:{
        setToken:(state,action)=>{
            state.token = action.payload; // store the data to redux container 
            sessionStorage.setItem('token',action.payload)
        },
        clearToken:state=>{
            state.token = null;
            sessionStorage.removeItem('token')
        }

    }
})

export const{setToken,clearToken}=authSlice.actions;
export  default authSlice.reducer;
