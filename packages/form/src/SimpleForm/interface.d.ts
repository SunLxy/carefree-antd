import React from 'react';
import {
  FormProps,
  FormItemProps,
  ButtonProps,
  RowProps,
  ColProps,
  InputProps,
  AutoCompleteProps,
  CascaderProps,
  DatePickerProps,
  RateProps,
  SliderSingleProps,
  TreeSelectProps,
  InputNumberProps,
  SelectProps,
  CheckboxProps,
  MentionProps,
  RadioProps,
  SwitchProps,
  TimePickerProps,
  UploadProps,
} from 'antd';
import { GetStoreProps } from './Hide/interface';
import { RangePickerProps } from 'antd/lib/date-picker/index';

import { TextAreaProps } from 'antd/lib/input/TextArea';
import { Rule } from 'rc-field-form/lib/interface';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import {
  InternalFormInstance,
  InternalNamePath,
} from 'rc-field-form/lib/interface';

import { Subscribe } from './Collect';

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
  | UploadProps
  | TextAreaProps
  | RangePickerProps;

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
  // 是否启用组件隐藏显示
  isHide?: boolean;
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
  /** 监听字段 */
  watchList?: WatchListProps;
  /** Form.useFormItemHide 返回值  */
  formHide?: GetStoreProps;
  /** 初始值 隐藏显示 字段对应的值 */
  initialHide?: { [x: string]: boolean };
  // 用于多个form表单
  subscribe?: Subscribe;
  /** 是否加 float 布局 */
  isFloat?: boolean;
  /** isFloat=true 时 是否设置每项默认高度  */
  isSetHeight?: boolean;
}

/** 外层嵌套的context的值 */
export interface FormContextProps {
  /** 第一次加载 */
  firstMont?: boolean;
  /** 监听字段 */
  watchList?: WatchListProps;
  /** Form.useForm() */
  form?: FormInstance<any>;
  /**   Form.useForm() 与这个一致 */
  itemRefHook?: FormInstance<any>;
}

export type ChildPropsType = (InternalFormInstance | {}) & {
  /** 更新字段值   */
  updateValue: (namePath: InternalNamePath, value: any) => void;
};
export interface WatchListProps {
  /** 字段对应的 监听方法 */
  [s: string]: (
    value: any,
    formValue?: any,
    child?: ChildPropsType,
    hideContext?: GetStoreProps,
    cx?: { forms: Subscribe['subForm']; hides: Subscribe['subHides'] },
  ) => void;
}
