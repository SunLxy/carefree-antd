import { useChildInstanceContextOperationState } from '@carefrees/table-async-validator';
import { Button, Popconfirm, Space } from 'antd';
import { useMemo } from 'react';
import { useEditTableInstanceContextState } from './../context';

/**
 * 操作单元格
 * 编辑、保存、删除、取消编辑(取消新增)
 */

export interface OperationCellProps<T = Record<PropertyKey, any>> {
  rowData: T;
  operationPosition?: 'left' | 'right';
}

export function OperationCell<T = Record<PropertyKey, any>>(
  props: OperationCellProps<T>,
) {
  const { rowData, operationPosition = 'right' } = props;
  const [operationState, childInstance] =
    useChildInstanceContextOperationState();
  const [state, editInstance] = useEditTableInstanceContextState();

  const customOperationCell = editInstance.customOperationCell;

  const isOperationEditButton = state.isOperationEditButton;
  const isOperationDeleteButton = state.isOperationDeleteButton;

  const rowKey = rowData[childInstance.rowKey];
  const operation = operationState[rowKey];
  // 编辑按钮 + 删除按钮(需要确认按钮)
  // 保存按钮(需要确认按钮) + 取消按钮(需要确认按钮)
  // 可以自定义按钮
  const operationButton = useMemo(() => {
    const list: React.ReactNode[] = [];
    if (isOperationDeleteButton) {
      list.push(
        <Popconfirm
          key="delete"
          title="确认删除吗？"
          description="删除后将无法恢复"
          className="carefrees-antd-edit-table-operation-cell-delete-popconfirm"
          onConfirm={() => {
            childInstance.onClickDeleteRowOperation(rowKey);
          }}
          okText="确认"
          cancelText="取消"
        >
          <Button
            className="carefrees-antd-edit-table-operation-cell-delete-button"
            size="small"
            type="link"
            danger
          >
            删除
          </Button>
        </Popconfirm>,
      );
    }
    if (isOperationEditButton) {
      list.push(
        <Button
          className="carefrees-antd-edit-table-operation-cell-edit-button"
          key="edit"
          size="small"
          type="link"
          onClick={() => {
            childInstance.onClickEditRowOperation(rowKey);
          }}
        >
          编辑
        </Button>,
      );
    }
    return list;
  }, [rowKey, operationPosition]);

  const _operationButton = useMemo(() => {
    if (operationPosition === 'right') {
      return [...operationButton].reverse();
    }
    return operationButton;
  }, [operationButton, operationPosition]);

  const operationEditButton = useMemo(() => {
    return [
      <Button
        key="save"
        className="carefrees-antd-edit-table-operation-cell-save-button"
        size="small"
        type="link"
        onClick={() => {
          childInstance.onClickSaveRowOperation(rowKey);
        }}
      >
        保存
      </Button>,
      <Popconfirm
        key="cancel"
        title="确认取消吗？"
        description="取消后将无法恢复"
        className="carefrees-antd-edit-table-operation-cell-cancel-popconfirm"
        onConfirm={() => {
          childInstance.onCancelRowOperation(rowKey);
        }}
        okText="确认"
        cancelText="取消"
      >
        <Button
          className="carefrees-antd-edit-table-operation-cell-cancel-button"
          size="small"
          type="link"
          danger
        >
          取消
        </Button>
      </Popconfirm>,
    ];
  }, [rowKey]) as React.ReactNode[];

  if (typeof customOperationCell === 'function') {
    return (
      <Space
        direction="horizontal"
        className="carefrees-antd-edit-table-operation-cell"
      >
        {customOperationCell(_operationButton, operationEditButton, operation)}
      </Space>
    );
  }
  return (
    <Space
      direction="horizontal"
      className="carefrees-antd-edit-table-operation-cell"
    >
      {!!operation ? operationEditButton : _operationButton}
    </Space>
  );
}
