### 依赖安装

```bash
 npm i carefree-sortable

```

## Sortable 拖拽数据处理

1. 依赖于 `immutability-helper`和`lodash`
2. 当前只是方法集合 不是 dom 操作，dom 操作部分在案例中

### getNewAndOld 获取新老数据位置

```ts
/**
 *  evt: Sortable 拖拽事件中的 evt
 * */
type GetNewAndOldProps = (evt: Sortable.SortableEvent) => {
  // 老的数组下标
  oldIndex: number | undefined;
  // 新的数组下标
  newIndex: number | undefined;
  // 如果 pullMode 为 null 则 当前层级排序
  pullMode: 'clone' | boolean | undefined;
  // 如果 oldParentPath 为空 则 为最外层数据
  oldParentPath: string | undefined;
  // 老的 数组下标 路径
  oldPath: string | undefined;
  // 最新放入的父级数组下标路径
  newParentPath: string | undefined;
  // 最新的放置下标路径
  newPath: string | undefined;
};
```

### getPathArr 路径进行转换成数组

```ts
/**
 * path: getNewAndOld 中返回的 path 路径
 */
type GetPathArrProps = (path: string) => number[];
```

### getUpdatePath 转化更新数据路径

1. 路径数组格式化成 `lodash`中的`update`需要的那种`1.children.1.children.1`这种格式(`lodash.update(array,"1.children.1.children.1", updater)`)

```ts
/**
 * path: getNewAndOld 中返回的 path 路径
 */
type GetUpdatePathProps = (path: string) => string;
```

### getPathData 根据路径获取数据

```ts
/**
 * path: getNewAndOld 中返回的 path 路径
 * dataList；数据源
 * isChild：是否返回 children 列表
 */
type GetPathDataProps = (
  path: string,
  dataList: OnEndItemProps[],
  isChild?: boolean,
) => any;
```

### clearEmtyData 清除空数据

```ts
/**
 * dataList: 数据源
 */
type ClearEmtyDataProps = (dataList: OnEndItemProps[]) => OnEndItemProps[];
```

### onEnd 拖拽结束

1. 此方法为`sortablejs`中`onEnd`事件触发后数据处理
2. 此方法可还用于`sortablejs`中的`onUpdate`事件和`onAdd`事件
3. 这只是一个方法集合，因此 dom 操作部分在下方代码中

```ts
/**
 * evt: Sortable 拖拽事件中的 evt
 * dataList；数据源
 * config: clone 拖拽数据源
 * */
type OnEndProps = (
  evt: Sortable.SortableEvent,
  dataList: OnEndItemProps[],
  config: OnEndItemProps[],
) => {
  dataList: OnEndItemProps[];
  item: any | undefined;
  path: string | number;
};
```

### 案例

```tsx
import React, { useState, useRef } from 'react';
import Sortable from 'sortablejs';
import { onEnd, getNewAndOld } from 'carefree-sortable';
export interface SortableProps {
  sortProps?: Sortable.Options;
  children?: React.ReactNode;
  nodeTag?: string;
  warpProps?: any;
}
const ItemWarp = (props: SortableProps) => {
  const { sortProps, children, nodeTag = 'div', warpProps = {} } = props;
  const sortTableRef = useRef<Sortable>();

  const newSortable = (node: HTMLElement) => {
    if (!node) {
      sortTableRef.current && sortTableRef.current.destroy();
      return;
    }
    sortTableRef.current = Sortable.create(node, {
      ...(sortProps || {}),
    });
  };
  return React.createElement(
    nodeTag,
    { ...(warpProps || {}), ref: newSortable },
    React.Children.map(children as React.ReactElement<any>[], (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          'data-id': child.key,
        } as any);
      }
    }),
  );
};

const config = [
  {
    title: '配置',
    children: [
      { title: '配置 1.1' },
      { title: '配置 1.2' },
      { title: '配置 1.3' },
      { title: '配置 1.4' },
      { title: '配置 1.5' },
      { title: '配置 1.6' },
    ],
  },
];

export default () => {
  const [dataList, setDataList] = useState([
    {
      title: ' 测试1',
      children: [
        { title: 'item 1.1' },
        { title: 'item 1.2' },
        { title: 'item 1.3' },
        { title: 'item 1.4' },
        { title: 'item 1.5' },
        { title: 'item 1.6' },
      ],
    },
    {
      title: ' 测试2',
      children: [
        { title: 'item 2.1' },
        { title: 'item 2.2' },
        { title: 'item 2.3' },
        { title: 'item 2.4' },
        { title: 'item 2.5' },
        { title: 'item 2.6' },
      ],
    },
    {
      title: ' 测试3',
      children: [
        { title: 'item 3.1' },
        { title: 'item 3.2' },
        { title: 'item 3.3' },
        { title: 'item 3.4' },
        { title: 'item 3.5' },
        { title: 'item 3.6' },
      ],
    },
  ]);

  const onUpdate = (evt: Sortable.SortableEvent) => {
    const {
      oldIndex,
      newIndex,
      pullMode,
      oldParentPath,
      oldPath,
      newParentPath,
      newPath,
    } = getNewAndOld(evt);
    console.log(evt);
    const item = {
      element: evt.item,
      clone: evt.clone,
      parentElement: evt.from,
    };
    // 需要对dom节点进行操作
    // 1. 当前内部进行 排序
    if (!pullMode) {
      /* eslint-disable */
      if (item.parentElement !== null) {
        item.parentElement.removeChild(evt.item);
      }
      if (item.parentElement) {
        const refChild = item.parentElement.childNodes[oldIndex] || null;
        if (refChild) {
          item.parentElement.insertBefore(evt.item, refChild);
        } else {
          item.parentElement.appendChild(evt.item);
        }
      }
    } else if (pullMode === 'clone') {
      // 克隆添加的 移除当前所在的位置
      if (item.element && item.element.parentElement) {
        item.element.parentElement.removeChild(item.element);
      }
    } else {
      // 不是内部排序 不是 克隆 添加
      if (item.element && item.element.parentElement) {
        item.element.parentElement.removeChild(item.element);
      }
      if (item.parentElement) {
        const refChild = item.parentElement.childNodes[oldIndex] || null;
        if (refChild) {
          item.parentElement.insertBefore(evt.item, refChild);
        } else {
          item.parentElement.appendChild(evt.item);
        }
      }
    }
    const result = onEnd(evt, dataList, config);
    console.log(result);
    setDataList(result.dataList);
  };

  const sortProps: Sortable.Options = {
    group: 'nodes',
    animation: 300,
    fallbackOnBody: true,
    onAdd: onUpdate,
    onUpdate: onUpdate,
  };

  const loop = (data: any[], parentId?: string) => {
    return (data || []).map((item, index: number) => {
      const dataId = parentId ? `${parentId}-${index}` : `${index}`;
      if (item.children) {
        return (
          <ItemWarp
            sortProps={sortProps}
            key={dataId}
            warpProps={{ 'data-id': dataId, style: { padding: 20 } }}
          >
            {loop(item.children, `${dataId}`)}
          </ItemWarp>
        );
      }
      return <div key={dataId}>{item.title}</div>;
    });
  };

  return (
    <div>
      <div>
        配置
        {config.map((item, index) => {
          const { children } = item;
          return (
            <ItemWarp
              sortProps={{
                group: {
                  name: 'nodes',
                  pull: 'clone',
                  put: false,
                },
                animation: 300,
                fallbackOnBody: true,
                sort: false,
              }}
              key={`${index}`}
              warpProps={{ 'data-id': `${index}` }}
            >
              {children.map((child, k) => {
                return <div key={`${index}-${k}`}>{child.title}</div>;
              })}
            </ItemWarp>
          );
        })}
      </div>
      <ItemWarp sortProps={sortProps} warpProps={{ style: { padding: 20 } }}>
        {loop(dataList)}
      </ItemWarp>
    </div>
  );
};
```
