"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/app/components/lib/utils";
import SectionTitleWithCount from "./SectionTitleWithCount";

interface ArticlesSectionHeaderProps {
  title: string;
  countLabel: string;
  showCategoryFilter?: boolean;
  showSortFilter?: boolean;
}

const CATEGORY_OPTIONS = [
  "Growth",
  "Patient Journey",
  "CRM & Automation",
  "Marketing",
  "Digital Health",
  "Web & Tech",
  "Operations",
  "Insights",
];

const SORT_OPTIONS = ["Latest", "Most Relevant", "Most Read", "Oldest"];

const triggerClassName =
  "h-10 pl-4 pr-4 rounded-lg border border-border bg-background text-primary-blue text-sm font-medium flex items-center justify-between gap-3 min-w-[140px] cursor-pointer hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-colors";

const dropdownPanelClassName =
  "absolute top-full left-0 mt-1.5 min-w-[200px] rounded-lg bg-white border border-gray-200 shadow-lg py-0 z-20 overflow-hidden";

const dropdownItemClassName =
  "w-full text-left px-4 py-3 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0 cursor-pointer";

export default function ArticlesSectionHeader({
  title,
  countLabel,
  showCategoryFilter = false,
  showSortFilter = true,
}: ArticlesSectionHeaderProps) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <SectionTitleWithCount title={title} countLabel={countLabel} />
      <div className="flex flex-wrap gap-3">
        {showCategoryFilter && (
          <div className="relative" ref={categoryRef}>
            <button
              type="button"
              onClick={() => {
                setCategoryOpen(!categoryOpen);
                setSortOpen(false);
              }}
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
              <div className={dropdownPanelClassName} role="listbox">
                {CATEGORY_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    role="option"
                    aria-selected={selectedCategory === opt}
                    onClick={() => {
                      setSelectedCategory(opt);
                      setCategoryOpen(false);
                    }}
                    className={dropdownItemClassName}
                  >
                    {opt}
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
              <div className={dropdownPanelClassName} role="listbox">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    role="option"
                    aria-selected={selectedSort === opt}
                    onClick={() => {
                      setSelectedSort(opt);
                      setSortOpen(false);
                    }}
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
  );
}
