import { notFound } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import { getPostBySlug, getRecommendedPosts, getAllPostSlugs } from "@/app/blog/lib/sanity-api";
import RecommendedBlogsSection from "@/app/blog/components/RecommendedBlogsSection";
import { BlogDetailHero } from "../components";
import Breadcrumb from "@/app/components/Breadcrumb";
import BlogBodyWithToc from "@/app/blog/components/BlogBodyWithToc";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";
const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

// ISR: Revalidate every 10 minutes (600 seconds)
export const revalidate = 600;

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);

  if (!article) {
    return {
      title: "Blog Post Not Found - DecentCare",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: article.seoTitle || `${article.title} - DecentCare Blog`,
    description: article.seoDescription || article.description,
    robots: {
      index: isProduction,
      follow: isProduction,
    },
    alternates: {
      canonical: getCanonicalUrl(`/blog/${slug}`),
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);
  
  if (!article) {
    notFound();
  }

  // Fetch recommended articles
  const recommended = await getRecommendedPosts(article.id, 9);

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
            
            {/* Article Body with TOC and Share */}
            <div className="mt-10 md:mt-14">
              <BlogBodyWithToc 
                body={article.body}
                imageUrl={article.imageUrl}
                title={article.title}
              />
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
