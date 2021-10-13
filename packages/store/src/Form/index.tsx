/**
 * 大概 antd from 表单内部状态管理
 * 只不过 这里的状态管理我用的 hooks ,antd form 表单里面使用的是 class类 进行处理的
 * */

import React from 'react';

export interface FormContextProps {
  onValuesChange: (pa: string, v: any) => void;
  store: {};
}

const FormContext = React.createContext<FormContextProps>({
  onValuesChange: () => {},
  store: {},
});

export const useFormContext = () => {
  return React.useContext(FormContext);
};

export function defaultGetValueFromEvent(
  valuePropName: string,
  ...args: any[]
) {
  const event = args[0];
  if (event && event.target && valuePropName in event.target) {
    return (event.target as HTMLInputElement)[valuePropName];
  }

  return event;
}

export interface UseFormProps {
  initalValues?: {};
  onValuesChange?: (current: {}, allData: {}) => void;
}

export const useForm = (props?: UseFormProps) => {
  const { initalValues = {} } = props || {};
  // 状态保存
  const [store, setStore] = React.useState(initalValues);
  const onValuesChange = (path, value) => {
    if (path) {
      const sto = { ...store, [path]: value };
      setStore({ ...sto });
      if ((props || {}).onValuesChange) {
        props.onValuesChange({ [path]: value }, { ...sto });
      }
    }
  };
  return {
    store,
    setStore,
    onValuesChange,
  };
};

const Item = (props) => {
  const { name, children } = props;
  const { onValuesChange, store } = useFormContext();
  const onChange = (value) => {
    if (onValuesChange && name) {
      onValuesChange(name, defaultGetValueFromEvent('value', value));
    }
  };
  if (typeof children === 'function') {
    return children({ onChange, value: store[name], name });
  }
  if (React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      onChange: onChange,
      // input... 部分原生组件 value===undefined 为不受控组件
      value: store[name] || '',
      id: name,
    });
  }
  return children;
};

const Form = (props: any) => {
  const { children, form } = props;
  return (
    <FormContext.Provider value={{ ...form }}>{children}</FormContext.Provider>
  );
};

Form.Item = Item;

export default Form;

export const Demo = () => {
  const form = useForm();
  return (
    <div>
      <Form form={form}>
        <Form.Item name="a">
          <input />
        </Form.Item>
      </Form>
      <button
        onClick={() => {
          console.log(form.store);
        }}
      >
        查看值
      </button>
    </div>
  );
};
