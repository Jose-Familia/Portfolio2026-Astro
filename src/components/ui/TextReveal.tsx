/**
 * TextReveal.tsx
 * Animación de texto palabra por palabra usando Web Animations API
 * Sin dependencias externas
 */

import { useEffect, useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "span" | "p" | "h1" | "h2" | "h3";
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 50,
  as: Tag = "span",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll<HTMLSpanElement>(".word");

    // Estado inicial
    words.forEach((word) => {
      word.style.opacity = "0";
      word.style.transform = "translateY(16px)";
      word.style.display = "inline-block";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            words.forEach((word, index) => {
              word.animate(
                [
                  { opacity: 0, transform: "translateY(16px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: 500,
                  delay: delay + index * staggerDelay,
                  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                  fill: "forwards",
                },
              );
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [delay, staggerDelay]);

  const words = text.split(" ");

  return (
    <Tag ref={containerRef as any} className={className}>
      {words.map((word, index) => (
        <span key={index} className="word" style={{ marginRight: "0.25em" }}>
          {word}
        </span>
      ))}
    </Tag>
  );
}
