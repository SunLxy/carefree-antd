import React from 'react';
import {
  Form,
  Input,
  InputNumber,
  AutoComplete,
  Cascader,
  DatePicker,
  Rate,
  Slider,
  TreeSelect,
  Select,
  Checkbox,
  Mentions,
  Radio,
  Switch,
  TimePicker,
  Upload,
  Col,
} from 'antd';
import { SimpleFormConfigProps, ItemChildAttr } from '.';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { CheckboxGroupProps } from 'antd/lib/checkbox/Group';
import { RangePickerProps } from 'antd/lib/date-picker/index';

import {
  FormItemProps,
  ButtonProps,
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
  MentionProps,
  RadioProps,
  SwitchProps,
  TimePickerProps,
  UploadProps,
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FormListFieldData, FormListOperation } from 'antd/lib/form/FormList';
import { useFormWatchList } from './Watch';
import { WatchListProps } from './interface';
import FormColItem, { FormItemsProps } from './FormItem';
import Hide from './Hide';
const { RangePicker } = DatePicker;

const getPathName = (name, formName) => {
  if (Array.isArray(name)) {
    return (formName && [formName].concat(name).join('_')) || name.join('_');
  }
  return (formName && `${formName}_${name}`) || name;
};

export const Warp = (props: { [x: string]: any }) => {
  const { children, ...rest } = props || {};
  const [childProps] = useFormWatchList(props);
  if (typeof children === 'function') {
    return children({ ...rest, childProps });
  }
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ...rest });
  }
  return children;
};
// 监听子组件
export const ItemWatch = (props: FormItemProps) => {
  const { children, ...rest } = props;
  return (
    <Form.Item {...rest}>
      <Warp>{children}</Warp>
    </Form.Item>
  );
};

export const FormColWatchItem = (props: FormItemsProps) => {
  const { children, ...rest } = props;
  return (
    <FormColItem {...rest}>
      <Warp>{children}</Warp>
    </FormColItem>
  );
};

/** 每一项渲染 */
export const itemRender = (
  config: SimpleFormConfigProps[],
  {
    colProps: warpColProps = {},
    itemStyle = {},
    attrStyle = {},
    attrProps = {},
    watchList,
    name: formName,
  }: {
    /** 每一项 Col配置 */
    colProps: ColProps;
    /** 每个 item 中公共 style 样式 */
    itemStyle: React.CSSProperties;
    /** 每个 表单输入控件公共属性 样式 */
    attrStyle: React.CSSProperties;
    /** 每个 表单输入控件公共属性 除样式其他属性 */
    attrProps: Partial<ItemChildAttr>;
    watchList: WatchListProps;
    name: string;
  },
) => {
  return config.map((item, index) => {
    const {
      type,
      label,
      name,
      itemAttr,
      attr,
      rules,
      render,
      isItemList,
      isHide,
      colProps = {},
    } = item;
    const { style = {}, watch = true, ...itemOther } = itemAttr || {};
    const { style: inputStyle = {} } = attr || {};
    let renderItem = undefined;
    if (type === 'Input') {
      const inputAttr = attr as InputProps;
      const attrs = attrProps as InputProps;
      renderItem = (
        <Input
          placeholder={`请输入${label}`}
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'TextArea') {
      const inputAttr = attr as TextAreaProps;
      const attrs = attrProps as TextAreaProps;
      renderItem = (
        <Input.TextArea
          placeholder={`请输入${label}`}
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'InputNumber') {
      const inputAttr = attr as InputNumberProps;
      const attrs = attrProps as InputNumberProps;
      renderItem = (
        <InputNumber
          placeholder={`请输入${label}`}
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'AutoComplete') {
      const inputAttr = attr as AutoCompleteProps;
      const attrs = attrProps as AutoCompleteProps;
      renderItem = (
        <AutoComplete
          placeholder={`请选择${label}`}
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'Cascader') {
      const inputAttr = attr as CascaderProps;
      const attrs = attrProps as CascaderProps;
      renderItem = (
        <Cascader
          placeholder={`请选择${label}`}
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'DatePicker') {
      const inputAttr = attr as DatePickerProps;
      const attrs = attrProps as DatePickerProps;
      renderItem = (
        <DatePicker
          placeholder={`请选择${label}`}
          {...attrs}
          {...inputAttr}
          style={{ width: '100%', ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'Rate') {
      const inputAttr = attr as RateProps;
      const attrs = attrProps as RateProps;
      renderItem = (
        <Rate
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'Slider') {
      const inputAttr = attr as SliderSingleProps;
      const attrs = attrProps as SliderSingleProps;
      renderItem = (
        <Slider
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'TreeSelect') {
      const inputAttr = attr as TreeSelectProps<any>;
      const attrs = attrProps as TreeSelectProps<any>;
      renderItem = (
        <TreeSelect
          placeholder={`请选择${label}`}
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'Select') {
      const inputAttr = attr as SelectProps<any>;
      const attrs = attrProps as SelectProps<any>;
      renderItem = (
        <Select
          placeholder={`请选择${label}`}
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'Checkbox') {
      const inputAttr = attr as CheckboxGroupProps;
      const attrs = attrProps as CheckboxGroupProps;
      renderItem = (
        <Checkbox.Group
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'Mentions') {
      const inputAttr = attr as MentionProps;
      const attrs = attrProps as MentionProps;
      renderItem = (
        <Mentions
          placeholder={`请输入${label}`}
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'Radio') {
      const inputAttr = attr as RadioProps;
      const attrs = attrProps as RadioProps;
      renderItem = (
        <Radio.Group
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'Switch') {
      const inputAttr = attr as SwitchProps;
      const attrs = attrProps as SwitchProps;
      renderItem = (
        <Switch
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'TimePicker') {
      const inputAttr = attr as TimePickerProps;
      const attrs = attrProps as TimePickerProps;
      renderItem = (
        <TimePicker
          placeholder={`请选择${label}`}
          {...attrs}
          {...inputAttr}
          style={{ width: '100%', ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'Upload') {
      const inputAttr = attr as UploadProps;
      const attrs = attrProps as UploadProps;
      renderItem = (
        <Upload
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'RangePicker') {
      const inputAttr = attr as RangePickerProps;
      const attrs = attrProps as RangePickerProps;
      renderItem = (
        <RangePicker
          {...attrs}
          {...inputAttr}
          style={{ width: '100%', ...attrStyle, ...inputStyle }}
        />
      );
    } else if (type === 'Custom') {
      renderItem = render;
    }
    if (isItemList) {
      const rend = renderItem as ((
        fields: FormListFieldData[],
        operation: FormListOperation,
        meta: { errors: React.ReactNode[] },
      ) => React.ReactNode) &
        React.ReactNode;
      const listName = name as string | number | (string | number)[];
      return (
        <Col
          span={6}
          key={index}
          {...(warpColProps || {})}
          {...(colProps || {})}
          style={{
            float: 'left',
            width: '100%',
            ...((warpColProps || {}).style || {}),
            ...((colProps || {}).style || {}),
          }}
        >
          <Form.List key={index} {...itemAttr} name={listName}>
            {rend}
          </Form.List>
        </Col>
      );
    }
    // 这种方式 (不建议使用) 可以结合 Form.Provider 中 onFormChange/(Form中onFieldsChange) 和 SimpleForm 的 getChildItemFun 方法一起使用 获取updateData 方法进行数据联动更新
    if (
      watchList &&
      Object.keys(watchList).length &&
      watch &&
      watchList[getPathName(name, formName)]
    ) {
      renderItem = <Warp key={index}>{renderItem}</Warp>;
    }
    renderItem = (
      <Col
        span={6}
        key={index}
        {...(warpColProps || {})}
        {...(colProps || {})}
        style={{
          float: 'left',
          width: '100%',
          ...((warpColProps || {}).style || {}),
          ...((colProps || {}).style || {}),
        }}
      >
        <Form.Item
          {...itemOther}
          name={name}
          label={label}
          rules={rules}
          style={{ marginBottom: 8, ...itemStyle, ...style }}
        >
          {renderItem}
        </Form.Item>
      </Col>
    );
    if (isHide && name) {
      return (
        <Hide key={index} name={name} formName={formName}>
          {renderItem}
        </Hide>
      );
    }
    return renderItem;
  });
};

export interface SearchBtnProps {
  onRest: () => void;
  expand: boolean;
  setExpand: (fig: boolean) => void;
  displayPre: number | undefined;
  searchBtnItem: FormItemProps;
  /** 查询按钮配置 */
  searchBtnProps?: ButtonProps;
  /** 重置按钮配置 */
  searchBtnRestProps?: ButtonProps;
  /** 公共的 item style */
  itemStyle?: React.CSSProperties;
}

/** 查询 重置 按钮 */
export const SearchBtn: React.FC<SearchBtnProps> = (props) => {
  const {
    onRest,
    setExpand,
    expand,
    displayPre,
    searchBtnItem = {},
    searchBtnProps = {},
    searchBtnRestProps = {},
    itemStyle = {},
  } = props;
  const { style = {} } = searchBtnItem || {};
  return (
    <Form.Item
      label=" "
      {...searchBtnItem}
      style={{ marginBottom: 8, ...itemStyle, ...style }}
    >
      <Button type="primary" htmlType="submit" {...searchBtnProps}>
        查询
      </Button>
      <Button
        style={{ margin: '0 8px' }}
        onClick={onRest}
        {...searchBtnRestProps}
      >
        重置
      </Button>
      {!!displayPre && (
        <a style={{ fontSize: 12 }} onClick={() => setExpand(!expand)}>
          {expand ? (
            <React.Fragment>
              <UpOutlined />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <DownOutlined />
            </React.Fragment>
          )}
        </a>
      )}
    </Form.Item>
  );
};
