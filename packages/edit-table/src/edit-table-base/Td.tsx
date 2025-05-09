import { Tooltip } from 'antd';
import RcForm from 'rc-field-form';
import React, { useMemo } from 'react';
import { useEditTableBaseInstanceContext } from './instance/instance';
import { EditableBaseCellItemProps } from './interface';
import { getFieldId, getItem, toArray } from './utils';

const EditableCell = React.memo(
  ({
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
    tip,
    tipAttr,
    isList,
    listAttr = {},
    ...restProps
  }: any) => {
    const [store, , editInstance] = useEditTableBaseInstanceContext();
    const rowKey = editInstance.rowKey;

    const editing = useMemo(() => {
      if (record) return editInstance.isEditing(record);
      return false;
    }, [store.editingKeys, record]);

    const renders = getItem({ attr, type, inputNode });
    const _render = () => {
      // 使用 List 时  isList===true  && inputNode 是方法
      if (isList && typeof inputNode === 'function') {
        return (
          <RcForm.List {...listAttr} name={dataIndex}>
            {(fields, operation, meta) =>
              inputNode(
                fields.map((field) => ({ ...field, fieldKey: field.key })),
                operation,
                meta,
              )
            }
          </RcForm.List>
        );
      }
      return (
        <EditableCellItem
          {...itemAttr}
          name={dataIndex}
          rules={rules}
          preName={record[rowKey]}
          itemValue={record}
          children={renders}
          tipAttr={tipAttr}
          tip={tip}
        />
      );
    };

    return <td {...restProps}>{editing ? _render() : children}</td>;
  },
);

export const EditableCellItem = (props: EditableBaseCellItemProps) => {
  const {
    name,
    rules,
    preName = '',
    itemValue,
    children,
    tipAttr = {},
    tip,
    ...rest
  } = props;

  return (
    <RcForm.Field {...rest} name={name} rules={rules}>
      {(control, meta, form) => {
        const mergedName = toArray(name).length && meta ? meta.name : [];
        const fieldId = getFieldId(mergedName, preName);
        const onChange = (event: any) => {
          let value = event;
          if (event && event.target) {
            value = event.target.value;
          }
          control.onChange(value);
        };
        const childNode =
          typeof children === 'function'
            ? children({ ...control, id: fieldId }, meta, form, {
                record: itemValue,
              })
            : React.isValidElement(children)
            ? React.cloneElement(children as React.ReactElement, {
                ...control,
                onChange: onChange,
                id: fieldId,
              })
            : children;
        const errs = meta.errors.map((err) => err).join(',');
        return (
          <Tooltip
            color="#fff"
            overlayInnerStyle={{ color: 'red' }}
            {...tipAttr}
            title={tip ? tip(errs) : errs}
            open={!!meta.errors.length}
          >
            {childNode}
          </Tooltip>
        );
      }}
    </RcForm.Field>
  );
};

export default EditableCell;
