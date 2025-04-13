---
title: 编辑表格2
order: 2
nav:
  title: 编辑表格
  order: 2
group:
  path: /
---

- 移除`EditTable`中的`ref`
- 移除`EditTable`中的`store`，改用`editInstance`,并使用`EditableTableBase.useEditInstance()`进行初始实例
- 移除`EditTable`的`ColumnsProps`中`render`的第四个参数
- 添加`onBeforeEdit`、`onBeforeEditCancel`、`onBeforeDelete`三个方法
- 在子集组件中可以使用`EditableTableBase.useEditInstanceContext()`获取`EditTableBaseInstance`实例和状态数据
- 编辑状态时取消编辑还原编辑之前的数据

<span style='color:red' >📢 注意：如果自定义编辑列的时候，调用编辑（使用实例中`onEditRow`方法时，会自动进行存储）时没有进行存储数据，在取消编辑时，不会还原编辑之前的数据</span>

## 依赖安装

```bash
 npm i carefree-antd-edit-table
```

## 引入

```ts
import { EditableTableBase } from 'carefree-antd-edit-table';
```

### 案例

```tsx
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/reset.css';
import { EditableTableBase } from 'carefree-antd-edit-table';
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
      <EditableTableBase
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

### 类型

```ts
import React from 'react';
import {
  ProxyInstanceObject,
  ProxyInstanceObjectStoreType,
} from '@carefrees/valtio';
import { FormInstance, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { ButtonProps, TableProps, TooltipProps } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { FieldProps } from 'rc-field-form/lib/Field';
import { ListProps } from 'rc-field-form/lib/List';
import {
  FormInstance,
  Meta,
  Rule,
  ValidateErrorEntity,
} from 'rc-field-form/lib/interface';
import { RenderedCell } from 'rc-table/lib/interface';
import {
  AutoCompleteProps,
  CascaderAutoProps,
  CheckboxProps,
  DatePickerProps,
  InputNumberProps,
  InputProps,
  MentionProps,
  RadioProps,
  RateProps,
  SelectProps,
  SliderSingleProps,
  SwitchProps,
  TimePickerProps,
  TreeSelectProps,
  UploadProps,
} from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox/Group';
import { RangePickerProps } from 'antd/lib/date-picker/index';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { InternalNamePath } from 'rc-field-form/lib/interface';
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
  | ItemType<'Cascader', CascaderAutoProps<P>>
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
export type ItemChildType =
  | 'Custom'
  | 'Input'
  | 'InputNumber'
  | 'TextArea'
  | 'Select'
  | 'AutoComplete'
  | 'Cascader'
  | 'Checkbox'
  | 'DatePicker'
  | 'Mentions'
  | 'Radio'
  | 'Rate'
  | 'Slider'
  | 'Switch'
  | 'TimePicker'
  | 'TreeSelect'
  | 'Upload'
  | 'RangePicker';
export type ItemChildAttr<T = any, K = any> =
  | InputProps
  | InputNumberProps
  | SelectProps<T>
  | AutoCompleteProps
  | CascaderAutoProps<any>
  | CheckboxProps
  | DatePickerProps
  | MentionProps
  | RadioProps
  | RateProps
  | SliderSingleProps
  | SwitchProps
  | TimePickerProps
  | TreeSelectProps<K>
  | UploadProps
  | TextAreaProps
  | RangePickerProps;
export declare function getFieldId(
  namePath: InternalNamePath,
  formName?: string,
): string | undefined;
export declare function toArray<T>(candidate?: T | T[] | false): T[];
export declare const getItem: ({
  attr,
  type,
  inputNode,
}: {
  attr: any;
  type: any;
  inputNode: any;
}) => any;
export {};

export interface EditTableInstanceStoreType
  extends ProxyInstanceObjectStoreType {
  editingKeys: string[];
  newAddKeys: string[];
}
export declare class EditTableBaseInstance extends ProxyInstanceObject<EditTableInstanceStoreType> {
  /**=======================数据挂载==========================*/
  dataSource: any;
  initValue: any;
  rowKey: string;
  onSave?: (dataSource: any, rowData: any, record?: any, indx?: number) => void;
  onBeforeAdd?: () => boolean;
  multiple?: boolean;
  onBeforeEdit?: (rowData: any, index?: number) => boolean;
  onBeforeEditCancel?: (rowData: any, index?: number) => boolean;
  onBeforeDelete?: (rowData: any, index?: number) => boolean;
  onErr?: (err: ValidateErrorEntity<any>) => void;
  onBeforeSave?: (item: any, record: any, index?: number) => boolean;
  fields?: string[];
  onValuesChange: (
    list: any[],
    value: object,
    allValue: object,
    id: string | number,
    form: FormInstance,
  ) => void;
  /**=================================================*/
  /**所有表单实例*/
  formInstance: Map<string, FormInstance<any>>;
  /**记录编辑时行数据*/
  formInstanceMapValues: Map<string, object>;
  /**初始化状态值*/
  main_store: () => this;
  /**转换成字符串格式*/
  formateKeyToString: (key: string | number) => string;
  /** 移除 */
  remove: (name: string) => void;
  /** 注册 */
  register: (name: string, form: FormInstance<any>) => void;
  /** 获取所有的 from 保存值 */
  getStore: () => Map<string, FormInstance<any>>;
  /** 通过 key 获取 form 表单 */
  getToKeyForm: (key: string | number) => FormInstance<any>;
  /**重置表单数据*/
  restToKeyFormValue: (key: string | number, init?: any) => void;
  /**判断是否编辑中*/
  isEditing: (record: any) => boolean;
  /**判断是否新增中*/
  isAddEdit: (record: any) => boolean;
  /**移除操作的key*/
  removeOperateKey: (key: string | number) => void;
  /**添加一条数据*/
  onAddRow: () => void;
  /**删除一条数据*/
  onDeleteRow: (rowData: any, index?: number) => void;
  /**编辑一条数据*/
  onEditRow: (rowData: any, index?: number) => void;
  /**取消编辑*/
  onEditCancel: (rowData: any, index?: number) => void;
  /**保存行数据*/
  onSaveRow: (rowData: any, index?: number) => Promise<void>;
  /**行编辑数据更新事件*/
  onRowValuesChange: (
    id: string | number,
    form: FormInstance,
    value: object,
    allValue: object,
  ) => void;
}
export declare const useEditTableBaseInstance: (
  instance?: EditTableBaseInstance,
) => EditTableBaseInstance;
export declare const EditTableBaseInstanceContext: import('react').Context<EditTableBaseInstance>;
export declare const useEditTableBaseInstanceContext: () => [
  EditTableInstanceStoreType,
  (value: Partial<EditTableInstanceStoreType>, type?: 'ref' | 'none') => void,
  EditTableBaseInstance,
  any,
];

export type ColumnsBaseProps = ColumnType<any> & {
  /** 是否编辑  */
  editable?: boolean;
  /** 自定义 渲染编辑组件 */
  inputNode?: ((...arg: any[]) => React.ReactNode) | React.ReactNode;
  /** 规则 */
  rules?: Rule[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<FieldProps, 'rules' | 'label' | 'name'>;
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
  ) => React.ReactNode | RenderedCell<any>;
} & ItemChild<any, any>;
/**  Item 组件  渲染的单个内部FromItem组件  */
export interface EditableBaseCellItemProps
  extends Omit<FieldProps, 'label' | 'children'> {
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
        control: {
          [name: string]: any;
        },
        meta: Meta,
        form: FormInstance<any>,
        v?: {
          record: any;
        },
      ) => React.ReactNode);
}
export interface EditableTableBaseProps
  extends Omit<TableProps<any>, 'columns' | 'rowKey'> {
  /** 列 **/
  columns: ColumnsBaseProps[];
  /** 保存数据 */
  onSave: (
    data: any[],
    row: object,
    record?: object,
    indx?: number,
    type?: 'onEditCancel' | 'onSaveRow' | 'onDeleteRow' | 'onAddRow',
  ) => void;
  /** 保存数据之前校验 */
  onBeforeSave?: (item: object, record: object, index: number) => boolean;
  /**主键  */
  rowKey: string;
  /** 操作列是放在首位还是最后 */
  optIsFirst?: boolean;
  /** 是否需要操作列 */
  isOpt?: boolean;
  /** 操作配置 */
  optConfig?: ColumnsBaseProps;
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
  editInstance?: EditTableBaseInstance;
  /** 有一个处于编辑状态时 删除 是否禁用   */
  optDeleteEditingDisabled?: boolean;
  /**编辑一行之前的调用方法*/
  onBeforeEdit?: (rowData: any, index?: number) => boolean;
  /** 编辑一行取消之前的调用方法*/
  onBeforeEditCancel?: (rowData: any, index?: number) => boolean;
  /**删除一行之前的调用方法*/
  onBeforeDelete?: (rowData: any, index?: number) => boolean;
}
export interface AddBtnProps extends ButtonProps {}

export declare const EditableTableBase: {
  (props: EditableTableBaseProps): JSX.Element;
  useEditInstance: (
    instance?: import('./instance/instance').EditTableBaseInstance,
  ) => import('./instance/instance').EditTableBaseInstance;
  useEditInstanceContext: () => [
    import('./instance/instance').EditTableInstanceStoreType,
    (
      value: Partial<import('./instance/instance').EditTableInstanceStoreType>,
      type?: 'ref' | 'none',
    ) => void,
    import('./instance/instance').EditTableBaseInstance,
    any,
  ];
  Item: (props: import('./interface').EditableBaseCellItemProps) => JSX.Element;
};
export default EditableTableBase;
```
