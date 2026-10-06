import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import { BlogHero, LatestBlogs, AllArticles } from "@/app/blog/components";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";
import type { Metadata } from "next";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
  title: "Healthcare Growth Blog for Hospitals & Doctors | DecentCare",
  description: "Guides on patient acquisition, hospital CRM, healthcare SEO and AI search, written for Indian hospitals, clinics and doctors.",
  keywords: [
    "healthcare marketing blog",
    "patient acquisition",
    "healthcare seo",
    "hospital management software",
  ],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: getCanonicalUrl('/blog'),
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <h1 className="sr-only">DecentCare healthcare growth blog</h1>
      <BlogHero breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blogs Index" }
      ]} />
      <LatestBlogs />
      <AllArticles />
      <MobileStickyButtons />
      <Footer />
    </div>
  );
}
