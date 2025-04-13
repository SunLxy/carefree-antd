import {
  ProxyInstanceObject,
  ProxyInstanceObjectStoreType,
  useSnapshot,
} from '@carefrees/valtio';
import { message } from 'antd';
import { FormInstance, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { createContext, useContext, useRef } from 'react';

export interface EditTableInstanceStoreType
  extends ProxyInstanceObjectStoreType {
  editingKeys: string[];
  newAddKeys: string[];
}

export class EditTableBaseInstance extends ProxyInstanceObject<EditTableInstanceStoreType> {
  /**=======================数据挂载==========================*/
  dataSource: any = []; // 表格数据
  initValue: any = {}; // 添加一行初始值
  rowKey: string = ''; // 表格行key
  onSave?: (dataSource: any, rowData: any, record?: any, indx?: number) => void; // 存储数据
  onBeforeAdd?: () => boolean; // 添加一行之前的调用方法
  multiple?: boolean; // 是否支持多行编辑
  onBeforeEdit?: (rowData: any, index?: number) => boolean; // 编辑一行之前的调用方法
  onBeforeEditCancel?: (rowData: any, index?: number) => boolean; // 编辑一行取消之前的调用方法
  onBeforeDelete?: (rowData: any, index?: number) => boolean; // 删除一行之前的调用方法
  onErr?: (err: ValidateErrorEntity<any>) => void; // 行报错信息
  onBeforeSave?: (item: any, record: any, index?: number) => boolean; // 保存数据之前校验
  fields?: string[]; // 可编辑字段
  onValuesChange: (
    list: any[],
    value: object,
    allValue: object,
    id: string | number,
    form: FormInstance,
  ) => void; // 行数据更新
  // onSave: (data: any[], row: object, record?: object, indx?: number) => void;

  /**=================================================*/

  /**所有表单实例*/
  public formInstance = new Map<string, FormInstance<any>>([]);
  /**记录编辑时行数据*/
  public formInstanceMapValues = new Map<string, object>([]);
  /**初始化状态值*/
  main_store = () => {
    const newStore = {
      ...this.defaultInital,
      editingKeys: this._createRef([]),
      newAddKeys: this._createRef([]),
    };
    this._ctor(newStore);
    return this;
  };

  /**转换成字符串格式*/
  formateKeyToString = (key: string | number) => {
    return `${key}`;
  };

  /** 移除 */
  remove = (name: string) => {
    this.formInstance.delete(this.formateKeyToString(name));
  };

  /** 注册 */
  register = (name: string, form: FormInstance<any>) => {
    this.formInstance.set(this.formateKeyToString(name), form);
  };
  /** 获取所有的 from 保存值 */
  getStore = () => this.formInstance;

  /** 通过 key 获取 form 表单 */
  getToKeyForm = (key: string | number) => {
    return this.formInstance.get(this.formateKeyToString(key));
  };

  /**重置表单数据*/
  restToKeyFormValue = (key: string | number, init: any = {}) => {
    const form = this.getToKeyForm(key);
    if (form) {
      form.setFieldsValue(init);
    }
  };

  /**判断是否编辑中*/
  isEditing = (record: any) => {
    const { editingKeys = [] } = this.store;
    if (record) return editingKeys.includes(`${record[this.rowKey]}`);
    return undefined;
  };

  /**判断是否新增中*/
  isAddEdit = (record: any) => {
    const { newAddKeys = [] } = this.store;
    if (record) return newAddKeys.includes(`${record[this.rowKey]}`);
    return undefined;
  };

  /**移除操作的key*/
  removeOperateKey = (key: string | number) => {
    const { editingKeys = [], newAddKeys = [] } = this.store;
    const newEditingKeys = editingKeys.filter((k) => `${k}` !== `${key}`);
    const newNewAddKeys = newAddKeys.filter((k) => `${k}` !== `${key}`);
    this.formInstanceMapValues.delete(`${key}`);
    this._setRefStore({
      editingKeys: newEditingKeys,
      newAddKeys: newNewAddKeys,
    });
  };

  /**添加一条数据*/
  onAddRow = () => {
    const { editingKeys = [], newAddKeys = [] } = this.store;
    // 新增之前的调用方法
    if (typeof this.onBeforeAdd === 'function' && !this.onBeforeAdd()) {
      return;
    }
    if (newAddKeys.length === 1 && !this.multiple) {
      message.warning('只能新增一行');
      return;
    }
    if (editingKeys.length === 1 && !this.multiple) {
      message.warning('只能编辑一行');
      return;
    }
    const id = (new Date().getTime() * Math.round(10)).toString();
    const newItem = { ...(this.initValue || {}), [this.rowKey]: id };
    const list = [...(this.dataSource || [])].concat([newItem]);
    this._setRefStore({
      editingKeys: [...editingKeys].concat([id]),
      newAddKeys: [...newAddKeys].concat([id]),
    });
    this.onSave && this.onSave(list, newItem);
  };

  /**删除一条数据*/
  onDeleteRow = (rowData: any, index?: number) => {
    let isDelete = true;
    if (typeof this.onBeforeDelete === 'function') {
      isDelete = this.onBeforeDelete(rowData, index);
    }
    if (isDelete) {
      const key = this.formateKeyToString(rowData[this.rowKey]);
      const list = [...(this.dataSource || [])].filter(
        (item) => `${item[this.rowKey]}` !== key,
      );
      this.removeOperateKey(key);
      this.onSave && this.onSave(list, rowData, rowData, index);
    }
  };

  /**编辑一条数据*/
  onEditRow = (rowData: any, index?: number) => {
    let isEdit = true;
    if (typeof this.onBeforeEdit === 'function') {
      isEdit = this.onBeforeEdit(rowData, index);
    }
    if (isEdit) {
      const editItem = { ...rowData };
      const { editingKeys = [] } = this.store;
      const key = this.formateKeyToString(rowData[this.rowKey]);
      this.formInstanceMapValues.set(key, { ...rowData });
      this._setRefStore({ editingKeys: [...editingKeys].concat([key]) });
      this.restToKeyFormValue(key, editItem);
    }
  };

  /**取消编辑*/
  onEditCancel = (rowData: any, index?: number) => {
    let isCancel = true;
    if (typeof this.onBeforeEditCancel === 'function') {
      isCancel = this.onBeforeEditCancel(rowData, index);
    }
    if (isCancel) {
      const key = this.formateKeyToString(rowData[this.rowKey]);
      const oldRowData = this.formInstanceMapValues.get(key);
      const newListData = [...(this.dataSource || [])];
      const fix = newListData.findIndex(
        (item) => key === `${item[this.rowKey]}`,
      );
      if (fix > -1) {
        const item = newListData[index];
        newListData.splice(fix, 1, { ...(oldRowData || item) });
      } else {
        newListData.push(oldRowData);
      }
      this.onSave && this.onSave(newListData, rowData, oldRowData, index);
      this.removeOperateKey(key);
      this.restToKeyFormValue(key, oldRowData);
    }
  };

  /**保存行数据*/
  onSaveRow = async (rowData: any, index?: number) => {
    try {
      const key = this.formateKeyToString(rowData[this.rowKey]);
      const form = this.getToKeyForm(key);
      if (form) {
        const newRowData = await form.validateFields();
        let isSave = true;
        if (typeof this.onBeforeSave === 'function') {
          isSave = this.onBeforeSave(newRowData, rowData, index);
        }
        if (!isSave) {
          return;
        }
        const newData = [...(this.dataSource || [])];
        const fix = newData.findIndex((item) => key === `${item[this.rowKey]}`);
        if (fix > -1) {
          const item = newData[index];
          newData.splice(fix, 1, { ...item, ...newRowData });
        } else {
          newData.push(newRowData);
        }
        this.onSave && this.onSave(newData, newRowData, rowData, index);
        this.removeOperateKey(key);
        form.resetFields(this.fields || []);
      } else {
        message.warning('未获取到当前 form 实例');
      }
    } catch (errInfo) {
      this.onErr && this.onErr(errInfo);
    }
  };

  /**行编辑数据更新事件*/
  onRowValuesChange = (
    id: string | number,
    form: FormInstance,
    value: object,
    allValue: object,
  ) => {
    if (typeof this.onValuesChange === 'function') {
      const key = this.formateKeyToString(id);
      const list = [...(this.dataSource || [])].map((item) => {
        if (key === this.formateKeyToString(item[this.rowKey])) {
          return { ...item, ...allValue };
        }
        return { ...item };
      });
      this.onValuesChange(list, value, allValue, id, form);
    }
  };
}

export const useEditTableBaseInstance = (instance?: EditTableBaseInstance) => {
  const ref = useRef<EditTableBaseInstance>(null);
  if (!ref.current) {
    if (instance) {
      ref.current = instance;
    } else {
      ref.current = new EditTableBaseInstance();
    }
  }
  return ref.current;
};
export const EditTableBaseInstanceContext = createContext(
  new EditTableBaseInstance(),
);

export const useEditTableBaseInstanceContext = () => {
  const editInstance = useContext(EditTableBaseInstanceContext);
  const state = useSnapshot(editInstance.store);
  const dispatch = (
    value: Partial<EditTableInstanceStoreType>,
    type: 'ref' | 'none' = 'ref',
  ) => {
    if (type === 'none') {
      editInstance._setStore(value);
    } else {
      editInstance._setRefStore(value);
    }
  };
  /**为了解决没有取值时直接重新渲染问题*/
  const temps = (state as any).___temps;
  return [state, dispatch, editInstance, temps] as [
    EditTableInstanceStoreType,
    (value: Partial<EditTableInstanceStoreType>, type?: 'ref' | 'none') => void,
    EditTableBaseInstance,
    any,
  ];
};
