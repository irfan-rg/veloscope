import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veloscope — More Than Just Sports",
  description:
    "Veloscope captures the spirit of endurance sports through photography and narrative. Documenting people, moments, and experiences that define races and community events.",
  keywords: [
    "Veloscope",
    "sports photography",
    "endurance sports",
    "marathon",
    "cycling",
    "event photography",
    "sports media",
  ],
  openGraph: {
    title: "Veloscope — More Than Just Sports",
    description:
      "Capturing the spirit of endurance sports through photography and narrative.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
