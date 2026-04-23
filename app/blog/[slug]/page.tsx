import { notFound } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import {
  getArticleDetailBySlug,
  getRecommendedArticles,
} from "@/app/blog/lib/MockArticles";
import BlogBody from "@/app/blog/components/BlogBody";
import RecommendedBlogsSection from "@/app/blog/components/RecommendedBlogsSection";
import { BlogDetailHero } from "../components";
import Breadcrumb from "@/app/components/Breadcrumb";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = getArticleDetailBySlug(slug);
  if (!article) notFound();

  const recommended = getRecommendedArticles(article.id, 9);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 md:pb-20">
        <div className={SECTION_PADDING}>
          <div className={`${CONTENT_MAX}`}>
            <div className="mb-6">
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blogs" }]} breadCrumbClass="bg-secondary-green/4"/>
            </div>
            <BlogDetailHero article={article} />
            <div className="mt-10 md:mt-14">
              <BlogBody article={article} />
            </div>
            <RecommendedBlogsSection articles={recommended} className="mt-16 md:mt-20" />
          </div>
        </div>
      </main>
      <MobileStickyButtons />
      <Footer />
    </div>
  );
}
