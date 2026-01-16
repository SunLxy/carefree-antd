import { useMemo, useRef } from 'react';
let localId = 0;

export const useId = (name?: string) => {
  const count = useRef<string>();
  return useMemo(() => {
    count.current = name;
    if (!count.current) {
      localId++;
      count.current = `CAREFREES_HOOKS_${localId.toString(32)}`;
    }
    return count.current;
  }, [name]);
};
