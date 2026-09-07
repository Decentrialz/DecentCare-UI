"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { BlogArticle } from "@/sanity/types/blog";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

const FEATURED_TAG = "Top 3 Latest Blogs";

interface LatestBlogsProps {
  featuredPosts: BlogArticle[];
}

export default function LatestBlogs({ featuredPosts }: LatestBlogsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use provided featured posts or show empty state
  if (!featuredPosts || featuredPosts.length === 0) {
    return null;
  }
  
  const current = featuredPosts[currentIndex];

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredPosts.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === featuredPosts.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="latest-blogs"
      className="py-16 md:py-20 lg:py-25"
      style={{
        background:
          "linear-gradient(180deg, rgba(239, 246, 255, 0.5) 0%, #FFFFFF 100%)",
      }}
    >
      <div className={SECTION_PADDING}>
        <div className={CONTENT_MAX}>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal font-bold text-gradient-heading mb-2.5">
              Latest Blogs
            </h2>
            <p className="text-gray-icon mt-2">
              Practical Perspectives for Modern Healthcare Teams
            </p>
          </div>

          <article className="rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--card-shadow)] flex flex-col lg:flex-row min-h-[320px] md:min-h-[360px]">

            {/* LEFT CONTENT */}
            <div className="flex-1 bg-primary-blue p-10 md:p-12 lg:p-15 flex flex-col justify-between order-2 lg:order-1">

              <AnimatePresence mode="wait">

                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.8 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="space-y-6 mb-6"
                >

                  <div className="flex items-center justify-between gap-4 flex-wrap">

                    <span className="inline-block px-5 py-1 rounded-full text-sm font-medium bg-white/15 text-primary-foreground">
                      {FEATURED_TAG}
                    </span>

                    <div className="flex items-center gap-2">

                      <button
                        onClick={goPrev}
                        className="w-9 h-9 rounded-full cursor-pointer bg-white text-foreground flex items-center justify-center hover:bg-white/90"
                      >
                        <ArrowLeft className="w-3.5 h-3.5 text-primary-blue" />
                      </button>

                      <button
                        onClick={goNext}
                        className="w-9 h-9 rounded-full cursor-pointer bg-white text-foreground flex items-center justify-center hover:bg-white/90"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-primary-blue" />
                      </button>

                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground leading-tight line-clamp-2">
                    {current.title}
                  </h3>

                  <p className="text-primary-foreground/90 text-sm md:text-base line-clamp-2">
                    {current.description}
                  </p>

                  <div>
                    <p className="text-sm text-primary-foreground">
                      -Written By
                    </p>
                    <p className="text-lg font-bold text-primary-foreground">
                      {current.author}
                    </p>
                  </div>

                  <Button
                    asChild
                    variant="secondaryGreen"
                    className="rounded-lg h-10 px-5 text-primary-foreground w-full"
                  >
                    <Link href={current.href}>Read the Blog</Link>
                  </Button>

                </motion.div>

              </AnimatePresence>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full lg:w-[50%] min-h-[240px] lg:min-w-[280px] order-1 lg:order-2 bg-muted">

              <AnimatePresence mode="wait">

                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.8 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >

                  <Image
                    src={current.imageUrl}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />

                </motion.div>

              </AnimatePresence>

            </div>

          </article>
        </div>
      </div>
    </section>
  );
}