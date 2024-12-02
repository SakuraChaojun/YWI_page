import logo from "../../assets/logo.506e999.png";
import bg from "../../assets/bg.jpeg";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import http from '../../utils/http/http';
import { useEffect } from "react";
import { setToken } from "../../store/logins/authSlice";
import { useDispatch} from "react-redux";
import "./index.scss";
import { login } from "../../api/users";
import { replace, useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {

  const[form] = Form.useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[loading,setLoading] = useState<boolean>(false)
  
  //登陆逻辑控制
  function handleLogin(){
    
    

    
    form.validateFields().then(async(res)=>{
      setLoading(true)
      const {data:{token}} = await login(res); //使用mock数据测试，获得后存到redux 中
      setLoading(false)
      dispatch(setToken(token))
      navigate('/',{replace:true})


      //console.log(res)
      //console.log(data)
    }).catch((err)=>{})
    setLoading(false);
  }

  // useEffect(()=>{
  //  login({userName:'亿微',password:'123'})
  // },[])
  
  return (
    //使用antd组件来实现页面绘制
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
      <div className="part">
        <div className="title">
          <div className="logo">
            <img src={logo} width={100} />
          </div>
          <h2>亿微移民资讯管理平台</h2>
        </div>

       {/* antd 组件控制台 */}
        <Form form={form}
        initialValues={{remember:true}}
        autoComplete="on"
        
        >
           
          <Form.Item
            
            name="username"
            rules={[{ required: true, message: "用户名不能为空" }]}
          >
            <Input placeholder="请输入您的用户名" prefix={<UserOutlined/>}/>
          </Form.Item>

          <Form.Item
           
            name="password"
            rules={[{ required: true, message: "密码不能为空" }]}
          >
            <Input.Password placeholder="请输入您的密码" prefix={<LockOutlined/>}/>
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            label={null}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit" style={{width:"100%"}}
            onClick={handleLogin}
            loading = {loading}
            >  
            
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
