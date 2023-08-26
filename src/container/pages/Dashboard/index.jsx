import { Col, Row, Typography } from 'antd';
import Admin from './../../layout/admin';

export const Dashboard = () => {
  return (
    <Admin>
      <Row>
        <Col span={24}>
          <Typography>Dashboard</Typography>
        </Col>
      </Row>
    </Admin>
  );
};
