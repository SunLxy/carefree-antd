import { Input, InputProps, Tooltip } from 'antd';
import React, { Fragment, useMemo } from 'react';
import type { ConfigBaseType, ConfigType } from './index';
import configBase from './index';

import {
  useChildInstanceContextOperationState,
  useChildInstanceContextState,
} from '@carefrees/table-async-validator';

export interface CellProps<T = Record<PropertyKey, any>> {
  /**当前行数据*/
  rowData: T;
  /**当前行下标*/
  currentIndex: number;
  /**当前单元格的字段*/
  dataIndex: PropertyKey;
  /**输入框类型*/
  type: keyof ConfigBaseType | 'custom';
  /**自定义渲染函数，用于渲染自定义输入框(在编辑/新增时使用)*/
  inputRender?: (value: any, rowData: any, index: number) => React.ReactNode;
  /**自定义单元格渲染内容*/
  render?: (value: any, rowData: any, index: number) => React.ReactNode;
  /**自定义输入框的value属性名*/
  valuePropName?: string;
  /**自定义输入框的属性*/
  useAttrs?: (value: any, rowData: any, index: number) => any;
  /**自定义输入框的属性*/
  attrs?: any;
}

export function CellInput<T = Record<PropertyKey, any>>(props: CellProps<T>) {
  const {
    rowData,
    currentIndex,
    dataIndex,
    type,
    inputRender,
    valuePropName = 'value',
    useAttrs,
    attrs: _attrs,
  } = props;
  const [state, errorState, _, childInstance] = useChildInstanceContextState();
  const rowKey = rowData[childInstance.rowKey];
  const _value = state?.[rowKey]?.[dataIndex];
  // 获取当前行的列错误信息
  const errorList = errorState?.[rowKey]?.[dataIndex];

  const errorTip = useMemo(() => {
    if (Array.isArray(errorList) && errorList.length) {
      return (
        <div>
          {errorList.map((item, index) => (
            <div key={index} style={{ color: 'red' }}>
              {item}
            </div>
          ))}
        </div>
      );
    }
    return '';
  }, [errorList]);

  const onValueChange = (event: any) => {
    // 对值进行处理
    const _event = event;
    if (
      _event &&
      _event.target &&
      typeof _event.target === 'object' &&
      valuePropName in _event.target
    ) {
      return (_event.target as HTMLInputElement)[valuePropName];
    }
    childInstance.updatedRowData(rowKey, { [dataIndex]: _event });
  };

  const InputBase = useMemo(() => {
    if (configBase[type]) {
      return configBase[type];
    }
    return {
      Component: Input,
      attrs: { placeholder: '请输入', allowClear: true } as InputProps,
    };
  }, [type]) as ConfigType[keyof ConfigType];

  const attrs = { ..._attrs, ...(InputBase?.attrs || {}) };
  const _lastAttrs = useAttrs?.(_value, rowData, currentIndex);
  const _finalAttrs = { ...attrs, ..._lastAttrs };

  const baseControl = {
    value: _value,
    onChange: onValueChange,
    name: dataIndex,
  };

  if (type === 'custom') {
    const value = inputRender?.(_value, rowData, currentIndex);
    return (
      <Fragment>
        <Tooltip open={Boolean(errorTip)} title={errorTip} color="white">
          <div className={errorTip ? 'ant-form-item-has-error' : ''}>
            {React.isValidElement(value)
              ? React.cloneElement(value, {
                  ...baseControl,
                  isError: Boolean(errorTip),
                })
              : value}
          </div>
        </Tooltip>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Tooltip open={Boolean(errorTip)} title={errorTip} color="white">
        <div className={errorTip ? 'ant-form-item-has-error' : ''}>
          <InputBase.Component
            {..._finalAttrs}
            {...baseControl}
            value={_value}
            className={`${_finalAttrs.className || ''} ${
              errorTip ? 'ant-input-status-error' : ''
            }`}
          />
        </div>
      </Tooltip>
    </Fragment>
  );
}

/**纯数据渲染*/
export function CellText<T = Record<PropertyKey, any>>(props: CellProps<T>) {
  const { rowData, currentIndex, dataIndex, render } = props;
  const [state, _, childInstance] = useChildInstanceContextState();
  const rowKey = rowData[childInstance.rowKey];
  const _value = state?.[rowKey]?.[dataIndex];
  return <Fragment>{render?.(_value, rowData, currentIndex)}</Fragment>;
}

export function Cell<T = Record<PropertyKey, any>>(props: CellProps<T>) {
  const { rowData, type } = props;
  const [operationState, childInstance] =
    useChildInstanceContextOperationState();
  const rowKey = rowData[childInstance.rowKey];
  const operation = operationState[rowKey];
  if (type && (operation === 'edit' || operation === 'add')) {
    return <CellInput<T> {...props} />;
  }
  return <CellText<T> {...props} />;
}
