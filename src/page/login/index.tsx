import logo from "../../assets/logo.506e999.png";
import bg from "../../assets/bg.jpeg";
import lgbg from "../../assets/bg2.jpg";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import "./index.scss";
function Login() {
  return (
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
      <div className="part">
        <div className="title">
          <div className="logo">
            <img src={logo} width={100} />
          </div>
          <h3>移民资讯管理平台</h3>
        </div>
        <Form
          
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            label={null}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
