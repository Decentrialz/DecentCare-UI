import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import { BlogHero, LatestBlogs, AllArticlesWithFilters } from "@/app/blog/components";
import { getAllPosts, getFeaturedPosts, getAllCategories } from "@/app/blog/lib/sanity-api";

export const metadata = {
  title: "Blog & Insights - DecentCare",
  description:
    "Discover healthcare innovation and insights. Stay informed with the latest healthcare technology trends, best practices, and insights from industry experts.",
};

export default async function BlogPage() {
  // Fetch blog data from Sanity
  const [allPosts, featuredPosts, categories] = await Promise.all([
    getAllPosts(),
    getFeaturedPosts(),
    getAllCategories(),
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BlogHero breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blogs Index" }
      ]} />
      <LatestBlogs featuredPosts={featuredPosts} />
      <AllArticlesWithFilters articles={allPosts} categories={categories} />
      <MobileStickyButtons />
      <Footer />
    </div>
  );
}
