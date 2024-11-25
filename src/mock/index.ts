import Mock from 'mockjs'

Mock.mock("https://www.demo.com/login",'post',(options:any)=>{
    return {
        code:200,
        messages:"登陆成功",
        data:{
            username:"亿微",
            token:"mocktoken12346admin"
        }
    }
})

