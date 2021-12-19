import { OperationType } from './../ButtonGroup';
import { TransferRef } from './../index';
export const getOperationResult = (
  type: OperationType,
  _store: TransferRef['store'],
  rowKey: string,
) => {
  // 左侧 和 右侧 数据
  let rightList: any[] = [];
  let leftList: any[] = [];
  let selectedKeys = [];
  let selectedRows = [];
  let selectedType = undefined;
  if (type === 'delete') {
    // 1. 向左移动   选中移动 直接删除选中的就行了
    rightList = _store.rightList.filter(
      (item) => !_store.rightSelected.selectedRowKeys.includes(item[rowKey]),
    );
    const rest = _store.rightList.filter((item) => {
      const fig = _store.rightSelected.selectedRowKeys.includes(item[rowKey]);
      const fig2 = _store.leftList.find((it) => it[rowKey] === item[rowKey]);
      if (fig && !fig2) {
        return true;
      }
      return false;
    });
    leftList = rest.concat(_store.leftList);
    selectedKeys = _store.rightSelected.selectedRowKeys;
    selectedRows = _store.rightSelected.selectedRows;
    selectedType = 'right';
  } else if (type === 'allDelete') {
    // 2. 向左移动 全部移动 直接清空右侧数据 移入右侧
    rightList = [];
    _store.rightList.forEach((item) => {
      const fig2 = _store.leftList.find((it) => it[rowKey] === item[rowKey]);
      if (!fig2) {
        leftList.push(item);
      }
    });
    leftList = leftList.concat(_store.leftList);
    selectedType = 'right';
  } else if (type === 'add') {
    // 3. 向右移动   选中移动 直接放入右侧数据列表中
    const rest = _store.leftList.filter((item) => {
      const fig = _store.leftSelected.selectedRowKeys.includes(item[rowKey]);
      const fig2 = _store.rightList.find((it) => it[rowKey] === item[rowKey]);
      if (fig && !fig2) {
        return true;
      }
      return false;
    });
    rightList = rest.concat(_store.rightList);
    leftList = _store.leftList.filter(
      (item) => !_store.leftSelected.selectedRowKeys.includes(item[rowKey]),
    );
    selectedKeys = _store.leftSelected.selectedRowKeys;
    selectedRows = _store.leftSelected.selectedRows;
    selectedType = 'left';
  } else if (type === 'allAdd') {
    // 4. 向右移动   全部移动 直接左侧数据放入右侧
    _store.leftList.forEach((item) => {
      const fig2 = _store.rightList.find((it) => it[rowKey] === item[rowKey]);
      if (!fig2) {
        rightList.push(item);
      }
    });
    leftList = [];
    rightList = rightList.concat(_store.rightList);
    selectedType = 'left';
  }
  return {
    leftList,
    rightList,
    selectedKeys,
    selectedRows,
    selectedType,
  };
};
