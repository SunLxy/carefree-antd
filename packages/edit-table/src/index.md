---
title: 编辑表格1
order: 2
nav:
  title: 编辑表格
  order: 2
group:
  path: /
---

## 依赖安装

```bash
 npm i carefree-antd-edit-table
```

## 引入

```ts
import EditTable from 'carefree-antd-edit-table';
```

### 编辑表格 参数

| 参数           | 说明                     | 类型                                                                                            |
| :------------- | :----------------------- | :---------------------------------------------------------------------------------------------- |
| columns        | 列                       | `ColumnsProps[]`                                                                                |
| onSave         | 保存数据                 | `(data: any[], row: object, record?: object, indx?: number) => void`                            |
| onBeforeSave   | 保存数据之前校验         | `(item: object, record: object, index: number) => boolean`                                      |
| rowKey         | 主键                     | `string`                                                                                        |
| optIsFirst     | 操作列是放在首位还是最后 | `boolean`                                                                                       |
| isOpt          | 是否需要操作列           | `boolean`                                                                                       |
| optConfig      | 操作配置                 | `ColumnsProps`                                                                                  |
| isOptDelete    | 操作是否需要 删除 按钮   | `boolean`                                                                                       |
| initValue      | 新增初始值               | `object`                                                                                        |
| isAdd          | 是否存在新增按钮         | `boolean`                                                                                       |
| onBeforeAdd    | 新增之前校验             | `() => boolean`                                                                                 |
| onErr          | 行报错信息               | `(err: ValidateErrorEntity<any>) => void`                                                       |
| onValuesChange | 表单值更新事件           | `(list: any[], value: object, allValue: object,id: string \| number, form: FormInstance)=>void` |
| multiple       | 是否可以多行编辑         | `boolean`                                                                                       |
| addBtnProps    | 新增按钮配置             | `AddBtnProps`                                                                                   |
| store          | form 表单状态处理        | `Store`                                                                                         |

[更多参数](https://ant.design/components/select-cn/#API)

**类型**

```ts
export interface EditableTableProps
  extends Omit<TableProps<any>, 'columns' | 'rowKey'> {
  /** 列 **/
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
  onBeforeAdd?: () => boolean;
  /** 行报错信息 */
  onErr?: (err: ValidateErrorEntity<any>) => void;
  /** 表单值更新事件 */
  onValuesChange?: (
    /** 更新后的列表值 */
    list: any[],
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
  addBtnProps?: AddBtnProps;
  /** form 表单状态处理 */
  store?: Store;
}
```

### 单个 formItem 组件参数

| 参数      | 说明                                    | 类型                                                                                                                                     |
| :-------- | :-------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| preName   | 当前行数据存储父级的 name list 时不用传 | `ColumnsProps[]`                                                                                                                         |
| itemValue | 当前行的所有数据                        | `(data: any[], row: object, record?: object, indx?: number) => void`                                                                     |
| tipAttr   | Tooltip 组件属性                        | `(item: object, record: object, index: number) => boolean`                                                                               |
| tip       | 错误提示                                | `string`                                                                                                                                 |
| children  | 进行覆写,为方法时新增一个行参数         | `React.ReactElement \| ((control: { [name: string]: any }, meta: Meta, form: FormInstance<any>,v?: { record: any }) => React.ReactNode)` |

[更多参数](https://github.com/react-component/field-form)

```ts
/**  Item 组件  渲染的单个内部FromItem组件  */
export interface EditableCellItemProps extends Omit<FieldProps, 'label'> {
  /** 当前行数据存储父级的name list时不用传 */
  preName?: string;
  /** 当前行的所有数据 */
  itemValue?: any;
  /** Tooltip 组件属性  */
  tipAttr?: TooltipProps;
  /** 错误提示  */
  tip?: (errs: string) => React.ReactNode;
  /** 进行覆写 方法时 新增一个 行参数 v */
  children?:
    | React.ReactElement
    | ((
        control: { [name: string]: any },
        meta: Meta,
        form: FormInstance<any>,
        v?: { record: any },
      ) => React.ReactNode);
}
```

### 表格 列参数

| 参数      | 说明                                                                                                      | 类型                                                                                                  |
| :-------- | :-------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| editable  | 是否编辑                                                                                                  | `boolean`                                                                                             |
| inputNode | 自定义 渲染编辑组件                                                                                       | `(data: any[], row: object, record?: object, indx?: number) => void`                                  |
| rules     | 规则                                                                                                      | `(item: object, record: object, index: number) => boolean`                                            |
| itemAttr  | formItem 表单 其他属性值                                                                                  | `string`                                                                                              |
| attr      | formItem 表单 children 中组件参数                                                                         | `boolean`                                                                                             |
| type      | 组件类型                                                                                                  | `boolean`                                                                                             |
| isList    | 是否是 List                                                                                               | `ColumnsProps`                                                                                        |
| listAttr  | list 组件参数                                                                                             | `boolean`                                                                                             |
| tip       | 错误提示                                                                                                  | `object`                                                                                              |
| tipAttr   | Tooltip 组件属性                                                                                          | `boolean`                                                                                             |
| render    | 自定义 渲染(列原始默认的自定义渲染,加了个 other 参数，不是编辑状态下的表格渲染),other 参数 只有操作列才有 | `( value: any,record: any,index: number,other?: OtherProps,) => React.ReactNode \| RenderedCell<any>` |

[更多参数](https://ant.design/components/table-cn/#Column)

**OtherProps**

| 参数       | 说明                                              | 类型                                                             |
| :--------- | :------------------------------------------------ | :--------------------------------------------------------------- |
| editingKey | 编辑中字段                                        | `any[]`                                                          |
| editable   | 当前行 是否编辑                                   | `boolean`                                                        |
| newAdd     | 处于编辑状态的 新增数据 key                       | `any[]`                                                          |
| isNewAdd   | 是否新增的                                        | `boolean`                                                        |
| save       | 保存 ，key:主键 ，record：行数据，index:下标      | `(key: string \| number, record: object, indx: number) => void`  |
| cancel     | 取消 ， id：主键                                  | `(id: string \| number) => void`                                 |
| onDelete   | 删除 ，id：主键， rowItem 当前行数据 ，index:下标 | `(id: string \| number, rowItem: object, index: number) => void` |
| edit       | 编辑 按钮 ，record 当前行数                       | `(record: object) => void`                                       |

```ts
interface ItemType<T, P> {
  /** 类型 */
  type: T;
  /** formItem 表单 children 中组件参数*/
  attr?: P;
}

export type ItemChild<T = any, P = any> =
  | ItemType<'Input', InputProps>
  | ItemType<'InputNumber', InputNumberProps>
  | ItemType<'TextArea', TextAreaProps>
  | ItemType<'Select', SelectProps<T>>
  | ItemType<'AutoComplete', AutoCompleteProps>
  | ItemType<'Cascader', CascaderProps<P>>
  | ItemType<
      'Checkbox',
      React.ForwardRefExoticComponent<
        CheckboxGroupProps & React.RefAttributes<HTMLDivElement>
      >
    >
  | ItemType<'DatePicker', DatePickerProps>
  | ItemType<'Mentions', MentionProps>
  | ItemType<'Radio', RadioProps>
  | ItemType<'Rate', RateProps>
  | ItemType<'Slider', SliderSingleProps>
  | ItemType<'Switch', SwitchProps>
  | ItemType<'TimePicker', TimePickerProps>
  | ItemType<'TreeSelect', TreeSelectProps>
  | ItemType<'Upload', UploadProps>
  | ItemType<'RangePicker', RangePickerProps>
  | ItemType<'Custom', any>;

// 表格 列参数

export type ColumnsProps = ColumnType<any> & {
  /** 是否编辑  */
  editable?: boolean;
  /** 自定义 渲染编辑组件 */
  inputNode?: ((...arg: any[]) => React.ReactNode) | React.ReactNode;
  /** 规则 */
  rules?: Rule[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<FieldProps, 'rules' | 'label' | 'name'>;
  /**组件类型  */
  // type?: ItemChildType;
  /** 错误提示  */
  tip?: (errs: string) => React.ReactNode;
  /** Tooltip 组件属性  */
  tipAttr?: TooltipProps;
  /** 是否是 List */
  isList?: boolean;
  /** list 组件参数 */
  listAttr?: Omit<ListProps, 'children' | 'name'>;
  /** 自定义 渲染(列原始默认的自定义渲染,加了个 other 参数，不是编辑状态下的表格渲染)  ， other 参数 只有操作列才有 */
  render?: (
    value: any,
    record: any,
    index: number,
    other?: OtherProps,
  ) => React.ReactNode | RenderedCell<any>;
} & ItemChild<any, any>;

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

| 参数       | 说明                                              | 类型                                                             |
| :--------- | :------------------------------------------------ | :--------------------------------------------------------------- |
| save       | 保存 ，key:主键 ，record：行数据，index:下标      | `(key: string \| number, record: object, indx: number) => void`  |
| cancel     | 取消 ， id：主键                                  | `(id: string \| number) => void`                                 |
| onDelete   | 删除 ，id：主键， rowItem 当前行数据 ，index:下标 | `(id: string \| number, rowItem: object, index: number) => void` |
| edit       | 编辑 按钮 ，record 当前行数                       | `(record: object) => void`                                       |
| add        | 新增                                              | `() => void`                                                     |
| isEditing  | 是否编辑中                                        | `(record: any) => boolean`                                       |
| isAddEdit  | 是否是新增                                        | `(record: any) => boolean`                                       |
| editingKey | 编辑中字段                                        | `any[]`                                                          |
| newAdd     | 处于编辑状态的 新增数据 key                       | `any[]`                                                          |
| forms      | 收集 所有 表单                                    | `Store`                                                          |

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
  /** 是否是新增 */
  isAddEdit: (record: any) => boolean;
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
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/reset.css';
import EditTable from 'carefree-antd-edit-table';
import React from 'react';
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
  const [tableProps, setTableProps] = React.useState({
    isAdd: true,
    isOpt: true,
    optIsFirst: true,
    optDeleteEditingDisabled: false,
  });
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '15%',
      editable: true,
      type: 'Custom',
      inputNode: (edit) => {
        return <Input {...edit} />;
      },
    },
    {
      title: 'isList',
      dataIndex: 'list',
      width: '15%',
      editable: true,
      type: 'Custom',
      isList: true,
      render: (text) => {
        return (
          text &&
          (text || [])
            .filter((it) => it)
            .map((ite) => ite.first)
            .join(',')
        );
      },
      inputNode: (fields, { add, remove }, { errors }) => (
        <>
          {fields.map(({ key, name, fieldKey, ...restField }, index) => (
            <EditTable.Item
              key={key}
              {...restField}
              name={[name, 'first']}
              fieldKey={[fieldKey, 'first']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'Missing first name',
                },
              ]}
            >
              <Input placeholder="First Name" />
            </EditTable.Item>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
              Add field
            </Button>
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      ),
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
      title: 'age1',
      dataIndex: 'age1',
      width: '15%',
      editable: true,
      type: 'AutoComplete',
      attr: {
        style: { width: '100%' },
        options: [
          { label: '12', value: '12' },
          { label: '1233', value: '1233' },
        ],
      },
      rules: [{ required: true, message: '请输入' }],
    },
    {
      title: 'age2',
      dataIndex: 'age2',
      width: '15%',
      editable: true,
      type: 'Select',
      attr: {
        style: { width: '100%' },
        showSearch: true,
        options: [
          { label: 12, value: 12 },
          { label: 14, value: 14 },
        ],
      },
      rules: [{ required: true, message: '请输入' }],
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '20%',
      editable: true,
      type: 'Input',
    },
  ];

  console.log('data--->', data);

  return (
    <div>
      <Button
        onClick={() => {
          setTableProps({
            ...tableProps,
            isOptDelete: !tableProps.isOptDelete,
          });
        }}
      >
        删除按钮
      </Button>
      <Button
        onClick={() => {
          setTableProps({
            ...tableProps,
            optDeleteEditingDisabled: !tableProps.optDeleteEditingDisabled,
          });
        }}
      >
        删除按钮编辑禁用
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, isAdd: !tableProps.isAdd });
        }}
      >
        新增按钮
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, multiple: !tableProps.multiple });
        }}
      >
        多行编辑
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, optIsFirst: !tableProps.optIsFirst });
        }}
      >
        操作列前或后
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, isOpt: !tableProps.isOpt });
        }}
      >
        无操作列
      </Button>
      <EditTable
        initValue={{ address: 2193 }}
        onValuesChange={(list, value, allValue, id, form) => {
          setData(list);
          // console.log(list, value, allValue, id, form)
        }}
        rowKey="key"
        optIsFirst={true}
        dataSource={data}
        columns={columns}
        onSave={(list) => setData(list)}
        isAdd={true}
        {...tableProps}
      />
    </div>
  );
};
```
