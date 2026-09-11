import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import { BlogHero, LatestBlogs, AllArticlesWithFilters } from "@/app/blog/components";
import { getAllPosts, getAllCategories } from "@/app/blog/lib/sanity-api";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";
import type { Metadata } from "next";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const revalidate = 300;

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

export default async function BlogPage() {
  // Fetch blog data from Sanity
  const [allPosts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);
  const carouselPosts = allPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <h1 className="sr-only">DecentCare healthcare growth blog</h1>
      <BlogHero
        variant="simple"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Blogs Index" }
        ]}
      />
      <LatestBlogs featuredPosts={carouselPosts} />
      <AllArticlesWithFilters articles={allPosts} categories={categories} />
      <MobileStickyButtons />
      <Footer />
    </div>
  );
}
