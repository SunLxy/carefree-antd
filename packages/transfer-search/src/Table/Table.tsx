import React from 'react';
import { Table, TableProps } from 'antd';

export interface TablesProps {
  /** 选中key */
  selectedKeys: React.Key[];
  /** 选中事件 */
  onSelectedChange: (selectedKeys: React.Key[], selectedRows: any[]) => void;
  /** 翻页方法 */
  onPageChange: (page: number, pageSize?: number) => void;
  /** 当前页数 */
  page: number;
  /** 每页条数 */
  pageSize: number;
  /** 总条数 */
  total: number;
  /** 表格 数据源 */
  dataList: any[];
  loading: boolean;
  rowKey: string;
  columns: TableProps<any>['columns'];
}

export default (props: TablesProps) => {
  const {
    onPageChange,
    onSelectedChange,
    selectedKeys,
    dataList,
    page,
    pageSize,
    total,
    loading,
    rowKey,
    columns,
  } = props;

  return (
    <Table
      loading={loading}
      size="small"
      bordered
      columns={columns || []}
      rowKey={rowKey || 'id'}
      dataSource={dataList}
      rowSelection={{
        selectedRowKeys: selectedKeys,
        onChange: onSelectedChange,
      }}
      pagination={{
        current: page,
        pageSize,
        total,
        onChange: onPageChange,
      }}
    />
  );
};
