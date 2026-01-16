import {
  ChildInstance,
  ChildInstanceContext,
  useRegisterChildInstance,
} from '@carefrees/table-async-validator';
import { Button, Table, TableProps } from 'antd';
import { OperationCell } from 'config/operation.cell';
import { Fragment, useMemo } from 'react';
import type { TableConfigColumnType } from '../config';
import { Cell, CellInput, CellText } from '../config/cell';
import {
  EditTableInstance,
  EditTableInstanceContext,
  EditTableInstanceStateType,
  useEditTableInstance,
} from '../context';
import { useId } from '../utils';
import './../styles/index.css';

export interface EditTableBaseProps<
  T = any,
  M extends EditTableInstanceStateType = EditTableInstanceStateType,
> extends Omit<TableProps<T>, 'columns' | 'rowKey' | 'dataSource'> {
  columns: TableConfigColumnType[];
  name?: string;
  rowKey?: PropertyKey;
  dataSource?: Partial<T>[];
  enableOperationState?: boolean;
  /***
   * 操作按钮
   * edit: 编辑按钮
   * delete: 删除按钮
   */
  isOperationEditButton?: boolean;
  isOperationDeleteButton?: boolean;

  /***
   * 操作按钮位置
   * left: 左侧
   * right: 右侧
   */
  operationPosition?: 'left' | 'right';
  /**操作按钮是否固定在左侧或右侧*/
  operationFixed?: boolean;
  /**编辑表格实例*/
  editInstance?: EditTableInstance<M, T>;
  /**子实例*/
  childInstance?: ChildInstance<T>;
  /**最大数*/
  maxCount?: number;
  /**自定义操作单元格*/
  customOperationCell?: (
    operationButton: React.ReactNode,
    operationEditButton: React.ReactNode,
    operation?: 'add' | 'edit',
  ) => React.ReactNode;
}

export function EditTableBase<
  T = any,
  M extends EditTableInstanceStateType = EditTableInstanceStateType,
>(props: EditTableBaseProps<T, M>) {
  const {
    columns,
    dataSource,
    name,
    rowKey,
    enableOperationState = true,
    isOperationEditButton = true,
    isOperationDeleteButton = true,
    operationPosition = 'right',
    operationFixed = false,
    editInstance: _editInstance,
    childInstance: _childInstance,
    maxCount = 0,
    customOperationCell,
    ...rest
  } = props;
  const editInstance = useEditTableInstance<M, T>(_editInstance);
  useMemo(
    () =>
      editInstance.updatedState({
        isOperationEditButton,
        isOperationDeleteButton,
      }),
    [isOperationEditButton, isOperationDeleteButton],
  );
  const id = useId(name);
  const { childInstance } = useRegisterChildInstance(id, _childInstance);
  editInstance.childInstance = childInstance;
  editInstance.customOperationCell = customOperationCell;

  /**设置行数据的主键值，对应一行中所有列的错误信息*/
  childInstance.rowKey = rowKey || 'rowId';
  childInstance.enableOperationState = enableOperationState;

  const _columns = useMemo(() => {
    const _columns = columns.map((item) => {
      const {
        type,
        attrs,
        render,
        inputRender,
        dataIndex,
        valuePropName,
        useAttrs,
        ...rest
      } = item;
      const _item = { ...rest, dataIndex } as TableConfigColumnType;
      if (dataIndex) {
        if (childInstance.enableOperationState) {
          _item.render = (_, rowData, index) => {
            return (
              <Cell<T>
                rowData={rowData}
                currentIndex={index}
                dataIndex={dataIndex as PropertyKey}
                type={type}
                inputRender={inputRender}
                render={render as any}
                valuePropName={valuePropName}
                useAttrs={useAttrs}
                attrs={attrs}
              />
            );
          };
        } else {
          _item.render = (_, rowData, index) => {
            const childProps = {
              rowData,
              currentIndex: index,
              dataIndex: dataIndex as PropertyKey,
              type,
              inputRender,
              render: render as any,
              valuePropName,
              useAttrs,
              attrs,
            };
            if (type) {
              return <CellInput<T> {...childProps} />;
            } else {
              return <CellText<T> {...childProps} />;
            }
          };
        }
      } else {
        _item.render = (_, rowData, index) => {
          return (
            <CellText<T>
              rowData={rowData}
              currentIndex={index}
              dataIndex={dataIndex as PropertyKey}
              type={type}
              inputRender={inputRender}
              render={render as any}
              valuePropName={valuePropName}
              useAttrs={useAttrs}
              attrs={attrs}
            />
          );
        };
      }
      return { ..._item };
    });
    return _columns;
  }, [columns]);

  const _last_columns = useMemo(() => {
    if (operationPosition === 'left') {
      return [
        {
          title: '操作',
          align: 'center',
          width: 80,
          fixed: operationFixed ? operationPosition : undefined,
          render: (_: any, rowData: T) => {
            return <OperationCell<T> rowData={rowData} />;
          },
        } as unknown as TableConfigColumnType,
      ].concat(_columns);
    } else if (operationPosition === 'right') {
      return [..._columns].concat([
        {
          title: '操作',
          align: 'center',
          width: 80,
          fixed: operationFixed ? operationPosition : undefined,
          render: (_: any, rowData: T) => {
            return <OperationCell<T> rowData={rowData} />;
          },
        } as unknown as TableConfigColumnType,
      ]);
    }
  }, [operationPosition, operationFixed]);

  /**数据转换，如果未初始化会进行初始化，如果已经初始化完成，直接返回传入的数据列表*/
  const _value = useMemo(
    () => childInstance.ctor(dataSource),
    [childInstance, dataSource],
  );

  // 是否可以继续新增
  const isCanAdd = useMemo(() => {
    return maxCount ? _value.length < maxCount : true;
  }, [_value, maxCount]);

  return (
    <EditTableInstanceContext.Provider value={editInstance}>
      <ChildInstanceContext.Provider value={childInstance}>
        <div className="carefrees-antd-edit-table">
          <Table
            size="small"
            {...rest}
            rowKey={rowKey}
            dataSource={_value}
            columns={_last_columns}
          />
          {isCanAdd ? (
            <div className="carefrees-antd-edit-table-add-row">
              <Button type="dashed" block>
                添加一行数据
              </Button>
            </div>
          ) : (
            <Fragment />
          )}
        </div>
      </ChildInstanceContext.Provider>
    </EditTableInstanceContext.Provider>
  );
}
