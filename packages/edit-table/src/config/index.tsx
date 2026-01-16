import {
  AutoComplete,
  AutoCompleteProps,
  Cascader,
  CascaderProps,
  Checkbox,
  CheckboxProps,
  DatePicker,
  DatePickerProps,
  Input,
  InputNumber,
  InputNumberProps,
  InputProps,
  Mentions,
  MentionsProps,
  Radio,
  RadioGroupProps,
  RadioProps,
  Rate,
  RateProps,
  Select,
  SelectProps,
  Slider,
  SliderSingleProps,
  Switch,
  SwitchProps,
  TableColumnType,
  TimePicker,
  TimePickerProps,
  TreeSelect,
  TreeSelectProps,
  Upload,
  UploadProps,
} from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox/Group';
import { RangePickerProps } from 'antd/es/date-picker/index';

export interface ConfigBaseType {
  input: InputProps;
  inputNumber: InputNumberProps;
  autoComplete: AutoCompleteProps;
  cascader: CascaderProps;
  checkbox: CheckboxProps;
  checkboxGroup: CheckboxGroupProps;
  datePicker: DatePickerProps;
  rangePicker: RangePickerProps;
  mentions: MentionsProps;
  radio: RadioProps;
  radioGroup: RadioGroupProps;
  rate: RateProps;
  select: SelectProps;
  slider: SliderSingleProps;
  switch: SwitchProps;
  timePicker: TimePickerProps;
  treeSelect: TreeSelectProps;
  upload: UploadProps;
}

export type TableConfigColumnType =
  | {
      [T in keyof ConfigBaseType]: {
        type: T;
        valuePropName?: string;
        attrs?: ConfigBaseType[T];
        useAttrs?: (
          value: any,
          rowData: any,
          index: number,
        ) => ConfigBaseType[T];
        inputRender?: (
          value: any,
          rowData: any,
          index: number,
        ) => React.ReactNode;
      } & TableColumnType;
    }[keyof ConfigBaseType]
  | ({
      type: 'custom';
      attrs?: any;
      valuePropName?: string;
      useAttrs?: (value: any, rowData: any, index: number) => any;
      inputRender: (value: any, rowData: any, index: number) => React.ReactNode;
    } & TableColumnType);

export type ConfigType = {
  [key in keyof ConfigBaseType]: {
    Component: React.FC<any>;
    attrs: ConfigBaseType[key];
  };
};

const config: ConfigType = {
  input: {
    Component: Input,
    attrs: { placeholder: '请输入', allowClear: true } as InputProps,
  },
  inputNumber: {
    Component: InputNumber,
    attrs: { placeholder: '请输入' } as InputNumberProps,
  },
  autoComplete: {
    Component: AutoComplete,
    attrs: { placeholder: '请选择' } as AutoCompleteProps,
  },
  cascader: {
    Component: Cascader,
    attrs: { placeholder: '请选择' } as CascaderProps,
  },
  checkbox: {
    Component: Checkbox,
    attrs: { placeholder: '请选择' } as CheckboxProps,
  },
  checkboxGroup: {
    Component: Checkbox.Group,
    attrs: { placeholder: '请选择' } as CheckboxGroupProps,
  },
  datePicker: {
    Component: DatePicker,
    attrs: { placeholder: '请选择' } as DatePickerProps,
  },
  rangePicker: {
    Component: DatePicker.RangePicker,
    attrs: {
      placeholder: ['请选择开始时间', '请选择结束时间'],
    } as RangePickerProps,
  },
  mentions: {
    Component: Mentions,
    attrs: { placeholder: '请输入' } as MentionsProps,
  },
  radio: {
    Component: Radio,
    attrs: { placeholder: '请选择' } as RadioProps,
  },
  radioGroup: {
    Component: Radio.Group,
    attrs: { placeholder: '请选择' } as RadioGroupProps,
  },
  rate: {
    Component: Rate,
    attrs: { placeholder: '请选择' } as RateProps,
  },
  select: {
    Component: Select,
    attrs: { placeholder: '请选择' } as SelectProps,
  },
  slider: {
    Component: Slider,
    attrs: { placeholder: '请选择' } as SliderSingleProps,
  },
  switch: {
    Component: Switch,
    attrs: { placeholder: '请选择' } as SwitchProps,
  },
  timePicker: {
    Component: TimePicker,
    attrs: { placeholder: '请选择' } as TimePickerProps,
  },
  treeSelect: {
    Component: TreeSelect,
    attrs: { placeholder: '请选择' } as TreeSelectProps,
  },
  upload: {
    Component: Upload,
    attrs: { placeholder: '请上传' } as UploadProps,
  },
};
export default config;
