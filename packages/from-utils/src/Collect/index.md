---
title: subscribe
order: 2
nav:
  title: 表单工具
  order: 3
group:
  path: /
---

## 收集表单

**useSubscribe**

状态存储 `hook`

类型：`(sub?: Subscribe) => Subscribe[]`

```ts
const [subscribe] = useSubscribe();
```

**SubscribeFormProvider**

放在最外层，用于收集 from 表单保存

类型：`React.Context<Subscribe>`

```js
export default () => {
  const [subscribe] = useSubscribe();

  return (
    <SubscribeFormProvider.Provider value={subscribe}>
      // ....
    </SubscribeFormProvider.Provider>
  );
};
```

**useSubscribeFormProvider**

获取 `SubscribeFormProvider` context 值

类型：`() => Subscribe`

```js
export default () => {
  const subscribe = useSubscribeFormProvider();

  return <div></div>;
};
```

**useSubscribeReginsterId**

把当前表单保存到状态收集器中

类型：`({form: FormInstance,hide: HideGetStoreProps, subscribe: Subscribe, name?: string}) => void`

| 参数      | 类型                | 说明                   |
| --------- | ------------------- | ---------------------- |
| name      | `string\|number`    | 表单名称               |
| form      | `FormInstance<any>` | 通过 Form.useForm()    |
| subscribe | `Subscribe`         | 通过 useSubscribe()    |
| hide      | `HideStore`         | 通过 useHideFormItem() |

```js
export default () => {
  const [subscribe] = useSubscribe();
  const [forms] = Form.useForm();
  const [sub] = useSubscribe();
  const [hide] = useHideFormItem();

  useSubscribeReginsterId({
    name: props.name,
    form: forms,
    subscribe: sub,
    hide: hide,
  });

  return <div></div>;
};
```
