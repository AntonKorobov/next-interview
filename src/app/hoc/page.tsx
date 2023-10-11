'use client';

import { LoadedComponent } from '@/Components/HOC/LoadedComponent';
import { loadingHOC } from '@/Components/HOC/loadingHOC';
import { loudComponentHOC } from '@/Components/HOC/loudComponentHOC';
import { SilentComponent } from '@/Components/HOC/SilentComponent';

// https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb

const WithHOCComponent = loudComponentHOC(SilentComponent);
const WithLoadingHOC = loadingHOC(LoadedComponent, true);

export default function HOCPage() {
  return (
    <div>
      <h2>HOC Component</h2>
      <WithHOCComponent />
      <WithLoadingHOC />
    </div>
  );
}
