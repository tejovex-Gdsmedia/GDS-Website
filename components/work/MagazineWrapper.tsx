"use client";

import dynamic from "next/dynamic";

const MagazineFlip = dynamic(() => import("@/components/originkit/ui/magazine-flip"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[650px] bg-brand-bg flex items-center justify-center text-brand-blue font-mono text-sm border-2 border-brand-blue/40">
      LOADING 3D MAGAZINE CORRIDOR...
    </div>
  ),
});

export default function MagazineWrapper(props: any) {
  return <MagazineFlip {...props} />;
}
