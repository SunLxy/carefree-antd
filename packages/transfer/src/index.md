---
title: 穿梭框
order: 1
nav:
  order: 2
  title: Transfer
  path: /transfer
group:
  path: /
---

```bash
 npm i carefree-antd-transfer
```

## 参数

| 参数             | 说明                    | 类型                                                                                                                                   |
| :--------------- | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| rowKey           | 列表主键                | `string`                                                                                                                               |
| columns          | 列表                    | `TableGroupProps['columns']`                                                                                                           |
| leftConfig       | 左侧表格配置            | `Omit<TableGroupProps, 'columns' \| 'rowKey' \| 'dataSource'>`                                                                         |
| leftSelected     | 左侧选中数据            | `{ selectedRowKeys?: React.Key[]; selectedRows?: any[] }`                                                                              |
| leftDataSource   | 左侧数据源              | `readonly any[]`                                                                                                                       |
| rightConfig      | 右侧侧表格配置          | `Omit<TableGroupProps, 'columns' \| 'rowKey' \| 'dataSource'>`                                                                         |
| rightSelected    | 右侧选中数据            | `{ selectedRowKeys?: React.Key[]; selectedRows?: any[] }`                                                                              |
| rightDataSource  | 右侧数据源              | `readonly any[]`                                                                                                                       |
| pagination       | 公共 pagination 属性    | `TableGroupProps['pagination']`                                                                                                        |
| handlePagination | 分页                    | `(page: number,pageSize: number, type: 'left' \| 'right',)=>void`                                                                      |
| handleSelected   | 选中                    | `( selectedRowKeys: React.Key[], selectedRows: any[], type: 'left' \| 'right',)=>void`                                                 |
| handleOperation  | 中间操作方法            | `(leftList: readonly any[], rightList: readonly any[], selectedRowKeys: React.Key[], selectedRows: any[], type: OperationType,)=>void` |
| isQuote          | 数据源只是引用 不做其他 | `boolean`                                                                                                                              |

**ref 返回值**

| 参数             | 说明           | 类型                                                                                                                                                                                                                                                      |
| :--------------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| store            | 内部状态存储值 | `{ leftSelected: TransferProps['leftSelected'],rightSelected: TransferProps['leftSelected'], leftPagination: { page: number; pageSize: number }, rightPagination: { page: number; pageSize: number },leftList: readonly any[],rightList: readonly any[]}` |
| setStore         | 列表           | `React.Dispatch<React.SetStateAction<TransferRef['store']>>`                                                                                                                                                                                              |
| handlePagination | 分页           | `(page: number,pageSize: number, type: 'left' \| 'right',)=>void`                                                                                                                                                                                         |
| handleSelected   | 选中           | `( selectedRowKeys: React.Key[], selectedRows: any[], type: 'left' \| 'right',)=>void`                                                                                                                                                                    |
| handleOperation  | 中间操作方法   | `(type: OperationType)=>void`                                                                                                                                                                                                                             |

```ts
export type OperationType = 'add' | 'allAdd' | 'delete' | 'allDelete';

export interface TransferProps {
  /** 列表主键 */
  rowKey: string;
  /** 列表 */
  columns: TableGroupProps['columns'];
  /** 左侧表格配置 */
  leftConfig?: Omit<TableGroupProps, 'columns' | 'rowKey' | 'dataSource'>;
  /** 左侧选中数据 */
  leftSelected?: { selectedRowKeys?: React.Key[]; selectedRows?: any[] };
  /** 左侧数据源 */
  leftDataSource: readonly any[];
  /** 右侧侧表格配置 */
  rightConfig?: Omit<TableGroupProps, 'columns' | 'rowKey' | 'dataSource'>;
  /** 右侧选中数据 */
  rightSelected?: { selectedRowKeys?: React.Key[]; selectedRows?: any[] };
  /** 右侧数据源 */
  rightDataSource: readonly any[];
  /** 公共 pagination属性 */
  pagination?: TableGroupProps['pagination'];
  /** 分页 */
  handlePagination?: (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => void;
  /** 选中  */
  handleSelected?: (
    selectedRowKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => void;
  /** 中间操作方法 */
  handleOperation?: (
    leftList: readonly any[],
    rightList: readonly any[],
    selectedRowKeys: React.Key[],
    selectedRows: any[],
    type: OperationType,
  ) => void;
  /** 数据源只是引用 不做其他 */
  isQuote?: boolean;
}

export interface TransferRef {
  /** 内部状态存储值 */
  store: {
    /** 左侧选中数据 */
    leftSelected: TransferProps['leftSelected'];
    /** 右侧选中数据 */
    rightSelected: TransferProps['leftSelected'];
    /** 左侧分页数据 */
    leftPagination: { page: number; pageSize: number };
    /** 右侧侧分页数据 */
    rightPagination: { page: number; pageSize: number };
    /** 左侧数据源 */
    leftList: readonly any[];
    /** 右侧数据源 */
    rightList: readonly any[];
  };
  setStore: React.Dispatch<React.SetStateAction<TransferRef['store']>>;
  /** 选中方法 */
  handleSelected: (
    selectedRowKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => void;
  /** 分页方法 */
  handlePagination: (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => void;
  /** 中间操作方法 */
  handleOperation: (type: OperationType) => void;
}
```

### 案例

```tsx
import React from 'react';
import Transfer from 'carefree-antd-transfer';

export default () => (
  <div>
    <Transfer
      leftDataSource={[
        { a: '测试1', b: '测试21', id: 1 },
        { a: '测试2', b: '测试211', id: 2 },
        { a: '测试3', b: '测试212', id: 3 },
        { a: '测试4', b: '测试213', id: 4 },
        { a: '测试1', b: '测试21', id: 11 },
        { a: '测试2', b: '测试211', id: 22 },
        { a: '测试3', b: '测试212', id: 33 },
        { a: '测试4', b: '测试213', id: 44 },
        { a: '测试1', b: '测试21', id: 111 },
        { a: '测试2', b: '测试211', id: 222 },
        { a: '测试3', b: '测试212', id: 333 },
        { a: '测试4', b: '测试213', id: 444 },
        { a: '测试1', b: '测试21', id: 1111 },
        { a: '测试2', b: '测试211', id: 2222 },
        { a: '测试3', b: '测试212', id: 3333 },
        { a: '测试4', b: '测试213', id: 4444 },
      ]}
      rightDataSource={[
        { a: '测试5', b: '测试215', id: 5 },
        { a: '测试6', b: '测试2116', id: 6 },
        { a: '测试7', b: '测试2127', id: 7 },
        { a: '测试8', b: '测试2138', id: 8 },
      ]}
      rowKey="id"
      columns={[
        {
          dataIndex: 'a',
          title: '标题',
          align: 'center',
        },
        {
          dataIndex: 'b',
          title: '标3',
          align: 'center',
        },
      ]}
    />
  </div>
);
```
