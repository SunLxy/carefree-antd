import React from 'react';
import { get, set, clone } from 'carefree-utils';
import { ProTableProps } from './../index';

export interface StoreParam {
  /** 查询表单存储数据  */
  search: object;
  /** loading  */
  loading: boolean;
  /** 表格存储数据  */
  table: {
    /** 分页 */
    page?: number;
    /** 每页数据 */
    pageSize?: number;
    /** 数据源 */
    dataSource?: any[];
    /** 总条数 */
    total?: number;
    /** 选中数据 */
    selectRows?: any[];
    /** 选中数据 rowKey */
    selectRowKeys?: any[];
  };
  [k: string]: any;
}

export class Store {
  private store: StoreParam = {
    search: {},
    loading: false,
    table: {
      page: 1,
      pageSize: 20,
      total: 0,
      dataSource: [],
      selectRows: [],
      selectRowKeys: [],
    },
  };
  private initialValues: StoreParam = {
    search: {},
    loading: false,
    table: {
      page: 1,
      pageSize: 20,
      total: 0,
      dataSource: [],
      selectRows: [],
      selectRowKeys: [],
    },
  };

  /** 初始值 赋值 */
  constructor(props?: StoreParam) {
    const { search, table, ...rest } = props || {};
    if (search) {
      this.setValue('search', { ...search });
    }
    if (table) {
      this.setValue('table', { ...table });
    }
    Object.entries({ ...rest }).forEach(([k, value]) => {
      this.setValue(k, value);
    });
    this.initialValues = clone(props || {}, false);
  }

  /** 用于组件存储  组件更新 */
  private components: { [k: string]: Function } = {};
  /** 字符串转数组 */
  private getStringToArr = (path: string) => {
    return path.split('_');
  };

  /** 获取初始值 */
  getInitValue = (path: string) => {
    return clone(get(this.initialValues, this.getStringToArr(path)), false);
  };

  /** 获取值 */
  getValue = (path: string) => {
    return get(this.store, this.getStringToArr(path));
  };

  /** 设置值 */
  setValue = (path: string, value: any) => {
    this.store = set(this.store, this.getStringToArr(path), value);
    return this.store;
  };

  /** 批量设置值 */
  setBatchValue = (store: object) => {
    Object.entries(store).forEach(([k, value]) => {
      this.store = set(this.store, this.getStringToArr(k), value);
    });
    return this.store;
  };
  /** 获取存储值 **/
  getStore = () => this.store;

  /**  组件注册 */
  registerId = (path: string, fun: Function) => {
    this.components[path] = fun;
  };

  /** 组件卸载 */
  unregister = (path: string, initialValues?: any) => {
    delete this.components[path];
    if ('search' === path) {
      this.setValue(path, initialValues || this.initialValues['search'] || {});
    } else if ('table' === path) {
      this.setValue(
        path,
        initialValues ||
          this.initialValues['table'] || {
            page: 1,
            pageSize: 20,
            total: 0,
            dataSource: [],
            selectRows: [],
            selectRowKeys: [],
          },
      );
    } else {
      this.setValue(path, initialValues || this.initialValues[path]);
    }
  };

  /** 用于更新 表格 loading */
  tableLoading = (isFig: boolean) => {
    this.setValue('loading', isFig);
    this.updateComponent(['table']);
  };

  /** 通知组件进行更新数据 */
  updateComponent = (path: string[]) => {
    path.forEach((key) => {
      this.components[key]();
    });
  };
}

export const useMain = ({
  main,
  initialValues,
}: {
  main: Store;
  initialValues?: StoreParam | undefined;
}) => {
  const mainRef = React.useRef<Store>();
  if (main) {
    mainRef.current = main;
  } else {
    mainRef.current = new Store(initialValues);
  }
  return [mainRef.current];
};

export const ProTableContext = React.createContext<Store>(new Store());

export const useProTableContext = () => React.useContext(ProTableContext);

export const ProTableConfigContext = React.createContext<ProTableProps>({});

export const useProTableConfigContext = () =>
  React.useContext(ProTableConfigContext);
