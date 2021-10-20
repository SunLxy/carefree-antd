import React from 'react';
import { GetStoreProps } from './interface';
export const HideContext = React.createContext<GetStoreProps>({});

export const useHideContext = () => React.useContext(HideContext);
