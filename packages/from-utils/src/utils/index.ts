import { FormInstance } from 'rc-field-form';
import { InternalNamePath, NamePath, Rule } from 'rc-field-form/lib/interface';

export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) {
    return [];
  }

  return Array.isArray(candidate) ? candidate : [candidate];
}

export function getFieldId(
  namePath: InternalNamePath,
  formName?: string,
): string | undefined {
  if (!namePath.length) {
    return undefined;
  }

  const mergedId = namePath.join('_');
  return formName ? `${formName}_${mergedId}` : mergedId;
}

export const getNamePath = (path: NamePath) => {
  if (Array.isArray(path)) {
    return path;
  }
  if (typeof path === 'string') {
    return path.split('_').filter((ite) => ite);
  }
  if (typeof path === 'number') {
    return [path];
  }
  return path;
};

export const getRequired = (
  required: boolean | undefined,
  rules: Rule[] | undefined,
  form: FormInstance,
) => {
  const isRequired =
    required !== undefined
      ? required
      : !!(
          rules &&
          rules.some((rule) => {
            if (
              rule &&
              typeof rule === 'object' &&
              rule.required &&
              !rule.warningOnly
            ) {
              return true;
            }
            if (typeof rule === 'function') {
              const ruleEntity = rule(form);
              return (
                ruleEntity && ruleEntity.required && !ruleEntity.warningOnly
              );
            }
            return false;
          })
        );

  return isRequired;
};

function isObject(obj: any) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */
function internalSetValues<T>(store: T, values: T): T {
  const newStore: T = (Array.isArray(store) ? [...store] : { ...store }) as T;

  if (!values) {
    return newStore;
  }

  Object.keys(values).forEach((key) => {
    const prevValue = newStore[key];
    const value = values[key];

    // If both are object (but target is not array), we use recursion to set deep value
    const recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive
      ? internalSetValues(prevValue, value || {})
      : value;
  });

  return newStore;
}

export function setValues<T>(store: T, ...restValues: T[]): T {
  return restValues.reduce(
    (current: T, newStore: T): T => internalSetValues<T>(current, newStore),
    store,
  );
}
