'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-sm font-semibold uppercase tracking-wider mb-3 transition-all duration-500',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            light ? 'text-primary' : 'text-primary'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight text-balance transition-all duration-700 delay-100',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed transition-all duration-700 delay-200',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            light ? 'text-white/60' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
