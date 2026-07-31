import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import { BlogHero, LatestBlogs, AllArticles } from "@/app/blog/components";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";

export const metadata = {
  robots: 'index, follow',
  alternates: {
    canonical: getCanonicalUrl('/blog'),
  },
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
      <MobileStickyButtons />
      <Footer />
    </div>
  );
}
