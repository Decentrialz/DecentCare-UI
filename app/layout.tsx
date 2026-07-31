import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/app/components/GoogleTagManager";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DecentCare - AI-Powered Healthcare Marketing",
  description: "AI-enabled Care Journey CRM designed to help healthcare teams streamline patient journeys, appointments, and operational coordination.",
  robots: 'index, follow',
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManagerHead />
      </head>
      <body
        className={`${plusJakartaSans.className} ${dmSerifDisplay.variable} antialiased`}
      >
        <GoogleTagManagerBody />
        {children}
      </body>
    </html>
  );
}
