import React from 'react';
import { useFormParentNameContext } from './../hooks';
import { HideContext } from './context';
import { HideGetStoreProps, NamePath } from './interface';

export interface HideState {}

export interface HideProps {
  hideContent: HideGetStoreProps;
  name: NamePath;
  initialValue?: boolean;
  formName?: string | number;
  children?: any;
}

class Hide extends React.Component<HideProps, HideState> {
  private mounted = false;
  private cancelRegisterFunc = () => {};

  constructor(props: HideProps) {
    super(props);
    if (props.hideContent) {
      const { hideContent } = props;
      const { init } = hideContent.getItemStore();
      init(this);
    }
  }

  componentDidMount() {
    const { hideContent } = this.props;
    // Register on init
    if (hideContent) {
      const { register } = hideContent.getItemStore();
      this.cancelRegisterFunc = register(this);
    }
    this.mounted = true;
  }

  componentWillUnmount() {
    this.cancelRegisterFunc();
    this.mounted = false;
  }

  getNamePath = () => {
    const { name, formName } = this.props;
    if (!Array.isArray(name)) {
      return (formName && [formName, name]) || [name];
    }
    return (formName && [formName].concat(name)) || name;
  };
  // 更新组件
  refresh = () => {
    if (this.mounted) {
      this.forceUpdate();
    }
  };

  getValue = () => {
    const { hideContent } = this.props;
    const { getValue } = hideContent.getItemStore();
    return getValue(this.getNamePath());
  };

  render() {
    const { children } = this.props;
    // 默认 false 展示
    // 只是判断是否进行显示和隐藏
    return !this.getValue() ? (
      <React.Fragment>{children}</React.Fragment>
    ) : (
      <React.Fragment />
    );
  }
}

export const HideItem = (
  props: Omit<HideProps, 'hideContent'> & { [x: string]: any },
) => {
  const hideContent = React.useContext(HideContext);
  const parentName = useFormParentNameContext();
  return <Hide {...props} formName={parentName} hideContent={hideContent} />;
};
