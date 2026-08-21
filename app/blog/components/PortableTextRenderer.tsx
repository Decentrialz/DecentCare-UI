// app/blog/components/PortableTextRenderer.tsx
// Renders Sanity Portable Text content

"use client";

import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

interface TocItem {
  id: string;
  label: string;
  level: number;
  key?: string;
}

interface PortableTextRendererProps {
  content: PortableTextBlock[]
  headings?: TocItem[]
  className?: string
}

/**
 * Create heading component factory with ID injection
 */
function createHeadingComponent(
  tag: 'h1' | 'h2' | 'h3' | 'h4',
  className: string,
  headings?: TocItem[]
) {
  return ({ children, value }: any) => {
    const text = (value?.children || [])
      .map((child: any) => child?.text || "")
      .join("")
      .trim();

    const headingItem =
      headings?.find((h) => h.key && h.key === value?._key) ||
      headings?.find((h) => h.label.trim() === text);
    const id = headingItem?.id;

    const Component = tag;
    
    return (
      <Component id={id} className={className}>
        {children}
      </Component>
    );
  };
}

/**
 * Renders Portable Text content from Sanity
 */
export default function PortableTextRenderer({ 
  content, 
  headings,
  className = '' 
}: PortableTextRendererProps) {
  if (!content || content.length === 0) {
    return (
      <p className="text-gray-icon italic">No content available.</p>
    )
  }

  /**
   * Custom components for rendering Portable Text
   */
  const components: PortableTextComponents = {
    block: {
      // Headings with IDs for TOC linking
      h1: createHeadingComponent(
        'h1',
        'text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 first:mt-0 scroll-mt-28',
        headings
      ),
      h2: createHeadingComponent(
        'h2',
        'text-xl md:text-2xl font-bold text-foreground mt-8 mb-3 scroll-mt-28',
        headings
      ),
      h3: createHeadingComponent(
        'h3',
        'text-lg md:text-xl font-bold text-foreground mt-6 mb-2 scroll-mt-28',
        headings
      ),
      h4: createHeadingComponent(
        'h4',
        'text-base md:text-lg font-semibold text-foreground mt-4 mb-2 scroll-mt-28',
        headings
      ),
      
      // Paragraphs
      normal: ({ children }) => (
        <p className="text-gray-text text-sm md:text-base leading-relaxed mb-4">
          {children}
        </p>
      ),
      
      // Blockquote
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary-blue bg-teal-50/80 dark:bg-teal-900/20 py-4 px-5 my-6 rounded-lg">
          <p className="text-foreground text-sm md:text-base leading-relaxed m-0 italic">
            {children}
          </p>
        </blockquote>
      ),
    },

    marks: {
      // Bold
      strong: ({ children }) => (
        <strong className="font-semibold text-foreground">{children}</strong>
      ),
      
      // Italic
      em: ({ children }) => (
        <em className="italic">{children}</em>
      ),
      
      // Code
      code: ({ children }) => (
        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      ),
      
      // Links
      link: ({ children, value }) => {
        const href = value?.href || '#'
        const isExternal = href.startsWith('http')
        
        return (
          <Link
            href={href}
            className="text-primary-blue hover:text-secondary-green underline transition-colors"
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            {children}
          </Link>
        )
      },
    },

    list: {
      // Bullet list
      bullet: ({ children }) => (
        <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-gray-text text-sm md:text-base">
          {children}
        </ul>
      ),
      
      // Numbered list
      number: ({ children }) => (
        <ol className="list-decimal list-outside ml-6 mb-4 space-y-2 text-gray-text text-sm md:text-base">
          {children}
        </ol>
      ),
    },

    listItem: {
      bullet: ({ children }) => (
        <li className="leading-relaxed">{children}</li>
      ),
      number: ({ children }) => (
        <li className="leading-relaxed">{children}</li>
      ),
    },

    types: {
      // Image blocks
      image: ({ value }) => {
        if (!value?.asset) return null

        const imageUrl = urlFor(value)
          .width(1200)
          .height(630)
          .fit('max')
          .auto('format')
          .url()

        return (
          <div className="my-8 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={value.alt || 'Blog image'}
              width={1200}
              height={630}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
            {value.caption && (
              <p className="text-sm text-gray-icon mt-2 text-center italic">
                {value.caption}
              </p>
            )}
          </div>
        )
      },
    },
  }

  return (
    <div className={`prose prose-neutral max-w-none ${className}`}>
      <PortableText value={content} components={components} />
    </div>
  )
}

