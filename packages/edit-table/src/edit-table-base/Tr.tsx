import RcForm from 'rc-field-form';
import React from 'react';
import { useEditTableBaseInstanceContext } from './instance/instance';

/** tr 表格行自定义包裹内容  */
const Tr = React.memo((props: React.TdHTMLAttributes<any>) => {
  const [form] = RcForm.useForm();
  const [, , editInstance] = useEditTableBaseInstanceContext();

  React.useEffect(() => {
    return () => editInstance.remove(`${props['data-row-key']}`);
  }, []);
  editInstance.register(`${props['data-row-key']}`, form);
  // 注册
  const initValue = (editInstance.dataSource || []).find(
    // 防止 字符串和数字进行对比
    (item) => `${item[editInstance.rowKey]}` === `${props['data-row-key']}`,
  );

  return (
    <RcForm
      onValuesChange={editInstance.onRowValuesChange.bind(
        this,
        `${props['data-row-key']}`,
        form,
      )}
      form={form}
      name={`${props['data-row-key']}`}
      component={false}
      initialValues={initValue || {}}
    >
      <tr {...props} />
    </RcForm>
  );
});

export default Tr;
