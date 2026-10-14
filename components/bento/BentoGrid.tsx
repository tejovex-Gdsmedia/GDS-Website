"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";

export interface BentoGridProps {
  children: React.ReactNode;
  cols?: number;
  className?: string;
}

export default function BentoGrid({
  children,
  cols = 3,
  className = "",
}: BentoGridProps) {
  return (
    <div
      className={clsx(
        "grid gap-6",
        cols === 3 && "grid-cols-1 md:grid-cols-3",
        cols === 2 && "grid-cols-1 md:grid-cols-2",
        cols === 4 && "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
}
