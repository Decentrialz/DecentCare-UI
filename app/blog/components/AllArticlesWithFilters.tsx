"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { BlogArticle } from "@/sanity/types/blog";
import type { SanityCategory } from "@/sanity/types/blog";
import AllArticles from "./AllArticles";

interface AllArticlesWithFiltersProps {
  articles: BlogArticle[];
  categories: SanityCategory[];
  initialQuery?: string;
  // Server-side (Sanity) search results for the initial `q` on direct URL loads.
  initialSearchResults?: BlogArticle[];
}

type SortOption = "Latest" | "Most Relevant" | "Most Read" | "Oldest" | "";

export default function AllArticlesWithFilters({ articles, categories, initialQuery = "", initialSearchResults }: AllArticlesWithFiltersProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<SortOption>("");
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  // True once the user edits the search box, so we stop trusting the server search snapshot.
  const [searchDirty, setSearchDirty] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort as SortOption);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setSearchDirty(true);
    // Reflect the query in the URL without navigating away from this page.
    router.replace(query ? `/blog/search?q=${encodeURIComponent(query)}` : "/blog", { scroll: false });
  };

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    // Use the server-side Sanity search result as-is until the user changes the query.
    let result =
      !searchDirty && query && initialSearchResults
        ? [...initialSearchResults]
        : [...articles];

    // Apply search filter client-side once the user starts editing the query
    if (query && (searchDirty || !initialSearchResults)) {
      result = result.filter((article) =>
        article.title?.toLowerCase().includes(query) ||
        article.description?.toLowerCase().includes(query) ||
        article.category?.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(article => article.category === selectedCategory);
    }

    // Apply sorting
    switch (selectedSort) {
      case "Latest":
        // Already sorted by publishedAt desc from Sanity query
        break;
      case "Oldest":
        result = result.reverse();
        break;
      case "Most Relevant":
        // For now, keep default order (could add relevance logic later)
        break;
      case "Most Read":
        // For now, keep default order (would need view count field in Sanity)
        break;
      default:
        // No sorting
        break;
    }

    return result;
  }, [articles, searchQuery, selectedCategory, selectedSort, searchDirty, initialSearchResults]);

  return (
    <AllArticles
      articles={filteredAndSortedArticles}
      categories={categories}
      selectedCategory={selectedCategory}
      selectedSort={selectedSort}
      searchQuery={searchQuery}
      onCategoryChange={handleCategoryChange}
      onSortChange={handleSortChange}
      onSearchChange={handleSearchChange}
    />
  );
}
