"use client";

import type { BlogArticle } from "@/app/blog/lib/MockArticles";
import ArticleCard from "./ArticleCard";
import SectionTitleWithCount from "./SectionTitleWithCount";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

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
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
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
            <ArticleCard article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}