import React from 'react';
import Table from './Table';
import Button from './../Button';
import { Card } from 'antd';
const Tables = () => {
  // extra
  return (
    <Card title={<Button />} bodyStyle={{ padding: 0 }} bordered={false}>
      <Table />
    </Card>
  );
};
export default Tables;
