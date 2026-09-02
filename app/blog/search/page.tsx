"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import { PaginationControl } from "@/app/components/ui/pagination";
import { ArticlesSectionHeader, BlogHero, NoArticlesFound } from "@/app/blog/components";
import ArticleCard from "@/app/blog/components/ArticleCard";
import { searchPosts } from "@/app/blog/lib/sanity-api";
import type { BlogArticle } from "@/sanity/types/blog";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";
const ITEMS_PER_PAGE = 6;

export default function BlogSearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Suspense fallback={<SearchFallback />}>
        <BlogSearchContent />
      </Suspense>
      <MobileStickyButtons />
      <Footer />
    </div>
  );
}

function SearchFallback() {
  return (
    <main className="pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="w-full max-w-4xl mx-auto">
        <p className="text-muted-foreground">Loading search...</p>
      </div>
    </main>
  );
}

function BlogSearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? searchParams.get("query") ?? "";

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArticles, setFilteredArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch search results
  useEffect(() => {
    async function fetchResults() {
      setLoading(true);
      setCurrentPage(1);
      const results = await searchPosts(q);
      setFilteredArticles(results);
      setLoading(false);
    }
    fetchResults();
  }, [q]);

  const totalResults = filteredArticles.length;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <main className="pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="w-full max-w-4xl mx-auto">
          <p className="text-muted-foreground">Loading search results...</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <BlogHero defaultQuery={q} showFilterButton breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Search Blogs" }
      ]} variant="search"/>

      {/* Search Results */}
      <section className="py-16 md:py-20 lg:py-25">
        <div className={SECTION_PADDING}>
          <div className={CONTENT_MAX}>

         {displayedArticles.length > 0 ? (
          <>
            <ArticlesSectionHeader title="Search Results" countLabel={`${totalResults} blogs available`} />

            {q && (
              <p className="text-gray-icon ml-5 mt-1">
                Showing results for{" "}
                <span className="font-medium text-secondary-green">&quot;{q}&quot;</span>
              </p>
            )}
        
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
                {displayedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

            {totalResults > 0 && (
              <div className="mt-10 md:mt-14">
                <PaginationControl
                  currentPage={currentPage}
                  totalItems={totalResults}
                  itemsPerPage={ITEMS_PER_PAGE}
                  onPageChange={handlePageChange}
                  showEntriesInfo={false}
                  showPageInput={true}
                  maxVisiblePages={5}
                />
              </div>
            )}
            </>
            ) : (
              <div>
                <NoArticlesFound onClearSearch={() => router.push("/blog")} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
