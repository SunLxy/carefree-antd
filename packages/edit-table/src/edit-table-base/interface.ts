import { ButtonProps, TableProps, TooltipProps } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { FieldProps } from 'rc-field-form/lib/Field';
import { ListProps } from 'rc-field-form/lib/List';
import {
  FormInstance,
  Meta,
  Rule,
  ValidateErrorEntity,
} from 'rc-field-form/lib/interface';
import { RenderedCell } from 'rc-table/lib/interface';
import React from 'react';
import type { EditTableBaseInstance } from './instance/instance';
import { ItemChild } from './utils';

export type ColumnsBaseProps = ColumnType<any> & {
  /** 是否编辑  */
  editable?: boolean;
  /** 自定义 渲染编辑组件 */
  inputNode?: ((...arg: any[]) => React.ReactNode) | React.ReactNode;
  /** 规则 */
  rules?: Rule[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<FieldProps, 'rules' | 'label' | 'name'>;
  /** 错误提示  */
  tip?: (errs: string) => React.ReactNode;
  /** Tooltip 组件属性  */
  tipAttr?: TooltipProps;
  /** 是否是 List */
  isList?: boolean;
  /** list 组件参数 */
  listAttr?: Omit<ListProps, 'children' | 'name'>;
  /** 自定义 渲染(列原始默认的自定义渲染,加了个 other 参数，不是编辑状态下的表格渲染)  ， other 参数 只有操作列才有 */
  render?: (
    value: any,
    record: any,
    index: number,
  ) => React.ReactNode | RenderedCell<any>;
} & ItemChild<any, any>;

/**  Item 组件  渲染的单个内部FromItem组件  */
export interface EditableBaseCellItemProps
  extends Omit<FieldProps, 'label' | 'children'> {
  /** 当前行数据存储父级的name list时不用传 */
  preName?: string;
  /** 当前行的所有数据 */
  itemValue?: any;
  /** Tooltip 组件属性  */
  tipAttr?: TooltipProps;
  /** 错误提示  */
  tip?: (errs: string) => React.ReactNode;
  /** 进行覆写 方法时 新增一个 行参数 v */
  children?:
    | React.ReactElement
    | ((
        control: { [name: string]: any },
        meta: Meta,
        form: FormInstance<any>,
        v?: { record: any },
      ) => React.ReactNode);
}

export interface EditableTableBaseProps
  extends Omit<TableProps<any>, 'columns' | 'rowKey'> {
  /** 列 **/
  columns: ColumnsBaseProps[];
  /** 保存数据 */
  onSave: (
    data: any[],
    row: object,
    record?: object,
    indx?: number,
    type?: 'onEditCancel' | 'onSaveRow' | 'onDeleteRow' | 'onAddRow',
  ) => void;
  /** 保存数据之前校验 */
  onBeforeSave?: (item: object, record: object, index: number) => boolean;
  /**主键  */
  rowKey: string;
  /** 操作列是放在首位还是最后 */
  optIsFirst?: boolean;
  /** 是否需要操作列 */
  isOpt?: boolean;
  /** 操作配置 */
  optConfig?: ColumnsBaseProps;
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
    list: any[],
    /** 当前更新字段值 */
    value: object,
    /** 当前行编辑字段值 */
    allValue: object,
    /** 当前编辑主键值 */
    id: string | number,
    /**  当前行的 form  */
    form: FormInstance,
  ) => void;
  /** 是否可以多行编辑 */
  multiple?: boolean;
  /** 新增按钮配置 */
  addBtnProps?: AddBtnProps;
  /** form 表单状态处理 */
  editInstance?: EditTableBaseInstance;
  /** 有一个处于编辑状态时 删除 是否禁用   */
  optDeleteEditingDisabled?: boolean;
  /**编辑一行之前的调用方法*/
  onBeforeEdit?: (rowData: any, index?: number) => boolean; //
  /** 编辑一行取消之前的调用方法*/
  onBeforeEditCancel?: (rowData: any, index?: number) => boolean; //
  /**删除一行之前的调用方法*/
  onBeforeDelete?: (rowData: any, index?: number) => boolean; //
}

//  新增按钮配置
export interface AddBtnProps extends ButtonProps {}
