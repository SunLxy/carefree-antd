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
