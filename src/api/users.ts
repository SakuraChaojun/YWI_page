import { post } from "../utils/http/request";

interface loginData{
    userName: string,
    password: string
}
export function login(data:loginData){
    return post('/login',data)
}