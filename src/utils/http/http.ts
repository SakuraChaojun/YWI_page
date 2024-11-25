import axios,{AxiosInstance,InternalAxiosRequestConfig,AxiosResponse} from 'axios'
import{message}from 'antd'

const http:AxiosInstance = axios.create({
    baseURL:"https://www.demo.com",
    timeout:5000

})

//请求拦截器
http.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    
    return config;

})


//响应拦截器
http.interceptors.response.use((response:AxiosResponse)=>{
    console.log('response',response);

    const res = response.data;
    if(res.code!==200){//判断返回code 模式
        message.error(res.code+':'+res.message)
        return
    }


    return response.data;

})

// mock js "http:www.demo.com/login"

export default http;
