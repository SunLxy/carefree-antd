export type InternalNamePath = (string | number)[];
export type NamePath = string | number | InternalNamePath;

export interface FieldEntity {
  getNamePath: () => (string | number | undefined)[];
  refresh: () => void;
  getValue: () => boolean | undefined;
  props: {
    name: NamePath;
    initialValue?: boolean;
  };
}

export interface GetItemStoreProps {
  init?: (entity: FieldEntity) => void;
  register?: (entity: FieldEntity) => () => void;
  getStoreState?: (pathName?: InternalNamePath) => {};
  updateValue?: (pathName: NamePath, value: boolean) => void;
  getValue?: (pathName: NamePath) => boolean | undefined;
}

export interface GetStoreProps {
  getComponents?: () => FieldEntity[];
  getStoreState?: (pathName?: InternalNamePath) => {};
  getItemStore?: () => GetItemStoreProps;
  setInitialValues?: (init: {}, is: boolean) => void;
  updateValue?: (pathName: NamePath, value: boolean) => void;
}

export interface StoreProps
  extends GetStoreProps,
    Omit<GetItemStoreProps, 'updateValue'> {
  store: {};
  componentLists: FieldEntity[];
  getStore: () => GetStoreProps;
}
