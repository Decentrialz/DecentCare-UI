"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { MOCK_ARTICLES } from "@/app/blog/lib/MockArticles";
import ArticleCard from "./ArticleCard";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

export default function AllArticles() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState("1");
  const [visibleCount, setVisibleCount] = useState(6);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const totalBlogs = MOCK_ARTICLES.length;
  const totalPages = 9;
  const displayedArticles = MOCK_ARTICLES.slice(0, visibleCount);
  const canLoadMore = visibleCount < MOCK_ARTICLES.length;
  const canShowFewer = visibleCount > 6;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) setCategoryOpen(false);
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) setSortOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleVisible = () => {
    if (visibleCount < MOCK_ARTICLES.length) {
      setVisibleCount((prev) => Math.min(prev + 6, MOCK_ARTICLES.length));
    } else {
      setVisibleCount(6);
    }
  };

  return (
    <section
      className="py-16 md:py-20 lg:py-25"
    >
      <div className={SECTION_PADDING}>
        <div className={CONTENT_MAX}>
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <div
                className="w-1.5 rounded-full shrink-0 self-stretch"
                style={{
                  background: "linear-gradient(0deg, var(--color-secondary-green) 0%, var(--color-primary-blue) 96.48%)",
                }}
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                  All Articles
                  <span className="text-base text-gray-icon font-normal">
                    ( {totalBlogs} blogs available )
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="relative" ref={categoryRef}>
                <button
                  type="button"
                  onClick={() => { setCategoryOpen(!categoryOpen); setSortOpen(false); }}
                  className="h-10 px-4 rounded-lg border border-border bg-background text-foreground text-sm font-medium flex items-center gap-2 min-w-[140px] justify-between"
                  aria-expanded={categoryOpen}
                  aria-haspopup="listbox"
                >
                  Categories
                  <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                </button>
                {categoryOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border border-border bg-background shadow-lg py-1 z-10">
                    <button type="button" className="w-full text-left px-4 py-2 text-sm hover:bg-muted">All</button>
                    <button type="button" className="w-full text-left px-4 py-2 text-sm hover:bg-muted">Growth</button>
                    <button type="button" className="w-full text-left px-4 py-2 text-sm hover:bg-muted">Patient Care</button>
                    <button type="button" className="w-full text-left px-4 py-2 text-sm hover:bg-muted">Marketing</button>
                  </div>
                )}
              </div>
              <div className="relative" ref={sortRef}>
                <button
                  type="button"
                  onClick={() => { setSortOpen(!sortOpen); setCategoryOpen(false); }}
                  className="h-10 px-4 rounded-lg border border-border bg-background text-foreground text-sm font-medium flex items-center gap-2 min-w-[120px] justify-between"
                  aria-expanded={sortOpen}
                >
                  Sort by
                  <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                </button>
                {sortOpen && (
                  <div className="absolute top-full right-0 mt-1 w-48 rounded-lg border border-border bg-background shadow-lg py-1 z-10">
                    <button type="button" className="w-full text-left px-4 py-2 text-sm hover:bg-muted">Latest</button>
                    <button type="button" className="w-full text-left px-4 py-2 text-sm hover:bg-muted">Popular</button>
                    <button type="button" className="w-full text-left px-4 py-2 text-sm hover:bg-muted">Title A-Z</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Blog grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load more / Show fewer */}
          <div className="flex flex-col items-center gap-6 mt-10 md:mt-12">
            {(canLoadMore || canShowFewer) && (
              <Button
                type="button"
                onClick={handleToggleVisible}
                className="font-medium flex items-center gap-2"
                size="sm"
              >
                {canLoadMore ? "Load more blogs" : "Show fewer blogs"}
                {canLoadMore ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </Button>
            )}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-8 md:mt-10">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="w-9 h-9 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
              >
                1
              </button>
              <button type="button" className="w-9 h-9 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted">
                7
              </button>
              <button type="button" className="w-9 h-9 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted">
                3
              </button>
              <span className="px-1 text-muted-foreground">-</span>
              <button type="button" className="w-9 h-9 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted">
                {totalPages}
              </button>
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 ml-2 md:ml-4">
              <span className="text-sm text-muted-foreground">Go to</span>
              <input
                type="text"
                value={goToPage}
                onChange={(e) => setGoToPage(e.target.value.replace(/\D/g, "").slice(0, 2))}
                className="w-14 h-9 rounded-lg border border-border bg-background text-center text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Pg"
                aria-label="Go to page"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
