"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import blogHeroImage from "@/app/assets/blog-hero.png";
import { Button } from "@/app/components/ui/button";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

export default function BlogHero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative mt-16 md:mt-18 min-h-[28rem] md:min-h-[32rem] lg:min-h-[36rem] flex flex-col overflow-hidden">
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
      {/* Gradient: darker overlay at top → transparent → solid white at bottom for content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 25%, hsl(var(--background)) 55%)",
        }}
        aria-hidden
      />

      {/* Hero content - increase pt-[Xrem] to move content down */}
      <div className={`relative z-10 ${SECTION_PADDING} pt-[14rem] sm:pt-[16rem] md:pt-[22rem] pb-12 md:pb-16 lg:pb-20`}>
        <div className={CONTENT_MAX}>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-normal font-bold text-gradient-heading mb-4">
              Blog & Insights
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-bold text-foreground">
              Discover Healthcare Innovation & Insights
            </p>
            <p className="text-sm sm:text-base text-gray-text mx-auto leading-relaxed">
              Stay informed with the latest healthcare technology trends, best practices, and insights from industry experts.
            </p>

            {/* Search bar - single unit: input (light border) + Search button (dark blue) */}
            {/* Search bar */}
            <div className="pt-4 sm:pt-6 w-full mx-auto">
              <div
                className="flex items-center w-full max-w-4xl mx-auto bg-background rounded-2xl overflow-hidden shadow-sm"
                style={{
                  border: "0.5px solid transparent",
                  background:
                    "linear-gradient(hsl(var(--background)), hsl(var(--background))) padding-box, linear-gradient(99.82deg, var(--color-royal-blue) 19.08%, var(--color-deep-teal) 128.92%) border-box",
                }}
              >
                {/* Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search Articles, topics, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-[60px] pl-12 pr-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                    aria-label="Search articles"
                  />
                </div>

                {/* Button */}
                <Button className="mr-2">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
