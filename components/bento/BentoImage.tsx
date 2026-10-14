"use client";

import clsx from "clsx";

export interface BentoImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function BentoImage({
  src,
  alt,
  className = "",
  aspectRatio = "16/9",
}: BentoImageProps) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-t-lg shadow-sm",
        className,
        "w-full h-[160px] md:h-[200px] lg:h-[240px]"
      )}
    >
      <img
        src={src}
        alt={alt}
        className={clsx(
          "w-full h-full object-cover",
          aspectRatio === "1/1" && "w-full h-full",
          aspectRatio === "4/3" && "w-full h-full object-cover",
          aspectRatio === "1/1" && "rounded-t-lg",
          aspectRatio === "16/9" && "rounded-t-lg md:rounded-none md:rounded-b-none"
        )}
      />
    </div>
  );
}