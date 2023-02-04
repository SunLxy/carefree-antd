---
title: hide
order: 4
nav:
  title: 表单
  order: 1
group:
  path: /form
  order: 4
---

通过设置 `isHide` 属性，判断表单项是否可以有隐藏操作
通过设置 `initialHide` 属性 ，设置初始表单项隐藏或展示

## 基本使用

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
        initialHide={{ name1: true }}
        onValuesChange={(value, allValue) => {
          console.log('打印操作的值：allValue--->', allValue);
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '测试',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
          {
            label: '测试1',
            name: 'name1',
            type: 'Input',
            isHide: true,
            rules: [{ required: true, message: '请输入' }],
          },
        ]}
      />
    </div>
  );
};
```

## 和 watch 一起使用

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
        initialHide={{ name1: true }}
        onValuesChange={(value, allValue) => {
          console.log('打印操作的值：allValue--->', allValue);
        }}
        watchList={{
          namea: (value, allValue, forms, hide) => {
            if (value === '12') {
              hide.updateValue('name1', false);
            } else {
              hide.updateValue('name1', true);
            }
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '请输入`12`测试',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
          {
            label: '测试1',
            name: 'name1',
            type: 'Input',
            isHide: true,
            rules: [{ required: true, message: '请输入' }],
          },
        ]}
      />
    </div>
  );
};
```

## 使用 useFormItemHide

```tsx
import 'antd/dist/reset.css';
import SimpleForm from 'carefree-antd-form';
import React from 'react';

export default () => {
  const [form] = SimpleForm.useForm();
  const [hide] = SimpleForm.useFormItemHide();
  // 只用组件加载的时候 运行一次
  React.useMemo(() => hide.setInitialValues({ name1: true }, true), []);
  return (
    <div>
      <SimpleForm
        formHide={hide}
        form={form}
        onValuesChange={(value, allValue) => {
          console.log('打印操作的值：allValue--->', allValue);
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '测试',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
          {
            label: '测试1',
            name: 'name1',
            type: 'Input',
            isHide: true,
            rules: [{ required: true, message: '请输入' }],
          },
        ]}
      />
    </div>
  );
};
```
