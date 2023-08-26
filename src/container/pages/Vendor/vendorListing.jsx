import { Col, Row, Typography, Table, Switch, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { GET_ALL_VENDOR } from './../../../graphql/query/vendor';
import Admin from './../../layout/admin';
import { modifyVendorObject } from '../../../utils/helpers/ArrayHelper'; 

export const VendorListing = () => {
  const {loading, data } = useQuery(GET_ALL_VENDOR);
  const vendorList = !loading ? modifyVendorObject(data?.vendors) : [];  
  const handleStatusChange = () => {

  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mail Id',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Contact',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Status',
      key: 'id',
      render: (_, record) => (
        <>
          <Switch checked={record.isActive} onChange={() => handleStatusChange(record.id, record.isActive)} inputProps={{ 'aria-label': 'controlled' }} color="primary" />
        </>
      ),
    },
    {
      title: 'Is Verified',
      key: 'isVerified',
      render: (_, record) => {
        return record ? <Tag color="success" >Verified</Tag> : <Tag color="warning"> Not Verified</Tag>;
      },
    },
    {
      title: 'Actions',
      key: 'isVerified',
      render: (_, record) => {
        return <DeleteOutlined/>;
      },
    },
  ];
  return (
    <Admin loading={loading}>
      <Row>
        <Col span={24}>
          <Typography>Vendors</Typography>
          <Table columns={columns} dataSource={vendorList} />
        </Col>
      </Row>
    </Admin>
  );
};
