import React from 'react';
import { Button, ButtonProps } from 'antd';

export interface ButtonConfigProps extends ButtonProps {
  // 按钮操作类型  新增  编辑   查询    删除
  actionType?: 'add' | 'edit' | 'look' | 'delete' | 'other';
  // 请求地址
  url?: string;
  // 请求的后端模块名
  module?: string;
  // 接口请求类型
  method?: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' | 'HEAD' | 'OPTIONS';
  // 点击后 先触发当前操作 通过 callBack 执行内部继续操作
  before?: (item: any, callBack: () => void) => void;
}

const Btn = (props: ButtonConfigProps) => {
  // 单个按钮进行操作的
  return <Button />;
};

export interface ButtonGroupProps {
  config: ButtonConfigProps[];
}

const ButtonGroup = (props: ButtonGroupProps) => {
  // 按钮组进行操作
  return <Btn />;
};

export default ButtonGroup;
