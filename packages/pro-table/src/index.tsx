import React from 'react';
import Search from './Search';
import Table from './Table';
import { SimpleFormProps } from 'carefree-antd-form';
import { TableProps, CardProps, TablePaginationConfig } from 'antd';
import {
  ProTableConfigContext,
  useMain,
  ProTableContext,
  Store,
  StoreParam,
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

/** 重写  pagination 中的 onChange 事件参数 */
export interface PageProps extends TablePaginationConfig {
  onChange?: (page: number, pageSize: number, main?: Store) => void;
}

export interface ProTableProps {
  /** 查询表单 */
  search?: SimpleFormProps & {
    apiName?: string;
    onRest?: (main?: Store) => void;
    onFinish?: (value: any, main?: Store) => void;
  };
  /**  查询表单表头按钮 */
  searchHead?: (v: Store) => React.ReactNode;
  /** 查询表单 外层 card */
  searchCardProps?: CardProps;
  /** 表格头部操作按钮 */
  tableHead?: (v: Store) => React.ReactNode;
  /** 表格 外层 card */
  tableCardProps?: CardProps;
  /** 表格配置 */
  tableConfig?: TableProps<any> & {
    apiName?: string;
    /** 表格数据初始值 **/
    table?: {
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
    pagination?: PageProps;
  };
  /** 表格columns */
  columns?:
    | ((v?: Store) => TableProps<any>['columns'])
    | TableProps<any>['columns'];
  /** 接口调用  可以调用的接口 */
  Api?: ApiProps;
  /** 状态 存储 */
  main?: Store;
  /** 初始值 */
  initialValues?: StoreParam;
}

const Main = (props: ProTableProps) => {
  const [mainStore] = useMain({
    main: props.main,
    initialValues: props.initialValues,
  });
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
