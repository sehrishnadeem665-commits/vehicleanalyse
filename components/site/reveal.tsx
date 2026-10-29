'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const hiddenStyles: Record<string, string> = {
    up: 'opacity-0 translate-y-12',
    left: 'opacity-0 -translate-x-12',
    right: 'opacity-0 translate-x-12',
    scale: 'opacity-0 scale-95',
  };

  const visibleStyles: Record<string, string> = {
    up: 'opacity-100 translate-y-0',
    left: 'opacity-100 translate-x-0',
    right: 'opacity-100 translate-x-0',
    scale: 'opacity-100 scale-100',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? visibleStyles[direction] : hiddenStyles[direction],
        className
      )}
    >
      {children}
    </div>
  );
}
