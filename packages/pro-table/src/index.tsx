import React from 'react';
import Search from './Search';
import Table from './Table';
import { SimpleFormProps } from 'carefree-antd-form';
import { TableProps } from 'antd';
import {
  ProTableConfigContext,
  useMain,
  ProTableContext,
  Store,
} from './Context';
import { RequestOptionsInit } from 'umi-request';

export interface ApiProps {
  [api: string]: {
    /** 请求地址 */
    url?: string;
    /** 接口请求类型 */
    method?: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' | 'HEAD' | 'OPTIONS';
    /** 生产拼接 后端模块名 */
    module?: string;
    options?: RequestOptionsInit;
    /**  点击后 先触发当前操作 通过 callBack 执行内部继续操作 */
    before?: (item: any) => boolean;
    /** 处理请求api之前的数据数据 */
    requestBefore?: (item: any) => any;
    /** 处理请求之后的数据进行保存 */
    requestAfter?: (item: any) => any;
  };
}
export interface ProTableProps {
  /** 查询表单 */
  search?: SimpleFormProps;
  // 表格头部操作按钮
  tableHead?: (v: any) => React.ReactNode;
  /** 表格配置 */
  tableConfig?: TableProps<any> & {
    table?: {
      page?: number;
      pageSize?: number;
      dataSource?: any[];
      total?: number;
      selectRows?: any[];
      selectRowKeys?: any[];
    };
  };
  /** 表格columns */
  columns?: (v?: any) => TableProps<any>['columns'];
  /** 接口调用  可以调用的接口 */
  Api?: ApiProps;
  /** 状态 存储 */
  main?: Store;
}

const Main = (props: ProTableProps) => {
  const [mainStore] = useMain(props.main);

  return (
    <ProTableContext.Provider value={mainStore}>
      <ProTableConfigContext.Provider value={props}>
        <Search />
        <Table />
      </ProTableConfigContext.Provider>
    </ProTableContext.Provider>
  );
};

Main.useMain = useMain;

export default Main;
