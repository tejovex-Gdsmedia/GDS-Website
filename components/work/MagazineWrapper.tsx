"use client";

import dynamic from "next/dynamic";

const MagazineFlip = dynamic(() => import("@/components/originkit/ui/magazine-flip"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[650px] bg-brand-black flex items-center justify-center text-brand-gold font-mono text-sm border-2 border-brand-gold/40">
      LOADING 3D MAGAZINE CORRIDOR...
    </div>
  ),
});

export default function MagazineWrapper(props: any) {
  return <MagazineFlip {...props} />;
}
