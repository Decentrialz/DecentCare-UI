"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/app/components/lib/utils";
import SectionTitleWithCount from "./SectionTitleWithCount";
import type { SanityCategory } from "@/sanity/types/blog";

interface ArticlesSectionHeaderProps {
  title: string;
  countLabel: string;
  showSearchBar?: boolean;
  showCategoryFilter?: boolean;
  showSortFilter?: boolean;
  categories?: SanityCategory[];
  selectedCategory?: string;
  selectedSort?: string;
  onCategoryChange?: (category: string) => void;
  onSortChange?: (sort: string) => void;
}

const SORT_OPTIONS = ["Latest", "Most Relevant", "Most Read", "Oldest"];

const triggerClassName =
  "h-[52px] pl-4 pr-4 rounded-xl border border-[#d9e5f2] bg-background text-primary-blue text-sm sm:text-base font-medium flex items-center justify-between gap-3 min-w-[148px] cursor-pointer hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-colors";

const dropdownPanelClassName =
  "absolute top-full left-0 mt-1.5 min-w-[200px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-5rem)] overflow-y-auto rounded-lg bg-white border border-gray-200 shadow-lg py-0 z-20 overflow-x-hidden overscroll-contain";

const dropdownItemClassName =
  "w-full text-left px-4 py-3 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0 cursor-pointer";

export default function ArticlesSectionHeader({
  title,
  countLabel,
  showSearchBar = false,
  showCategoryFilter = false,
  showSortFilter = true,
  categories = [],
  selectedCategory = "",
  selectedSort = "",
  onCategoryChange,
  onSortChange,
}: ArticlesSectionHeaderProps) {
  const router = useRouter();
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryOpenUpward, setCategoryOpenUpward] = useState(false);
  const [categoryMaxHeight, setCategoryMaxHeight] = useState<number>();
  const [sortOpen, setSortOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node))
        setCategoryOpen(false);
      if (sortRef.current && !sortRef.current.contains(event.target as Node))
        setSortOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategorySelect = (category: string) => {
    // Toggle category - if same category clicked, clear it
    const newCategory = selectedCategory === category ? "" : category;
    onCategoryChange?.(newCategory);
    setCategoryOpen(false);
  };

  const handleSortSelect = (sort: string) => {
    onSortChange?.(sort);
    setSortOpen(false);
  };

  const handleSearchSubmit = () => {
    const query = searchInputRef.current?.value.trim() ?? "";
    router.push(`/blog/search${query ? `?q=${encodeURIComponent(query)}` : ""}`);
  };

  const toggleCategoryDropdown = () => {
    if (!categoryOpen && categoryRef.current) {
      const { bottom, top } = categoryRef.current.getBoundingClientRect();
      const headerBottom = document.querySelector("nav.fixed")?.getBoundingClientRect().bottom ?? 0;
      const availableAbove = Math.max(0, top - headerBottom);
      const availableBelow = window.innerHeight - bottom;
      const openUpward = availableAbove > availableBelow;
      setCategoryOpenUpward(openUpward);
      setCategoryMaxHeight(Math.max(0, (openUpward ? availableAbove : availableBelow) - 12));
    }
    setCategoryOpen(!categoryOpen);
    setSortOpen(false);
  };

  return (
    <div className="space-y-6">
      <SectionTitleWithCount title={title} countLabel={countLabel} />

      <div className="flex flex-col md:flex-row md:items-center gap-3">
        {showSearchBar && (
          <div className="relative flex-1">
            <div className="flex items-center h-[52px] rounded-xl border border-[#9cc6ff] bg-white pr-1.5">
              <Search className="ml-4 w-5 h-5 text-gray-400 shrink-0" />
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search Articles, topics, or keywords..."
              className="w-full h-full bg-transparent pl-3 pr-3 text-base text-foreground placeholder:text-gray-400 focus:outline-none"
              aria-label="Search articles"
            />
            <button
              type="button"
              onClick={handleSearchSubmit}
              className="h-[36px] px-6 rounded-lg shrink-0 bg-primary-blue text-primary-blue-foreground text-sm font-medium hover:bg-primary-blue/90 transition-colors border-0"
            >
              Search
            </button>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
        {showCategoryFilter && (
          <div className="relative" ref={categoryRef}>
            <button
              type="button"
              onClick={toggleCategoryDropdown}
              className={cn(triggerClassName, categoryOpen && "ring-2 ring-primary-blue/20")}
              aria-expanded={categoryOpen}
              aria-haspopup="listbox"
            >
              {selectedCategory ? selectedCategory : "Categories"}
              <ChevronDown
                className={cn("w-4 h-4 text-gray-700 shrink-0 ml-2", categoryOpen && "rotate-180")}
                aria-hidden
              />
            </button>
            {categoryOpen && (
              <div
                className={cn(
                  dropdownPanelClassName,
                  categoryOpenUpward && "top-auto bottom-full mt-0 mb-1.5"
                )}
                style={{ maxHeight: categoryMaxHeight }}
                role="listbox"
              >
                {categories.map((cat) => (
                  <button
                    key={cat._id}
                    type="button"
                    role="option"
                    aria-selected={selectedCategory === cat.name}
                    onClick={() => handleCategorySelect(cat.name)}
                    className={dropdownItemClassName}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        {showSortFilter && (
          <div className="relative" ref={sortRef}>
            <button
              type="button"
              onClick={() => {
                setSortOpen(!sortOpen);
                setCategoryOpen(false);
              }}
              className={cn(triggerClassName, "min-w-[120px]", sortOpen && "ring-2 ring-primary-blue/20")}
              aria-expanded={sortOpen}
              aria-haspopup="listbox"
            >
              {selectedSort ? selectedSort : "Sort by"}
              <ChevronDown
                className={cn("w-4 h-4 text-gray-700 shrink-0 ml-2", sortOpen && "rotate-180")}
                aria-hidden
              />
            </button>
            {sortOpen && (
              <div className={cn(dropdownPanelClassName, "left-auto right-0")} role="listbox">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    role="option"
                    aria-selected={selectedSort === opt}
                    onClick={() => handleSortSelect(opt)}
                    className={dropdownItemClassName}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
