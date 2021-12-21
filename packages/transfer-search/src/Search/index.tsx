import React from 'react';
import { Row, Col, RowProps, ColProps } from 'antd';
import SimpleForm, { SimpleFormProps } from 'carefree-antd-form';

export interface SearchProps {
  /** 左侧表单配置 */
  leftSearch: SimpleFormProps;
  /** 右侧表单配置 */
  rightSearch: SimpleFormProps;
  /** 查询方法  */
  onSearch: (type: 'left' | 'right') => void;
}

export default (props: SearchProps) => {
  const { leftSearch, rightSearch, onSearch } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ flex: 1 }}>
        <SimpleForm
          layout="vertical"
          isSearch
          colProps={{ span: 12 }}
          {...leftSearch}
          onFinish={() => onSearch('left')}
        />
      </div>
      <div style={{ width: 80 }}></div>
      <div style={{ flex: 1 }}>
        <SimpleForm
          isSearch
          layout="vertical"
          colProps={{ span: 12 }}
          {...rightSearch}
          onFinish={() => onSearch('right')}
        />
      </div>
    </div>
  );
};
