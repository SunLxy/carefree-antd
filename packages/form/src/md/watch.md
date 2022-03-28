---
title: watch
order: 3
nav:
  order: 2
  title: SimpleForm
  path: /form
group:
  path: /
---

form 加 `watchList` 属性, 对表单项更新值进行监听

## 基础监听

```tsx
import React from 'react';
import SimpleForm from 'carefree-antd-form';
import { Button, Form } from 'antd';
import 'antd/dist/antd.css';

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
          namea: (value, allValue, forms, hide) => {
            const { updateValue } = forms;
            updateValue('name1', value);
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '请输入测试',
            name: 'namea',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
          {
            label: '测试',
            name: 'name1',
            type: 'Input',
            rules: [{ required: true, message: '请输入' }],
          },
        ]}
      />
    </div>
  );
};
```

## 多个监听联动

```tsx
import React from 'react';
import SimpleForm from 'carefree-antd-form';
import { Button, Form } from 'antd';
import 'antd/dist/antd.css';

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
          namea: (value, allValue, forms, hide) => {
            const { updateValue } = forms;
            updateValue('name1', value);
          },
          name1: (value, allValue, forms, hide) => {
            const { updateValue } = forms;
            updateValue('name2', value);
          },
          name2: (value, allValue, forms, hide) => {
            const { updateValue } = forms;
            updateValue('name3', value);
          },
        }}
        colProps={{ span: 12 }}
        layout="vertical"
        config={[
          {
            label: '请输入测试',
            name: 'namea',
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

## 和 hide 一起使用

```tsx
import React from 'react';
import SimpleForm from 'carefree-antd-form';
import { Button, Form } from 'antd';
import 'antd/dist/antd.css';

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
