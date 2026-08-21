"use client";

import type { BlogArticle } from "@/sanity/types/blog";
import ArticleCard from "./ArticleCard";
import SectionTitleWithCount from "./SectionTitleWithCount";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface RecommendedBlogsSectionProps {
  articles: BlogArticle[];
  className?: string;
}

export default function RecommendedBlogsSection({
  articles,
  className = "",
}: RecommendedBlogsSectionProps) {
  return (
    <section className={className}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <SectionTitleWithCount
          title="Recommended Blogs"
          countLabel={`${articles.length} blogs available`}
        />
      </div>

      <Swiper
        modules={[Pagination, Mousewheel]}
        spaceBetween={24}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.8,
          thresholdDelta: 50,
          thresholdTime: 500,
          releaseOnEdges: true
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 32,
          },
        }}
        pagination={{
          clickable: true,
          bulletClass: "recommended-blogs-bullet",
          bulletActiveClass: "recommended-blogs-bullet-active",
        }}
        className="recommended-blogs-swiper pb-12"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <ArticleCard article={article} categoryPlacement="content" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}