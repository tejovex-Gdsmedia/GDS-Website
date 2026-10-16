import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — GDS Media",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <span className="text-6xl font-display font-bold text-brand-blue">404</span>
        <h1 className="font-display text-2xl font-bold text-brand-ink mt-4 mb-2">
          Page Not Found
        </h1>
        <p className="text-brand-ink/60 text-sm mb-8">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-brand-orange text-brand-ink font-semibold rounded-full hover:bg-brand-orange-vivid transition-colors text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
