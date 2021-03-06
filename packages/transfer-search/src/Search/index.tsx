import React from 'react';
import SimpleForm, { SimpleFormProps } from 'carefree-antd-form';

export interface SearchProps {
  /** 左侧表单配置 */
  leftSearchConfig: SimpleFormProps;
  /** 右侧表单配置 */
  rightSearchConfig: SimpleFormProps;
  /** 查询方法  */
  onSearch: (type: 'left' | 'right') => void;
  /** 值更新 */
  onValuesChange: (value: any, allValue: any, type: 'left' | 'right') => void;
}

export default (props: SearchProps) => {
  const { leftSearchConfig, rightSearchConfig, onSearch, onValuesChange } =
    props;
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
          {...leftSearchConfig}
          onFinish={() => onSearch('left')}
          onRest={() => {
            leftSearchConfig.form?.resetFields();
          }}
          onValuesChange={(value, allValue) =>
            onValuesChange(value, allValue, 'left')
          }
        />
      </div>
      <div style={{ width: 80 }}></div>
      <div style={{ flex: 1 }}>
        <SimpleForm
          isSearch
          layout="vertical"
          colProps={{ span: 12 }}
          {...rightSearchConfig}
          onRest={() => {
            rightSearchConfig.form?.resetFields();
          }}
          onFinish={() => onSearch('right')}
          onValuesChange={(value, allValue) =>
            onValuesChange(value, allValue, 'right')
          }
        />
      </div>
    </div>
  );
};
