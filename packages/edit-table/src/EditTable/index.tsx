import React, { useState } from 'react';
import {
  Table,
  Popconfirm,
  Typography,
  TableProps,
  FormItemProps,
  Tooltip,
  TooltipProps,
  Space,
} from 'antd';
import { ColumnType, ColumnsType } from 'antd/lib/table';
import { RenderedCell } from 'rc-table/lib/interface';
import RcForm from 'rc-field-form';
import { Rule } from 'rc-field-form/lib/interface';
import {
  getItem,
  ItemChildAttr,
  ItemChildType,
  getFieldId,
  toArray,
} from './utils';
export interface ColumnsProps extends ColumnType<any> {
  /**是否编辑  */
  editable?: boolean;
  /** 渲染编辑组件 */
  inputNode?: ((...arg: any[]) => React.ReactNode) | React.ReactNode;
  /** 规则 */
  rules?: Rule[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<FormItemProps, 'rules' | 'label' | 'name'>;
  /** formItem 表单 children 中组件参数*/
  attr?: Partial<ItemChildAttr<any, any>>;
  /**组件类型  */
  type?: ItemChildType;
  /** 错误提示  */
  tip?: (errs: string[]) => React.ReactNode;
  /** Tooltip 组件属性  */
  tipAttr?: TooltipProps;
  /** 自定义 渲染  ， other 参数 只有操作列才有 */
  render?: (
    value: any,
    record: any,
    index: number,
    other?: any,
  ) => React.ReactNode | RenderedCell<any>;
}

export interface EditableTableProps
  extends Omit<TableProps<any>, 'columns' | 'rowKey'> {
  columns: ColumnsProps[];
  /** 保存数据 */
  onSave: (data: any[], row: object, record: object, indx: number) => void;
  /** 保存数据之前校验 */
  onBeforeSave?: (item: object, record: object, index: number) => boolean;
  /**主键  */
  rowKey: string;
  /** 操作列是放在首位还是最后 */
  optIsFirst?: boolean;
  /** 操作配置 */
  optConfig?: ColumnsProps;
  /** 操作是否需要 删除 按钮 */
  isOptDelete?: boolean;
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  record,
  index,
  inputNode,
  rules,
  children,
  itemAttr,
  type,
  attr,
  form: parentForm,
  tip,
  tipAttr,
  ...restProps
}) => {
  const renders = getItem({ attr, type, inputNode });

  return (
    <td {...restProps}>
      {editing ? (
        <RcForm.Field
          {...itemAttr}
          label={undefined}
          name={dataIndex}
          rules={rules}
          style={{ margin: 0, ...((itemAttr || {}).style || {}) }}
        >
          {(control, meta, form) => {
            const mergedName =
              toArray(dataIndex).length && meta ? meta.name : [];
            const fieldId = getFieldId(mergedName, '');
            const onChange = (event: any) => {
              let value = event;
              if (event && event.target) {
                value = event.target.value;
              }
              control.onChange(value);
            };
            const childNode =
              typeof renders === 'function'
                ? renders({ ...control, id: fieldId }, meta, form)
                : React.isValidElement(renders)
                ? React.cloneElement(renders as React.ReactElement, {
                    ...control,
                    onChange: onChange,
                    id: fieldId,
                  })
                : renders;
            const errs = meta.errors.map((err) => err).join(',');
            return (
              <Tooltip
                color="red"
                {...tipAttr}
                title={tip ? tip(errs) : errs}
                visible={!!meta.errors.length}
              >
                {childNode}
              </Tooltip>
            );
          }}
        </RcForm.Field>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = (props: EditableTableProps) => {
  const {
    columns,
    dataSource = [],
    onBeforeSave,
    onSave,
    rowKey,
    optIsFirst = false,
    optConfig = {},
    isOptDelete = false,
    ...rest
  } = props;
  const [form] = RcForm.useForm();
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: any) => record[rowKey] === editingKey;

  const edit = (record: object) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record[rowKey]);
  };

  const cancel = () => {
    setEditingKey('');
    form.resetFields();
  };

  // 删除行
  const onDelete = (id: string | number, rowItem: object, index: number) => {
    const list = dataSource.filter((item) => item[rowKey] !== id);
    onSave && onSave(list, rowItem, rowItem, index);
  };

  const fields: string[] = React.useMemo(() => {
    return columns
      .filter((item) => {
        return item.editable;
      })
      .map((item) => item.dataIndex as string);
  }, [columns]);

  const save = async (key: string, record: object, indx: number) => {
    try {
      const row = await form.validateFields(fields);
      if (onBeforeSave && !onBeforeSave(row, record, indx)) {
        return;
      }
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item[rowKey]);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        onSave && onSave(newData, row, record, indx);
        setEditingKey('');
      } else {
        newData.push(row);
        onSave && onSave(newData, row, record, indx);
        setEditingKey('');
      }
      form.resetFields();
    } catch (errInfo) {
      console.log('错误信息:', errInfo);
    }
  };

  const operation: ColumnsProps[] = [
    {
      title: '操作',
      align: 'center',
      width: 120,
      ...optConfig,
      render: (item: any, record: object, index: number) => {
        const editable = isEditing(record);
        if (optConfig && optConfig.render) {
          return optConfig.render(item, record, index, {
            editable,
            save,
            cancel,
            onDelete,
          });
        }
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record[rowKey], record, index)}
              style={{ marginRight: 8 }}
            >
              保存
            </Typography.Link>
            <Popconfirm
              title="是否取消?"
              okText="是"
              cancelText="否"
              onConfirm={cancel}
            >
              <Typography.Link>取消</Typography.Link>
            </Popconfirm>
          </span>
        ) : (
          <Space>
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
            >
              编辑
            </Typography.Link>
            {isOptDelete && (
              <Popconfirm
                title="是否删除当前行数据?"
                okText="是"
                cancelText="否"
                onConfirm={() => onDelete(record[rowKey], record, index)}
              >
                <Typography.Link>删除</Typography.Link>
              </Popconfirm>
            )}
          </Space>
        );
      },
    },
  ];

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

  return (
    <RcForm form={form} component={false}>
      <Table
        {...rest}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        rowKey={rowKey}
        bordered
        dataSource={dataSource}
        columns={mergedColumns as ColumnsType}
        rowClassName="editable-row"
        pagination={false}
      />
    </RcForm>
  );
};
export default EditableTable;
