'use client';

import { useEffect } from 'react';

export function ErrorComponent() {
  useEffect(() => {
    throw new Error('Oops, something went wrong!');
  }, []);

  return (
    <div>
      <h2>Component with Error</h2>
    </div>
  );
}
