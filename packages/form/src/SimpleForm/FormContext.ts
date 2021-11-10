import React from 'react';
import { FormContextProps } from './interface';

export const FormContext = React.createContext<FormContextProps>({});

export const useFormContext = () => React.useContext(FormContext);
