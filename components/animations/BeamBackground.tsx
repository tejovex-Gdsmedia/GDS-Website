"use client";

/**
 * Subtle animated gradient/beam backdrop (21st.dev-style "beams" background),
 * built with plain CSS so it costs no extra JS. Two soft blurred blobs drift
 * slowly behind the content; the drift is disabled under
 * prefers-reduced-motion, leaving the static gradient in place.
 *
 * Purely decorative — render behind relatively-positioned content with
 * `absolute inset-0 -z-10` already applied by the parent, or wrap content
 * in a `relative` container.
 */
export function BeamBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="gds-beam gds-beam--blue absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="gds-beam gds-beam--orange absolute -bottom-32 -right-16 w-[28rem] h-[28rem] rounded-full bg-brand-orange/10 blur-3xl" />
      <style jsx>{`
        .gds-beam {
          animation: gds-beam-drift 16s ease-in-out infinite;
        }
        .gds-beam--orange {
          animation-delay: -8s;
        }
        @keyframes gds-beam-drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(2.5rem, 1.5rem) scale(1.08);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .gds-beam {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
