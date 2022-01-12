import React, { useState } from 'react';
import { Form, Row, Col } from 'antd';
import { FormContext, useFormContext, ColStore } from './FormContext';

import { useFormWatchList, useChildItemFun, getChildItemFun } from './Watch';

import {
  FormSubscribeProvider,
  useFormSubscribeProvider,
  useSubscribeReginsterId,
  useSubscribe,
} from './Collect';

import { HideContext } from './Hide/context';
import useFormItemHide from './Hide/store';
import HideItem from './Hide/index';

import { ItemWatch, SearchBtn, itemRender, FormColWatchItem } from './Item';

import classnames from 'classnames';
import './index.css';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import {
  ItemChildType,
  ItemChildAttr,
  SimpleFormConfigProps,
  SimpleFormProps,
} from './interface';

import FormColItem, { Cols } from './FormItem';

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
    subscribe,
    layout = 'horizontal',
    isFloat,
    ...rest
  } = props;
  const formRef = React.useRef<FormInstance>();

  const [expand, setExpand] = useState(false);
  const [firstMont, setFirstMont] = useState(false);
  const getRender = () => {
    const otherConfig = {
      colProps,
      itemStyle,
      attrStyle,
      attrProps,
      watchList,
      name: props.name,
      layout,
      isFloat,
    };
    if (isSearch && displayPre) {
      if (!expand) {
        if (displayPre > config.length) {
          // 还差多少个
          const diff = displayPre - config.length;
          const childList = React.Children.toArray(children);
          if (diff > childList.length) {
            return (
              <React.Fragment>
                {itemRender(config, otherConfig)}
                {childList}
              </React.Fragment>
            );
          } else if (diff <= childList.length) {
            const diffChild = childList.slice(0, diff);
            return (
              <React.Fragment>
                {itemRender(config, otherConfig)}
                {diffChild}
              </React.Fragment>
            );
          }
          return itemRender(config, otherConfig);
        }
        const configPre = config.slice(0, displayPre);
        return itemRender(configPre, otherConfig);
      }
    }
    return (
      <React.Fragment>
        {itemRender(config, otherConfig)}
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
    return () => clearTimeout(timer);
  }, []);
  const [forms] = Form.useForm(form);
  const [hide] = useFormItemHide(formHide);
  // 只用组件加载的时候 运行一次
  React.useMemo(() => hide.setInitialValues(initialHide || {}, true), []);
  // 当前这个适用于 多个form表单获取值
  const [sub] = useSubscribe(subscribe);
  useSubscribeReginsterId({
    name: props.name,
    form: forms,
    subscribe: sub,
    hide: hide,
  });
  React.useImperativeHandle(ref, () => formRef.current);

  return (
    <ColStore.Provider value={isFloat}>
      <HideContext.Provider value={hide}>
        <FormContext.Provider
          value={{
            firstMont,
            watchList: watchList || {},
            form: forms,
            itemRefHook: formRef.current,
          }}
        >
          <Form
            {...rest}
            form={forms}
            layout={layout}
            className={clx}
            ref={formRef}
          >
            <Row
              gutter={24}
              {...rowProps}
              style={{
                ...(isFloat
                  ? {
                      display: 'block',
                      height: 'auto',
                      overflow: 'hidden',
                    }
                  : {}),
                ...((rowProps || {}).style || {}),
              }}
            >
              {getRender()}
              {isSearch && (
                <Col
                  span={6}
                  {...colProps}
                  style={{
                    float: 'left',
                    width: '100%',
                    overflow: 'hidden',
                    ...((colProps || {}).style || {}),
                  }}
                >
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
    </ColStore.Provider>
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
  ColItem: typeof FormColItem;
  ColWatchItem: typeof FormColWatchItem;
  Cols: typeof Cols;
  List: typeof Form.List;
  Provider: typeof Form.Provider;

  ItemWatch: typeof ItemWatch;
  useFormContext: typeof useFormContext;
  useFormWatchList: typeof useFormWatchList;
  useChildItemFun: typeof useChildItemFun;
  getChildItemFun: typeof getChildItemFun;

  useFormItemHide: typeof useFormItemHide;
  HideItem: typeof HideItem;

  useSubscribe: typeof useSubscribe; // 初始化
  FormSubscribeProvider: typeof FormSubscribeProvider; //
  useFormSubscribeProvider: typeof useFormSubscribeProvider; // 使用
  useSubscribeReginsterId: typeof useSubscribeReginsterId; // 注册
}

const SimpleForm = SimpleFormWarp as FormInterface;

SimpleForm.useForm = Form.useForm;
SimpleForm.Item = Form.Item;
SimpleForm.ColItem = FormColItem;
SimpleForm.ColWatchItem = FormColWatchItem;
SimpleForm.Cols = Cols;
SimpleForm.List = Form.List;
SimpleForm.Provider = Form.Provider;

// 下面这几个都是监听字段变化的
SimpleForm.ItemWatch = ItemWatch;
SimpleForm.useFormContext = useFormContext;
SimpleForm.useFormWatchList = useFormWatchList;
// 获取form内部更新单个字段值方法
SimpleForm.useChildItemFun = useChildItemFun;
SimpleForm.getChildItemFun = getChildItemFun;
// 用于组件隐藏
SimpleForm.useFormItemHide = useFormItemHide;
SimpleForm.HideItem = HideItem;
// 以下是为了收集form多个表单
SimpleForm.useSubscribe = useSubscribe;
SimpleForm.FormSubscribeProvider = FormSubscribeProvider;
SimpleForm.useFormSubscribeProvider = useFormSubscribeProvider;
SimpleForm.useSubscribeReginsterId = useSubscribeReginsterId;

export default SimpleForm;
