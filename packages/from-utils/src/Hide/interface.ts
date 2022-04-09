export type InternalNamePath = (string | number)[];
export type NamePath = string | number | InternalNamePath;

export interface HideFieldEntity {
  getNamePath: () => (string | number)[];
  refresh: () => void;
  getValue: () => boolean | undefined;
  props: {
    name: NamePath;
    initialValue?: boolean;
  };
}

export interface HideGetItemStoreProps {
  init: (entity: HideFieldEntity) => void;
  register: (entity: HideFieldEntity) => () => void;
  getStoreState: (pathName?: InternalNamePath) => {
    [x: string]: boolean | undefined;
  };
  updateValue: (pathName: NamePath, value: boolean) => void;
  getValue: (pathName: NamePath) => boolean | undefined;
}

export interface HideGetStoreProps {
  getComponents: () => HideFieldEntity[];
  getStoreState: (pathName?: InternalNamePath) => {
    [x: string]: boolean | undefined;
  };
  getItemStore: () => HideGetItemStoreProps;
  setInitialValues: (init: {}, is: boolean) => void;
  updateValue: (pathName: NamePath, value: boolean) => void;
}
