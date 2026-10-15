"use client";

import { useEffect, useRef, useState } from "react";

interface RevealableProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Revealable({ children, className = "", delay = 0 }: RevealableProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.05, rootMargin: "100px" }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}
