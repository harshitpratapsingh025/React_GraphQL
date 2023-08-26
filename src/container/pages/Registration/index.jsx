import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Button, Form, Input, Col, Row, Card, Select, Spin } from 'antd';
import useAllStates from './../../../utils/hooks/useAllStates';
import useAllCities from './../../../utils/hooks/useAllCities';

const AddUser = gql`
  mutation AddUser(
    $firstName: String!
    $lastName: String!
    $email: String! 
    $password: String!
    $country: String!
    $contact: String!
    $state: ID!
    $city: ID!
    $pincode: String!
    $address: String!
    ) {
    addUser( 
      firstName: $firstName
      lastName: $lastName
      email: $email 
      password: $password
      country: $country
      contact: $contact
      state: $state
      city: $city
      pincode: $pincode
      address: $address
      ) {
      id
    }
  }
`;

export const Registration = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [mutateAddUser, { data, loading, error }] = useMutation(AddUser);
  
  const allState = useAllStates();
  const allCities = useAllCities(state);

  const onFinish = (args) => {
    mutateAddUser({
      variables: {
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: args.password,
        country: 'India',
        contact: args.contact,
        state: state,
        city: city,
        pincode: args.pincode,
        address: args.address,
      },
    });
  };

  const handleStateChange = (value) => {
    setState(value);
  };
  const handleCityChange = (value) => {
    setCity(value);
  };
  return (
    <Row className="login-form">
      
      <Col span={24}>
        <Card title="User Regitration" style={{ width: 500 }}>
        <Spin tip="Loading..." spinning={loading}>
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
              label="First Name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: 'Please input your last name!',
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
              name="contact"
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
              name="pincode"
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
                  return (
                    <Select.Option value={state.id} key={state.id}>
                      {state.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item label="City">
              <Select onChange={handleCityChange} value={city} name="city">
                {allCities?.map((city) => {
                  return (
                    <Select.Option value={city.id} key={city.id}>
                      {city.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          </Spin>
        </Card>
      </Col>
    </Row>
  );
};
