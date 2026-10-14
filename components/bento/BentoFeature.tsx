"use client";

import clsx from "clsx";

export interface BentoFeatureProps {
  icon?: string;
  title: string;
  description: string;
  className?: string;
}

export default function BentoFeature({
  icon = "✦",
  title,
  description,
  className = "",
}: BentoFeatureProps) {
  return (
    <div className={clsx("flex flex-col space-y-2 mt-4", className)}>
      <div className="flex items-center space-x-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <div className="text-brand-gold font-bold">{title}</div>
      </div>
      <p className="text-brand-white/80 text-sm">{description}</p>
    </div>
  );
}
