import { Button, Checkbox, Form, Input, Col, Row, Card } from 'antd';
import {  Link } from "react-router-dom";
import { Typography } from 'antd';
const { Title } = Typography;

export const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
  <Row className="login-form">
    <Col span={24}>
      <Card title="Log In" style={{ width: 500 }}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
          size='large'
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Title level={5}> New user ? <Link to={`registration`}>Register</Link></Title>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Col>
  </Row>
)};
