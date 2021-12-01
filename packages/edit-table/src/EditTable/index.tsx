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
  Button,
  message,
} from 'antd';
import { ColumnType, ColumnsType } from 'antd/lib/table';
import { RenderedCell } from 'rc-table/lib/interface';
import RcForm from 'rc-field-form';
import {
  Rule,
  ValidateErrorEntity,
  FormInstance,
} from 'rc-field-form/lib/interface';
import {
  getItem,
  ItemChildAttr,
  ItemChildType,
  getFieldId,
  toArray,
  getChildItemFun,
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
  onSave: (data: any[], row: object, record?: object, indx?: number) => void;
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
  // 新增初始值
  initValue?: object;
  // 是否存在新增按钮
  isAdd?: boolean;
  onBeforeAdd?: () => boolean;
  /** 行报错信息 */
  onErr?: (err: ValidateErrorEntity<any>) => void;
  /** 表单值更新事件 */
  onValuesChange?: (
    list: any,
    value: object,
    allValue: object,
    id: string | number,
  ) => void;
  // 是否可以多行编辑
  multiple?: boolean;
}

export interface RefEditTableProps {
  /** 保存 */
  save: (key: string, record: object, indx: number) => void;
  /** 删除 */
  onDelete: (id: string | number, rowItem: object, index: number) => void;
  /** 编辑 */
  edit: (record: object) => void;
  /** 取消编辑 */
  cancel: (key: string | number) => void;
  /** 新增 */
  add: () => void;
  /** 是否编辑中 */
  isEditing: (record: any) => boolean;
  /** 编辑 id */
  editingKey: (string | number)[];
  /** 是否编辑 新增的数据 */
  newAdd: (string | number)[];
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
  multiple,
  rowKey,
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
            const fieldId = getFieldId(mergedName, record[rowKey]);
            console.log(fieldId);
            const onChange = (event: any) => {
              let value = event;
              if (event && event.target) {
                value = event.target.value;
              }
              control.onChange(value);
            };
            const childNode =
              typeof renders === 'function'
                ? renders({ ...control, id: fieldId }, meta, form, {
                    form: getChildItemFun(parentForm),
                    record,
                  })
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

class Store {
  private store: { [s: string]: FormInstance } = {};
  remove = (name: string) => {
    delete this.store[name];
  };
  register = (name: string, form: FormInstance<any>) => {
    this.store[name] = form;
  };
  getStore = () => this.store;
}

interface EditFormsProps {
  formsRef: Store;
  onValuesChange: (
    id: string | number,
    value: object,
    allValue: object,
  ) => void;
  dataSource: readonly any[];
  rowKey: string | number;
}

const EditForms = React.createContext<EditFormsProps>({
  formsRef: new Store(),
  dataSource: [],
  rowKey: 'id',
  onValuesChange: (id: string | number, value: object, allValue: object) =>
    undefined,
});

const OptimizedRow = (props) => {
  const [form] = RcForm.useForm();
  const {
    formsRef,
    onValuesChange = () => {},
    dataSource,
    rowKey,
  } = React.useContext(EditForms);
  React.useEffect(() => {
    return () => formsRef.remove(props['data-row-key']);
  }, []);
  formsRef.register(props['data-row-key'], form);
  const initValue = dataSource.find(
    (item) => item[rowKey] === props['data-row-key'],
  );
  return (
    <RcForm
      onValuesChange={onValuesChange.bind(this, props['data-row-key'])}
      form={form}
      name={props['data-row-key']}
      component={false}
      initialValues={initValue || {}}
    >
      <tr {...props} />
    </RcForm>
  );
};

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
    ...rest
  } = props;
  const [form] = RcForm.useForm();
  const formsRef = React.useRef(new Store()).current;

  const [editingKey, setEditingKey] = useState([]);
  const [newAdd, setNewAdd] = React.useState([]);
  // 获取所有编辑字段
  const fields: string[] = React.useMemo(() => {
    return columns
      .filter((item) => {
        return item.editable;
      })
      .map((item) => item.dataIndex as string);
  }, [columns]);

  // 重置表单
  const restForm = (key: string | number, obj = {}) => {
    const stores = formsRef.getStore();
    if (stores[key]) {
      console.log(stores[key]);
      stores[key].setFieldsValue(obj);
    }
  };
  // 获取表单
  const getForm = (id: string | number) => {
    const stores = formsRef.getStore();
    return stores[id];
  };

  const isEditing = (record: any) => editingKey.includes(record[rowKey]);
  // 新增
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

  // 编辑
  const edit = (record: object) => {
    let obj = { ...record };
    restForm(record[rowKey], obj);
    // form.setFieldsValue(obj);
    setEditingKey((arr) => arr.concat([record[rowKey]]));
  };
  // 取消
  const cancel = (id: string | number) => {
    setEditingKey((arr) => arr.filter((k) => k !== id));
    setNewAdd((arr) => arr.filter((k) => k !== id));
    restForm(id, {});
  };

  // 删除行
  const onDelete = (id: string | number, rowItem: object, index: number) => {
    const list = dataSource.filter((item) => item[rowKey] !== id);
    setEditingKey((arr) => arr.filter((k) => k !== id));
    setNewAdd((arr) => arr.filter((k) => k !== id));
    onSave && onSave(list, rowItem, rowItem, index);
  };

  // 保存
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
      setEditingKey((arr) => arr.filter((k) => k !== key));
      setNewAdd((arr) => arr.filter((k) => k !== key));
      getForm(key).resetFields(fields);
    } catch (errInfo) {
      onErr && onErr(errInfo);
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
              onConfirm={
                newAdd.includes(record[rowKey])
                  ? onDelete.bind(this, record[rowKey], record, index)
                  : cancel.bind(this, record[rowKey])
              }
            >
              <Typography.Link>取消</Typography.Link>
            </Popconfirm>
          </span>
        ) : (
          <Space>
            <Typography.Link
              disabled={!!editingKey.length && !multiple}
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

  React.useImperativeHandle(ref, () => ({
    save,
    onDelete,
    edit,
    cancel,
    add,
    isEditing,
    editingKey,
    newAdd,
  }));

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
              row: OptimizedRow,
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
        {isAdd && (
          <Button style={{ marginTop: 10 }} type="dashed" block onClick={add}>
            添加一行数据
          </Button>
        )}
      </EditForms.Provider>
    </React.Fragment>
  );
};
export default React.forwardRef(EditableTable);
