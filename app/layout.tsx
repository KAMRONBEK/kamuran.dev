import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      </body>
    </html>
  );
}
