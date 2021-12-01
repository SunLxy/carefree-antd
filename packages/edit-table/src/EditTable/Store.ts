import { FormInstance } from 'rc-field-form/lib/interface';
class Store {
  private store: { [s: string]: FormInstance } = {};
  remove = (name: string) => {
    delete this.store[name];
  };
  register = (name: string, form: FormInstance<any>) => {
    this.store[name] = form;
  };
  getStore = (): { [s: string]: FormInstance<any> } => this.store;
}

export default Store;
