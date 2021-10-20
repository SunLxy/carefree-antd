import React, { useState } from 'react';
import { Form, Row, Col } from 'antd';

import {
  useFormContext,
  useFormWatchList,
  FormContext,
  useChildItemFun,
  getChildItemFun,
} from './hooks';
import { ItemWatch, SearchBtn, itemRender } from './Item';

import { HideContext } from './Hide/context';
import useFormItemHide from './Hide/store';
import HideItem from './Hide/index';

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

const InternalForm: React.ForwardRefRenderFunction<
  FormInstance,
  SimpleFormProps
> = (props, ref) => {
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
    formHide,
    initialHide,
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
  const [hide] = useFormItemHide(formHide);
  React.useImperativeHandle(ref, () => formRef.current);
  hide.setInitialValues(initialHide || {}, true);

  return (
    <HideContext.Provider value={hide}>
      <FormContext.Provider
        value={{
          firstMont,
          watchList: watchList || {},
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
    </HideContext.Provider>
  );
};

const SimpleFormWarp = React.forwardRef<FormInstance, SimpleFormProps>(
  InternalForm,
) as <Values = any>(
  props: React.PropsWithChildren<SimpleFormProps<Values>> & {
    ref?: React.Ref<FormInstance<Values>>;
  },
) => React.ReactElement;

type InternalFormType = typeof SimpleFormWarp;
interface FormInterface extends InternalFormType {
  useForm: typeof Form.useForm;
  Item: typeof Form.Item;
  List: typeof Form.List;
  Provider: typeof Form.Provider;

  ItemWatch: typeof ItemWatch;
  useFormContext: typeof useFormContext;
  useFormWatchList: typeof useFormWatchList;
  useChildItemFun: typeof useChildItemFun;
  getChildItemFun: typeof getChildItemFun;

  useFormItemHide: typeof useFormItemHide;
  HideItem: typeof HideItem;
}

const SimpleForm = SimpleFormWarp as FormInterface;

SimpleForm.useForm = Form.useForm;
SimpleForm.Item = Form.Item;
SimpleForm.List = Form.List;
SimpleForm.Provider = Form.Provider;

// 下面这几个都是监听字段变化的
SimpleForm.ItemWatch = ItemWatch;
SimpleForm.useFormContext = useFormContext;
SimpleForm.useFormWatchList = useFormWatchList;

SimpleForm.useChildItemFun = useChildItemFun;
SimpleForm.getChildItemFun = getChildItemFun;

SimpleForm.useFormItemHide = useFormItemHide;
SimpleForm.HideItem = HideItem;

export default SimpleForm;
