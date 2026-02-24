import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kamuran.dev"),
  title: "Kamronbek Juraev — React Native / React Developer",
  description:
    "Personal portfolio of Kamronbek Juraev. 6+ years of experience building cross-platform mobile and web applications. 20+ apps shipped across fintech, e-commerce, insurance, and logistics.",
  icons: {
    // Favicons are aggressively cached in browsers/CDNs; bump `v` on updates.
    icon: [{ url: "/icon.png?v=1" }],
    apple: [{ url: "/apple-icon.png?v=1" }],
  },
  keywords: [
    "Kamronbek Juraev",
    "React Native Developer",
    "React Developer",
    "Mobile Developer",
    "Full Stack",
    "Portfolio",
  ],
  openGraph: {
    title: "Kamronbek Juraev — React Native / React Developer",
    description:
      "6+ years of experience. 20+ apps shipped. Building cross-platform mobile and web applications.",
    url: "https://kamuran.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamronbek Juraev — React Native / React Developer",
    description:
      "6+ years of experience. 20+ apps shipped. Building cross-platform mobile and web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
