---
title: 快速开始
order: 1
nav:
  order: 2
  title: ProTable
  path: /pro-table
group:
  path: /
---

### 参数

```ts
// 参数
export interface ProTableProps {
  /** 查询表单 */
  search?: SimpleFormProps;
  // 表格头部操作按钮
  tableHead?: (v: any) => React.ReactNode;
  /** 表格配置 */
  tableConfig?: TableProps<any> & {
    table?: {
      page?: number;
      pageSize?: number;
      dataSource?: any[];
      total?: number;
      selectRows?: any[];
      selectRowKeys?: any[];
    };
  };
  /** 表格columns */
  columns?: (v?: any) => TableProps<any>['columns'];
  /** 接口调用  可以调用的接口 */
  Api?: ApiProps;
  /** 状态 存储 */
  main?: Store;
}

/** api 接口配置 */
export interface ApiProps {
  [api: string]: {
    /** 请求地址 */
    url?: string;
    /** 接口请求类型 */
    method?: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' | 'HEAD' | 'OPTIONS';
    /** 生产拼接 后端模块名 */
    module?: string;
    options?: RequestOptionsInit;
    /**  点击后 先触发当前操作 通过 callBack 执行内部继续操作 */
    before?: (item: any) => boolean;
    /** 处理请求api之前的数据数据 */
    requestBefore?: (item: any) => any;
    /** 处理请求之后的数据进行保存 */
    requestAfter?: (item: any) => any;
  };
}
```

### 案例

```tsx
import React from 'react';

import ProTable from 'carefree-pro-table';

export default () => (
  <ProTable
    Api={{
      table: {
        url: '/api/user/select',
        method: 'POST',
      },
    }}
    columns={[
      {
        title: '账号',
        dataIndex: 'loginName',
      },
      {
        title: '用户名',
        dataIndex: 'userName',
      },
      {
        title: '用户手机号',
        dataIndex: 'phone',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
    ]}
    search={{
      isSearch: true,
      layout: 'vertical',
      config: [
        {
          label: '测试',
          name: 'ces1',
          type: 'Input',
        },
      ],
    }}
  />
);
```
