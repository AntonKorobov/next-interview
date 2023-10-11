import { useEffect } from 'react';

export function ErrorComponent() {
  useEffect(() => {
    setTimeout(() => {
      throw new Error('Oops, something went wrong!');
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Component with Error</h2>
    </div>
  );
}
