import { useContext } from 'react';
import { contextFunc } from './ContextFunctionalProvider';

export function ContextFunctionalConsumer() {
  const { name, setName } = useContext(contextFunc);

  return (
    <div>
      <p>value={name}</p>
      <button onClick={() => setName('default')}>Reset name</button>
    </div>
  );
}
