'use client';

import { RenderProps } from '@/Components/RenderProps/RenderProps';
import { Timer } from '@/Components/RenderProps/Timer';

export default function RenderPropsPage() {
  return (
    <div>
      <h2>Render props</h2>
      <RenderProps
        renderHours={(value) => <Timer time={value} />}
        renderMinutes={(value) => <Timer time={value} />}
        renderSeconds={(value) => <Timer time={value} />}
      />
    </div>
  );
}
