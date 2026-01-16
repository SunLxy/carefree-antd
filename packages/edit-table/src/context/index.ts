import { ChildInstance } from '@carefrees/table-async-validator';
import { createContext, useContext, useRef } from 'react';
import { proxy, useSnapshot } from 'valtio';

export interface EditTableInstanceStateType extends Object {
  /** 编辑按钮 */
  isOperationEditButton?: boolean;
  /** 删除按钮 */
  isOperationDeleteButton?: boolean;
  /** 自定义数据 */
  [key: string]: any;
  /**默认不使用*/
  __defaultValue?: string;
}

export class EditTableInstance<
  T extends EditTableInstanceStateType = EditTableInstanceStateType,
  M = any,
> {
  childInstance?: ChildInstance<M>;
  /**自定义操作单元格*/
  customOperationCell?: (
    operationButton: React.ReactNode,
    operationEditButton: React.ReactNode,
    operation?: 'add' | 'edit',
  ) => React.ReactNode;
  state = proxy({
    isOperationEditButton: true,
    isOperationDeleteButton: true,
  }) as T;

  /**更新数据*/
  updatedState<K = T>(values: Partial<K>) {
    const keys = Object.keys(values) as (keyof K)[];
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      // @ts-ignore
      this.state[key] = values[key];
    }
    return this;
  }
}

export const useEditTableInstance = <
  T extends EditTableInstanceStateType = EditTableInstanceStateType,
  M = any,
>(
  instance?: EditTableInstance<T, M>,
) => {
  const ref = useRef<EditTableInstance<T, M>>();
  if (!ref.current) {
    ref.current = instance || new EditTableInstance<T, M>();
  }
  return ref.current;
};

export const EditTableInstanceContext = createContext<EditTableInstance<any>>(
  new EditTableInstance<any, any>(),
);

export const useEditTableInstanceContext = <
  T extends EditTableInstanceStateType = EditTableInstanceStateType,
  M = any,
>() => {
  const instance = useContext(EditTableInstanceContext) as EditTableInstance<
    T,
    M
  >;
  return instance;
};

export const useEditTableInstanceContextState = <
  T extends EditTableInstanceStateType = EditTableInstanceStateType,
  M = any,
>(options?: {
  sync?: boolean;
}) => {
  const instance = useEditTableInstanceContext<T, M>();
  const state = useSnapshot(instance.state, options) as T;
  return [state, instance, state.__defaultValue] as [
    T,
    EditTableInstance<T, M>,
    string | undefined,
  ];
};
