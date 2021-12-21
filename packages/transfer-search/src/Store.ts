export interface StoreProps {
  left: {
    search: any;
    selectedKeys: React.Key[];
    selectedRows: any[];
    page: number;
    pageSize: number;
    total: number;
    dataList: any[];
  };
  right: {
    search: any;
    selectedKeys: React.Key[];
    selectedRows: any[];
    page: number;
    pageSize: number;
    total: number;
    dataList: any[];
  };
}
export default class Store {
  private store: StoreProps = {
    left: {
      search: {},
      selectedKeys: [],
      selectedRows: [],
      page: 1,
      pageSize: 20,
      total: 0,
      dataList: [],
    },
    right: {
      search: {},
      selectedKeys: [],
      selectedRows: [],
      page: 1,
      pageSize: 20,
      total: 0,
      dataList: [],
    },
  };
  private forceUpdate: () => void;
  constructor(
    forceUpdate: () => void,
    props?: Partial<{
      left: Partial<StoreProps['left']>;
      right: Partial<StoreProps['right']>;
    }>,
  ) {
    if (props && Object.keys(props || {}).length) {
      Object.entries(props).forEach(([type, value]) => {
        this.setValue(value, type as 'left' | 'right');
      });
    }
    this.forceUpdate = forceUpdate;
  }

  setValue = (value: object, type: 'left' | 'right') => {
    this.store = {
      ...this.store,
      [type]: {
        ...this.store[type],
        ...value,
      },
    };
    if (this.forceUpdate) {
      this.forceUpdate();
    }
  };

  get stores() {
    return this.store;
  }
}
