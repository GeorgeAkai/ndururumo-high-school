import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ndururumo High School — Marching to Excellence",
    template: "%s | Ndururumo High School",
  },
  description:
    "Ndururumo High School is a mixed boarding school in Nyahururu, Laikipia County, Kenya. Founded in 1951, one of the first co-educational schools in Kenya.",
  openGraph: {
    type: "website",
    siteName: "Ndururumo High School",
    locale: "en_KE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
