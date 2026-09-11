
import Index from "../app/components/index";
import { homePageSchema } from "@/lib/schemas/homeSchema";
import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
  title: "CRM for Hospitals + AI Patient Growth Engine | DecentCare",
  description: "See what every patient is doing, know who is ready to book, and act in time. Platform, marketing and a dedicated team in one flat fee.",
  keywords: [
    "crm for hospitals",
    "healthcare crm",
    "patient management software",
    "patient engagement software",
    "patient acquisition",
  ],
  robots: {
    index: isProduction,
    follow: isProduction,
  },
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
};

export default function Home() {
  return (
    <>
      <script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />
      <Index />
    </>
  );
}
