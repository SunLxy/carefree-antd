import React from 'react';
import useStore, { StoreContext } from './useStore';
import Item from './Item';

const ComInput = (props) => {
  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  const handle = () => {
    console.log('ces 1221');
  };

  React.useMemo(() => {
    if (props.warpRef) {
      props.warpRef({ handle });
    }
  }, [JSON.stringify(props)]);
  return <input value={props.value} onChange={onChange} />;
};

export default () => {
  const [store] = useStore();
  const [visible, setVisible] = React.useState(false);

  return (
    <StoreContext.Provider value={store}>
      <Item initialValue={123} name={['form', 'name1']}>
        <ComInput />
      </Item>
      <Item>测试2</Item>
      <Item>测试3</Item>
      {visible && (
        <Item initialValue={666} name={['form', 'name4']}>
          <ComInput />
        </Item>
      )}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        点击
      </button>
      <button
        onClick={() => {
          const sto = store.getStoreState();
          const stoC = store.getComponent();
          console.log(sto, stoC);
        }}
      >
        打印
      </button>
      <button
        onClick={() => {
          console.log(store.getFun());
        }}
      >
        打印传递的方法
      </button>
    </StoreContext.Provider>
  );
};
