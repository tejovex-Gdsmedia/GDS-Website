"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedHeroHeadingProps {
  text: string;
  className?: string;
}

/**
 * Word-by-word fade/slide-in for a hero H1, inspired by 21st.dev's animated
 * hero text patterns. Runs once on mount (the hero is always above the
 * fold), and collapses to a plain, instant render under
 * prefers-reduced-motion via framer-motion's useReducedMotion hook.
 */
export function AnimatedHeroHeading({ text, className = "" }: AnimatedHeroHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <h1 className={className}>{text}</h1>;
  }

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.045 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: "0.4em" },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.h1>
  );
}
