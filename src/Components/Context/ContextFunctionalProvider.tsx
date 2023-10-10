'use client';

import { useState, ReactNode, createContext } from 'react';

interface IContext {
  name: string;
  setName: (value: string) => void;
}

export const contextFunc = createContext<IContext>({ name: 'default', setName: () => {} });

export function ContextFunctionalProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState('myName');

  return <contextFunc.Provider value={{ name, setName }}>{children}</contextFunc.Provider>;
}