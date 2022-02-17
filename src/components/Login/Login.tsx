import { Input, Button, Form, message } from "antd";
import { FC } from "react";
import { loginToken } from "../../useToken";
import styles from "./Login.module.scss";

interface LoginProps {
  token: loginToken;
  setToken: Function;
  closeLogin: Function;
}

const Login: FC<LoginProps> = ({ setToken, token, closeLogin }) => {
  const onFinish = (values: any) => {
    if (!setToken({ ...values, viewPrivate: false })) {
      message.error("Incorrect credentials");
    } else {
      message.success("You're all set!");
      closeLogin();
    }
  };

  return (
    <div>
      <Form
        className={styles.form}
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username:"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="htn" />
        </Form.Item>

        <Form.Item
          label="Password:"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="123" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 5, span: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
