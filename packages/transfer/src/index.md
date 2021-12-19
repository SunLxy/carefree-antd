---
title: 穿梭框
order: 1
nav:
  order: 2
  title: Transfer
  path: /transfer
group:
  path: /
---

### 案例

```tsx
import React from 'react';
import Transfer from 'carefree-antd-transfer';

export default () => (
  <div>
    <Transfer
      leftDataSource={[
        { a: '测试1', b: '测试21', id: 1 },
        { a: '测试2', b: '测试211', id: 2 },
        { a: '测试3', b: '测试212', id: 3 },
        { a: '测试4', b: '测试213', id: 4 },
        { a: '测试1', b: '测试21', id: 11 },
        { a: '测试2', b: '测试211', id: 22 },
        { a: '测试3', b: '测试212', id: 33 },
        { a: '测试4', b: '测试213', id: 44 },
        { a: '测试1', b: '测试21', id: 111 },
        { a: '测试2', b: '测试211', id: 222 },
        { a: '测试3', b: '测试212', id: 333 },
        { a: '测试4', b: '测试213', id: 444 },
        { a: '测试1', b: '测试21', id: 1111 },
        { a: '测试2', b: '测试211', id: 2222 },
        { a: '测试3', b: '测试212', id: 3333 },
        { a: '测试4', b: '测试213', id: 4444 },
      ]}
      rightDataSource={[
        { a: '测试5', b: '测试215', id: 5 },
        { a: '测试6', b: '测试2116', id: 6 },
        { a: '测试7', b: '测试2127', id: 7 },
        { a: '测试8', b: '测试2138', id: 8 },
      ]}
      rowKey="id"
      columns={[
        {
          dataIndex: 'a',
          title: '标题',
          align: 'center',
        },
        {
          dataIndex: 'b',
          title: '标3',
          align: 'center',
        },
      ]}
    />
  </div>
);
```
