"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/app/components/lib/utils";
import { Button, type ButtonProps } from "@/app/components/ui/button";

/* -----------------------------------------------------------------------------
 * Primitives
 * ----------------------------------------------------------------------------- */

const PaginationRoot = React.forwardRef<
  HTMLElement,
  React.ComponentProps<"nav">
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    role="navigation"
    aria-label="pagination"
    className={cn("flex items-center", className)}
    {...props}
  />
));
PaginationRoot.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("flex items-center", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

interface PaginationLinkProps extends ButtonProps {
  isActive?: boolean;
}

const PaginationLink = React.forwardRef<HTMLButtonElement, PaginationLinkProps>(
  ({ isActive, size = "icon", className, ...props }, ref) => (
    <Button
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      variant={isActive ? "outline" : "outline"}
      size={size}
      className={cn(
        "h-10 w-10 min-h-10 min-w-10 rounded text-base font-base transition-colors",
        isActive
          ? "bg-gray-background text-primary-blue border-gray-background"
          : "border-gray-border bg-background text-gray-text hover:bg-muted",
        className,
      )}
      {...props}
    />
  ),
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    variant="default"
    aria-label="Previous page"
    className={cn("h-10 min-h-10 rounded px-5", className)}
    {...props}
  >
    <ChevronLeft className="h-4.5 w-4.5" />
  </Button>
));
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    variant="default"
    aria-label="Next page"
    className={cn("h-10 min-h-10 rounded px-5", className)}
    {...props}
  >
    <ChevronRight className="h-4.5 w-4.5" />
  </Button>
));
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden
    className={cn(
      "flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-muted-foreground",
      className,
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
));
PaginationEllipsis.displayName = "PaginationEllipsis";

/* -----------------------------------------------------------------------------
 * PaginationControl – high-level component
 * ----------------------------------------------------------------------------- */

export interface PaginationControlProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
  showEntriesInfo?: boolean;
  showPageInput?: boolean;
  className?: string;
}

function getPageNumbers(
  currentPage: number,
  totalPages: number,
  maxVisible: number,
): (number | "ellipsis")[] {
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [1];
  const half = Math.floor(maxVisible / 2);
  let start = Math.max(2, currentPage - half);
  let end = Math.min(totalPages - 1, currentPage + half);

  if (currentPage <= half) end = Math.min(totalPages - 1, maxVisible - 1);
  if (currentPage > totalPages - half) start = Math.max(2, totalPages - maxVisible + 2);

  if (start > 2) pages.push("ellipsis");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < totalPages - 1) pages.push("ellipsis");
  if (totalPages > 1) pages.push(totalPages);

  return pages;
}

export function PaginationControl({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  maxVisiblePages = 7,
  showEntriesInfo = true,
  showPageInput = true,
  className,
}: PaginationControlProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startEntry = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endEntry = Math.min(currentPage * itemsPerPage, totalItems);

  const [inputValue, setInputValue] = React.useState(String(currentPage));

  React.useEffect(() => {
    setInputValue(String(currentPage));
  }, [currentPage]);

  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  const goToPage = (page: number) => {
    const p = Math.max(1, Math.min(page, totalPages));
    if (p !== currentPage) onPageChange(p);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (v === "" || /^\d+$/.test(v)) setInputValue(v);
  };

  const handleInputSubmit = () => {
    const p = parseInt(inputValue, 10);
    if (!Number.isNaN(p) && p >= 1 && p <= totalPages) {
      goToPage(p);
    } else {
      setInputValue(String(currentPage));
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputSubmit();
      e.currentTarget.blur();
    }
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages, maxVisiblePages);

  return (
    <div
      className={cn(
        "flex flex-col gap-4 w-full",
        className,
      )}
    >
      {showEntriesInfo && (
        <p className="text-sm text-muted-foreground">
          Showing {startEntry} to {endEntry} of {totalItems} entries
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center w-full gap-4">
        {/* Left spacer: equal width to right so pagination stays centered on desktop; hidden on mobile */}
        <div className="hidden sm:block flex-1 min-w-0" aria-hidden />

        {/* Pagination: centered on mobile (full width row), shrink on desktop between two flex-1 spacers */}
        <div className="flex justify-center w-full sm:w-auto sm:shrink-0">
          <PaginationRoot>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => goToPage(currentPage - 1)}
                  className={cn(isFirst && "pointer-events-none opacity-50")}
                  tabIndex={isFirst ? -1 : 0}
                />
              </PaginationItem>

              {pageNumbers.map((page, i) => (
                <PaginationItem
                  key={page === "ellipsis" ? `ellipsis-${i}` : page}
                  className={cn(
                    i === 0 && "ml-2 sm:ml-4",
                    i === pageNumbers.length - 1 && "mr-2 sm:mr-4",
                  )}
                >
                  {page === "ellipsis" ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => goToPage(page)}
                      aria-label={`Page ${page}`}
                      className={cn(
                        currentPage === page && "pointer-events-none",
                      )}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => goToPage(currentPage + 1)}
                  className={cn(isLast && "pointer-events-none opacity-50")}
                  tabIndex={isLast ? -1 : 0}
                />
              </PaginationItem>
            </PaginationContent>
          </PaginationRoot>
        </div>

        {/* Right: same flex-1 so pagination stays centered; Go to aligned right on desktop, centered on mobile */}
        <div className="flex items-center justify-center sm:justify-end gap-2 w-full sm:flex-1 sm:min-w-0">
          {showPageInput ? (
            <>
              <span className="text-sm text-gray-text whitespace-nowrap">
                Go to:
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputSubmit}
                onKeyDown={handleInputKeyDown}
                placeholder="eg. 12"
                aria-label="Go to page"
                className="h-10 min-h-10 w-14 min-w-[3.5rem] max-w-20 rounded border border-primary-blue bg-background px-2 text-center text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-blue/20 sm:h-9 sm:min-h-9 sm:text-sm"
              />
            </>
          ) : (
            <span aria-hidden className="hidden sm:block flex-1 min-w-0" />
          )}
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------------------------
 * Exports
 * ----------------------------------------------------------------------------- */

export {
  PaginationRoot as Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
