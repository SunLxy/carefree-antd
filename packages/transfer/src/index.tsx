import React from 'react';
import './style/index.css';
import ButtonGroup, { OperationType } from './ButtonGroup';
import Table, { TableGroupProps } from './Table';
import { getOperationResult } from './utils';
export interface TransferProps {
  /** 列表主键 */
  rowKey: string;
  /** 列表 */
  columns: TableGroupProps['columns'];
  /** 左侧表格配置 */
  leftConfig?: Omit<TableGroupProps, 'columns' | 'rowKey' | 'dataSource'>;
  /** 左侧选中数据 */
  leftSelected?: { selectedRowKeys?: React.Key[]; selectedRows?: any[] };
  /** 左侧数据源 */
  leftDataSource: readonly any[];
  /** 右侧侧表格配置 */
  rightConfig?: Omit<TableGroupProps, 'columns' | 'rowKey' | 'dataSource'>;
  /** 右侧选中数据 */
  rightSelected?: { selectedRowKeys?: React.Key[]; selectedRows?: any[] };
  /** 右侧数据源 */
  rightDataSource: readonly any[];
  /** 公共 pagination属性 */
  pagination?: TableGroupProps['pagination'];
  /** 分页 */
  handlePagination?: (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => void;
  /** 选中  */
  handleSelected?: (
    selectedRowKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => void;
  /** 中间操作方法 */
  handleOperation?: (
    leftList: readonly any[],
    rightList: readonly any[],
    selectedRowKeys: React.Key[],
    selectedRows: any[],
    type: OperationType,
  ) => void;
  /** 数据源只是引用 不做其他 */
  isQuote?: boolean;
}

export interface TransferRef {
  /** 内部状态存储值 */
  store: {
    /** 左侧选中数据 */
    leftSelected: TransferProps['leftSelected'];
    /** 右侧选中数据 */
    rightSelected: TransferProps['leftSelected'];
    /** 左侧分页数据 */
    leftPagination: { page: number; pageSize: number };
    /** 右侧侧分页数据 */
    rightPagination: { page: number; pageSize: number };
    /** 左侧数据源 */
    leftList: readonly any[];
    /** 右侧数据源 */
    rightList: readonly any[];
  };
  setStore: React.Dispatch<React.SetStateAction<TransferRef['store']>>;
  /** 选中方法 */
  handleSelected: (
    selectedRowKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => void;
  /** 分页方法 */
  handlePagination: (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => void;
  /** 中间操作方法 */
  handleOperation: (type: OperationType) => void;
}

const Transfer = (
  props: TransferProps,
  ref: React.ForwardedRef<TransferRef>,
) => {
  const {
    leftSelected,
    rightSelected,
    columns,
    rowKey,
    leftConfig,
    rightConfig,
    pagination,
    leftDataSource,
    rightDataSource,
    isQuote = true,
  } = props;
  const [store, setStore] = React.useState<TransferRef['store']>({
    leftSelected: { selectedRowKeys: [], selectedRows: [] },
    rightSelected: { selectedRowKeys: [], selectedRows: [] },
    leftPagination: { page: 1, pageSize: 10 },
    rightPagination: { page: 1, pageSize: 10 },
    // 左侧 数据和右侧数据
    leftList: leftDataSource || [],
    rightList: rightDataSource || [],
  });

  const _store = store;
  if (leftSelected && leftSelected.selectedRowKeys) {
    _store.leftSelected = leftSelected;
  }
  if (rightSelected && rightSelected.selectedRowKeys) {
    _store.rightSelected = leftSelected;
  }
  if (leftDataSource && !isQuote) {
    _store.leftList = leftDataSource;
  }
  if (rightDataSource && !isQuote) {
    _store.rightList = rightDataSource;
  }
  const getPagination = (
    config: Omit<TableGroupProps, 'columns' | 'rowKey'>,
  ): TableGroupProps['pagination'] => {
    let page: TableGroupProps['pagination'] = { pageSize: 10 };
    if (Reflect.has(props, 'pagination')) {
      page = pagination;
    }
    if (Reflect.has(config || {}, 'pagination')) {
      if (
        typeof config.pagination === 'boolean' ||
        typeof pagination === 'boolean'
      ) {
        page = config.pagination;
      } else {
        page = {
          ...(pagination || {}),
          ...(config.pagination || {}),
        };
      }
    }
    return page;
  };
  /** 选中方法 */
  const handleSelected = (
    selectedRowKeys: React.Key[],
    selectedRows: any[],
    type: 'left' | 'right',
  ) => {
    if (Reflect.has(props, 'handleSelected')) {
      props.handleSelected(selectedRowKeys, selectedRows, type);
    }
    setStore((pre) => ({
      ...pre,
      [`${type}Selected`]: { selectedRowKeys, selectedRows },
    }));
  };
  /** 分页方法 */
  const handlePagination = (
    page: number,
    pageSize: number,
    type: 'left' | 'right',
  ) => {
    if (Reflect.has(props, 'handlePagination')) {
      props.handlePagination(page, pageSize, type);
    }
    setStore((pre) => ({ ...pre, [`${type}Pagination`]: { page, pageSize } }));
    /** 翻页清空选中数据 */
    handleSelected([], [], type);
  };
  /** 中间操作方法 */
  const handleOperation = (type: OperationType) => {
    const { leftList, rightList, selectedKeys, selectedRows, selectedType } =
      getOperationResult(type, _store, rowKey);
    if (Reflect.has(props, 'handleOperation')) {
      props.handleOperation(
        leftList,
        rightList,
        selectedKeys,
        selectedRows,
        type,
      );
    }
    setStore((pre) => ({
      ...pre,
      [`${selectedType}Selected`]: {
        selectedRowKeys: [],
        selectedRows: [],
      },
      rightList,
      leftList,
    }));
  };

  React.useImperativeHandle(ref, () => ({
    store: _store,
    setStore,
    handleSelected,
    handlePagination,
    handleOperation,
  }));

  return (
    <div className="carefree-antd-transfer">
      <Table
        {...(leftConfig || {})}
        pagination={getPagination(leftConfig)}
        dataSource={_store.leftList}
        className="between-table"
        selectedRowKeys={store.leftSelected.selectedRowKeys}
        handlePagination={(page: number, pageSize: number) =>
          handlePagination(page, pageSize, 'left')
        }
        handleSelected={(selectedRowKeys, selectedRows) =>
          handleSelected(selectedRowKeys, selectedRows, 'left')
        }
        columns={columns}
        rowKey={rowKey}
      />
      <div className="middle-btn">
        <ButtonGroup handleOperation={handleOperation} />
      </div>
      <Table
        {...(rightConfig || {})}
        pagination={getPagination(rightConfig)}
        dataSource={_store.rightList}
        className="between-table"
        selectedRowKeys={store.rightSelected.selectedRowKeys}
        handlePagination={(page: number, pageSize: number) =>
          handlePagination(page, pageSize, 'right')
        }
        handleSelected={(selectedRowKeys, selectedRows) =>
          handleSelected(selectedRowKeys, selectedRows, 'right')
        }
        columns={columns}
        rowKey={rowKey}
      />
    </div>
  );
};
export default React.forwardRef(Transfer);
