"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface FaqAccordionItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqAccordionItem[];
}

/**
 * Animated accordion for FAQ sections (21st.dev-style expand/collapse).
 * Each panel animates height + opacity with framer-motion; under
 * prefers-reduced-motion the panel just appears/disappears without the
 * height tween.
 */
export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-trigger-${index}`;

        return (
          <div
            key={item.question}
            className="border-2 border-brand-blue/20 bg-brand-surface overflow-hidden transition-colors hover:border-brand-blue/40"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              >
                <span className="font-display text-base sm:text-lg font-bold text-brand-ink">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 flex items-center justify-center border-2 border-brand-blue/40 text-brand-blue transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="content"
                  initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="px-6 pb-5 text-brand-ink/70 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
