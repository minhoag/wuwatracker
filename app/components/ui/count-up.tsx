'use client';

import { cn } from '@/lib/utils';
import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

export function CountUp({
  value,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
}: {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
  delay?: number; // delay in s
  decimalPlaces?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(
    direction === 'down' ? value : 0,
  );
  const springValue = useSpring(motionValue, {
    damping: 65,
    stiffness: 250,
  });
  const isInView = useInView(ref, {
    once: true,
    margin: '0px',
  });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces],
  );

  return (
    <span
      className={cn(
        'inline-block tabular-nums tracking-wider text-black dark:text-white',
        className,
      )}
      ref={ref}
    />
  );
}
