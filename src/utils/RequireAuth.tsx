import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
interface Iprops{
    allowed:boolean,
    redirectTo:string,
    children:React.ReactNode

}

function RequireAuth({allowed,redirectTo,children}:Iprops){
    const {token} = useSelector((state:any)=>state.authSlice)
    const isLogin = token?true:false;
    const navigate = useNavigate();

    useEffect(()=>{
        if(allowed!==isLogin){ //allowed代表当前路由是否需要登陆，isLogin表示用户是否登陆
            navigate(redirectTo)
        }
    },[allowed,isLogin,redirectTo])

    return allowed===isLogin?<>{children}</>:<></>;





}

export default RequireAuth