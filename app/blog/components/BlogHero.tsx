"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, ListFilterPlus, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import blogHeroImage from "@/app/assets/blog-hero.png";
import { Button } from "@/app/components/ui/button";
import Breadcrumb from "@/app/components/Breadcrumb";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

interface BlogHeroProps {
  defaultQuery?: string;
  showFilterButton?: boolean;
  breadcrumbItems?: { label: string; href?: string }[];
  variant?: "simple" | "search";
}

export default function BlogHero({ defaultQuery = "", showFilterButton = false, breadcrumbItems = [], variant = "simple" }: BlogHeroProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(defaultQuery);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const CATEGORY_FILTERS = [
    "Growth",
    "Patient Journey",
    "CRM",
    "Marketing",
    "Digital",
    "Web",
    "Operations",
    "Insights",
  ];

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
  };

  useEffect(() => {
    setSearchQuery(defaultQuery);
  }, [defaultQuery]);

  const handleSearch = () => {
    const query = searchQuery.trim();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    router.push(`/blog/search${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const handleExploreLatestBlogs = () => {
    const latestBlogsSection = document.getElementById("latest-blogs");
    if (!latestBlogsSection) return;

    latestBlogsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#latest-blogs");
  };

  return (
    <section className="relative mt-16 md:mt-18 min-h-[28rem] md:min-h-[32rem] lg:min-h-[36rem] flex flex-col overflow-visible">
      {/* Blurred background image - desk scene */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={blogHeroImage}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {breadcrumbItems.length > 0 && (
        <div className="absolute top-10 left-10 md:left-36 z-20">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      )}
      {/* Gradient: darker overlay at top → transparent → solid white at bottom for content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(255,255,255,0.2) 28%, hsl(var(--background)) 60%)",
        }}
        aria-hidden
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(90% 60% at 50% 100%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 35%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden
      />

      {/* Hero content - increase pt-[Xrem] to move content down */}
      <div className={`relative z-10 ${SECTION_PADDING} ${variant === "search" ? "pt-[14rem] sm:pt-[16rem] md:pt-[22rem]" : "pt-[22rem] sm:pt-[24rem] md:pt-[25rem] lg:pt-[26rem]"} pb-12 md:pb-16 lg:pb-20`}>
        <div className={CONTENT_MAX}>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-normal font-bold text-gradient-heading mb-4">
              Blog & Insights
            </h1>
            {variant === "search" && (
              <p className="text-sm sm:text-base md:text-lg font-bold text-foreground">
                Discover Healthcare Innovation & Insights
              </p>
            )}
            <p className={`text-sm sm:text-base ${variant === "search" ? "text-gray-text" : "text-foreground/80"} mx-auto leading-relaxed`}>
              Stay informed with the latest healthcare technology trends, best practices, and insights from industry experts.
            </p>

            {variant === "simple" && (
              <div className="pt-4 sm:pt-5">
                <Button type="button" onClick={handleExploreLatestBlogs} className="h-11 px-6 rounded-md text-base font-medium inline-flex items-center gap-2">
                    Explore Latest Blogs
                    <ArrowDown className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Search bar - redirects via Next.js router to /blog/search?q=... */}
            {variant === "search" && (
            <div className="pt-4 sm:pt-6 w-full mx-auto relative">
              <div
                className="flex items-center w-full max-w-4xl mx-auto bg-background rounded-2xl overflow-hidden shadow-sm"
                style={{
                  border: "0.5px solid transparent",
                  background:
                    "linear-gradient(hsl(var(--background)), hsl(var(--background))) padding-box, linear-gradient(99.82deg, var(--color-royal-blue) 19.08%, var(--color-deep-teal) 128.92%) border-box",
                }}
              >
                <div className="relative flex-1">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search Articles, topics, or keywords..."
                    value={searchQuery}
                    onChange={(event) => {
                      const query = event.target.value;
                      setSearchQuery(query);
                      if (!query && variant === "search") {
                        router.push("/blog/search");
                      }
                    }}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleSearch())}
                    className="w-full h-[60px] pl-12 pr-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                    aria-label="Search articles"
                  />
                </div>
                <div className="mr-2 flex items-center justify-center gap-2">
                  {showFilterButton && (
                    <Button type="button" variant={showFilter ? "outline" : "grayBackground"} onClick={handleFilter} className={`font-medium ${showFilter ? "text-primary-blue bg-white border-primary-blue" : ""}`}>
                      <ListFilterPlus className="w-4 h-4" />
                      Filter
                    </Button>
                  )}
                  <Button type="button" onClick={handleSearch}>
                    Search
                  </Button>
                </div>
              </div>

              {/* Filter panel - absolute overlay so hero height stays fixed */}
              {showFilterButton && showFilter && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-full max-w-4xl px-1 z-20">
                  <div className="border-t border-border bg-background py-4 px-4 sm:px-5 text-left">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-base font-medium text-gray-text">Filter By category</p>

                      <Button variant="link" onClick={handleClearFilters} className="p-0 h-auto">
                        Clear Filters
                      </Button>

                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {CATEGORY_FILTERS.map((category) => {
                        const isSelected = selectedCategories.includes(category);
                        return (
                          <Button key={category} variant={isSelected ? "default" : "grayBackground"} onClick={() => handleCategoryToggle(category)} className="rounded-md">
                            {category}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
