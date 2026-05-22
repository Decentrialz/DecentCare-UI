"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import type { PortableTextBlock } from '@portabletext/react';
import PortableTextRenderer from "./PortableTextRenderer";
import facebookIcon from "@/app/assets/facebook.svg";
import instagramIcon from "@/app/assets/instagram.svg";
import linkedinIcon from "@/app/assets/linkedin.svg";
import twitterIcon from "@/app/assets/twitter.svg";
import whatsappIcon from "@/app/assets/whatsapp.svg";

interface TocItem {
  id: string;
  label: string;
  level: number;
}

interface BlogBodyWithTocProps {
  body: PortableTextBlock[];
  imageUrl: string;
  title: string;
}

const SHARE_LINKS = [
  { label: "Twitter", href: "#", iconSrc: twitterIcon },
  { label: "LinkedIn", href: "#", iconSrc: linkedinIcon },
  { label: "Facebook", href: "#", iconSrc: facebookIcon },
  { label: "Instagram", href: "#", iconSrc: instagramIcon },
  { label: "WhatsApp", href: "#", iconSrc: whatsappIcon },
];

/**
 * Extract H1 and H2 headings from Portable Text blocks to create TOC
 */
function extractHeadings(blocks: PortableTextBlock[]): TocItem[] {
  const headings: TocItem[] = [];
  
  blocks.forEach((block, index) => {
    if (block._type === 'block' && (block.style === 'h1' || block.style === 'h2')) {
      // Get text from block children
      const text = block.children
        ?.map((child: any) => child.text || '')
        .join('') || '';
      
      if (text.trim()) {
        // Create slug-friendly ID from heading text
        const id = `heading-${index}-${text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')}`;
        
        headings.push({
          id,
          label: text,
          level: block.style === 'h1' ? 1 : 2,
        });
      }
    }
  });
  
  return headings;
}

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

  if (toc.length === 0) {
    return null;
  }

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

export default function BlogBodyWithToc({ body, imageUrl, title }: BlogBodyWithTocProps) {
  // Extract headings for TOC
  const toc = useMemo(() => extractHeadings(body), [body]);
  
  const [activeId, setActiveId] = useState<string | null>(
    toc[0]?.id ?? null
  );

  useEffect(() => {
    if (toc.length === 0) return;

    const headingElements = toc
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!headingElements.length) return;

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

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [toc]);

  return (
    <div>
      {/* Featured Image */}
      <div className="relative aspect-[2/1] sm:aspect-[16/9] rounded-xl overflow-hidden bg-muted mb-18">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
        {/* Left Sidebar - TOC and Share */}
        <aside className="space-y-10 lg:sticky lg:top-24 lg:self-start h-fit">
          <TableOfContents
            toc={toc}
            activeId={activeId}
            setActiveId={setActiveId}
          />
          <ShareSection />
        </aside>

        {/* Right Content - Article Body */}
        <div>
          <PortableTextRenderer content={body} headings={toc} />
        </div>
      </div>
    </div>
  );
}
