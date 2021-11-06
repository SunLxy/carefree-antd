import React from 'react';

class Sub {
  list = {};

  init = (ent) => {
    this.list[ent.name] = ent;
  };

  remove = (ent) => {
    delete this.list[ent];
  };
}

const FormContext = React.createContext<{ form?: Sub }>({});
const useFormContext = () => React.useContext(FormContext);

const useForm = (form?) => {
  const ref = React.useRef<Sub>();
  if (form) {
    ref.current = form;
  } else {
    ref.current = new Sub();
  }
  return [ref.current];
};

const Warp = (props) => {
  const [state, setState] = React.useState();
  const { form } = useFormContext();

  const formRef = React.useRef<any>({ name: props.name });

  const onChange = (e) => {
    const va = e.target.value;
    setState(va);
  };
  formRef.current.onFinish = () => {};

  React.useEffect(() => {
    form.init(formRef.current);
    console.log('挂载');
    return () => form.remove(formRef.current);
  }, [form]);

  console.log(form.list);

  return (
    <div>
      <input value={state || ''} onChange={onChange} />
    </div>
  );
};

export default () => {
  const [form] = useForm();
  const [visible, setVisible] = React.useState(true);

  const onOk = () => {
    console.log('点击---', form.list);
    setVisible(!visible);
  };

  return (
    <FormContext.Provider value={{ form }}>
      <React.Fragment>
        <Warp name="a" />
        <Warp name="b" />
        <Warp name="c" />
        <Warp name="d" />
        {visible && <Warp name="e" />}
        <button onClick={onOk}>校验</button>
      </React.Fragment>
    </FormContext.Provider>
  );
};
