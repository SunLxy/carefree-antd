import React from 'react';
import TableGroup, { OperationType } from './Table';
import Search, { SearchProps } from './Search';
import request, { RequestOptionsInit } from 'umi-request';
import Store, { StoreProps } from './Store';
import SimpleForm, { SimpleFormProps } from 'carefree-antd-form';
import { TableProps } from 'antd';
export type ApiType<T> = {
  /** 请求地址 */
  url: string;
  /** 其他请求配置 */
  options?: RequestOptionsInit;
  /** main 内部状态存储值 返回值为 false 不继续往下走 */
  before: (main: any, type: T) => false | object;
  /** 请求之后处理数据  返回值为 false 不继续往下走 */
  after: (response: any, type: T) => false | object;
};

export interface TransferSearchProps extends Omit<SearchProps, 'onSearch'> {
  /**  初始值 */
  initValue?: Partial<{
    left: Partial<StoreProps['left']>;
    right: Partial<StoreProps['right']>;
  }>;
  /** 左侧 form */
  leftForm?: SimpleFormProps['form'];
  /** 右侧侧 form */
  rightForm?: SimpleFormProps['form'];
  /** 表格主键 */
  rowKey: string;
  /** 表格列 */
  columns: TableProps<any>['columns'];
  /** 请求接口 */
  Api: {
    /** 左侧查询接口 */
    left: ApiType<'left' | 'right'>;
    /** 右侧查询接口 */
    right: ApiType<'left' | 'right'>;
    /** 中间操作  往左 单个 */
    add: ApiType<OperationType>;
    /** 中间操作  往左 双个 */
    allAdd: ApiType<OperationType>;
    /** 中间操作  往右 单个 */
    delete: ApiType<OperationType>;
    /** 中间操作  往右 双个 */
    allDelete: ApiType<OperationType>;
  };
}

export interface TransferSearchRef {
  /** 中间操作方法 */
  handleOperation: (type: OperationType) => Promise<void>;
  /** 翻页 */
  onPageChange: (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => void;
  /** 选中 */
  onSelectedChange: (
    selectedKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => void;
  /** 查询 */
  onSearch: (type: 'left' | 'right') => Promise<void>;
  /** 状态存储数据 */
  store: Store;
  /** 更新当前组件 */
  forceUpdate: () => void;
  /** 左侧 form */
  leftForm: SimpleFormProps['form'];
  /** 右侧侧 form */
  rightForm: SimpleFormProps['form'];
}

const TransferSearch = (
  props: TransferSearchProps,
  ref: React.ForwardedRef<TransferSearchRef>,
) => {
  const { Api, leftSearch, rightSearch, initValue, rowKey, columns } = props;
  const [loading, setLoading] = React.useState({ left: false, right: false });
  const [leftForm] = SimpleForm.useForm(props.leftForm);
  const [rightForm] = SimpleForm.useForm(props.rightForm);
  const [_, setTime] = React.useState('');
  // 用于组件更新
  const forceUpdate = () => {
    setTime(new Date().getTime().toString());
  };

  // 状态存储器
  const store = React.useMemo(() => new Store(forceUpdate, initValue), []);
  // 查询
  const onSearch = async (type: 'left' | 'right') => {
    const api = Api[type];
    setLoading((pre) => ({ ...pre, [type]: true }));
    try {
      const { url, options, before, after } = api;
      const params = before(store.stores.left, type);
      if (params === false) {
        setLoading((pre) => ({ ...pre, [type]: false }));
        return;
      }
      const result = await request(url, {
        ...(options || {}),
        data: params,
      }).catch((err) => {
        setLoading((pre) => ({ ...pre, [type]: false }));
      });
      const handlResult = after(result, type);
      if (handlResult !== false) {
        store.setValue(handlResult, type);
      }
      setLoading((pre) => ({ ...pre, [type]: false }));
    } catch (err) {
      setLoading((pre) => ({ ...pre, [type]: false }));
    }
  };
  // 选中
  const onSelectedChange = (
    selectedKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => {
    store.setValue({ selectedKeys, selectedRows }, type);
  };
  // 翻页
  const onPageChange = (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => {
    store.setValue(
      { page, pageSize, selectedKeys: [], selectedRows: [] },
      type,
    );
    onSearch(type);
  };
  // 中间操作按钮
  const handleOperation = async (type: OperationType) => {
    const api = Api[type];
    const { url, options, before, after } = api;
    const params = before(store.stores.left, type);
    if (params === false) {
      return;
    }
    const result = await request(url, {
      ...(options || {}),
      data: params,
    });
    const resuFig = after(result, type);
    if (resuFig !== false) {
      onPageChange(1, store.stores.left.pageSize, 'left');
      onPageChange(1, store.stores.right.pageSize, 'right');
    }
  };

  const onValuesChange = (
    value: any,
    allValue: any,
    type: 'left' | 'right',
  ) => {
    store.setValue({ search: allValue }, type);
  };

  React.useImperativeHandle(ref, () => ({
    handleOperation,
    onPageChange,
    onSelectedChange,
    onSearch,
    store,
    forceUpdate,
    leftForm,
    rightForm,
  }));

  return (
    <div>
      <Search
        onValuesChange={onValuesChange}
        leftSearch={{
          ...(leftSearch || {}),
          initialValues: store.stores.left.search || {},
          form: leftForm,
        }}
        rightSearch={{
          ...(rightSearch || {}),
          initialValues: store.stores.right.search || {},
          form: rightForm,
        }}
        onSearch={onSearch}
      />
      <TableGroup
        handleOperation={handleOperation}
        leftTable={{
          rowKey,
          columns,
          page: store.stores.left.page,
          pageSize: store.stores.left.pageSize,
          total: store.stores.left.total,
          dataList: store.stores.left.dataList,
          selectedKeys: store.stores.left.selectedKeys,
          loading: loading.left,
          onSelectedChange: (selectedKeys, selectedRows) =>
            onSelectedChange(selectedKeys, selectedRows, 'left'),
          onPageChange: (page, pageSize) =>
            onPageChange(page, pageSize || 10, 'left'),
        }}
        rightTable={{
          rowKey,
          columns,
          page: store.stores.right.page,
          pageSize: store.stores.right.pageSize,
          total: store.stores.right.total,
          dataList: store.stores.right.dataList,
          selectedKeys: store.stores.right.selectedKeys,
          loading: loading.right,
          onSelectedChange: (selectedKeys, selectedRows) =>
            onSelectedChange(selectedKeys, selectedRows, 'right'),
          onPageChange: (page, pageSize) =>
            onPageChange(page, pageSize || 10, 'right'),
        }}
      />
    </div>
  );
};

export default React.forwardRef(TransferSearch);
