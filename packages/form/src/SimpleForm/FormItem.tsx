import React from 'react';
import { Col, ColProps, FormItemProps } from 'antd';
import { useColStore } from './FormContext';
import SimpleForm from '.';
export interface FormItemsProps extends FormItemProps {
  /** 每一项 Col配置 */
  colProps?: ColProps;
}

export const Cols = (props: ColProps) => {
  const { children, style, ...rest } = props;
  const isFloat = useColStore();

  return (
    <Col
      span={6}
      {...rest}
      style={{
        ...(isFloat
          ? {
              float: 'left',
              width: '100%',
              overflow: 'hidden',
            }
          : {}),
        ...(style || {}),
      }}
    >
      {children}
    </Col>
  );
};

const FormColItem = (props: FormItemsProps) => {
  const { children, colProps = {}, ...rest } = props;
  return (
    <Cols {...(colProps || {})}>
      <SimpleForm.Item {...rest}>{children}</SimpleForm.Item>
    </Cols>
  );
};
export default FormColItem;
