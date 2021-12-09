import React from 'react';
import SimpleForm from 'carefree-antd-form';
import { useProTableConfigContext, useProTableContext } from './../Context';
import request from './../server';
import { onSearch } from './../utils/search';

const Srarch = () => {
  const { search, tableConfig } = useProTableConfigContext();
  const { Api = {} } = useProTableConfigContext();
  const main = useProTableContext();
  const { setValue, updateComponent, registerId, setBatchValue } = main;
  const [_, setUpdateTime] = React.useState('');
  const { isSearch, initialValues, form } = search || {};
  const [forms] = SimpleForm.useForm(form);

  const update = () => {
    setUpdateTime(new Date().getTime().toString());
  };

  const onValuesChange = (_: any, allValue: object) => {
    setValue('search', allValue);
  };

  React.useEffect(() => {
    if (initialValues) {
      setValue('search', initialValues || {});
    }
  }, []);
  registerId('search', update);

  return (
    <SimpleForm
      form={forms}
      initialValues={initialValues || {}}
      {...(isSearch
        ? {
            onFinish: () => onSearch({ main, tableConfig, Api }),
            onRest: () => {
              setValue('search', initialValues || {});
              forms.resetFields();
            },
          }
        : {})}
      {...search}
      onValuesChange={onValuesChange}
    />
  );
};
export default Srarch;
