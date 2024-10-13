import React, { createContext, useContext, ReactNode } from 'react';

export function createModel<T>(useHook: () => T) {
  const Context = createContext<T | undefined>(undefined);
  const useModel = () => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error('useModel must be used within the Provider');
    }
    return context;
  };

  const Provider = ({ children }: { children: ReactNode }) => {
    const value = useHook(); // 使用传入的 Hook 来获取值
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return { Provider, useModel };
}
