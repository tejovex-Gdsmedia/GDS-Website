"use client";

import clsx from "clsx";

export interface BentoStatProps {
  value: string;
  label: string;
  className?: string;
}

export default function BentoStat({
  value,
  label,
  className = "",
}: BentoStatProps) {
  return (
    <div className={clsx("bg-brand-surface-800 text-brand-ink rounded-2xl p-6 shadow-sm", className)}>
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <p className="text-brand-gray-300 text-sm">{label}</p>
    </div>
  );
}