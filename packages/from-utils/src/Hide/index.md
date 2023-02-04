---
title: hide
order: 3
nav:
  title: 表单工具
  order: 3
group:
  path: /
---

## 表单隐藏

**useHideFormItem**

状态存储 `hook`

类型：`(form?: HideGetStoreProps) => HideGetStoreProps[]`

```js
export default () => {
  const [hide] = useHideFormItem();
};
```

**HideContext**

放在最外层，用于收集 表单项是否隐藏/展示

类型：`React.Context<HideGetStoreProps>`

```js
export default () => {
  const [hide] = useHideFormItem();

  return <HideContext.Provider value={hide}>// ....</HideContext.Provider>;
};
```

**useHideContext**

获取 `HideContext` context 值

类型：`() => HideGetStoreProps`

```js
export default () => {
  const hideContext = useHideContext();

  return <div></div>;
};
```

**HideItem**

隐藏组件

| 参数 | 类型                                 | 说明     |
| ---- | ------------------------------------ | -------- |
| name | `string\|number\|(string\|number)[]` | 字段名称 |

```js
export default () => {
  return <HideItem name="a"></HideItem>;
};
```
