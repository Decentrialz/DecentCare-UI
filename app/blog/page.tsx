import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import { BlogHero, LatestBlogs, AllArticles } from "@/app/blog/components";

export const metadata = {
  title: "Blog & Insights - DecentCare",
  description:
    "Discover healthcare innovation and insights. Stay informed with the latest healthcare technology trends, best practices, and insights from industry experts.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BlogHero breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blogs Index" }
      ]} />
      <LatestBlogs />
      <AllArticles />
      <Footer />
    </div>
  );
}
