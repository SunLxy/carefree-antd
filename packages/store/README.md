# `carefree-antd-store`

> npm i carefree-antd-store

## 功能

1. 字段值保存
2. 组件卸载字段值删除
3. 值变更进行触发数据保存到公共存储中
4. 传递一个 watchList 对象 (默认为`onValuesChange`事件，`onValuesChange` 为输入组件内容手动变更触发，联动不进行触发)
   1. 对象的每一项为 字段对应方法，
   2. "#" 为所有字段进行变更触发的方法 传递值为所有字段的值的集合对象
5. 值变更联动 当依赖的字段进行变更时值进行 调用 `setPathValue` 方法
6. `setPathValue` 方法中 `watchList`对应字段的方法进行监听，自己写数据联动
