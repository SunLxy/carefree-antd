import { Table, TableProps } from 'antd';
import React from 'react';

export interface TableGroupProps extends TableProps<any> {
  handleSelected: TableProps<any>['rowSelection']['onChange'];
  selectedRowKeys: React.Key[];
  handlePagination: (page: number, pageSize?: number) => void;
}

export default (props: TableGroupProps) => {
  const {
    rowSelection,
    handleSelected,
    selectedRowKeys,
    pagination,
    handlePagination,
    ...rest
  } = props;
  let tableRest: { pagination: TableGroupProps['pagination'] } = {
    pagination: { pageSize: 10 },
  };
  if (Reflect.has(props, 'pagination')) {
    if (typeof pagination !== 'boolean') {
      tableRest.pagination = {
        ...pagination,
        onChange: handlePagination,
      };
    } else {
      tableRest.pagination = pagination;
    }
  }
  return (
    <Table
      size="small"
      {...rest}
      {...tableRest}
      rowSelection={{
        ...(rowSelection || {}),
        selectedRowKeys,
        onChange: handleSelected,
      }}
    />
  );
};
