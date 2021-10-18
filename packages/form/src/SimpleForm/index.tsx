import React, { useState } from 'react';
import { Form, FormProps, Row, Col } from 'antd';

import {
  useFormContext,
  useFormWatchList,
  useFormItemFun,
  FormContext,
} from './hooks';
import { ItemWatch, SearchBtn, itemRender } from './Item';

import classnames from 'classnames';
import './index.css';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import {
  ItemChildType,
  ItemChildAttr,
  SimpleFormConfigProps,
  SimpleFormProps,
} from './interface';

export type {
  ItemChildType,
  ItemChildAttr,
  SimpleFormConfigProps,
  SimpleFormProps,
};

const InternalForm: React.ForwardRefRenderFunction<FormInstance, FormProps> = (
  props: SimpleFormProps,
  ref,
) => {
  const {
    config = [],
    isSearch,
    displayPre,
    searchBtnItem = {},
    searchBtnProps = {},
    searchBtnRestProps = {},
    onRest = () => {},
    rowProps = {},
    colProps = {},
    children,
    className,
    itemStyle = {},
    attrStyle = {},
    attrProps = {},
    watchList,
    form,
    ...rest
  } = props;
  const formRef = React.useRef<FormInstance>();

  const [expand, setExpand] = useState(false);
  const [firstMont, setFirstMont] = useState(false);
  const getRender = () => {
    if (isSearch && displayPre) {
      if (!expand) {
        if (displayPre > config.length) {
          // 还差多少个
          const diff = displayPre - config.length;
          const childList = React.Children.toArray(children);
          if (diff > childList.length) {
            return (
              <React.Fragment>
                {itemRender(config, {
                  colProps,
                  itemStyle,
                  attrStyle,
                  attrProps,
                  watchList,
                })}
                {childList}
              </React.Fragment>
            );
          } else if (diff <= childList.length) {
            const diffChild = childList.slice(0, diff);
            return (
              <React.Fragment>
                {itemRender(config, {
                  colProps,
                  itemStyle,
                  attrStyle,
                  attrProps,
                  watchList,
                })}
                {diffChild}
              </React.Fragment>
            );
          }
          return itemRender(config, {
            colProps,
            itemStyle,
            attrStyle,
            attrProps,
            watchList,
          });
        }
        const configPre = config.slice(0, displayPre);
        return itemRender(configPre, {
          colProps,
          itemStyle,
          attrStyle,
          attrProps,
          watchList,
        });
      }
    }
    return (
      <React.Fragment>
        {itemRender(config, {
          colProps,
          itemStyle,
          attrStyle,
          attrProps,
          watchList,
        })}
        {children}
      </React.Fragment>
    );
  };
  const clx = classnames('carefree-form', className);

  React.useEffect(() => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setFirstMont(true);
    }, 300);
  }, []);
  const [forms] = Form.useForm(form);
  React.useImperativeHandle(ref, () => formRef.current);

  return (
    <FormContext.Provider
      value={{
        firstMont,
        watchList: watchList || {},
        colProps: colProps,
        itemStyle: itemStyle,
        attrStyle: attrStyle,
        attrProps: attrProps,
        form: forms,
        itemRefHook: formRef.current,
      }}
    >
      <Form {...rest} form={forms} className={clx} ref={formRef}>
        <Row gutter={24} {...rowProps}>
          {getRender()}
          {isSearch && (
            <Col span={6} {...colProps}>
              <SearchBtn
                onRest={onRest}
                expand={expand}
                setExpand={setExpand}
                displayPre={displayPre}
                searchBtnItem={searchBtnItem}
                searchBtnProps={searchBtnProps}
                searchBtnRestProps={searchBtnRestProps}
                itemStyle={itemStyle}
              />
            </Col>
          )}
        </Row>
      </Form>
    </FormContext.Provider>
  );
};

const SimpleFormWarp = React.forwardRef<FormInstance, FormProps>(
  InternalForm,
) as <Values = any>(
  props: React.PropsWithChildren<FormProps<Values>> & {
    ref?: React.Ref<FormInstance<Values>>;
  },
) => React.ReactElement;

type InternalFormType = typeof SimpleFormWarp;
interface FormInterface extends InternalFormType {
  useForm: typeof Form.useForm;
  Item: typeof Form.Item;
  List: typeof Form.List;
  ItemWatch: typeof ItemWatch;
  useFormContext: typeof useFormContext;
  useFormWatchList: typeof useFormWatchList;
  useFormItemFun: typeof useFormItemFun;
}

const SimpleForm = SimpleFormWarp as FormInterface;

SimpleForm.useForm = Form.useForm;
SimpleForm.Item = Form.Item;
SimpleForm.List = Form.List;
// 下面这几个都是监听字段变化的
SimpleForm.ItemWatch = ItemWatch;
SimpleForm.useFormContext = useFormContext;
SimpleForm.useFormWatchList = useFormWatchList;
SimpleForm.useFormItemFun = useFormItemFun;

export default SimpleForm;
