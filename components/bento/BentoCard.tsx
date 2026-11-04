"use client";

import clsx from "clsx";

export interface BentoCardProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BentoCard({
  title,
  subtitle,
  className = "",
  children,
}: BentoCardProps) {
  return (
    <div className={`bento-card ${className} rounded-md p-6 border border-brand-blue/15 shadow-soft-sm transition-all duration-300 hover:shadow-soft`}>
      {title && (
        <div className="flex flex-col mb-4">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
            {title}
          </span>
          {subtitle && (
            <p className="text-brand-ink/80 text-sm mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}