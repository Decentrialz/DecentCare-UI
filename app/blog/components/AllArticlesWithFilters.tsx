"use client";

import { useState, useMemo } from "react";
import type { BlogArticle } from "@/sanity/types/blog";
import type { SanityCategory } from "@/sanity/types/blog";
import AllArticles from "./AllArticles";
import ArticlesSectionHeader from "./ArticlesSectionHeader";

interface AllArticlesWithFiltersProps {
  articles: BlogArticle[];
  categories: SanityCategory[];
}

type SortOption = "Latest" | "Most Relevant" | "Most Read" | "Oldest" | "";

export default function AllArticlesWithFilters({ articles, categories }: AllArticlesWithFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<SortOption>("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort as SortOption);
  };

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    let result = [...articles];

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
  }, [articles, selectedCategory, selectedSort]);

  return (
    <AllArticles
      articles={filteredAndSortedArticles}
      categories={categories}
      selectedCategory={selectedCategory}
      selectedSort={selectedSort}
      onCategoryChange={handleCategoryChange}
      onSortChange={handleSortChange}
    />
  );
}
