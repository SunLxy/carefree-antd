import React, { useState } from 'react';
import { Table, Button, message } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import RcForm from 'rc-field-form';
import Store from './Store';
import {
  ColumnsProps,
  EditableTableProps,
  RefEditTableProps,
} from './interface.d';
import Tr, { EditForms } from './Tr';
import Td from './Td';
import Operation from './Operation';
export type { ColumnsProps, EditableTableProps, RefEditTableProps };
const EditableTable = (
  props: EditableTableProps,
  ref: React.ForwardedRef<RefEditTableProps>,
) => {
  const {
    columns,
    dataSource = [],
    onBeforeSave,
    onSave,
    rowKey = 'id',
    optIsFirst = false,
    optConfig = {},
    isOptDelete = false,
    initValue = {},
    onValuesChange,
    isAdd,
    onErr,
    multiple = false,
    onBeforeAdd,
    isOpt = true,
    addBtnProps = {},
    ...rest
  } = props;
  const [form] = RcForm.useForm();
  const formsRef = React.useRef(new Store()).current;

  const [editingKey, setEditingKey] = useState([]);
  const [newAdd, setNewAdd] = React.useState([]);
  /** editingKey 和 newAdd 移出 id */
  const removeKey = (id: string | number) => {
    setEditingKey((arr) => arr.filter((k) => k !== id));
    setNewAdd((arr) => arr.filter((k) => k !== id));
  };

  /** 获取行 所有编辑字段 */
  const fields: string[] = React.useMemo(() => {
    return columns
      .filter((item) => {
        return item.editable;
      })
      .map((item) => item.dataIndex as string);
  }, [columns]);

  /** 重置 某个表单 */
  const restForm = (key: string | number, obj = {}) => {
    const stores = formsRef.getStore();
    if (stores[key]) {
      stores[key].setFieldsValue(obj);
    }
  };

  /** 获取某个表单 */
  const getForm = (id: string | number) => {
    const stores = formsRef.getStore();
    return stores[id];
  };

  /** 判断是否编辑 */
  const isEditing = (record: any) => editingKey.includes(record[rowKey]);
  /** 判断是否是新增的 */
  const isAddEdit = (record: any) => newAdd.includes(record[rowKey]);

  /** 新增  */
  const add = () => {
    // 新增之前的调用方法
    if (onBeforeAdd && !onBeforeAdd()) {
      return;
    }
    if (newAdd.length === 1 && !multiple) {
      message.warn('只能新增一行');
      return;
    }
    if (editingKey.length === 1 && !multiple) {
      message.warn('只能编辑一行');
      return;
    }
    const id = (new Date().getTime() * Math.round(10)).toString();
    const newItem = { ...(initValue || {}), [rowKey]: id };
    const list = dataSource.concat([newItem]);
    setEditingKey((arr) => arr.concat([id]));
    setNewAdd((arr) => arr.concat([id]));
    onSave && onSave(list, newItem);
  };

  /** 编辑 */
  const edit = (record: object) => {
    let obj = { ...record };
    restForm(record[rowKey], obj);
    setEditingKey((arr) => arr.concat([record[rowKey]]));
  };

  /** 取消编辑  */
  const cancel = (id: string | number) => {
    removeKey(id);
    restForm(id, {});
  };

  /** 删除行 */
  const onDelete = (id: string | number, rowItem: object, index: number) => {
    const list = dataSource.filter((item) => item[rowKey] !== id);
    removeKey(id);
    onSave && onSave(list, rowItem, rowItem, index);
  };

  /** 保存 */
  const save = async (key: string | number, record: object, indx: number) => {
    try {
      const row = await getForm(key).validateFields(fields);
      if (onBeforeSave && !onBeforeSave(row, record, indx)) {
        return;
      }
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item[rowKey]);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
      } else {
        newData.push(row);
      }
      onSave && onSave(newData, row, record, indx);
      removeKey(key);
      getForm(key).resetFields(fields);
    } catch (errInfo) {
      onErr && onErr(errInfo);
    }
  };
  /** 操作列配置 */
  const operation: ColumnsProps[] =
    (isOpt &&
      Operation({
        optConfig,
        isEditing,
        isAddEdit,
        save,
        isOptDelete,
        cancel,
        onDelete,
        edit,
        newAdd,
        editingKey,
        rowKey,
        multiple,
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
        form,
        multiple,
        rowKey,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
        inputNode: col.inputNode,
        rules: col.rules || [],
        itemAttr: col.itemAttr,
        type: col.type,
        attr: col.attr,
        tip: col.tip,
        tipAttr: col.tipAttr,
      }),
    };
  });
  // 表单值更新 表单更新值适用单个 不使用多个
  const onChange = (id: string | number, value: object, allValue: object) => {
    if (onValuesChange) {
      const list = dataSource.map((item) => {
        if (id === item[rowKey]) {
          return { ...item, ...value };
        }
        return { ...item };
      });
      onValuesChange(list, value, allValue, id);
    }
  };

  React.useImperativeHandle(
    ref,
    (): RefEditTableProps => ({
      save,
      onDelete,
      edit,
      cancel,
      add,
      isEditing,
      editingKey,
      newAdd,
      forms: formsRef,
    }),
  );

  return (
    <React.Fragment>
      <EditForms.Provider
        value={{
          formsRef,
          onValuesChange: onChange,
          dataSource,
          rowKey,
        }}
      >
        <Table
          {...rest}
          components={{
            body: {
              row: Tr,
              cell: Td,
            },
          }}
          rowKey={rowKey}
          bordered
          dataSource={dataSource}
          columns={mergedColumns as ColumnsType}
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
            onClick={add}
          />
        )}
      </EditForms.Provider>
    </React.Fragment>
  );
};
export default React.forwardRef(EditableTable);
