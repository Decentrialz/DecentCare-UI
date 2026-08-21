import Image from "next/image";
import { BriefcaseBusiness, UserRound } from "lucide-react";
import type { PortableTextBlock } from "@portabletext/react";

interface AuthorReviewCardProps {
  authorName: string;
  authorImage?: string;
  authorBio?: PortableTextBlock[];
}

const DEFAULT_BIO =
  "Creates reader-focused content that simplifies complex topics and delivers valuable insights across healthcare, publishing, and content development.";

function getPlainBio(authorBio?: PortableTextBlock[]): string {
  if (!authorBio?.length) return DEFAULT_BIO;

  const firstText = authorBio
    .filter((block): block is PortableTextBlock & { _type: "block"; children?: Array<{ text?: string }> } => block._type === "block")
    .flatMap((block) => block.children || [])
    .map((child) => child.text || "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return firstText || DEFAULT_BIO;
}

export default function AuthorReviewCard({ authorName, authorImage, authorBio }: AuthorReviewCardProps) {
  const bio = getPlainBio(authorBio);

  return (
    <section
      className="rounded-2xl border border-[#D7EAF6] bg-white bg-no-repeat p-4 sm:p-5"
      style={{
        backgroundImage: "url('/author-review-bg.png')",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex items-start gap-4 sm:gap-5">
        {authorImage ? (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-primary-blue/45 bg-white shrink-0">
            <Image
              src={authorImage}
              alt={authorName}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary-blue/45 bg-slate-100 flex items-center justify-center shrink-0">
            <UserRound className="w-8 h-8 text-primary-blue" />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="text-base sm:text-lg leading-none font-semibold text-primary-blue/90 mb-2">Written and Reviewed by :</div>

          <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
            <h3 className="text-xl sm:text-2xl leading-tight font-bold text-gray-900">{authorName || "Editorial Team"}</h3>
            <span className="rounded-lg bg-[#EDF5FF] px-3 py-1.5 text-base sm:text-lg leading-none font-semibold text-[#2E79BF]">Exp: 04 Yrs</span>
          </div>

          <div className="inline-flex items-center gap-2 text-base sm:text-lg leading-none font-semibold text-[#0D9488] mb-1.5">
            <BriefcaseBusiness className="w-4 h-4 sm:w-5 sm:h-5" />
            Editorial Contributor
          </div>

          <p className="text-sm leading-relaxed text-gray-600 max-w-[92ch]">{bio}</p>
        </div>
      </div>
    </section>
  );
}
