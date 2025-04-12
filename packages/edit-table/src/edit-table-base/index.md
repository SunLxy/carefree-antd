---
title: 编辑表格2
order: 2
nav:
  title: 编辑表格
  order: 2
group:
  path: /
---

## 依赖安装

```bash
 npm i carefree-antd-edit-table
```

### 案例

```tsx
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/reset.css';
import { EditableTableBase } from 'carefree-antd-edit-table';
import React from 'react';
const originData = [];

for (let i = 0; i < 5; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    // address: `London Park no. ${i}`,
  });
}

export default () => {
  const [data, setData] = React.useState(originData);
  const [tableProps, setTableProps] = React.useState({
    isAdd: true,
    isOpt: true,
    optIsFirst: true,
    optDeleteEditingDisabled: false,
  });
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '15%',
      editable: true,
      type: 'Custom',
      inputNode: (edit) => {
        return <Input {...edit} />;
      },
    },
    {
      title: 'isList',
      dataIndex: 'list',
      width: '15%',
      editable: true,
      type: 'Custom',
      isList: true,
      render: (text) => {
        return (
          text &&
          (text || [])
            .filter((it) => it)
            .map((ite) => ite.first)
            .join(',')
        );
      },
      inputNode: (fields, { add, remove }, { errors }) => (
        <>
          {fields.map(({ key, name, fieldKey, ...restField }, index) => (
            <EditTable.Item
              key={key}
              {...restField}
              name={[name, 'first']}
              fieldKey={[fieldKey, 'first']}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'Missing first name',
                },
              ]}
            >
              <Input placeholder="First Name" />
            </EditTable.Item>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
              Add field
            </Button>
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      ),
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
      type: 'Custom',
      rules: [{ required: true, message: '请输入' }],
      inputNode: <InputNumber />,
    },
    {
      title: 'age1',
      dataIndex: 'age1',
      width: '15%',
      editable: true,
      type: 'AutoComplete',
      attr: {
        style: { width: '100%' },
        options: [
          { label: '12', value: '12' },
          { label: '1233', value: '1233' },
        ],
      },
      rules: [{ required: true, message: '请输入' }],
    },
    {
      title: 'age2',
      dataIndex: 'age2',
      width: '15%',
      editable: true,
      type: 'Select',
      attr: {
        style: { width: '100%' },
        showSearch: true,
        options: [
          { label: 12, value: 12 },
          { label: 14, value: 14 },
        ],
      },
      rules: [{ required: true, message: '请输入' }],
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '20%',
      editable: true,
      type: 'Input',
    },
  ];

  console.log('data--->', data);

  return (
    <div>
      <Button
        onClick={() => {
          setTableProps({
            ...tableProps,
            isOptDelete: !tableProps.isOptDelete,
          });
        }}
      >
        删除按钮
      </Button>
      <Button
        onClick={() => {
          setTableProps({
            ...tableProps,
            optDeleteEditingDisabled: !tableProps.optDeleteEditingDisabled,
          });
        }}
      >
        删除按钮编辑禁用
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, isAdd: !tableProps.isAdd });
        }}
      >
        新增按钮
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, multiple: !tableProps.multiple });
        }}
      >
        多行编辑
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, optIsFirst: !tableProps.optIsFirst });
        }}
      >
        操作列前或后
      </Button>
      <Button
        onClick={() => {
          setTableProps({ ...tableProps, isOpt: !tableProps.isOpt });
        }}
      >
        无操作列
      </Button>
      <EditableTableBase
        initValue={{ address: 2193 }}
        onValuesChange={(list, value, allValue, id, form) => {
          setData(list);
          // console.log(list, value, allValue, id, form)
        }}
        rowKey="key"
        optIsFirst={true}
        dataSource={data}
        columns={columns}
        onSave={(list) => setData(list)}
        isAdd={true}
        {...tableProps}
      />
    </div>
  );
};
```
