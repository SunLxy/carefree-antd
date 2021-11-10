import React from 'react';
import { FormInstance } from 'rc-field-form/lib/interface';
// 订阅 这个用于收集 form表单的
import { GetStoreProps } from '../Hide/interface';
export class Subscribe {
  private subForm: { [key: string]: FormInstance } = {};
  private subHide: { [key: string]: GetStoreProps } = {};

  registerId = (form: FormInstance, hide: GetStoreProps, name?: string) => {
    if (name) {
      this.subForm[name] = form;
      this.subHide[name] = hide;
    }
  };

  removeId = (name?: string) => {
    if (name) {
      delete this.subForm[name];
      delete this.subHide[name];
    }
  };
  get subForms() {
    return this.subForm;
  }
  get subHides() {
    return this.subHide;
  }
}

export const useSubscribe = (sub?: Subscribe) => {
  const subRef = React.useRef<Subscribe>();
  if (sub) {
    subRef.current = sub;
  } else {
    subRef.current = new Subscribe();
  }
  return [subRef.current];
};

// 保存所有form表单数据
export const FormSubscribeProvider = React.createContext<Subscribe>(
  new Subscribe(),
);
// 获取
export const useFormSubscribeProvider = () =>
  React.useContext(FormSubscribeProvider);
// 注册
export const useSubscribeReginsterId = ({
  form,
  subscribe,
  name,
  hide,
}: {
  form: FormInstance;
  hide: GetStoreProps;
  subscribe: Subscribe;
  name?: string;
}) => {
  if (name) {
    subscribe.registerId(form, hide, name);
  }
  // 卸载删除
  React.useEffect(() => {
    return () => subscribe.removeId(name);
  }, []);
};
