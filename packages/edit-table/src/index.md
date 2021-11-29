---
title: 快速开始
order: 1
nav:
  order: 2
  title: EditTable
  path: /edit-table
group:
  path: /
---

### 依赖安装

```bash
 npm i carefree-antd-edit-table
```

### 案例

```tsx
import React from 'react';
import { Input, Col, InputNumber } from 'antd';
import EditTable from 'carefree-antd-edit-table';
import 'antd/dist/antd.css';
const originData = [];

for (let i = 0; i < 10; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    // address: `London Park no. ${i}`,
  });
}

export default () => {
  const [data, setData] = React.useState(originData);
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
      type: 'Custom',
      inputNode: (edit) => {
        return <Input {...edit} />;
      },
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
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
      type: 'Input',
    },
  ];
  return (
    <EditTable
      rowKey="key"
      optIsFirst={true}
      dataSource={data}
      columns={columns}
      onSave={(list) => setData(list)}
    />
  );
};
```
