/**
 * FadeIn.tsx
 * Componente de animación fade-in usando Web Animations API
 * Sin dependencias externas - Rendimiento óptimo
 */

import { useEffect, useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 600,
  direction = "up",
  className = "",
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const transforms: Record<string, string> = {
      up: "translateY(24px)",
      down: "translateY(-24px)",
      left: "translateX(-24px)",
      right: "translateX(24px)",
      none: "translateY(0)",
    };

    // Estado inicial
    element.style.opacity = "0";
    element.style.transform = transforms[direction];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true;

            element.animate(
              [
                { opacity: 0, transform: transforms[direction] },
                { opacity: 1, transform: "translateY(0) translateX(0)" },
              ],
              {
                duration,
                delay,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "forwards",
              },
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, duration, direction, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
