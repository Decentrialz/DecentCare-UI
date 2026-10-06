import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
  title: "Contact DecentCare | Book a 30-Minute Demo",
  description: "See how DecentCare brings in more patients and converts more enquiries, in a 30-minute demo. Your first patient managed within 48 hours.",
  keywords: [
    "decentcare demo",
    "healthcare crm demo",
    "book hospital crm demo",
  ],
  robots: {
    index: isProduction,
    follow: isProduction,
  },
  alternates: {
    canonical: getCanonicalUrl('/contact'),
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
