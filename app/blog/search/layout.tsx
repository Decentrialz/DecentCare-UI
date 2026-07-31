import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";

export const metadata: Metadata = {
  robots: 'index, follow',
  alternates: {
    canonical: getCanonicalUrl('/blog/search'),
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
