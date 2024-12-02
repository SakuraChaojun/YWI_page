import Mock from 'mockjs'

Mock.setup({timeout:"200-600"})

Mock.mock("https://www.demo.com/login",'post',(options:any)=>{
    //console.log('options:',options.body)
    const {username,password} = JSON.parse(options.body);
    console.log(username,password);

    //mock account 
    if(username==='admin'&&password==='admin123'){
        return {
            code:200,
            messages:"登陆成功",
            data:{
                username:"亿微",
                token:"mocktoken12346admin"
            }
        }
    }else if(username ==='manager'&&password==='manager123'){
        return {
            code:200,
            messages:"登陆成功",
            data:{
                username:"亿微2",
                token:"mocktoken12346manager"
            }
        }
    }else if(username==='user'&&password==='user123123'){
        return {
            code:200,
            messages:"登陆成功",
            data:{
                username:"亿微3",
                token:"mocktoken12346user"
            }
        }
    }else{
        return{
            code:401,
            message:'用户名或者密码有误',
            data:null

        }
    }
    
})

