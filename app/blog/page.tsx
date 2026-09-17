import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import { BlogHero, LatestBlogs, AllArticlesWithFilters } from "@/app/blog/components";
import { getAllPosts, getAllCategories, searchPosts } from "@/app/blog/lib/sanity-api";
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

interface BlogPageProps {
  searchParams: Promise<{ q?: string; query?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const initialQuery = (params.q ?? params.query ?? "").trim();

  // Fetch blog data from Sanity
  const [allPosts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);
  const carouselPosts = allPosts.slice(0, 3);

  // Use the Sanity search query for the initial render when the URL already has a query.
  const initialSearchResults = initialQuery ? await searchPosts(initialQuery) : undefined;

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
      <AllArticlesWithFilters
        articles={allPosts}
        categories={categories}
        initialQuery={initialQuery}
        initialSearchResults={initialSearchResults}
      />
      <MobileStickyButtons />
      <Footer />
    </div>
  );
}
