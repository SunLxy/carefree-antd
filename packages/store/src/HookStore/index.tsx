import React from 'react';

const store = {};

const com = {};

const setInitValue = (value) => {
  Object.entries(value).forEach(([k, val]) => {
    store[k] = val;
  });
};
const setValue = (name, value) => {
  store[name] = value;
};

const Warp = (props) => {
  const { name } = props;
  const [state, setState] = React.useState(store[name]);

  const onChange = (e) => {
    const va = e.target.value;
    console.log(2222);
    setValue(name, va);
    setState(va);
  };
  com[name] = () => {
    console.log(name, '必填');
  };
  console.log('name--->', name);

  return (
    <div>
      <input value={state || ''} onChange={onChange} />
    </div>
  );
};

export default () => {
  console.log('最外层');
  setInitValue({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  });
  const onOk = () => {
    Object.entries(com).forEach(([key, fun]) => {
      console.log(key, store[key], typeof store[key]);
      if (
        store[key] === undefined ||
        store[key] === null ||
        store[key] === ''
      ) {
        if (typeof fun === 'function') {
          fun();
        }
      }
    });
  };

  return (
    <React.Fragment>
      <Warp name="a" />
      <Warp name="b" />
      <Warp name="c" />
      <Warp name="d" />
      <Warp name="e" />
      <button onClick={onOk}>校验</button>
    </React.Fragment>
  );
};
