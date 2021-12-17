import React from 'react';
import { Card } from 'antd';
import { Table, TableProps } from 'antd';
import { useProTableConfigContext, useProTableContext } from './../Context';
import { onSearch } from './../utils/search';
const Tables = () => {
  const {
    tableConfig,
    columns,
    tableCardProps,
    Api = {},
    tableHead,
  } = useProTableConfigContext();
  const main = useProTableContext();
  const {
    getValue,
    setValue,
    setBatchValue,
    updateComponent,
    registerId,
    unregister,
  } = main;
  const [_, setUpdateTime] = React.useState('');
  const { page, pageSize, total, dataSource, selectRowKeys } =
    getValue('table');
  const { pagination, rowSelection, table, apiName } = tableConfig || {};

  const update = () => {
    setUpdateTime(new Date().getTime().toString());
  };

  const onChange = (page: number, pageSize: number) => {
    setBatchValue({ table_page: page, table_pageSize: pageSize });
    if (
      tableConfig &&
      tableConfig.pagination &&
      tableConfig.pagination.onChange
    ) {
      tableConfig.pagination.onChange(page, pageSize, main);
    } else {
      onSearch({ main, tableConfig, Api, apiName });
    }
  };

  const isPagination = React.useMemo(() => {
    if (tableConfig && 'pagination' in tableConfig) {
      if (pagination === false) {
        return true;
      }
    }
    return false;
  }, [JSON.stringify(pagination)]);

  registerId('table', update);

  React.useEffect(() => {
    return () => unregister('table', table);
  }, []);

  React.useEffect(() => {
    if (table) {
      Object.entries(table).forEach(([k, value]) => {
        setValue(`table_${k}`, value);
      });
      update();
    }
  }, []);

  const columnsData = React.useMemo(() => {
    if (typeof columns === 'function') {
      return columns(main);
    }
    return columns || [];
  }, [columns]);

  const bordered = React.useMemo(() => {
    if ('bordered' in (tableCardProps || {})) {
      return tableCardProps.bordered;
    }
    return !!tableHead;
  }, [!!tableHead, (tableCardProps || {}).bordered]);

  return (
    <Card
      {...(tableCardProps || {})}
      title={tableHead && tableHead(main)}
      bodyStyle={{ padding: 0, ...((tableCardProps || {}).bodyStyle || {}) }}
      bordered={bordered}
    >
      <Table
        rowKey="id"
        size="small"
        bordered
        loading={getValue('loading')}
        {...tableConfig}
        {...(rowSelection
          ? {
              rowSelection: {
                ...rowSelection,
                selectedRowKeys: selectRowKeys,
                onChange: (selectRowKeys, selectRows) => {
                  setBatchValue({
                    'table.selectRowKeys': selectRowKeys,
                    'table.selectRows': selectRows,
                  });
                  updateComponent(['table']);
                },
              },
            }
          : {})}
        dataSource={dataSource}
        columns={columnsData}
        pagination={
          !isPagination && {
            ...((pagination || {}) as TableProps<any>['pagination']),
            pageSize,
            total,
            current: page,
            onChange: onChange,
          }
        }
      />
    </Card>
  );
};
export default Tables;
