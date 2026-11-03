import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/schema/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SITE_URL, BRAND_NAME } from "@/lib/routes";
import SmoothScroll from "@/components/SmoothScroll";

// Body/subheading/UI font.
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Heading font — hero/section/page headings, large display headings, marketing headlines.
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} — AI Marketing Agency for Indian Businesses`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "GDS Media helps Indian businesses grow with AI-powered ads, videos, WhatsApp automation, and performance marketing.",
  // Favicon / apple touch icon are served automatically by Next.js from
  // app/icon.png and app/apple-icon.png — no manual `icons` entry needed.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${workSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <JsonLd data={organizationSchema()} />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="4BZgFxeLCpe9j7gA5dyn6uvU0HEUsv_hUJzrlo_0W9A" />

        {/* Google tag (gtag.js) - GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WZZY50KZ09"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WZZY50KZ09');`,
          }}
        />
      </head>
      <body className="font-sans bg-brand-bg text-brand-ink min-h-screen flex flex-col">
        <SmoothScroll />
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
