import React from 'react';
import { ChildPropsType } from '../interface';
import { useHideContext } from '../Hide/context';
import { HideGetStoreProps } from './../Hide/interface';
import { Subscribe, useSubscribeFormProvider } from '../Collect';
import { useFormContext, useChildItemFun } from '../hooks';

// 这种方法其他可以使用 Form.
export const useWatchList = (props: { [x: string]: any }) => {
  const contex = useFormContext();
  const sub = useSubscribeFormProvider();
  const hideContext = useHideContext();
  let fun:
    | ((
        value: any,
        formValue?: any,
        child?: ChildPropsType,
        hideContext?: HideGetStoreProps,
        cx?: { forms: Subscribe['subForm']; hides: Subscribe['subHides'] },
      ) => void)
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
        fun(
          (props || {}).value,
          getFieldsValue(true),
          { ...childProps },
          hideContext,
          {
            forms: sub.subForms,
            hides: sub.subHides,
          },
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify((props || {}).value)]);
  return [childProps];
};

// 监听组件 外层
export const WatchItem = (props: { [x: string]: any }) => {
  const { children, ...rest } = props || {};
  const [childProps] = useWatchList(props);
  if (typeof children === 'function') {
    return children({ ...rest, childProps });
  }
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ...rest });
  }
  return children;
};
