---
title: start
order: 1
nav:
  order: 2
  title: SimpleForm
  path: /form
group:
  path: /
---

```bash
 npm i carefree-antd-form
```

> `SimpleForm`组件表单属性继承 `antd Form` 表单属性
>
> 1. `ItemWatch` 监听变化组件
> 2. `useFormWatchList` 监听变化 hooks
> 3. `useFormContext` 用于传递子组件 开启 监听需要的内容
> 4. `useFormItemFun` 子组件内部状态方法调用
> 5. 其他的与 antd from 一样
> 6. `useChildItemFun`和`getChildItemFun` 获取 form 内部更新单个字段值方法
> 7. `useFormItemHide`和`HideItem` 用于组件隐藏使用
> 8. `useSubscribe`、`FormSubscribeProvider` 、`useFormSubscribeProvider` 、`useSubscribeReginsterId` 用于收集 form 表单
> 9. `Cols`:Col 组件加默认样式， `ColItem`:封装 Cols 和 Form.Item 组件 加默认参数，`ColWatchItem`:ColItem 和 监听组件进行合并

## 基础表单

```tsx
import React from 'react';
import SimpleForm from 'carefree-antd-form';
import { Button, Form } from 'antd';
import 'antd/dist/antd.css';

export default () => {
  const [form] = SimpleForm.useForm();

  const onClick = () => {
    form.validateFields().then((value) => {
      console.log(value);
    });
  };

  return (
    <div>
      <Button onClick={onClick}>检查form表单提交移除的项是否可以获取值</Button>
      <SimpleForm
        form={form}
        name="tests"
        initialHide={{ name1: true }}
        watchList={{
          tests_namea: (value, allValue, forms, hide) => {
            const { updateValue } = hide;
            if (value === '12') {
              hide.updateValue('tests_name1', true);
            } else {
              hide.updateValue(['tests', 'name1'], false);
            }
            console.log('打印---》', value, allValue, hide, forms);
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '测试',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '请输入价格组名称' }],
          },
          {
            label: '测试',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '请输入价格组名称' }],
          },
          {
            label: '测试',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '请输入价格组名称' }],
          },
          {
            label: '测试',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '请输入价格组名称' }],
          },
          {
            label: '测试',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '请输入价格组名称' }],
          },
          {
            label: '测试1',
            name: 'name1',
            type: 'Input',
            rules: [{ required: true, message: '请输入价格组名称' }],
          },
          {
            label: '测试2',
            name: 'name2',
            type: 'Input',
            rules: [{ required: true, message: '请输入价格组名称' }],
          },
          {
            label: '测试3',
            name: 'name3',
            type: 'Input',
            rules: [{ required: true, message: '请输入价格组名称' }],
          },
          {
            label: '测试4',
            name: 'name4',
            type: 'Input',
            rules: [{ required: true, message: '请输入价格组名称' }],
          },
          {
            label: '测试5',
            // name: 'name5',
            type: 'Custom',
            // itemAttr:{ dependencies:["name5"]},
            render: (...arg) => {
              console.log(arg);
              return <div>----测试5</div>;
            },
          },
          {
            label: '测试6',
            name: 'name6',
            type: 'Custom',
            render: <div>----测试6</div>,
          },
        ]}
      />
    </div>
  );
};
```

## 查询表单

```tsx
import React from 'react';
import SimpleForm from 'carefree-antd-form';
import 'antd/dist/antd.css';

export default () => (
  <SimpleForm
    isSearch={true}
    displayPre={1}
    layout="vertical"
    config={[
      {
        label: '测试',
        name: 'namea',
        type: 'Input',
      },
      {
        label: '测试1',
        name: 'name1',
        type: 'Input',
      },
      {
        label: '测试2',
        name: 'name2',
        type: 'Input',
      },
      {
        label: '测试3',
        name: 'namea3',
        type: 'Input',
      },
      {
        label: '测试4',
        name: 'name4',
        type: 'Input',
      },
      {
        label: '测试5',
        name: 'name5',
        type: 'Input',
      },
    ]}
  />
);
```

## antd 使用表单

```tsx
import React from 'react';
import { Input, Col } from 'antd';
import SimpleForm from 'carefree-antd-form';
import 'antd/dist/antd.css';

export default () => {
  const [form] = SimpleForm.useForm();
  const [state, setState] = React.useState({});
  const { getFieldValue } = form;
  const { updateValue } = SimpleForm.useChildItemFun(form);
  console.log('state', state);
  return (
    <SimpleForm
      form={form}
      layout="vertical"
      isSearch={true}
      onValuesChange={(value, allValue) => {
        if ('names0' in value) {
          // 为了加一点间隔时间 防止值内部数据更新问题
          let timer;
          clearTimeout(timer);
          timer = setTimeout(() => {
            updateValue('names3', value.names0);
            clearTimeout(timer);
          }, 300);
        }
        console.log(value);
        setState({ ...allValue });
      }}
    >
      <SimpleForm.ColItem
        label="测试antd"
        name="names0"
        style={{ marginBottom: 5 }}
      >
        <Input />
      </SimpleForm.ColItem>
      <SimpleForm.ColItem
        label="测试3"
        name="names3"
        style={{ marginBottom: 5 }}
      >
        <Input />
      </SimpleForm.ColItem>
      {getFieldValue(`names${0}`) !== '12' && (
        <SimpleForm.ColItem
          label="测试4"
          name="names4"
          style={{ marginBottom: 5 }}
        >
          <Input />
        </SimpleForm.ColItem>
      )}
    </SimpleForm>
  );
};
```

## 参数

```ts
export type ItemChildType =
  | 'Custom'
  | 'Input'
  | 'InputNumber'
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
  | 'Upload';

export type ItemChildAttr<T = any, K = any> =
  | InputProps
  | InputNumberProps
  | SelectProps<T>
  | AutoCompleteProps
  | CascaderProps<any>
  | CheckboxProps
  | DatePickerProps
  | MentionProps
  | RadioProps
  | RateProps
  | SliderSingleProps
  | SwitchProps
  | TimePickerProps
  | TreeSelectProps<K>
  | UploadProps;

/** config 配置项  */
export interface SimpleFormConfigProps<T = any, K = any> {
  /** 类型 */
  type: ItemChildType;
  /** formItem 表单 label 值 */
  label?: string | React.ReactNode;
  /** formItem 表单 name 值 */
  name?: string | number | (string | number)[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<FormItemProps, 'rules' | 'label' | 'name'> & {
    /** 用于当前的Item项是否用于监听，(前提是watchList设置了) */ watch?: boolean;
  };
  /** formItem 表单 children 中组件参数*/
  attr?: Partial<ItemChildAttr<T, K>>;
  /** formItem 表单 规则*/
  rules?: Rule[];
  render?: React.ReactNode | ((...arg: any) => React.ReactNode);
  /** 是否使用 list */
  isItemList?: boolean;
  /** 每一项 Col配置 */
  colProps?: ColProps;
}

export interface SimpleFormProps<T = any, K = any> extends FormProps {
  config?: SimpleFormConfigProps<T, K>[];
  // 是否显示查询按钮和重置按钮
  isSearch?: boolean;
  /** 只显示前面部分查询条件 */
  displayPre?: number | undefined;
  /** 重置按钮条件 */
  onRest?: () => void;
  /** 查询按钮 formItem配置 */
  searchBtnItem?: FormItemProps;
  /** 查询按钮配置 */
  searchBtnProps?: ButtonProps;
  /** 重置按钮配置 */
  searchBtnRestProps?: ButtonProps;
  children?: React.ReactNode;

  /** Row 配置 */
  rowProps?: RowProps;
  /** 每一项 Col配置 */
  colProps?: ColProps;
  /** 每个 item 中公共 style 样式 */
  itemStyle?: React.CSSProperties;
  /** 每个 表单输入控件公共属性 样式 */
  attrStyle?: React.CSSProperties;
  /** 每个 表单输入控件公共属性 除样式其他属性 */
  attrProps?: Partial<ItemChildAttr>;
  // 监听字段
  watchList?: WatchListProps;
  /** Form.useFormItemHide 返回值  */
  formHide?: GetStoreProps;
  /** 初始值 隐藏显示 字段对应的值 */
  initialHide?: { [x: string]: boolean };
  // 用于多个form表单
  subscribe?: Subscribe;
}
```