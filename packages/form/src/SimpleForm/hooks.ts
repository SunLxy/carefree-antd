import React from 'react';
import { HOOK_MARK } from 'rc-field-form/lib/FieldContext';
import {
  InternalFormInstance,
  InternalNamePath,
} from 'rc-field-form/lib/interface';
import { FormContextProps, ChildPropsType } from './interface';

export const FormContext = React.createContext<FormContextProps>({});

export const useFormContext = () => React.useContext(FormContext);

export const useFormItemFun = () => {
  const contex = useFormContext();
  let childProps: any = {};
  const { itemRefHook } = contex;
  if (itemRefHook) {
    const itemHook = (
      itemRefHook as unknown as InternalFormInstance
    ).getInternalHooks(HOOK_MARK);
    childProps = { ...(itemHook || {}) };
  }
  const updateValue = (namePath: InternalNamePath, value: any) => {
    if (childProps.dispatch) {
      childProps.dispatch({
        type: 'updateValue',
        namePath,
        value,
      });
    }
  };
  return {
    ...childProps,
    updateValue,
  };
};

export const useFormWatchList = (props: { [x: string]: any }) => {
  const contex = useFormContext();
  let fun:
    | ((value: any, formValue?: any, child?: ChildPropsType) => void)
    | undefined;
  let childProps: ChildPropsType = useFormItemFun();

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
