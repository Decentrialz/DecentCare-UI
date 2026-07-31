import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";

export const metadata: Metadata = {
  robots: 'index, follow',
  alternates: {
    canonical: getCanonicalUrl('/services'),
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
