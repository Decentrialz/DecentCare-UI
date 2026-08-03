import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
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
