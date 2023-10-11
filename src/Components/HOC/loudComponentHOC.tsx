import { FC } from 'react';

export interface IInjectedProps {
  saySomething(): void;
}

export function loudComponentHOC(WrappedComponent: FC<IInjectedProps>) {
  function sayHi() {
    alert('HI!');
  }

  return function LoudComponent() {
    return <WrappedComponent saySomething={sayHi} />;
  };
}
