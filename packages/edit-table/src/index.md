---
title: 快速开始
order: 1
nav:
  order: 2
  title: EditTable
  path: /edit-table
group:
  path: /
---

### 依赖安装

```bash
 npm i carefree-antd-edit-table
```

### 参数

```ts
export interface EditableTableProps
  extends Omit<TableProps<any>, 'columns' | 'rowKey'> {
  columns: ColumnsProps[];
  /** 保存数据 */
  onSave: (data: any[], row: object, record?: object, indx?: number) => void;
  /** 保存数据之前校验 */
  onBeforeSave?: (item: object, record: object, index: number) => boolean;
  /**主键  */
  rowKey: string;
  /** 操作列是放在首位还是最后 */
  optIsFirst?: boolean;
  /** 操作配置 */
  optConfig?: ColumnsProps;
  /** 操作是否需要 删除 按钮 */
  isOptDelete?: boolean;
  /** 新增初始值 */
  initValue?: object;
  /** 是否存在新增按钮 */
  isAdd?: boolean;
  onBeforeAdd?: () => boolean;
  /** 行报错信息 */
  onErr?: (err: ValidateErrorEntity<any>) => void;
  /** 表单值更新事件 */
  onValuesChange?: (
    /** 更新后的列表值 */
    list: any,
    /** 当前更新字段值 */
    value: object,
    /** 当前行编辑字段值 */
    allValue: object,
    /** 当前编辑主键值 */
    id: string | number,
  ) => void;
  /** 是否可以多行编辑 */
  multiple?: boolean;
}
```

### 案例

```tsx
import React from 'react';
import { Input, Col, InputNumber } from 'antd';
import EditTable from 'carefree-antd-edit-table';
import 'antd/dist/antd.css';
const originData = [];

for (let i = 0; i < 10; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    // address: `London Park no. ${i}`,
  });
}

export default () => {
  const [data, setData] = React.useState(originData);
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
      type: 'Custom',
      inputNode: (edit) => {
        return <Input {...edit} />;
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
      type: 'Custom',
      rules: [{ required: true, message: '请输入' }],
      inputNode: <InputNumber />,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
      type: 'Input',
    },
  ];
  return (
    <EditTable
      initValue={{ address: 2193 }}
      onValuesChange={(list) => setData(list)}
      rowKey="key"
      optIsFirst={true}
      dataSource={data}
      columns={columns}
      onSave={(list) => setData(list)}
      isAdd={true}
    />
  );
};
```
