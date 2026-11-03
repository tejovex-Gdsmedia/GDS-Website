// width/height are each logo's natural aspect ratio at the 56px (h-14)
// display height, set as attributes (not just CSS) so the browser can
// reserve the right box before the image loads — avoids layout shift.
const LOGOS = [
  { src: "/images/clients/vision-enterprises.jpg", alt: "Vision Enterprises", width: 56, height: 56 },
  { src: "/images/clients/leaf-logo.jpg", alt: "Client logo", width: 56, height: 56 },
  { src: "/images/clients/tp-hair-studio.png", alt: "TP's Hair Studio", width: 56, height: 56 },
  { src: "/images/clients/the-watch-store.png", alt: "The Watch Store", width: 211, height: 56 },
  { src: "/images/clients/tejovex-ai.png", alt: "Tejovex AI", width: 205, height: 56 },
  { src: "/images/clients/facematic-global-institute.webp", alt: "Facematic Global Institute", width: 167, height: 56 },
  { src: "/images/clients/brijesh-duke-surgeon.png", alt: "Brijesh Duke Surgeon", width: 140, height: 56 },
  { src: "/images/clients/facematic-aesthetics.png", alt: "Facematic Aesthetics", width: 56, height: 56 },
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
            width={logo.width}
            height={logo.height}
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
