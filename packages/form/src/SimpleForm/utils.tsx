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
  CheckboxProps,
  MentionProps,
  RadioProps,
  SwitchProps,
  TimePickerProps,
  UploadProps,
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FormListFieldData, FormListOperation } from 'antd/lib/form/FormList';
export interface WatchListProps {
  [s: string]: (value: any) => void;
}
export interface FormContextProps {
  firstMont?: boolean;
  watchList?: WatchListProps;
}

export const FormContext = React.createContext<FormContextProps>({});

export const useFormContext = () => React.useContext(FormContext);

export const useFormWatchList = (props: { [x: string]: any }) => {
  const contex = useFormContext();
  let fun: ((value: any) => void) | undefined;
  if (contex) {
    const { watchList } = contex;
    fun = watchList[(props || {}).id];
  }
  React.useEffect(() => {
    if ((contex || {}).firstMont) {
      if (typeof fun === 'function') {
        fun((props || {}).value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify((props || {}).value)]);
};

export const Warp = (props: { [x: string]: any }) => {
  const { children, ...rest } = props || {};
  useFormWatchList(props);
  if (typeof children === 'function') {
    return children({ ...rest });
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
      <Warp>{children}</Warp>;
    </Form.Item>
  );
};

/** 每一项渲染 */
export const itemRender = (
  config: SimpleFormConfigProps[],
  warpColProps: ColProps,
  itemStyle: React.CSSProperties,
  attrStyle: React.CSSProperties,
  attrProps: Partial<ItemChildAttr>,
  watchList: WatchListProps | undefined,
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
      colProps = {},
    } = item;
    const { style = {} } = itemAttr || {};
    const { style: inputStyle = {} } = attr || {};

    let renderItem = undefined;
    if (type === 'Input') {
      const inputAttr = attr as InputProps;
      const attrs = attrProps as InputProps;
      renderItem = (
        <Input
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'InputNumber') {
      const inputAttr = attr as InputNumberProps;
      const attrs = attrProps as InputNumberProps;
      renderItem = (
        <InputNumber
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'AutoComplete') {
      const inputAttr = attr as AutoCompleteProps;
      const attrs = attrProps as AutoCompleteProps;
      renderItem = (
        <AutoComplete
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'Cascader') {
      const inputAttr = attr as CascaderProps;
      const attrs = attrProps as CascaderProps;
      renderItem = (
        <Cascader
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'DatePicker') {
      const inputAttr = attr as DatePickerProps;
      const attrs = attrProps as DatePickerProps;
      renderItem = (
        <DatePicker
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'Rate') {
      const inputAttr = attr as RateProps;
      const attrs = attrProps as RateProps;
      renderItem = (
        <Rate
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'Slider') {
      const inputAttr = attr as SliderSingleProps;
      const attrs = attrProps as SliderSingleProps;
      renderItem = (
        <Slider
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'TreeSelect') {
      const inputAttr = attr as TreeSelectProps<any>;
      const attrs = attrProps as TreeSelectProps<any>;
      renderItem = (
        <TreeSelect
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'Select') {
      const inputAttr = attr as SelectProps<any>;
      const attrs = attrProps as SelectProps<any>;
      renderItem = (
        <Select
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'Checkbox') {
      const inputAttr = attr as CheckboxProps;
      const attrs = attrProps as CheckboxProps;
      renderItem = (
        <Checkbox
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'Mentions') {
      const inputAttr = attr as MentionProps;
      const attrs = attrProps as MentionProps;
      renderItem = (
        <Mentions
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'Radio') {
      const inputAttr = attr as RadioProps;
      const attrs = attrProps as RadioProps;
      renderItem = (
        <Radio
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'Switch') {
      const inputAttr = attr as SwitchProps;
      const attrs = attrProps as SwitchProps;
      renderItem = (
        <Switch
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'TimePicker') {
      const inputAttr = attr as TimePickerProps;
      const attrs = attrProps as TimePickerProps;
      renderItem = (
        <TimePicker
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'Upload') {
      const inputAttr = attr as UploadProps;
      const attrs = attrProps as UploadProps;
      renderItem = (
        <Upload
          {...attrs}
          {...inputAttr}
          style={{ ...attrStyle, ...inputStyle }}
        />
      );
    }
    if (type === 'Custom') {
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
        <Form.List key={index} {...itemAttr} name={listName}>
          {rend}
        </Form.List>
      );
    }
    if (watchList && Object.keys(watchList).length) {
      renderItem = <Warp>{renderItem}</Warp>;
    }
    return (
      <Col span={6} key={index} {...warpColProps} {...colProps}>
        <Form.Item
          {...itemAttr}
          name={name}
          label={label}
          rules={rules}
          style={{ marginBottom: 8, ...itemStyle, ...style }}
        >
          {renderItem}
        </Form.Item>
      </Col>
    );
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
      {...searchBtnItem}
      label=" "
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
              隐藏
            </React.Fragment>
          ) : (
            <React.Fragment>
              <DownOutlined />
              显示
            </React.Fragment>
          )}
        </a>
      )}
    </Form.Item>
  );
};
