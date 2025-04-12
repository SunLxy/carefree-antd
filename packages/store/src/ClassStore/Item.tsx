import React from 'react';
import { StoreContext } from './useStore';

interface ItemChildProps {
  name: string | string[];
  storeContext: any;
  children?: any;
}

class ItemChild extends React.Component<ItemChildProps, {}> {
  cancelRegisterFunc: () => {};
  mount: boolean;
  childFun = {};

  constructor(props) {
    super(props);
    if (props.storeContext) {
      const { storeContext } = props;
      const { init } = storeContext.getItemStore();
      init(this);
    }
  }
  // 当前数据保存路径
  getNamePath = () => {
    const { name } = this.props;
    if (Array.isArray(name)) {
      return name;
    } else if (name) {
      return [name];
    }
    return [];
  };

  componentDidMount() {
    const { storeContext } = this.props;
    if (storeContext) {
      const { getItemStore } = storeContext;
      const { register } = getItemStore();
      // cancelRegisterFunc 用于卸载
      this.cancelRegisterFunc = register(this);
    }
    this.mount = true;
  }

  // 组件将要卸载
  componentWillUnmount() {
    this.cancelRegisterFunc();
    this.mount = false;
  }

  // 通过强制更新, 更新组件
  reRender = () => {
    if (this.mount) {
      // 通过强制更新
      this.forceUpdate();
    }
  };

  onChangeStore = (pathName, value, preValue) => {
    // 判断 组件更新
    if (preValue !== value) {
      this.reRender();
    }
  };

  // 值更新
  onChange = (value) => {
    const { storeContext } = this.props;
    if (storeContext) {
      const { getItemStore } = storeContext;
      const { updateValue } = getItemStore();
      updateValue(this.getNamePath(), value);
    }
  };

  getItemValue = () => {
    const { storeContext } = this.props;
    let value = undefined;
    if (storeContext) {
      const { getItemStore } = storeContext;
      const { getValue } = getItemStore();
      value = getValue(this.getNamePath());
    }
    return value;
  };
  // 传递下层组件参数
  getContorll = () => {
    const { storeContext } = this.props;
    const { getFun } = storeContext;
    return {
      onChange: this.onChange,
      value: this.getItemValue(),
      name: this.getNamePath(),
      warpRef: (fun) => (this.childFun = fun),
      getFun: getFun,
    };
  };

  render() {
    const { children } = this.props;
    let node = children;
    if (React.isValidElement(children)) {
      node = React.cloneElement(children, this.getContorll());
    } else if (typeof children === 'function') {
      node = children(this.getContorll());
    }
    return node;
  }
}

export type ItemChildClassProps = typeof ItemChild;

export default (props) => {
  const storeContext = React.useContext(StoreContext);
  return <ItemChild {...props} storeContext={storeContext} />;
};
