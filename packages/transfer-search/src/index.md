---
title: 穿梭框-查询
order: 1
nav:
  order: 2
  title: Transfer-Search
  path: /transfer-search
group:
  path: /
---

### 案例

```tsx
import React from 'react';
import TransferSearch from 'carefree-antd-transfer-search';

export default () => (
  <div>
    <TransferSearch
      rowKey="id"
      columns={[{ title: '标题', dataIndex: 'title' }]}
      initValue={{
        left: {
          dataList: [{ id: 1, title: '标题' }],
        },
        right: {
          dataList: [{ id: 2, title: '标题2' }],
        },
      }}
      Api={{
        // 左侧查询接口
        left: {
          url: '',
          options: {},
          before: () => ({}),
          after: () => ({}),
        },
        // 右侧查询接口
        right: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // 中间按钮 往右
        add: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // 中间按钮 往右
        allAdd: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // 中间按钮 往左
        allDelete: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
        // 中间按钮 往左
        delete: {
          url: '',
          before: () => ({}),
          after: () => ({}),
        },
      }}
      // 左侧查询表单配置
      leftSearch={{
        config: [
          {
            label: '标题',
            name: 'name1',
            type: 'Input',
          },
          {
            label: '标题',
            name: 'name2',
            type: 'Input',
          },
        ],
      }}
      // 右侧查询表单配置
      rightSearch={{
        config: [
          {
            label: '标题',
            name: 'name1',
            type: 'Input',
          },
          {
            label: '标题',
            name: 'name2',
            type: 'Input',
          },
        ],
      }}
    />
  </div>
);
```
