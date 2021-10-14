import React, { useState } from 'react';
import {
  Form,
  FormProps,
  FormItemProps,
  ButtonProps,
  Row,
  RowProps,
  ColProps,
  Col,
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
import { Rule } from 'rc-field-form/lib/interface';
import {
  itemRender,
  SearchBtn,
  FormContext,
  WatchListProps,
  ItemWatch,
  useFormContext,
  useFormWatchList,
} from './utils';
import classnames from 'classnames';
import './index.css';

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
export type ItemChildAttr =
  | InputProps
  | InputNumberProps
  | SelectProps<any>
  | AutoCompleteProps
  | CascaderProps
  | CheckboxProps
  | DatePickerProps
  | MentionProps
  | RadioProps
  | RateProps
  | SliderSingleProps
  | SwitchProps
  | TimePickerProps
  | TreeSelectProps<any>
  | UploadProps;

export interface SimpleFormConfigProps {
  /** 类型 */
  type: ItemChildType;
  /** formItem 表单 label 值 */
  label?: string | React.ReactNode;
  /** formItem 表单 name 值 */
  name?: string | number | (string | number)[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<FormItemProps, 'rules' | 'label' | 'name'>;
  /** formItem 表单 children 中组件参数*/
  attr?: Partial<ItemChildAttr>;
  /** formItem 表单 规则*/
  rules?: Rule[];
  render?: React.ReactNode | ((...arg: any) => React.ReactNode);
  /** 是否使用 list */
  isItemList?: boolean;
  /** 每一项 Col配置 */
  colProps?: ColProps;
}

export interface SimpleFormProps extends FormProps {
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
  itemStyle?: React.CSSProperties;
  /** 每个 表单输入控件公共属性 样式 */
  attrStyle?: React.CSSProperties;
  /** 每个 表单输入控件公共属性 除样式其他属性 */
  attrProps?: Partial<ItemChildAttr>;
  // 监听字段
  watchList?: WatchListProps;
}

const SimpleForm = (props: SimpleFormProps) => {
  const {
    config = [],
    isSearch,
    displayPre,
    searchBtnItem = {},
    searchBtnProps = {},
    searchBtnRestProps = {},
    onRest = () => {},
    rowProps = {},
    colProps = {},
    children,
    className,
    itemStyle = {},
    attrStyle = {},
    attrProps = {},
    watchList,
    ...rest
  } = props;
  const [expand, setExpand] = useState(false);
  const [firstMont, setFirstMont] = useState(false);

  const getRender = () => {
    if (isSearch && displayPre) {
      if (!expand) {
        if (displayPre > config.length) {
          // 还差多少个
          const diff = displayPre - config.length;
          const childList = React.Children.toArray(children);
          if (diff > childList.length) {
            return (
              <React.Fragment>
                {itemRender(
                  config,
                  colProps,
                  itemStyle,
                  attrStyle,
                  attrProps,
                  watchList,
                )}
                {childList}
              </React.Fragment>
            );
          } else if (diff <= childList.length) {
            const diffChild = childList.slice(0, diff);
            return (
              <React.Fragment>
                {itemRender(
                  config,
                  colProps,
                  itemStyle,
                  attrStyle,
                  attrProps,
                  watchList,
                )}
                {diffChild}
              </React.Fragment>
            );
          }
          return itemRender(
            config,
            colProps,
            itemStyle,
            attrStyle,
            attrProps,
            watchList,
          );
        }
        const configPre = config.slice(0, displayPre);
        return itemRender(
          configPre,
          colProps,
          itemStyle,
          attrStyle,
          attrProps,
          watchList,
        );
      }
    }
    return (
      <React.Fragment>
        {itemRender(
          config,
          colProps,
          itemStyle,
          attrStyle,
          attrProps,
          watchList,
        )}
        {children}
      </React.Fragment>
    );
  };
  const clx = classnames('carefree-form', className);

  React.useEffect(() => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setFirstMont(true);
    }, 300);
  }, []);

  return (
    <FormContext.Provider value={{ firstMont, watchList: watchList || {} }}>
      <Form {...rest} className={clx}>
        <Row gutter={24} {...rowProps}>
          {getRender()}
          {isSearch && (
            <Col span={6} {...colProps}>
              <SearchBtn
                onRest={onRest}
                expand={expand}
                setExpand={setExpand}
                displayPre={displayPre}
                searchBtnItem={searchBtnItem}
                searchBtnProps={searchBtnProps}
                searchBtnRestProps={searchBtnRestProps}
                itemStyle={itemStyle}
              />
            </Col>
          )}
        </Row>
      </Form>
    </FormContext.Provider>
  );
};
SimpleForm.useForm = Form.useForm;
SimpleForm.Item = Form.Item;
SimpleForm.List = Form.List;
// 下面这几个都是监听字段变化的
SimpleForm.ItemWatch = ItemWatch;
SimpleForm.useFormContext = useFormContext;
SimpleForm.useFormWatchList = useFormWatchList;

export default SimpleForm;
