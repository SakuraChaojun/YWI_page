import logo from "../../assets/logo.506e999.png";
import bg from "../../assets/bg.jpeg";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import "./index.scss";
function Login() {

  const[form] = Form.useForm();

  function handleLogin(){
    form.validateFields().then((res)=>{
      console.log(res)
    }).catch((err)=>{});
  }
  
  return (
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
      <div className="part">
        <div className="title">
          <div className="logo">
            <img src={logo} width={100} />
          </div>
          <h2>亿微移民资讯管理平台</h2>
        </div>

       
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
            onClick={handleLogin}>  
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
