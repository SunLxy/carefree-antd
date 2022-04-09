import React from 'react';
import { ContextProps } from './interface';
import { HOOK_MARK } from 'rc-field-form/lib/FieldContext';
import {
  InternalFormInstance,
  FormInstance,
  NamePath,
  InternalHooks,
} from 'rc-field-form/lib/interface';
import { getNamePath } from './utils';

export const FormContext = React.createContext<ContextProps>({});
export const useFormContext = () => React.useContext(FormContext);

export const FormParentNameContext = React.createContext<string | number>(
  undefined,
);

export const useFormParentNameContext = () =>
  React.useContext(FormParentNameContext);

export type GetChildItemFunRenter = Partial<InternalHooks> & {
  updateValue: (namePath: NamePath, value: any) => void;
  bathUpdateValue: (value: { [k: string]: any }) => void;
};

// 根据 Form.useForm() 返回值 [from] 进行获取子项中更新值的方法
export const getChildItemFun = (form: FormInstance): GetChildItemFunRenter => {
  let childFun: Partial<InternalHooks> = {};
  if (form) {
    const { getInternalHooks } = form as InternalFormInstance;
    childFun = getInternalHooks(HOOK_MARK);
  }
  const updateValue = (namePath: NamePath, value: any) => {
    if (childFun.dispatch) {
      childFun.dispatch({
        type: 'updateValue',
        namePath: getNamePath(namePath),
        value,
      });
    }
  };
  // 批量更新值
  const bathUpdateValue = (value: { [k: string]: any }) => {
    Object.entries(value).forEach(([path, value]) => {
      updateValue(path, value);
    });
  };
  return {
    ...childFun,
    updateValue,
    bathUpdateValue,
  };
};

// 获取子项中更新值的方法的 hook
export const useChildItemFun = (form: FormInstance) => {
  return React.useMemo(() => getChildItemFun(form), [form]);
};
