import React from 'react';
import get from 'rc-util/lib/utils/get';
import set from 'rc-util/lib/utils/set';

import { StoreFunProps } from './interface';

export const StoreContext = React.createContext({});

// 更新值
export const setVlaue = (store, namePath, value, removeIfUndefined = false) => {
  return set(store, namePath, value, removeIfUndefined);
};

// 获取值
export const getValue = (store, namePath) => {
  return get(store, namePath);
};

class Store {
  // 根据路径保存方法
  fun = {};

  // 保存状态
  store = {};

  //保存组件
  componentLists = [];
  // 初始化
  init = (entery) => {
    const { initialValue } = entery.props || {};
    // 初始值
    if (initialValue !== undefined) {
      // 获取保存路径
      const pathName = entery.getNamePath();
      if (pathName) {
        this.store = setVlaue(this.store, pathName, initialValue);
      }
    }
  };

  // 挂载之后 组件保存
  register = (entery) => {
    this.componentLists.push(entery);
    const { initialValue } = entery.props || {};
    if (initialValue !== undefined) {
      entery.reRender();
    }
    return () => {
      // 组件卸载进行组件删除
      this.componentLists = this.componentLists.filter(
        (item) => item !== entery,
      );
      // 保存的值进行删除
      const pathName = entery.getNamePath();
      if (pathName) {
        this.store = setVlaue(this.store, pathName, undefined, true);
      }
    };
  };

  // 获取值
  getStoreState = (pathName?) => {
    if (pathName) {
      // 如果有路径，则根据路径获取值
      return getValue(this.store, pathName);
    }
    return this.store;
  };

  getComponent = () => {
    return this.componentLists;
  };

  getStore = () => {
    return {
      getFun: this.getFun,
      getComponent: this.getComponent,
      getStoreState: this.getStoreState,
      getItemStore: this.getItemStore,
    };
  };
  // 子项内的方法
  getItemStore = () => {
    return {
      init: this.init,
      register: this.register,
      getStoreState: this.getStoreState,
      updateValue: this.updateValue,
      getValue: this.getValue,
    };
  };

  // 子项操作
  // 更新值
  updateValue = (pathName, value) => {
    const preValue = this.getValue(pathName);
    this.store = setVlaue(this.store, pathName, value);
    const current = this.getValue(pathName);
    // 通知对应的组件进行强制更新
    this.notifyObservers(pathName, current, preValue);
  };
  // 获取值
  getValue = (pathName) => {
    return getValue(this.store, pathName);
  };
  // 通知更新组件
  notifyObservers = (pathName, current, preValue) => {
    this.componentLists.forEach(({ onChangeStore, getNamePath }) => {
      const currentPath = getNamePath();
      // 判断路径相同的进行值更新
      if (currentPath.join('') === pathName.join('')) {
        onChangeStore(pathName, current, preValue);
      }
    });
  };
  // 获取方法
  getFun = (pathName?) => {
    if (pathName) {
      return (
        this.componentLists.filter((item) => {
          if (item.getNamePath().length === 0) {
            return false;
          }
          return item.getNamePath().join('') === pathName.join('');
        }) || []
      );
    }
    return this.componentLists.map((item) => {
      return {
        name: item.getNamePath(),
        childFun: item.childFun,
      };
    });
  };
}

/** 状态管理 */
const useStore = (form?) => {
  const formRef = React.useRef<StoreFunProps>();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new Store();
      formRef.current = formStore.getStore();
    }
  }
  return [formRef.current];
};

export default useStore;
