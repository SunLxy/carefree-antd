import React from 'react';
import { FormProps } from 'rc-field-form';
import { HideGetStoreProps } from './Hide/interface';
import {
  InternalFormInstance,
  InternalNamePath,
  FormInstance,
} from 'rc-field-form/lib/interface';
import { Rule } from 'rc-field-form/lib/interface';
import { Subscribe } from './Collect';

export type ItemChildType = string | 'Custom';

/** config 配置项  */
export interface CarefreeFormConfigProps<M = ItemChildType, T = any, K = any> {
  /** 类型 */
  type: M;
  /** formItem 表单 label 值 */
  label?: string | React.ReactNode;
  /** formItem 表单 name 值 */
  name?: string | number | (string | number)[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<K, 'rules' | 'label' | 'name'>;
  /** formItem 表单 children 中组件参数*/
  attr?: Partial<T>;
  /** formItem 表单 规则*/
  rules?: Rule[];
  render?: React.ReactNode | ((...arg: any) => React.ReactNode);
  // 是否启用组件隐藏显示
  isHide?: boolean;
}

export interface CarefreeFormProps<M = ItemChildType, T = any, K = any>
  extends FormProps {
  config?: CarefreeFormConfigProps<M, T, K>[];
  children?: React.ReactNode;
  /** 监听字段 */
  watchList?: WatchListProps;
  /** Form.useFormItemHide 返回值  */
  formHide?: HideGetStoreProps;
  /** 初始值 隐藏显示 字段对应的值 */
  initialHide?: { [x: string]: boolean };
  // 用于多个form表单
  subscribe?: Subscribe;
  /** 表单项布局 **/
  layout?: 'vertical' | 'horizontal' | 'space';
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
    hideContext?: HideGetStoreProps,
    cx?: { forms: Subscribe['subForm']; hides: Subscribe['subHides'] },
  ) => void;
}
export interface ContextProps {
  /** 第一次加载 */
  firstMont?: boolean;
  /** 监听字段 */
  watchList?: WatchListProps;
  /** Form.useForm() */
  form?: FormInstance<any>;
  /**   Form.useForm() 与这个一致 */
  itemRefHook?: FormInstance<any>;
}
