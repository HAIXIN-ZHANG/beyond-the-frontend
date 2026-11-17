'use client';

import type { ReactNode } from 'react';
import { useLayoutEffect, useRef } from 'react';

export function ReadingTools({ children }: { children: ReactNode }) {
  const tools = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const element = tools.current, column = element?.parentElement;
    if (!element || !column) return;
    const update = () => column.style.setProperty('--reading-tools-height', `${element.getBoundingClientRect().height}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => { observer.disconnect(); column.style.removeProperty('--reading-tools-height'); };
  }, []);
  return <div ref={tools} className="reading-tools">{children}</div>;
}
