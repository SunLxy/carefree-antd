import React from 'react';
import { HOOK_MARK } from 'rc-field-form/lib/FieldContext';
import {
  InternalFormInstance,
  InternalNamePath,
  FormInstance,
} from 'rc-field-form/lib/interface';
import { FormContextProps, ChildPropsType } from './interface';

export const FormContext = React.createContext<FormContextProps>({});

export const useFormContext = () => React.useContext(FormContext);

// 根据 Form.useForm() 返回值 [from] 进行获取子项中更新值的方法
export const getChildItemFun = (form: FormInstance) => {
  let childFun: any = {};
  if (form) {
    const { getInternalHooks } = form as InternalFormInstance;
    childFun = getInternalHooks(HOOK_MARK);
  }
  const updateValue = (namePath: InternalNamePath, value: any) => {
    if (childFun.dispatch) {
      childFun.dispatch({
        type: 'updateValue',
        namePath,
        value,
      });
    }
  };
  return {
    ...childFun,
    updateValue,
  };
};

// 获取子项中更新值的方法的 hook
export const useChildItemFun = (form: FormInstance) => {
  return getChildItemFun(form);
};

// 这种方法其他可以使用 Form.
export const useFormWatchList = (props: { [x: string]: any }) => {
  const contex = useFormContext();
  let fun:
    | ((value: any, formValue?: any, child?: ChildPropsType) => void)
    | undefined;
  let childProps: ChildPropsType = useChildItemFun(contex.itemRefHook);

  if (contex) {
    const { watchList } = contex;
    fun = watchList[(props || {}).id];
  }
  React.useEffect(() => {
    if ((contex || {}).firstMont) {
      const { getFieldsValue } = contex.itemRefHook;
      if (typeof fun === 'function') {
        fun((props || {}).value, getFieldsValue(true), { ...childProps });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify((props || {}).value)]);
  return [childProps];
};
