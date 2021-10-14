import { ItemChildClassProps } from './Item';
export type PathNameType = string | string[];

export interface StoreProps {}

export interface StoreChildFunProps {
  init: (entery: ItemChildClassProps) => void;
  register: (entery: ItemChildClassProps) => () => void;
  getStoreState: (path: PathNameType) => any;
  updateValue: (path: PathNameType, value: any) => void;
  getValue: (path: PathNameType) => any;
}

export interface StoreFunProps {
  getFun: (path?: PathNameType) => any[];
  getComponent: () => ItemChildClassProps[];
  getStoreState: (path?: PathNameType) => any;
  getItemStore: () => StoreChildFunProps;
}
