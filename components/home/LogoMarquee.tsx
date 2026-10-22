const LOGOS = [
  { src: "/images/clients/vision-enterprises.jpg", alt: "Vision Enterprises" },
  { src: "/images/clients/leaf-logo.jpg", alt: "Client logo" },
  { src: "/images/clients/tp-hair-studio.png", alt: "TP's Hair Studio" },
  { src: "/images/clients/the-watch-store.png", alt: "The Watch Store" },
  { src: "/images/clients/tejovex-ai.png", alt: "Tejovex AI" },
  { src: "/images/clients/facematic-global-institute.webp", alt: "Facematic Global Institute" },
  { src: "/images/clients/brijesh-duke-surgeon.png", alt: "Brijesh Duke Surgeon" },
  { src: "/images/clients/facematic-aesthetics.png", alt: "Facematic Aesthetics" },
];

/**
 * Infinite-scrolling logo strip (adapted from PrebuiltUI's marquee
 * pattern): the track renders the logo list twice back-to-back and
 * animates from 0% to -50%, so the loop point is invisible.
 */
export function LogoMarquee() {
  return (
    <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
      <div className="absolute left-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-brand-bg to-transparent" />

      <div className="marquee-inner flex items-center will-change-transform min-w-[200%]">
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            draggable={false}
            loading={i < LOGOS.length ? "eager" : "lazy"}
            className="h-12 sm:h-14 w-auto object-contain mx-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>

      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-brand-bg to-transparent" />

      <style>{`
        .marquee-inner {
          animation: marqueeScroll 22s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-inner { animation: none; }
        }
      `}</style>
    </div>
  );
}
