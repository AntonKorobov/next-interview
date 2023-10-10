'use client';

import { ContextFunctionalProvider } from '@/Components/Context/ContextFunctionalProvider';
import { ContextFunctionalConsumer } from '@/Components/Context/ContextFunctionalConsumer';
import { ContextClassProvider } from '@/Components/Context/ContextClassProvider';
import { ContextClassConsumer } from '@/Components/Context/ContextClassConsumer';
import { ContextTypeComponent } from '@/Components/Context/ContextType';

// https://legacy.reactjs.org/docs/context.html

export default function ContextPage() {
  return (
    <div>
      <h2>Context page</h2>
      <h3>Context function</h3>
      <ContextFunctionalProvider>
        <ContextFunctionalConsumer /> {/* will use provider's default value */}
      </ContextFunctionalProvider>
      <ContextFunctionalConsumer /> {/* will use context's default value */}
      <h3>Context class</h3>
      <ContextClassProvider>
        <ContextClassConsumer /> {/* will use provider's default value */}
        <h3>Context class(ContextType)</h3>
        <ContextTypeComponent />
      </ContextClassProvider>
    </div>
  );
}
