"use client";

import { useState, useEffect } from "react";
import { PaginationControl } from "@/app/components/ui/pagination";
import type { BlogArticle, SanityCategory } from "@/sanity/types/blog";
import ArticleCard from "./ArticleCard";
import ArticlesSectionHeader from "./ArticlesSectionHeader";
import NoArticlesFound from "./NoArticlesFound";

const ITEMS_PER_PAGE = 6;

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

interface AllArticlesProps {
  articles: BlogArticle[];
  categories?: SanityCategory[];
  selectedCategory?: string;
  selectedSort?: string;
  searchQuery?: string;
  onCategoryChange?: (category: string) => void;
  onSortChange?: (sort: string) => void;
  onSearchChange?: (query: string) => void;
}

export default function AllArticles({ 
  articles,
  categories,
  selectedCategory,
  selectedSort,
  searchQuery,
  onCategoryChange,
  onSortChange,
  onSearchChange,
}: AllArticlesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalBlogs = articles.length;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to first page whenever the filtered result set changes.
  useEffect(() => {
    setCurrentPage(1);
  }, [articles]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
            showSearchBar
            showCategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
            searchQuery={searchQuery}
            onCategoryChange={onCategoryChange}
            onSortChange={onSortChange}
            onSearchChange={onSearchChange}
          />

          {/* Blog grid */}
          {displayedArticles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14">
              {displayedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="mt-14">
              <NoArticlesFound
                onClearSearch={() => {
                  onSearchChange?.("");
                  onCategoryChange?.("");
                }}
              />
            </div>
          )}

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
