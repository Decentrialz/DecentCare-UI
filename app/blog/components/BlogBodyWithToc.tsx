"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import type { PortableTextBlock } from '@portabletext/react';
import PortableTextRenderer from "./PortableTextRenderer";
import TableOfContents, { type TocItem as SharedTocItem } from "@/app/privacy-policy/TableOfContents";
import facebookIcon from "@/app/assets/facebook.svg";
import instagramIcon from "@/app/assets/instagram.svg";
import linkedinIcon from "@/app/assets/linkedin.svg";
import twitterIcon from "@/app/assets/twitter.svg";
import whatsappIcon from "@/app/assets/whatsapp.svg";

interface TocItem extends SharedTocItem {
  level: number;
  key?: string;
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
          key: (block as any)._key,
        });
      }
    }
  });
  
  return headings;
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

function MobileTableOfContents({ items }: { items: SharedTocItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  if (!items.length) {
    return null;
  }

  return (
    <div className="lg:hidden mb-8">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between bg-white border border-gray-border rounded-lg p-4 text-foreground font-semibold"
      >
        <span className="flex items-center gap-2">
          <Menu className="w-5 h-5" />
          Table of Contents
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 bg-white border border-gray-border rounded-lg p-4">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className="w-full text-left text-sm text-gray-icon hover:text-primary-blue py-2"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function BlogBodyWithToc({ body, imageUrl, title }: BlogBodyWithTocProps) {
  // Extract headings for TOC
  const toc = useMemo(() => extractHeadings(body), [body]);
  const tocItems = toc.map(({ id, label }) => ({ id, label }));

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
        <aside className="hidden lg:block space-y-10 lg:sticky lg:top-24 lg:self-start h-fit">
          <TableOfContents items={tocItems} />
          <ShareSection />
        </aside>

        {/* Right Content - Article Body */}
        <div>
          <MobileTableOfContents items={tocItems} />
          <div className="lg:hidden mb-8">
            <ShareSection />
          </div>
          <PortableTextRenderer content={body} headings={toc} />
        </div>
      </div>
    </div>
  );
}
