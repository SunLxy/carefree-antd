import React from 'react';
import { Button, TableProps } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';

import Table, { TablesProps } from './Table';

export type OperationType = 'add' | 'allAdd' | 'delete' | 'allDelete';

interface TableGroupProps {
  /** 左侧表格配置 */
  leftTable: TablesProps;
  /** 右侧表格配置 */
  rightTable: TablesProps;
  /** 中间操作方法 */
  handleOperation: (type: OperationType) => void;
}

export default (props: TableGroupProps) => {
  const { leftTable, rightTable, handleOperation } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ flex: 1 }}>
        <Table {...leftTable} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: 80,
        }}
      >
        <Button
          style={{ margin: '10px 0px' }}
          onClick={handleOperation.bind(this, 'add')}
          type="primary"
        >
          <RightOutlined />
          {/* 添加 */}
        </Button>
        <Button
          style={{ margin: '10px 0px' }}
          onClick={handleOperation.bind(this, 'allAdd')}
          type="primary"
        >
          <DoubleRightOutlined />
          {/* 全部添加 */}
        </Button>
        <Button
          style={{ margin: '10px 0px' }}
          onClick={handleOperation.bind(this, 'allDelete')}
          type="primary"
        >
          <DoubleLeftOutlined />
          {/* 全部删除 */}
        </Button>
        <Button
          style={{ margin: '10px 0px' }}
          onClick={handleOperation.bind(this, 'delete')}
          type="primary"
        >
          <LeftOutlined />
          {/* 删除 */}
        </Button>
      </div>
      <div style={{ flex: 1 }}>
        <Table {...rightTable} />
      </div>
    </div>
  );
};
