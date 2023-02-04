---
title: watch
order: 4
nav:
  title: 表单工具
  order: 3
group:
  path: /
---

## 表单监听

**useWatchList**

收集在监听后需要的一些处理数据的方法

类型：`(props: {[x: string]: any}) => ChildPropsType[]`

```js
export const WatchItem = (props: { [x: string]: any }) => {
  const { children, ...rest } = props || {};
  const [childProps] = useWatchList(props);
  if (typeof children === 'function') {
    return children({ ...rest, childProps });
  }
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ...rest });
  }
  return children;
};
```

**WatchItem**

监听组件

类型：`(props: {[x: string]: any}) => any`

```js
export default ()=>{

  return <Form.Item name="a" label="测试" >
      <WatchItem><Input ></WatchItem>
  </Form.Item>
}

```
