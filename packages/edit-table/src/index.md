---
title: 编辑表格
order: 2
nav:
  title: 编辑表格
  order: 2
group:
  path: /
---

## 依赖安装

```bash
 npm i @carefrees/antd-edit-table # yarn add @carefrees/antd-edit-table # pnpm add @carefrees/antd-edit-table
```

## 引入

```ts
import { EditTableBase } from '@carefrees/antd-edit-table';
```

## 案例

```tsx
import { useState } from 'react';
import { EditTableBase, useChildInstance } from '@carefrees/antd-edit-table';
import { Button, message, Space } from 'antd';

interface RowDataType {
  name?: string;
  age?: number;
  rowId?: string;
}

/**字段对应的校验规则*/
const rules = {
  name: [{ required: true, message: '请输入姓名' }],
  age: [{ required: true, message: '请输入年龄' }],
};

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    type: 'input',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    type: 'input',
  },
];

const PageMain = () => {
  const [dataSource, setDataSource] = useState<Partial<RowDataType>[]>([]);
  const childInstance = useChildInstance();

  const onSubmit = async () => {
    try {
      console.log(childInstance);
      const result = await childInstance.validateAll({});
      console.log('result', result);
    } catch (error) {
      if (error?.isHasOperationRow) {
        message.error('请先保存正在操作的行数据');
      }
      console.log(error);
    }
  };
  const onSubmit2 = async () => {
    try {
      console.log(childInstance);
      const result = await childInstance.validateAll({
        isHasOperationRow: false,
      });
      console.log('result', result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Space>
        <Button onClick={onSubmit}>验证是否存在正在操作的数据</Button>
        <Button onClick={onSubmit2}>不验证是否存在正在操作的数据</Button>
      </Space>
      <EditTableBase
        childInstance={childInstance}
        columns={columns}
        rowKey="rowId"
        dataSource={dataSource}
        onChange={setDataSource}
        rules={rules}
      />
    </div>
  );
};

export default PageMain;
```
