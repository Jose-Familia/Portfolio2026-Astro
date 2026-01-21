/**
 * Counter.tsx
 * Contador animado para estadísticas
 * Sin dependencias externas
 */

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const startTime = performance.now();

            const updateCount = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing: ease-out-expo
              const eased =
                progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

              const currentValue = Math.round(value * eased);
              setCount(currentValue);

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              }
            };

            requestAnimationFrame(updateCount);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
