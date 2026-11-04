import clsx from "clsx";

/**
 * Homepage hero headline, split into 4 fixed lines with a per-word
 * mask/reveal animation. CSS-only (keyframes live in app/globals.css under
 * "Hero headline reveal"), so this renders as a plain Server Component —
 * no client JS needed to play the animation.
 */
interface HeroWord {
  text: string;
  /** "ai" = one-time light-sweep highlight. "accent" = brand-blue + the teal underline draw-in. */
  variant?: "ai" | "accent";
}

const HERO_LINES: HeroWord[][] = [
  [{ text: "Make" }, { text: "AI", variant: "ai" }],
  [{ text: "Marketing" }, { text: "Work" }],
  [{ text: "For" }, { text: "Your" }, { text: "Indian", variant: "accent" }],
  [{ text: "Business", variant: "accent" }],
];

const FULL_TEXT = "Make AI Marketing Work For Your Indian Business";

interface HeroHeadlineProps {
  /** Typography utility classes (font/size/weight/color/line-height) — kept
   * on the caller's side, matching how every other hero heading in this
   * project takes its classes, rather than duplicating Tailwind's
   * breakpoints as hand-written CSS media queries. */
  className?: string;
}

export default function HeroHeadline({ className = "" }: HeroHeadlineProps) {
  let wordIndex = -1;

  return (
    <h1 className={clsx("hero-title", className)} aria-label={FULL_TEXT}>
      <span aria-hidden="true">
        {HERO_LINES.map((line, lineIndex) => (
          <span className="hero-line" key={lineIndex}>
            {line.map((word, wi) => {
              wordIndex += 1;
              const isLast = wi === line.length - 1;
              return (
                <span key={wi}>
                  <span
                    className="hero-word-mask"
                    style={{ "--i": wordIndex } as React.CSSProperties}
                  >
                    <span
                      className={clsx(
                        "hero-word",
                        word.variant === "ai" && "hero-word--ai",
                        word.variant === "accent" && "hero-word--accent text-brand-blue"
                      )}
                    >
                      {word.text}
                    </span>
                  </span>
                  {!isLast && " "}
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </h1>
  );
}
