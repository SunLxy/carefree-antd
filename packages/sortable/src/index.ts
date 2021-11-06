import Sortable from 'sortablejs';
import lodash, { cloneDeep } from 'lodash';
import update from 'immutability-helper';

export interface OnEndItemProps {
  children: OnEndItemProps[];
  [key: string]: any;
}
/**
 * @description:
 * @param {string} path 路径
 * @return {Array<number>}
 */
export const getPathArr = (path: string): number[] =>
  (path || '').split('-').map((k: string) => Number(k));
// 转化更新数据路径
export const getUpdatePath = (path: string): string =>
  (path || '').split('-').join('.children.');

// 根据路径获取数据
export const getPathData = (
  path: string,
  data: OnEndItemProps[],
  isChild?: boolean,
) => {
  let result: any;
  const arr = getPathArr(path);
  arr.forEach((k, index) => {
    if (index === 0) {
      result = data[k];
    } else {
      if (result.children) {
        result = result.children[k];
      }
    }
  });
  if (isChild && result.children) {
    result = result.children;
  }
  return result;
};
// 清除 空数据
export const clearEmtyData = (dataList: OnEndItemProps[]) => {
  let childList = dataList.filter((item) => item);
  childList.forEach((item) => {
    if (item.children && Array.isArray(item.children) && item.children.length) {
      item.children = clearEmtyData(item.children);
    }
  });
  return childList;
};

// 获取新老位置
export const getNewAndOld = (evt: Sortable.SortableEvent) => {
  const oldIndex = evt.oldIndex as number;
  const newIndex = evt.newIndex as number;
  const pullMode = evt.pullMode;
  const oldPath = (evt.clone['dataset'] && evt.clone['dataset']['id']) || '';
  let oldParentPath = oldPath.split('-');
  oldParentPath.pop();
  const toDataId = (evt.to['dataset'] && evt.to['dataset']['id']) || '';
  console.log('evt', evt);
  // 判断 pullMode 值 可以判断出 是在一个里面还是不在一个里面
  return {
    // 老的数组下标
    oldIndex,
    // 新的数组下标
    newIndex,
    // 如果 pullMode 为 null 则 当前层级排序
    pullMode,
    // 如果 oldParentPath 为空 则 为最外层数据
    oldParentPath: oldParentPath.join('-'),
    // 老的 数组下标 路径
    oldPath: oldPath,
    // 最新放入的父级数组下标路径
    newParentPath: toDataId || '',
    // 最新的放置下标路径
    newPath: `${toDataId}-${newIndex}`,
  };
};
export const onEnd = (
  evt: Sortable.SortableEvent,
  dataList: OnEndItemProps[],
  config: OnEndItemProps[],
) => {
  const OptData = cloneDeep(dataList);
  const {
    oldIndex,
    newIndex,
    pullMode,
    oldParentPath,
    oldPath,
    newParentPath,
    newPath,
  } = getNewAndOld(evt);
  if (
    typeof oldIndex !== 'number' ||
    typeof newIndex !== 'number' ||
    oldPath === newPath
  ) {
    return {
      dataList: OptData,
      item: undefined,
      path: newPath,
    };
  }

  // 当前内部排序
  if (!pullMode && oldParentPath) {
    const parentChildData = getPathData(oldParentPath, OptData, true);
    const oldItem = getPathData(oldPath, OptData);
    const parentChild = update(parentChildData, {
      $splice: [
        [oldIndex, 1],
        [newIndex, 0, oldItem],
      ],
    });
    const updateParentPath = getUpdatePath(oldParentPath);
    const resultData = lodash.update(
      OptData,
      `${updateParentPath}.children`,
      () => parentChild,
    );
    return {
      dataList: cloneDeep(resultData),
      item: oldItem,
      path: newPath,
    };
  } else if (pullMode === 'clone') {
    // 克隆的数据 config
    const newAddItem: any = getPathData(oldPath, config, true);
    if (newParentPath === '') {
      // 最外层的
      OptData.splice(newIndex, 0, newAddItem);
      return {
        item: newAddItem,
        dataList: cloneDeep(OptData),
      };
    } else {
      // 内层
      const parentChildData = getPathData(newParentPath, OptData, true);
      parentChildData.splice(newIndex, 0, newAddItem);
      const resultData = lodash.update(
        cloneDeep(OptData),
        `${newParentPath}.children`,
        () => parentChildData,
      );
      return {
        item: newAddItem,
        dataList: cloneDeep(resultData),
      };
    }
    // const newAddItem: any = getPathData(oldPath, config);
    // const parentChildData = getPathData(newParentPath, OptData, true);
    // parentChildData.splice(newIndex, 0, newAddItem);
    // const resultData = lodash.update(
    //   OptData,
    //   `${newParentPath}.children`,
    //   () => parentChildData,
    // );
    // return {
    //   dataList: cloneDeep(resultData),
    //   item: newAddItem,
    //   path: newPath,
    // };
  }
  // 1. 先取老的值
  // 2. 把老的位置的值为空 用于站位
  // 3. 把老的值 放在新的位置上
  // 4. 把刚才置空的位置过滤掉

  // 1. 先取老的值
  const oldItem = getPathData(oldPath, OptData);
  // 2把老的位置的值为空 用于站位
  const updateParentPath = getUpdatePath(oldPath);
  const emtyData = lodash.update(
    OptData,
    `${updateParentPath}`,
    () => undefined,
  );
  if (
    (newParentPath === '' || !newParentPath) &&
    oldParentPath !== '' &&
    oldParentPath
  ) {
    // 最新的位置为 最外层 老的位置为内层
    emtyData.splice(newIndex, 0, oldItem);
    return {
      dataList: cloneDeep(clearEmtyData(emtyData)),
      item: oldItem,
      path: newIndex,
    };
  } else if (
    (oldParentPath === '' || !oldParentPath) &&
    (newParentPath === '' || !newParentPath)
  ) {
    // 新的老的都是最外层
    const resultData = update(emtyData, {
      $splice: [
        [oldIndex, 1],
        [newIndex, 0, oldItem],
      ],
    });
    return {
      dataList: cloneDeep(clearEmtyData(resultData)),
      item: oldItem,
      path: newPath,
    };
  }
  const parentChildData = getPathData(newParentPath, emtyData, true);
  parentChildData.splice(newIndex, 0, oldItem);
  const resultData = lodash.update(
    emtyData,
    `${newParentPath}.children`,
    () => parentChildData,
  );
  return {
    dataList: cloneDeep(clearEmtyData(resultData)),
    item: oldItem,
    path: newPath,
  };
};
