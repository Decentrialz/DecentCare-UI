import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import { BlogHero, LatestBlogs, AllArticlesWithFilters } from "@/app/blog/components";
import { getAllPosts, getAllCategories } from "@/app/blog/lib/sanity-api";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

// ISR: Revalidate every 5 minutes (300 seconds)
export const revalidate = 300;

export const metadata = {
  robots: {
    index: isProduction,
    follow: isProduction,
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
