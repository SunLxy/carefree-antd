# carefree-antd-transfer-search

## 依赖安装

```bash
 npm i carefree-antd-transfer-search
```

## 参数

| 参数              | 说明           | 类型                                                                                                                                                                                                  |
| :---------------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initValue         | 初始值         | `Partial<{ left: Partial<StoreProps['left']>,right: Partial<StoreProps['right']>}>`                                                                                                                   |
| leftUseForm       | 左侧 form      | `SimpleFormProps['form']`                                                                                                                                                                             |
| leftSearchConfig  | 左侧 form 配置 | `SimpleFormProps`                                                                                                                                                                                     |
| rightUseForm      | 右侧 form      | `SimpleFormProps['form']`                                                                                                                                                                             |
| rightSearchConfig | 右侧 form 配置 | `SimpleFormProps`                                                                                                                                                                                     |
| rowKey            | 表格主键       | `string`                                                                                                                                                                                              |
| columns           | 表格列         | `TableProps<any>['columns']`                                                                                                                                                                          |
| Api               | 请求接口       | `{left: ApiType<'left' \| 'right'>, right: ApiType<'left' \| 'right'>,add: ApiType<OperationType>, allAdd: ApiType<OperationType>, delete: ApiType<OperationType>,allDelete: ApiType<OperationType>}` |

**类型**

```ts
import { SimpleFormProps } from 'carefree-antd-form';

export interface SearchProps {
  /** 左侧表单配置 */
  leftSearchConfig: SimpleFormProps;
  /** 右侧表单配置 */
  rightSearchConfig: SimpleFormProps;
  /** 查询方法  */
  onSearch: (type: 'left' | 'right') => void;
  /** 值更新 */
  onValuesChange: (value: any, allValue: any, type: 'left' | 'right') => void;
}

export type ApiType<T> = {
  /** 请求地址 */
  url: string;
  /** 其他请求配置 */
  options?: RequestOptionsInit;
  /** main 内部状态存储值 返回值为 false 不继续往下走 */
  before: (main: any, type: T) => false | object;
  /** 请求之后处理数据  返回值为 false 不继续往下走 */
  after: (response: any, type: T) => false | object;
};

export interface TransferSearchProps
  extends Omit<SearchProps, 'onSearch' | 'onValuesChange'> {
  /**  初始值 */
  initValue?: Partial<{
    left: Partial<StoreProps['left']>;
    right: Partial<StoreProps['right']>;
  }>;
  /** 左侧 form */
  leftUseForm?: SimpleFormProps['form'];
  /** 右侧侧 form */
  rightUseForm?: SimpleFormProps['form'];
  /** 表格主键 */
  rowKey: string;
  /** 表格列 */
  columns: TableProps<any>['columns'];
  /** 请求接口 */
  Api: {
    /** 左侧查询接口 */
    left: ApiType<'left' | 'right'>;
    /** 右侧查询接口 */
    right: ApiType<'left' | 'right'>;
    /** 中间操作  往左 单个 */
    add: ApiType<OperationType>;
    /** 中间操作  往左 双个 */
    allAdd: ApiType<OperationType>;
    /** 中间操作  往右 单个 */
    delete: ApiType<OperationType>;
    /** 中间操作  往右 双个 */
    allDelete: ApiType<OperationType>;
  };
}

export interface TransferSearchRef {
  /** 中间操作方法 */
  handleOperation: (type: OperationType) => Promise<void>;
  /** 翻页 */
  onPageChange: (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => void;
  /** 选中 */
  onSelectedChange: (
    selectedKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => void;
  /** 查询 */
  onSearch: (type: 'left' | 'right') => Promise<void>;
  /** 状态存储数据 */
  store: Store;
  /** 更新当前组件 */
  forceUpdate: () => void;
  /** 左侧 form */
  leftUseForm: SimpleFormProps['form'];
  /** 右侧侧 form */
  rightUseForm: SimpleFormProps['form'];
}
```

### 案例

```tsx
import React from 'react';
import TransferSearch from 'carefree-antd-transfer-search';

export default () => (
  <div>
    <TransferSearch
      rowKey="id"
      columns={[{ title: '标题', dataIndex: 'title' }]}
      initValue={{
        left: {
          dataList: [{ id: 1, title: '标题' }],
        },
        right: {
          dataList: [{ id: 2, title: '标题2' }],
        },
      }}
      Api={{
        // 左侧查询接口
        left: {
          url: '',
          options: {},
          before: () => ({}),
          after: () => ({}),
        },
        // 右侧查询接口
        right: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // 中间按钮 往右
        add: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // 中间按钮 往右
        allAdd: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // 中间按钮 往左
        allDelete: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // 中间按钮 往左
        delete: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
      }}
      // 左侧查询表单配置
      leftSearch={{
        config: [
          {
            label: '标题',
            name: 'name1',
            type: 'Input',
          },
          {
            label: '标题',
            name: 'name2',
            type: 'Input',
          },
        ],
      }}
      // 右侧查询表单配置
      rightSearch={{
        config: [
          {
            label: '标题',
            name: 'name1',
            type: 'Input',
          },
          {
            label: '标题',
            name: 'name2',
            type: 'Input',
          },
        ],
      }}
    />
  </div>
);
```
