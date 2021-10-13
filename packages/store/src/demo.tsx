import React from 'react';
import { Form, Input } from 'antd';
const FormContext = React.createContext<any>({});
const ComInput = (props) => {
  const timer = React.useRef<any>();
  const { watchList, firstMont } = React.useContext(FormContext);
  const fun = watchList[props.id];
  React.useEffect(() => {
    if (firstMont) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (typeof fun === 'function') {
          fun(props.value);
        }
      }, 300);
    }
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);
  return <Input {...props} />;
};

const FormItems = () => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [firstMont, setFirstMont] = React.useState(false);
  const watchList = {
    basicForm_a: (value) => {
      if (value === '23') {
        // 获取表单中的所有值
        const objs = form.getFieldsValue();
        console.log('objs--a->', JSON.stringify(objs));
        form.setFieldsValue({ b: '232' });
      }
    },
    basicForm_b: (value) => {
      if (value === '232') {
        // 获取表单中的所有值
        const objs = form.getFieldsValue();
        console.log('objs--b->', JSON.stringify(objs));
        form.setFieldsValue({ c: '23245' });
      }
    },
    basicForm_c: (value) => {
      if (value === '23245') {
        form2.setFieldsValue({ a: '23' });
      }
    },
    basicForm2_a: (value) => {
      if (value === '23') {
        form2.setFieldsValue({ b: '232' });
      }
    },
    basicForm2_b: (value) => {
      if (value === '232') {
        form2.setFieldsValue({ c: '23245' });
      }
    },
  };
  React.useEffect(() => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setFirstMont(true);
    }, 300);
  }, []);
  return (
    <FormContext.Provider value={{ watchList, firstMont }}>
      <Form form={form} name="basicForm">
        <Form.Item name="a" label="a">
          <ComInput />
        </Form.Item>
        <Form.Item name="b" label="b">
          <ComInput />
        </Form.Item>
        <Form.Item name="c" label="c">
          <ComInput />
        </Form.Item>
      </Form>
      <Form form={form2} name="basicForm2">
        <Form.Item name="a" label="a">
          <ComInput />
        </Form.Item>
        <Form.Item name="b" label="b">
          <ComInput />
        </Form.Item>
        <Form.Item name="c" label="c">
          <ComInput />
        </Form.Item>
      </Form>
    </FormContext.Provider>
  );
};
export default FormItems;
