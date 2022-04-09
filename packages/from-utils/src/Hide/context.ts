import React from 'react';
import { HideGetStoreProps } from './interface';
import warning from 'rc-util/lib/warning';

const warningFunc: any = () => {
  warning(
    false,
    'Can not find FormContext. Please make sure you wrap Field under Form.',
  );
};

export const HideContext = React.createContext<HideGetStoreProps>({
  getComponents: warningFunc,
  getStoreState: warningFunc,
  setInitialValues: warningFunc,
  updateValue: warningFunc,
  show: warningFunc,
  hide: warningFunc,
  getItemStore: () => ({
    init: warningFunc,
    register: warningFunc,
    getStoreState: warningFunc,
    updateValue: warningFunc,
    getValue: warningFunc,
    show: warningFunc,
    hide: warningFunc,
  }),
});

export const useHideContext = () => React.useContext(HideContext);
