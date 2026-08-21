import { Calendar, Clock, Eye, Grid2x2 } from "lucide-react";
import type { BlogArticleDetail } from "@/sanity/types/blog";

interface BlogDetailHeroProps {
  article: BlogArticleDetail;
}

export default function BlogDetailHero({ article }: BlogDetailHeroProps) {
  const tag = article.category;
  const readTimeNum = article.readTime.replace(/\D/g, "") || "5";

  return (
    <header className="text-center mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gradient-heading-2 leading-tight mb-4">
        {article.title}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-icon mb-6">
        {tag && (
          <div className="inline-flex items-center gap-2">
            <Grid2x2 className="w-4 h-4 text-secondary-green" />
            <span className="text-sm text-gray-text font-semibold">{tag}</span>
          </div>
        )}
        <div className="inline-flex items-center gap-1">
          <Calendar className="w-4 h-4 text-secondary-green" />
          <span className="text-sm text-gray-text font-semibold">{article.date}</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <Clock className="w-4 h-4 text-secondary-green" />
          <span className="text-sm text-gray-text font-semibold">{readTimeNum} min read</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <Eye className="w-4 h-4 text-secondary-green" />
          <span className="text-sm text-gray-text font-semibold">15.2K views</span>
        </div>
      </div>
    </header>
  );
}
