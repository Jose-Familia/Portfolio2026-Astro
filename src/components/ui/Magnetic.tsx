/**
 * Magnetic.tsx
 * Efecto magnético para elementos interactivos
 * Sin dependencias externas - Web Animations API
 */

import { useRef, type MouseEvent, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function Magnetic({
  children,
  className = "",
  strength = 0.3,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = () => {
    const element = ref.current;
    if (!element) return;

    element.animate(
      [
        { transform: element.style.transform },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: 500,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      },
    );
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        willChange: "transform",
        transition: "transform 0.15s ease-out",
      }}
    >
      {children}
    </div>
  );
}
