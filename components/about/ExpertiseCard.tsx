import { ReactNode } from "react";

interface ExpertiseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

/**
 * Hover-reveal card (adapted from Uiverse.io by Dailleer): an icon sits
 * centred on a brand-gradient tile; on hover, a white panel rotates in
 * from the diagonal to reveal the title and description while the icon
 * shrinks away.
 */
export function ExpertiseCard({ icon, title, description }: ExpertiseCardProps) {
  return (
    <div className="group relative w-full h-[230px] rounded-xl overflow-hidden flex items-center justify-center bg-[linear-gradient(-45deg,#008DBB_0%,#FF9810_100%)] transition-shadow duration-500 hover:shadow-2xl">
      <span className="w-12 h-12 text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-0 group-hover:-rotate-45">
        {icon}
      </span>
      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] bg-white p-6 flex flex-col justify-center opacity-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-0 group-hover:opacity-100">
        <p className="font-display text-xl font-black text-brand-ink uppercase tracking-tight mb-2">{title}</p>
        <p className="font-mono text-brand-ink/70 text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
