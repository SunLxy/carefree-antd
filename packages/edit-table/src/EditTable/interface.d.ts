import React from 'react';
import { TableProps, FormItemProps, TooltipProps } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { RenderedCell } from 'rc-table/lib/interface';
import { Rule, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { ItemChildAttr, ItemChildType } from './utils';
import Store from './Store';

export interface ColumnsProps extends ColumnType<any> {
  /**是否编辑  */
  editable?: boolean;
  /** 渲染编辑组件 */
  inputNode?: ((...arg: any[]) => React.ReactNode) | React.ReactNode;
  /** 规则 */
  rules?: Rule[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<FormItemProps, 'rules' | 'label' | 'name'>;
  /** formItem 表单 children 中组件参数*/
  attr?: Partial<ItemChildAttr<any, any>>;
  /**组件类型  */
  type?: ItemChildType;
  /** 错误提示  */
  tip?: (errs: string[]) => React.ReactNode;
  /** Tooltip 组件属性  */
  tipAttr?: TooltipProps;
  /** 自定义 渲染  ， other 参数 只有操作列才有 */
  render?: (
    value: any,
    record: any,
    index: number,
    other?: any,
  ) => React.ReactNode | RenderedCell<any>;
}

export interface EditableTableProps
  extends Omit<TableProps<any>, 'columns' | 'rowKey'> {
  columns: ColumnsProps[];
  /** 保存数据 */
  onSave: (data: any[], row: object, record?: object, indx?: number) => void;
  /** 保存数据之前校验 */
  onBeforeSave?: (item: object, record: object, index: number) => boolean;
  /**主键  */
  rowKey: string;
  /** 操作列是放在首位还是最后 */
  optIsFirst?: boolean;
  /** 操作配置 */
  optConfig?: ColumnsProps;
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
    list: any,
    /** 当前更新字段值 */
    value: object,
    /** 当前行编辑字段值 */
    allValue: object,
    /** 当前编辑主键值 */
    id: string | number,
  ) => void;
  /** 是否可以多行编辑 */
  multiple?: boolean;
}

export interface RefEditTableProps {
  /** 保存 */
  save: (key: string, record: object, indx: number) => void;
  /** 删除 */
  onDelete: (id: string | number, rowItem: object, index: number) => void;
  /** 编辑 */
  edit: (record: object) => void;
  /** 取消编辑 */
  cancel: (key: string | number) => void;
  /** 新增 */
  add: () => void;
  /** 是否编辑中 */
  isEditing: (record: any) => boolean;
  /** 编辑 id */
  editingKey: (string | number)[];
  /** 是否编辑 新增的数据 */
  newAdd: (string | number)[];
  /** 收集 所有 表单 */
  forms: Store;
}

export interface EditFormsProps {
  /** 状态保存 */
  formsRef: Store;
  onValuesChange: (
    /** 主键 */
    id: string | number,
    /** form  onValuesChange 中参数 value  */
    value: object,
    /** form  onValuesChange 中参数 allValue  */
    allValue: object,
  ) => void;
  dataSource: readonly any[];
  rowKey: string | number;
}
