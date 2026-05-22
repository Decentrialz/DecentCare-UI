"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { PaginationControl } from "@/app/components/ui/pagination";
import type { BlogArticle, SanityCategory } from "@/sanity/types/blog";
import ArticleCard from "./ArticleCard";
import ArticlesSectionHeader from "./ArticlesSectionHeader";

const ITEMS_PER_PAGE = 12;
const INITIAL_VISIBLE_PER_PAGE = 6;

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

interface AllArticlesProps {
  articles: BlogArticle[];
  categories?: SanityCategory[];
  selectedCategory?: string;
  selectedSort?: string;
  onCategoryChange?: (category: string) => void;
  onSortChange?: (sort: string) => void;
}

export default function AllArticles({ 
  articles,
  categories,
  selectedCategory,
  selectedSort,
  onCategoryChange,
  onSortChange
}: AllArticlesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedOnCurrentPage, setExpandedOnCurrentPage] = useState(false);
  const totalBlogs = articles.length;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const visibleCount = expandedOnCurrentPage ? ITEMS_PER_PAGE : INITIAL_VISIBLE_PER_PAGE;
  const displayedArticles = pageArticles.slice(0, visibleCount);

  const canLoadMore = !expandedOnCurrentPage && pageArticles.length > INITIAL_VISIBLE_PER_PAGE;
  const canShowFewer = expandedOnCurrentPage;

  const handleLoadMore = () => setExpandedOnCurrentPage(true);
  const handleShowFewer = () => setExpandedOnCurrentPage(false);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setExpandedOnCurrentPage(false);
  };

  return (
    <section
      className="py-16 md:py-20 lg:py-25"
    >
      <div className={SECTION_PADDING}>
        <div className={CONTENT_MAX}>
          <ArticlesSectionHeader
            title="All Articles"
            countLabel={`${totalBlogs} blogs available`}
            showCategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
            onCategoryChange={onCategoryChange}
            onSortChange={onSortChange}
          />

          {/* Blog grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14">
            {displayedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load more / Show fewer (within current page) */}
          <div className="flex flex-col items-center gap-6 mt-10 md:mt-12">
            {(canLoadMore || canShowFewer) && (
              <Button
                type="button"
                onClick={canLoadMore ? handleLoadMore : handleShowFewer}
                className="font-medium flex items-center gap-2"
                size="sm"
              >
                {canLoadMore ? "Load more blogs" : "Show fewer blogs"}
                {canLoadMore ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </Button>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-10 md:mt-14">
            <PaginationControl
              currentPage={currentPage}
              totalItems={totalBlogs}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={handlePageChange}
              showEntriesInfo={false}
              showPageInput={true}
              maxVisiblePages={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
