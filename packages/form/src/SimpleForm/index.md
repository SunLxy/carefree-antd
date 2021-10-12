---
title: SimpleForm
order: 2
nav:
  order: 1
  title: SimpleForm
  path: /form
group:
  path: /
---
  
  `SimpleForm`组件表单属性继承 `antd Form` 表单属性

## 基础表单

```tsx
import React from 'react';
import SimpleForm from 'carefree-antd-form';
import 'antd/dist/antd.css';

export default () => <SimpleForm 
layout="vertical"
  config={[
    {
      label:"测试",
      name:"namea",
      type:"Input",
    },
    {
      label:"测试1",
      name:"name1",
      type:"Input",
    },
    {
      label:"测试2",
      name:"name2",
      type:"Input",
    },
    {
      label:"测试3",
      name:"name3",
      type:"Input",
    },
    {
      label:"测试4",
      name:"name4",
      type:"Input",
    },
    {
      label:"测试5",
      name:"name5",
      type:"Input",
    },
    
  ]}
/>;
```

## 查询表单

```tsx
import React from 'react';
import SimpleForm from 'carefree-antd-form';
import 'antd/dist/antd.css';

export default () => <SimpleForm 
  isSearch={true}
  displayPre={1}
  layout="vertical"
  config={[
    {
      label:"测试",
      name:"namea",
      type:"Input",
    },
    {
      label:"测试1",
      name:"name1",
      type:"Input",
    },
    {
      label:"测试2",
      name:"name2",
      type:"Input",
    },
    {
      label:"测试3",
      name:"namea3",
      type:"Input",
    },
    {
      label:"测试4",
      name:"name4",
      type:"Input",
    },
    {
      label:"测试5",
      name:"name5",
      type:"Input",
    },
  ]}
/>;
```

## antd 使用表单

```tsx
import React from 'react';
import { Input, Col } from "antd"
import SimpleForm from 'carefree-antd-form';
import 'antd/dist/antd.css';

export default () => <SimpleForm 
  layout="vertical"
  isSearch={true}
  displayPre={1}
   >
   <Col span={6}>
    <SimpleForm.Item label="测试antd" name="names"  style={{marginBottom:5}} >
        <Input  />
    </SimpleForm.Item>
   </Col>
   <Col span={6}>
   <SimpleForm.Item label="测试3" name="names3"  style={{marginBottom:5}} >
      <Input  />
  </SimpleForm.Item>
   </Col>
   <Col span={6}>
   <SimpleForm.Item label="测试4" name="names4" style={{marginBottom:5}} >
      <Input  />
  </SimpleForm.Item>
  </Col>
   
</SimpleForm>;
```

## 参数

```ts

type ItemChildType = "Custom" | "Input" | "InputNumber" | "Select" | "AutoComplete" | "Cascader" | "Checkbox" | "DatePicker" | "Mentions" | "Radio" | "Rate" | "Slider" | "Switch" | "TimePicker" | "TreeSelect" | "Upload"
type ItemChildAttr = InputProps | InputNumberProps | SelectProps<any> | AutoCompleteProps | CascaderProps | CheckboxProps | DatePickerProps | MentionProps | RadioProps | RateProps | SliderSingleProps | SwitchProps | TimePickerProps | TreeSelectProps<any> | UploadProps

interface SimpleFormConfigProps {
  /** 类型 */
  type: ItemChildType;
  /** formItem 表单 label 值 */
  label?: string | React.ReactNode;
  /** formItem 表单 name 值 */
  name?: string | number | (string | number)[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<FormItemProps, "rules" | "label" | "name">;
  /** formItem 表单 children 中组件参数*/
  attr?: Partial<ItemChildAttr>;
  /** formItem 表单 规则*/
  rules?: Rule[];
  render?: React.ReactNode | React.ReactElement | string | ((...arg: any) => React.ReactNode);
  /** 是否使用 list */
  isItemList?: boolean;
  /** 每一项 Col配置 */
  colProps?: ColProps;
}

interface SimpleFormProps extends FormProps {
  config?: SimpleFormConfigProps[];
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
  itemStyle?: React.CSSProperties

}


```
