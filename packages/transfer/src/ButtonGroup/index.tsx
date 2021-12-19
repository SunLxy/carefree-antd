import { Button } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';
import React from 'react';
export type OperationType = 'add' | 'allAdd' | 'delete' | 'allDelete';

export interface ButtonGroupProps {
  handleOperation: (type: OperationType) => void;
}

export default (props: ButtonGroupProps) => {
  const { handleOperation } = props;
  return (
    <React.Fragment>
      <Button
        style={{ marginTop: 35, width: 50 }}
        onClick={handleOperation.bind(this, 'add')}
        type="primary"
      >
        <RightOutlined />
        {/* 添加 */}
      </Button>
      <Button
        style={{ marginTop: 35, width: 50 }}
        onClick={handleOperation.bind(this, 'allAdd')}
        type="primary"
      >
        <DoubleRightOutlined />
        {/* 全部添加 */}
      </Button>
      <Button
        style={{ marginTop: 35, width: 50 }}
        onClick={handleOperation.bind(this, 'allDelete')}
        type="primary"
      >
        <DoubleLeftOutlined />
        {/* 全部删除 */}
      </Button>
      <Button
        style={{ marginTop: 35, width: 50 }}
        onClick={handleOperation.bind(this, 'delete')}
        type="primary"
      >
        <LeftOutlined />
        {/* 删除 */}
      </Button>
    </React.Fragment>
  );
};
