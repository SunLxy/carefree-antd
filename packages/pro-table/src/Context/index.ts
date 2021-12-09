import React from 'react';
import { get, set } from 'carefree-utils';
import { ProTableProps } from './../index';

export interface StoreParam {
  search: object;
  loading: boolean;
  table: {
    page: number;
    pageSize: number;
    total: number;
    dataSource: any[];
    selectRows?: any[];
    selectRowKeys?: any[];
  };
  // editVisible: boolean;
  // editForm: object;
  // saveEditForm: object;
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
    // editVisible: false,
    // editForm: {},
    // saveEditForm: {},
  };
  // 存储 方法 用于其他地方调用
  private storeFun = {};

  // 用于组件 组件更新
  private components: { [k: string]: Function } = {};

  private getStringToArr = (path: string) => {
    return path.split('_');
  };

  getValue = (path: string) => {
    return get(this.store, this.getStringToArr(path));
  };

  setValue = (path: string, value: any) => {
    this.store = set(this.store, this.getStringToArr(path), value);
    return this.store;
  };

  setBatchValue = (store: object) => {
    Object.entries(store).forEach(([k, value]) => {
      this.store = set(this.store, this.getStringToArr(k), value);
    });
    return this.store;
  };

  getStore = () => this.store;

  // 组件注册
  registerId = (path: string, fun: Function) => {
    this.components[path] = fun;
  };
  // 组件卸载
  unregister = (path: string) => {
    delete this.components[path];
    this.setValue(path, undefined);
  };

  // 通知组件进行更新数据
  updateComponent = (path: string[]) => {
    path.forEach((key) => {
      this.components[key]();
    });
  };
}

export const useMain = (main?: Store) => {
  const mainRef = React.useRef<Store>();
  if (main) {
    mainRef.current = main;
  } else {
    mainRef.current = new Store();
  }
  return [mainRef.current];
};

export const ProTableContext = React.createContext<Store>(new Store());

export const useProTableContext = () => React.useContext(ProTableContext);

export const ProTableConfigContext = React.createContext<ProTableProps>({});

export const useProTableConfigContext = () =>
  React.useContext(ProTableConfigContext);
