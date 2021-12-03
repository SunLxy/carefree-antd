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

### 编辑表格 参数

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
  /** 是否需要操作列 */
  isOpt?: boolean;
  /** 操作配置 */
  optConfig?: ColumnsProps;
  /** 操作是否需要 删除 按钮 */
  isOptDelete?: boolean;
  /** 新增初始值 */
  initValue?: object;
  /** 是否存在新增按钮 */
  isAdd?: boolean;
  /** 新增之前的事件 */
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
    /**  当前行的 form  */
    form: FormInstance,
  ) => void;
  /** 是否可以多行编辑 */
  multiple?: boolean;
  /** 新增按钮配置 */
  addBtnProps: ButtonProps;
}
```

### 表格 列参数

```ts
// 表格 列参数
export interface ColumnsProps extends ColumnType<any> {
  /**是否编辑  */
  editable?: boolean;
  /** 渲染编辑组件 */
  inputNode?: ((...arg: any[]) => React.ReactNode) | React.ReactNode;
  /** 规则 */
  rules?: Rule[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<FormItemProps, 'rules' | 'label' | 'name'>;
  /** formItem 表单 children 中组件参数*/
  attr?: Partial<ItemChildAttr<any, any>>;
  /**组件类型  */
  type?: ItemChildType;
  /** 错误提示  */
  tip?: (errs: string[]) => React.ReactNode;
  /** Tooltip 组件属性  */
  tipAttr?: TooltipProps;
  /** 自定义 渲染  ， other 参数 只有操作列才有 */
  render?: (
    value: any,
    record: any,
    index: number,
    other?: OtherProps,
  ) => React.ReactNode | RenderedCell<any>;
}
// ColumnsProps 中  render 中的 other 参数值
export interface OtherProps {
  /** 编辑中字段 */
  editingKey: any[];
  /** 当前行 是否编辑 */
  editable: boolean;
  /** 处于编辑状态的 新增数据 key */
  newAdd: any[];
  /** 是否新增的 */
  isNewAdd: boolean;
  /** 保存 ，key:主键 ，record：行数据，index:下标  **/
  save: (key: string | number, record: object, indx: number) => void;
  /** 取消 ， id：主键 */
  cancel: (id: string | number) => void;
  /** 删除 ，id：主键， rowItem 当前行数据 ，index:下标 */
  onDelete: (id: string | number, rowItem: object, index: number) => void;
  /** 编辑 按钮 ，record 当前行数 */
  edit: (record: object) => void;
}
```

### ref 返回值

```ts
// ref 值
export interface RefEditTableProps {
  /** 保存 */
  save: (key: string, record: object, indx: number) => void;
  /** 删除 */
  onDelete: (id: string | number, rowItem: object, index: number) => void;
  /** 编辑 */
  edit: (record: object) => void;
  /** 取消编辑 */
  cancel: (key: string | number) => void;
  /** 新增 */
  add: () => void;
  /** 是否编辑中 */
  isEditing: (record: any) => boolean;
  /** 编辑 id */
  editingKey: (string | number)[];
  /** 是否编辑 新增的数据 */
  newAdd: (string | number)[];
  /** 收集 所有 表单 */
  forms: Store;
}
```

### 案例

```tsx
import React from 'react';
import { Input, Col, InputNumber } from 'antd';
import EditTable from 'carefree-antd-edit-table';
import 'antd/dist/antd.css';
const originData = [];

for (let i = 0; i < 5; i++) {
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