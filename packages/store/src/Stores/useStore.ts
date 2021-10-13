import React from 'react';
// import { setValue } from "./utils"
class Store {
  // 值存储
  store: {} = {};
  // 类组件保存
  componentList = [];

  // 顶层 Context 方法集合
  getStore = () => {
    return {};
  };
  // 初始化 ，初始化设置初始值 不做组件方面其他保存
  private init = (entery) => {
    console.log('init--->', entery);
    // 1. 判读是否有初始值，存在保存到 store 中
  };

  // 组件挂载完成后进行保存到 componentList 列表中
  private registerId = (entery) => {
    return () => {
      // 卸载组件 并设置值存储为undefined
      // 1. 删除组件保存
      this.componentList = this.componentList.filter((it) => it !== entery);
      // 2. 设置存储值为undefined
    };
  };

  // 子集包裹 Context 方法集合
  getChildStore = () => {
    return {};
  };
}

const useStore = (form?: {}) => {
  const formRef = React.useRef<{} | undefined>();
  if (form) {
    formRef.current = form;
  } else {
    formRef.current = new Store().getStore();
  }
  return [formRef.current];
};

export default useStore;
