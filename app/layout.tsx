import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kamuran.dev"),
  title: "Kamronbek Juraev — React Native / React Developer",
  description:
    "Personal portfolio of Kamronbek Juraev. 6+ years of experience building cross-platform mobile and web applications. 20+ apps shipped across fintech, e-commerce, insurance, and logistics.",
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
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
