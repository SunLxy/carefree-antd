import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import Operation from './Operation';
import Td, { EditableCellItem } from './Td';
import Tr from './Tr';
import {
  EditTableBaseInstanceContext,
  useEditTableBaseInstance,
  useEditTableBaseInstanceContext,
} from './instance/instance';
import { ColumnsBaseProps, EditableTableBaseProps } from './interface';
export type { ColumnsBaseProps, EditableTableBaseProps };
export const EditableTableBase = (props: EditableTableBaseProps) => {
  const {
    columns,
    dataSource = [],
    onBeforeSave,
    onSave,
    rowKey = 'id',
    optIsFirst = false,
    optConfig,
    isOptDelete = false,
    initValue = {},
    onValuesChange,
    isAdd,
    onErr,
    multiple = false,
    onBeforeAdd,
    isOpt = true,
    addBtnProps = {},
    editInstance: parentEditInstance,
    optDeleteEditingDisabled = false,
    onBeforeEdit,
    onBeforeEditCancel,
    onBeforeDelete,
    ...rest
  } = props;

  /** 获取行 所有编辑字段 */
  const fields: string[] = React.useMemo(() => {
    return columns
      .filter((item) => {
        return item.editable;
      })
      .map((item) => item.dataIndex as string);
  }, [columns]);

  const editInstance = useEditTableBaseInstance(parentEditInstance);
  /**===============挂载数据==================*/
  editInstance.dataSource = dataSource;
  editInstance.initValue = initValue;
  editInstance.rowKey = rowKey;
  editInstance.onSave = onSave;
  editInstance.onBeforeAdd = onBeforeAdd;
  editInstance.multiple = multiple;
  editInstance.onErr = onErr; // 行报错信息
  editInstance.fields = fields; // 可编辑字段
  editInstance.onValuesChange = onValuesChange; // 行数据更新
  editInstance.onBeforeSave = onBeforeSave; // 保存数据之前校验
  editInstance.onBeforeEdit = onBeforeEdit; // 编辑一行之前的调用方法
  editInstance.onBeforeEditCancel = onBeforeEditCancel; // 编辑一行取消之前的调用方法
  editInstance.onBeforeDelete = onBeforeDelete; // 删除一行之前的调用方法
  /**=======================================*/

  /** 操作列配置 */
  const operation: ColumnsBaseProps[] =
    (isOpt &&
      Operation({
        optConfig,
        isOptDelete,
        multiple,
        optDeleteEditingDisabled,
      })) ||
    [];

  const optColumns = optIsFirst
    ? operation.concat(columns)
    : columns.concat(operation);

  const mergedColumns = optColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: object) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        inputNode: col.inputNode,
        rules: col.rules || [],
        itemAttr: col.itemAttr,
        type: col.type,
        attr: col.attr,
        tip: col.tip,
        tipAttr: col.tipAttr,
        isList: col.isList,
        listAttr: col.listAttr,
      }),
    };
  }) as ColumnsType;

  return (
    <React.Fragment>
      <EditTableBaseInstanceContext.Provider value={editInstance}>
        <Table
          size="small"
          bordered
          {...rest}
          components={{
            body: {
              row: Tr,
              cell: Td,
            },
          }}
          rowKey={rowKey}
          dataSource={dataSource}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={false}
        />
        {isAdd && (
          <Button
            type="dashed"
            block
            children="添加一行数据"
            {...(addBtnProps || {})}
            style={{ marginTop: 10, ...((addBtnProps || {}).style || {}) }}
            onClick={editInstance.onAddRow}
          />
        )}
      </EditTableBaseInstanceContext.Provider>
    </React.Fragment>
  );
};

EditableTableBase.useEditInstance = useEditTableBaseInstance;
EditableTableBase.useEditInstanceContext = useEditTableBaseInstanceContext;
EditableTableBase.Item = EditableCellItem;

export default EditableTableBase;
