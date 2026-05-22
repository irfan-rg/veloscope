import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

import Navigation from "@/components/Navigation/Navigation";
import ScrollProgress from "@/components/shared/ScrollProgress";
import CustomCursor from "@/components/shared/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
