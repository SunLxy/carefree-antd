import React from 'react';
import Search from './Search';
import Edit from './Edit';
import Table from './Table';
import { SimpleFormProps } from 'carefree-antd-form';
import { TableProps } from 'antd';
import { ProTableConfigContext, useMain, ProTableContext } from './Context';
import { ButtonConfigProps } from './Button';

export interface ProTableProps {
  // 查询表单
  search?: SimpleFormProps;
  // 编辑弹框 有可能多个
  editForm?: SimpleFormProps[] | SimpleFormProps;
  // 表单内操作按钮
  editFormBtn?: ButtonConfigProps[];
  // 表格头部操作按钮
  buttonConfig?: ButtonConfigProps[];
  // 表格
  table?: TableProps<any>;
  // 表格内部操作按钮
  tableAction?: ButtonConfigProps[];
}

const Main = (props: ProTableProps) => {
  const [mainStore] = useMain();

  return (
    <ProTableContext.Provider value={mainStore}>
      <ProTableConfigContext.Provider value={props}>
        <Search />
        <Table />
        <Edit />
      </ProTableConfigContext.Provider>
    </ProTableContext.Provider>
  );
};

export default Main;
