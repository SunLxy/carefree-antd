---
title: update
order: 2
nav:
  title: 表单
  order: 1
group:
  path: /form
  order: 2
---

`updateValue` 和 `bathUpdateValue` 方法更新表单值，可以触发 `onValuesChange` 事件

## 基础更新

```tsx
import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  return (
    <div>
      <SimpleForm
        form={form}
        onValuesChange={(value, allValue) => {
          console.log('打印操作的值：allValue--->', allValue);
        }}
        watchList={{
          name: (value, allValue, forms, hide) => {
            const { updateValue, bathUpdateValue } = forms;
            updateValue('name1', value);
          },
          name1: (value, allValue, forms, hide) => {
            const { updateValue, bathUpdateValue } = forms;
            bathUpdateValue({ name2: value, name3: value });
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '请输入测试',
            name: 'name',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
          {
            label: '测试1',
            name: 'name1',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
          {
            label: '测试2',
            name: 'name2',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
          {
            label: '测试3',
            name: 'name3',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
        ]}
      />
    </div>
  );
};
```

## 通过 解析 useForm() 获取更新方法

调用 `getChildItemFun` 方法获取

```tsx
import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  const { updateValue, bathUpdateValue } = SimpleForm.getChildItemFun(form);
  return (
    <div>
      <SimpleForm
        form={form}
        onValuesChange={(value, allValue) => {
          console.log('打印操作的值：allValue--->', allValue);
        }}
        watchList={{
          name: (value, allValue, forms, hide) => {
            updateValue('name1', value);
          },
          name1: (value, allValue, forms, hide) => {
            bathUpdateValue({ name2: value, name3: value });
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '请输入测试',
            name: 'name',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
          {
            label: '测试1',
            name: 'name1',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
          {
            label: '测试2',
            name: 'name2',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
          {
            label: '测试3',
            name: 'name3',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
        ]}
      />
    </div>
  );
};
```
