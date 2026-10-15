import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/schema/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SITE_URL, BRAND_NAME } from "@/lib/routes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} — AI Marketing Agency for Indian Businesses`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "GDS Media helps Indian businesses grow with AI-powered ads, videos, WhatsApp automation, and performance marketing.",
  icons: {
    // TODO: replace with actual GDS Media brand favicon
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}>
      <head>
        <JsonLd data={organizationSchema()} />
      </head>
      <body className="font-sans bg-brand-black text-brand-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
