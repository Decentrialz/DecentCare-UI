"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { BlogArticleDetail, TocItem } from "@/app/blog/lib/MockArticles";
import facebookIcon from "@/app/assets/facebook.svg";
import instagramIcon from "@/app/assets/instagram.svg";
import linkedinIcon from "@/app/assets/linkedin.svg";
import twitterIcon from "@/app/assets/twitter.svg";
import whatsappIcon from "@/app/assets/whatsapp.svg";

interface BlogBodyProps {
  article: BlogArticleDetail;
}

const SHARE_LINKS = [
  { label: "Twitter", href: "#", iconSrc: twitterIcon },
  { label: "LinkedIn", href: "#", iconSrc: linkedinIcon },
  { label: "Facebook", href: "#", iconSrc: facebookIcon },
  { label: "Instagram", href: "#", iconSrc: instagramIcon },
  { label: "WhatsApp", href: "#", iconSrc: whatsappIcon },
];

function TableOfContents({
  toc,
  activeId,
  setActiveId,
}: {
  toc: TocItem[];
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  const activeIndex = toc.findIndex((t) => t.id === activeId);

  const progress =
    activeIndex === -1 ? 0 : ((activeIndex + 1) / toc.length) * 100;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  };

  return (
    <div>
      <h2 className="text-sm font-semibold text-foreground mb-4">
        Table of Contents
      </h2>

      <div className="relative pl-6">
        <div className="absolute left-0 top-0 w-[4px] h-full bg-gray-background rounded" />

        <div
          className="absolute left-0 top-0 w-[4px] bg-secondary-green rounded transition-all duration-300"
          style={{ height: `${progress}%` }}
        />

        <ul className="space-y-3">
          {toc.map((item) => {
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`block text-sm transition-colors ${
                    isActive
                      ? "text-secondary-green font-medium"
                      : "text-gray-icon hover:text-primary-blue"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ShareSection() {
  return (
    <div>
      <h2 className="text-sm font-semibold text-foreground mb-4">
        Share this blog
      </h2>

      <div className="flex items-center gap-3">
        {SHARE_LINKS.map(({ label, href, iconSrc }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-[30px] h-[30px] rounded-full flex items-center justify-center overflow-hidden bg-gray-100 hover:bg-primary-blue/5 transition-colors"
          >
            <Image
              src={iconSrc}
              alt={label}
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function BlogBody({ article }: BlogBodyProps) {
  const [activeId, setActiveId] = useState<string | null>(
    article.bodySections[0]?.id ?? null
  );

  useEffect(() => {
    const sections = article.bodySections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -80% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [article.bodySections]);


  return (
    <div>
      {/* Featured Image */}
      <div className="relative aspect-[2/1] sm:aspect-[16/9] rounded-xl overflow-hidden bg-muted mb-18">
        <Image
          src={article.imageUrl}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, min(calc(100vw - 2rem), 800px)"
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
        <aside className="space-y-10 lg:sticky lg:top-24 lg:self-start h-fit">
          <TableOfContents
            toc={article.toc}
            activeId={activeId}
            setActiveId={setActiveId}
          />
          <ShareSection />
        </aside>

        <div className="prose prose-neutral max-w-none">
          {article.bodySections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-28">
              {section.isCallout ? (
                <div className="rounded-lg border-l-4 border-primary-blue bg-teal-50/80 dark:bg-teal-900/20 py-4 px-5 my-6">
                  <p className="text-foreground text-sm sm:text-base leading-relaxed m-0">
                    {section.content}
                  </p>
                </div>
              ) : (
                <>
                  {section.heading && (
                    <h2 className="text-lg sm:text-xl font-bold text-foreground mt-8 mb-3 first:mt-0">
                      {section.heading}
                    </h2>
                  )}

                  <p className="text-gray-text text-sm sm:text-base leading-relaxed mb-4">
                    {section.content}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
