"use client";

import { Search } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface NoArticlesFoundProps {
  onClearSearch?: () => void;
  className?: string;
}

export default function NoArticlesFound({ onClearSearch, className = "" }: NoArticlesFoundProps) {
  return (
    <div
      className={
        "flex flex-col items-center justify-center text-center rounded-xl border border-gray-border bg-background shadow-sm p-10 max-w-xl mx-auto " +
        className
      }
    >
      <div
        className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-gray-300 bg-gray-300 mb-4"
        aria-hidden
      >
        <Search className="w-5 h-5 text-white" strokeWidth={3} />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">
        No Articles Found
      </h3>
      <p className="text-sm sm:text-base text-gray-text mb-8 max-w-md">
        We couldn&apos;t find any articles matching your search. Try different keywords or adjust your filters.
      </p>
      {onClearSearch && (
        <Button type="button" onClick={onClearSearch} className="font-medium">
          Clear Search & Filters
        </Button>
      )}
    </div>
  );
}
