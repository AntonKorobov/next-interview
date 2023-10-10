'use client';

import style from './RenderProps.module.scss';

import { ReactNode, useEffect, useState } from 'react';

export interface ITime {
  h: number;
  m: number;
  s: number;
}

interface IRenderProps {
  renderHours?: (time: number) => ReactNode;
  renderMinutes?: (time: number) => ReactNode;
  renderSeconds?: (time: number) => ReactNode;
}

export function RenderProps({ renderHours, renderMinutes, renderSeconds }: IRenderProps) {
  const [time, setTime] = useState<ITime>({ h: 11, m: 59, s: 50 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        const currentTime = { ...prev };
        currentTime.s++;
        if (currentTime.s === 60) {
          currentTime.s = 0;
          currentTime.m++;
        }
        if (currentTime.m === 60) {
          currentTime.m = 0;
          currentTime.h++;
        }
        if (currentTime.h === 12) {
          currentTime.h = 0;
        }
        return currentTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={style.clockFace}>
      {renderHours && (
        <div>
          <h3>H</h3>
          {renderHours(time.h)}
        </div>
      )}
      {renderMinutes && (
        <div>
          <h3>M</h3>
          {renderMinutes(time.m)}
        </div>
      )}
      {renderSeconds && (
        <div>
          <h3>S</h3>
          {renderSeconds(time.s)}
        </div>
      )}
      <button onClick={() => setTime({ h: 0, m: 0, s: 0 })}>Reset</button>
    </div>
  );
}
