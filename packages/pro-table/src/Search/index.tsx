import React from 'react';
import SimpleForm from 'carefree-antd-form';
import { useProTableConfigContext, useProTableContext } from './../Context';
import { onSearch } from './../utils/search';
import { Card } from 'antd';

const Srarch = () => {
  const { search, tableConfig, searchCardProps, searchHead } =
    useProTableConfigContext();
  const { Api = {} } = useProTableConfigContext();
  const main = useProTableContext();
  const { setValue, registerId, unregister, getInitValue } = main;
  const [_, setUpdateTime] = React.useState('');
  const { isSearch, initialValues, form, apiName } = search || {};
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

  React.useEffect(() => {
    return () => unregister('search', initialValues);
  }, []);

  React.useEffect(() => {
    if (initialValues) {
      Object.entries(initialValues).forEach(([k, value]) => {
        setValue(`search_${k}`, value);
      });
      update();
    }
  }, []);

  const bordered = React.useMemo(() => {
    if ('bordered' in (searchCardProps || {})) {
      return searchCardProps.bordered;
    }
    return !!searchHead;
  }, [!!searchHead, (searchCardProps || {}).bordered]);

  return (
    <Card
      title={searchHead && searchHead(main)}
      {...(searchCardProps || {})}
      style={{ marginBottom: 10, ...((searchCardProps || {}).style || {}) }}
      bodyStyle={{
        padding: bordered ? 12 : 0,
        ...((searchCardProps || {}).bodyStyle || {}),
      }}
      bordered={bordered}
    >
      <SimpleForm
        form={forms}
        initialValues={initialValues || getInitValue('search') || {}}
        {...(isSearch
          ? {
              onFinish: (value) => {
                if (search && search.onFinish) {
                  search.onFinish(value, main);
                } else {
                  onSearch({ main, tableConfig, Api, apiName });
                }
              },
              onRest: () => {
                if (search && search.onRest) {
                  search.onRest();
                } else {
                  setValue('search', initialValues || {});
                  forms.resetFields();
                }
              },
            }
          : {})}
        {...search}
        onValuesChange={onValuesChange}
      />
    </Card>
  );
};
export default Srarch;
