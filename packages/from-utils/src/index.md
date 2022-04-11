---
title: start
order: 1
nav:
  order: 9
  title: FormUtils
  path: /from-utils
group:
  path: /
---

根据 rc-field-from 封装的表单联动/隐藏/监听 组件或工具

```bash

npm i carefree-rc-field-from-utils

```

为了简化使用 部分类型声明

**每一项的 Form 配置**

```ts
// ItemChildType 为 string 类型的值 对应单个表单组件
export type ItemChildType = string | 'Custom'; // 默认 的类型

export interface CarefreeFormProps<M = ItemChildType, T = any, K = any>
  extends FormProps {
  config?: CarefreeFormConfigProps<M, T, K>[];
  children?: React.ReactNode;
  /** 监听字段 */
  watchList?: WatchListProps;
  /** Form.useFormItemHide 返回值  */
  formHide?: HideGetStoreProps;
  /** 初始值 隐藏显示 字段对应的值 */
  initialHide?: { [x: string]: boolean };
  // 用于多个form表单
  subscribe?: Subscribe;
  /** 表单项布局 **/
  layout?: 'vertical' | 'horizontal' | 'space';
}
```

**每一项的 Form Item 配置**

```ts
/** config 配置项  */
export interface CarefreeFormConfigProps<M = ItemChildType, T = any, K = any> {
  /** 类型 */
  type: M;
  /** formItem 表单 label 值 */
  label?: string | React.ReactNode;
  /** formItem 表单 name 值 */
  name?: string | number | (string | number)[];
  /** formItem 表单 其他属性值*/
  itemAttr?: Omit<K, 'rules' | 'label' | 'name'>;
  /** formItem 表单 children 中组件参数*/
  attr?: Partial<T>;
  /** formItem 表单 规则*/
  rules?: Rule[];
  render?: React.ReactNode | ((...arg: any) => React.ReactNode);
  // 是否启用组件隐藏显示
  isHide?: boolean;
}
```
