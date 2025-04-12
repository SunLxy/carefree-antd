import { Popconfirm, Space, Typography } from 'antd';
import { useMemo } from 'react';
import { useEditTableBaseInstanceContext } from './instance/instance';
import { ColumnsBaseProps } from './interface';

export interface OperationColumnOption {
  optConfig?: ColumnsBaseProps;
  isOptDelete?: boolean;
  multiple?: boolean;
  optDeleteEditingDisabled?: boolean;
}
const OperationColumnRender = (
  props: OperationColumnOption & { rowData: any; index: number; value: any },
) => {
  const {
    rowData,
    optConfig,
    index,
    multiple,
    isOptDelete,
    optDeleteEditingDisabled,
  } = props;

  const [state, , editInstance] = useEditTableBaseInstanceContext();
  const editingKeys = state.editingKeys;
  const newAddKeys = state.newAddKeys;
  const editable = useMemo(
    () => editInstance.isEditing(rowData),
    [editingKeys, rowData],
  );
  const isNewAdd = useMemo(
    () => editInstance.isAddEdit(rowData),
    [newAddKeys, rowData],
  );
  const editingKeysLength = (editingKeys || []).length;

  if (optConfig && optConfig.render) {
    return optConfig.render(rowData, rowData, index) as any;
  }

  return editable ? (
    <span>
      <Typography.Link
        onClick={() => editInstance.onSaveRow(rowData, index)}
        style={{ marginRight: 8 }}
      >
        保存
      </Typography.Link>
      <Popconfirm
        title="是否取消当前行编辑?"
        okText="是"
        cancelText="否"
        onConfirm={() =>
          isNewAdd
            ? editInstance.onDeleteRow(rowData, index)
            : editInstance.onEditCancel(rowData, index)
        }
      >
        <Typography.Link>取消</Typography.Link>
      </Popconfirm>
    </span>
  ) : (
    <Space>
      <Typography.Link
        disabled={!!editingKeysLength && !multiple}
        onClick={() => editInstance.onEditRow(rowData, index)}
      >
        编辑
      </Typography.Link>
      {isOptDelete && (
        <Popconfirm
          disabled={optDeleteEditingDisabled && !!editingKeysLength}
          title="是否删除当前行数据?"
          okText="是"
          cancelText="否"
          onConfirm={() => editInstance.onDeleteRow(rowData, index)}
        >
          <Typography.Link
            disabled={optDeleteEditingDisabled && !!editingKeysLength}
          >
            删除
          </Typography.Link>
        </Popconfirm>
      )}
    </Space>
  );
};
/** 操作列配置 */
const operationColumn = (
  options: OperationColumnOption,
): ColumnsBaseProps[] => {
  const { optConfig } = options;
  return [
    {
      title: '操作',
      align: 'center',
      width: 120,
      ...optConfig,
      render: (value, rowData: any, index: number) => {
        return (
          <OperationColumnRender
            {...options}
            value={value}
            index={index}
            rowData={rowData}
          />
        );
      },
    },
  ];
};
export default operationColumn;
