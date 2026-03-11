import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, UserRound } from "lucide-react";
import type { BlogArticle } from "@/app/blog/lib/MockArticles";

interface ArticleCardProps {
  article: BlogArticle;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article
      className="group rounded-xl overflow-hidden cursor-pointer border border-border bg-card shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow flex flex-col"
    >
      <div className="relative aspect-[2/1] bg-muted overflow-hidden">
        <Image
          src={article.imageUrl}
          alt=""
          fill
          className="object-cover transition-transform duration-400 ease-in ease-out group-hover:scale-115"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span
          className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-background"
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{
              background: "linear-gradient(133.76deg, var(--color-secondary-green) 4.93%, var(--color-primary-blue) 98.27%)",
            }}
          />
          {article.category}
        </span>
      </div>

      <div className="p-3 md:p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 text-xs text-gray-icon font-medium">
            <Calendar className="w-2.5 h-2.5 text-secondary-green" /> {article.date}
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-icon font-medium">
            <Clock className="w-2.5 h-2.5 text-secondary-green" /> {article.readTime}
          </div>
        </div>
        <h3 className="text-base md:text-lg font-bold text-foreground line-clamp-2 mb-2 transition-colors duration-400 group-hover:text-secondary-green">
          {article.title}
        </h3>
        <p className="text-sm md:text-base text-gray-icon line-clamp-3 flex-1 mb-4">
          {article.description}
        </p>

        <div className="flex items-center justify-between mt-auto border-t border-border pt-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
              <UserRound className="w-5 h-5 text-gray-icon" />
            </div>
            <span className="text-sm text-gray-text font-medium">{article.author}</span>
          </div>
          <Link
            href={article.href}
            className="text-sm font-medium text-primary-blue shrink-0 flex items-center gap-1"
          >
            Read more <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
