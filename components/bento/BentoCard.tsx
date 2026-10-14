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
    <div className={`bento-card ${className} rounded-2xl p-6 border border-brand-gold/20 shadow-sm transition-all hover:shadow-md`}>
      {title && (
        <div className="flex flex-col mb-4">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
            {title}
          </span>
          {subtitle && (
            <p className="text-brand-white/80 text-sm mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}