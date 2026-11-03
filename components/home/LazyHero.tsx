"use client";

import dynamic from "next/dynamic";

// Both pull in three.js directly, which otherwise bloats the homepage's
// First Load JS from ~103kB (every other page) to ~248kB. They're purely
// decorative/client-side enhancements, so load them async post-hydration
// instead of blocking initial parse — same pattern already used for the
// /work page's magazine-flip component. `ssr: false` requires a Client
// Component boundary, hence this wrapper (app/page.tsx is a Server
// Component, since it exports `metadata`).
export const NeuralHero = dynamic(() => import("@/components/NeuralHero"), { ssr: false });
export const OrbitalType = dynamic(() => import("@/components/OrbitalType"), { ssr: false });
