import { useState, useEffect } from 'react';

export function useDataType<T>(value: T): string {
  const [type, setType] = useState<string>('');
  useEffect(() => {
    // 判断各种数据类型
    const getType = (val: unknown): string => {
      if (val === null) {
        return 'null';
      }
      if (Array.isArray(val)) {
        return 'array';
      }
      if (val instanceof Date) {
        return 'date';
      }
      if (val instanceof RegExp) {
        return 'regexp';
      }
      return /\[object (\w+)]/.exec(Object.prototype.toString.call(val).toLowerCase())?.[1] || ""
    };
    setType(getType(value));
  }, [value]);
  return type;
}
