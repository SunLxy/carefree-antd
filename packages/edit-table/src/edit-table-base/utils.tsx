import {
  AutoComplete,
  AutoCompleteProps,
  Cascader,
  CascaderAutoProps,
  Checkbox,
  CheckboxProps,
  DatePicker,
  DatePickerProps,
  Input,
  InputNumber,
  InputNumberProps,
  InputProps,
  MentionProps,
  Mentions,
  Radio,
  RadioProps,
  Rate,
  RateProps,
  Select,
  SelectProps,
  Slider,
  SliderSingleProps,
  Switch,
  SwitchProps,
  TimePicker,
  TimePickerProps,
  TreeSelect,
  TreeSelectProps,
  Upload,
  UploadProps,
} from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox/Group';
import { RangePickerProps } from 'antd/lib/date-picker/index';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { InternalNamePath } from 'rc-field-form/lib/interface';
import React from 'react';

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

const { RangePicker } = DatePicker;

export function getFieldId(
  namePath: InternalNamePath,
  formName?: string,
): string | undefined {
  if (!namePath.length) {
    return undefined;
  }
  const mergedId = namePath.join('_');
  return formName ? `${formName}_${mergedId}` : mergedId;
}

export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) {
    return [];
  }
  return Array.isArray(candidate) ? candidate : [candidate];
}

export const getItem = ({ attr, type, inputNode }) => {
  let renderItem = undefined;
  if (type === 'Input') {
    const inputAttr = attr as InputProps;
    renderItem = <Input {...inputAttr} />;
  } else if (type === 'TextArea') {
    const inputAttr = attr as TextAreaProps;
    renderItem = <Input.TextArea {...inputAttr} />;
  } else if (type === 'InputNumber') {
    const inputAttr = attr as InputNumberProps;
    renderItem = <InputNumber {...inputAttr} />;
  } else if (type === 'AutoComplete') {
    const inputAttr = attr as AutoCompleteProps;
    renderItem = <AutoComplete {...inputAttr} />;
  } else if (type === 'Cascader') {
    const inputAttr = attr as CascaderAutoProps<any>;
    renderItem = <Cascader {...inputAttr} />;
  } else if (type === 'DatePicker') {
    const inputAttr = attr as DatePickerProps;
    renderItem = <DatePicker {...inputAttr} />;
  } else if (type === 'Rate') {
    const inputAttr = attr as RateProps;
    renderItem = <Rate {...inputAttr} />;
  } else if (type === 'Slider') {
    const inputAttr = attr as SliderSingleProps;
    renderItem = <Slider {...inputAttr} />;
  } else if (type === 'TreeSelect') {
    const inputAttr = attr as TreeSelectProps<any>;
    renderItem = <TreeSelect {...inputAttr} />;
  } else if (type === 'Select') {
    const inputAttr = attr as SelectProps<any>;
    renderItem = <Select {...inputAttr} />;
  } else if (type === 'Checkbox') {
    const inputAttr = attr as CheckboxGroupProps;
    renderItem = <Checkbox.Group {...inputAttr} />;
  } else if (type === 'Mentions') {
    const inputAttr = attr as MentionProps;
    renderItem = <Mentions {...inputAttr} />;
  } else if (type === 'Radio') {
    const inputAttr = attr as RadioProps;
    renderItem = <Radio.Group {...inputAttr} />;
  } else if (type === 'Switch') {
    const inputAttr = attr as SwitchProps;
    renderItem = <Switch {...inputAttr} />;
  } else if (type === 'TimePicker') {
    const inputAttr = attr as TimePickerProps;
    renderItem = <TimePicker {...inputAttr} />;
  } else if (type === 'Upload') {
    const inputAttr = attr as UploadProps;
    renderItem = <Upload {...inputAttr} />;
  } else if (type === 'RangePicker') {
    const inputAttr = attr as RangePickerProps;
    renderItem = <RangePicker {...inputAttr} />;
  } else if (type === 'Custom') {
    renderItem = inputNode;
  }
  return renderItem;
};
