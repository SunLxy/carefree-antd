import React from 'react';
import { Table, TableProps } from 'antd';

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
  console.log(tableRest);
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
