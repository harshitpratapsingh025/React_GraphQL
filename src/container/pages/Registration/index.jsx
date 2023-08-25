import { useState } from 'react';
import { Button, Form, Input, Col, Row, Card, Select } from 'antd';
import useAllStates from './../../../utils/hooks/useAllStates';
import useAllCities from './../../../utils/hooks/useAllCities';

export const Registration = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const allState = useAllStates();
  const allCities = useAllCities(state);
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const handleStateChange = (value) => {
    setState(value);
  }
  const handleCityChange = (value) => {
    setCity(value);
  }
  return (
    <Row className="login-form">
      <Col span={24}>
        <Card title="User Regitration" style={{ width: 500 }}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            size="large"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input type="email" />
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
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Zip code"
              name="zipCode"
              rules={[
                {
                  required: true,
                  message: 'Please input your zip code!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: 'Please input your address!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="State">
              <Select onChange={handleStateChange} value={state} name="state">
                {allState?.map((state) => {
                return  <Select.Option value={state.id} key={state.id}>{state.name}</Select.Option>
                })}
              </Select>
            </Form.Item>
            <Form.Item label="City">
            <Select onChange={handleCityChange} value={city} name="city">
                {allCities?.map((city) => {
                return  <Select.Option value={city._id} key={city._id}>{city.name}</Select.Option>
                })}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
