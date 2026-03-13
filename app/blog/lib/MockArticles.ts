import type { StaticImageData } from "next/image";
import blog1 from "@/app/assets/blog1.png";
import blog2 from "@/app/assets/blog2.png";
import blog3 from "@/app/assets/blog3.png";
import blog4 from "@/app/assets/blog4.png";
import blog5 from "@/app/assets/blog5.png";
import blog6 from "@/app/assets/blog6.png";
import blog7 from "@/app/assets/blog7.png";
import blog8 from "@/app/assets/blog8.png";
import blog9 from "@/app/assets/blog9.png";
import blog10 from "@/app/assets/blog10.png";
import blog11 from "@/app/assets/blog11.png";
import blog12 from "@/app/assets/blog12.png";

export interface BlogArticle {
  id: string;
  imageUrl: string | StaticImageData;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
  href: string;
}

const BLOG_IMAGES: Record<string, StaticImageData> = {
  "1": blog1,
  "2": blog2,
  "3": blog3,
  "4": blog4,
  "5": blog5,
  "6": blog6,
  "7": blog7,
  "8": blog8,
  "9": blog9,
  "10": blog10,
  "11": blog11,
  "12": blog12,
};

export const MOCK_ARTICLES: BlogArticle[] = [
  {
    id: "1",
    imageUrl: BLOG_IMAGES["1"],
    category: "Growth",
    date: "12 March 2024",
    readTime: "7 min read",
    title: "Building Sustainable Healthcare Growth Without Overloading Clinical Teams",
    description: "Healthcare growth often brings unintended operational pressure on doctors and care teams. As patient enquiries increase, clinics...",
    author: "Anirudh Rao",
    href: "#",
  },
  {
    id: "2",
    imageUrl: BLOG_IMAGES["2"],
    category: "Patient Care",
    date: "28 February 2024",
    readTime: "7 min read",
    title: "Why Mapping the Patient Journey Improves Care Coordination Outcomes",
    description: "Patient journeys rarely follow a single linear path, especially across multi-department healthcare environments. Without clear visibility into...",
    author: "Meera Nair",
    href: "#",
  },
  {
    id: "3",
    imageUrl: BLOG_IMAGES["3"],
    category: "CRM & Automation",
    date: "5 April 2024",
    readTime: "7 min read",
    title: "How Healthcare CRM Automation Reduces Manual Follow-Ups Effectively",
    description: "Manual follow-ups remain a major source of inefficiency for clinics and hospitals managing high patient volumes. Healthcare CRM automation...",
    author: "Sandeep Verma",
    href: "#",
  },
  {
    id: "4",
    imageUrl: BLOG_IMAGES["4"],
    category: "Marketing",
    date: "19 March 2024",
    readTime: "7 min read",
    title: "Turning Healthcare Marketing Enquiries Into Meaningful Patient Conversations",
    description: "Generating patient enquiries through marketing is only the first step in healthcare growth. Without structured lead handling and timely communic...",
    author: "Neha Kulkarni",
    href: "#",
  },
  {
    id: "5",
    imageUrl: BLOG_IMAGES["5"],
    category: "Digital Health",
    date: "7 January 2024",
    readTime: "7 min read",
    title: "Digital Transformation Challenges Clinics Face During Healthcare Modernization",
    description: "Digital transformation in healthcare often stalls not because of technology limitations, but due to workflow disruption and adoption resistance...",
    author: "Priya Menon",
    href: "#",
  },
  {
    id: "6",
    imageUrl: BLOG_IMAGES["6"],
    category: "Operations",
    date: "22 February 2024",
    readTime: "7 min read",
    title: "Improving Front Desk Operations for Better Patient Flow Management",
    description: "Front desk teams play a critical role in shaping patient experience and operational efficiency. Without clear tools and visibility, appointment....",
    author: "Rohit Iyer",
    href: "#",
  },
  {
    id: "7",
    imageUrl: BLOG_IMAGES["7"],
    category: "Web & Tech",
    date: "14 February 2024",
    readTime: "7 min read",
    title: "Designing Healthcare Websites That Support Patient Decision Making",
    description: "Healthcare websites are often the first interaction patients have with a clinic or hospital. Beyond visual appeal, effective websites guide...",
    author: "Arjun Patel",
    href: "#",
  },
  {
    id: "8",
    imageUrl: BLOG_IMAGES["8"],
    category: "Insights",
    date: "3 April 2024",
    readTime: "7 min read",
    title: "What Modern Healthcare Teams Expect From Digital Care Platforms",
    description: "Healthcare teams today expect digital platforms to simplify work rather than add complexity. Doctors, administrators, and front desk staff need...",
    author: "Kavita Srinivasan",
    href: "#",
  },
  {
    id: "9",
    imageUrl: BLOG_IMAGES["9"],
    category: "Patient Journey",
    date: "18 March 2024",
    readTime: "7 min read",
    title: "Reducing Patient Drop-Offs Across Consultation and Follow-Up Stages",
    description: "Patient drop-offs commonly occur between consultation, procedures, and follow-up care. Without clear ownership and communication...",
    author: "Meera Nair",
    href: "#",
  },
  {
    id: "10",
    imageUrl: BLOG_IMAGES["10"],
    category: "CRM & Automation",
    date: "27 January 2024",
    readTime: "7 min read",
    title: "Why Centralized Patient Records Matter for Healthcare Operations",
    description: "Scattered patient information across spreadsheets, calls, and messages creates inefficiencies and risk. Centralized patient reco...",
    author: "Sandeep Verma",
    href: "#",
  },
  {
    id: "11",
    imageUrl: BLOG_IMAGES["11"],
    category: "Marketing",
    date: "9 February 2024",
    readTime: "7 min read",
    title: "Aligning Healthcare Marketing Campaigns With Real Clinic Capacity",
    description: "Healthcare marketing often focuses on generating demand without considering operational readiness. When campaigns are aligned with...",
    author: "Neha Kulkarni",
    href: "#",
  },
  {
    id: "12",
    imageUrl: BLOG_IMAGES["12"],
    category: "Operations",
    date: "31 March 2024",
    readTime: "7 min read",
    title: "Managing Daily Healthcare Operations Without Increasing Administrative Burden",
    description: "As clinics and hospitals grow, daily operational tasks can multiply quickly. Without structured systems, administrative burden falls...",
    author: "Rohit Iyer",
    href: "#",
  },
  {
    id: "13",
    imageUrl: BLOG_IMAGES["1"],
    category: "Growth",
    date: "12 March 2024",
    readTime: "7 min read",
    title: "Building Sustainable Healthcare Growth Without Overloading Clinical Teams",
    description: "Healthcare growth often brings unintended operational pressure on doctors and care teams. As patient enquiries increase, clinics...",
    author: "Anirudh Rao",
    href: "#",
  },
  {
    id: "14",
    imageUrl: BLOG_IMAGES["2"],
    category: "Patient Care",
    date: "28 February 2024",
    readTime: "7 min read",
    title: "Why Mapping the Patient Journey Improves Care Coordination Outcomes",
    description: "Patient journeys rarely follow a single linear path, especially across multi-department healthcare environments. Without clear visibility into...",
    author: "Meera Nair",
    href: "#",
  },
  {
    id: "15",
    imageUrl: BLOG_IMAGES["3"],
    category: "CRM & Automation",
    date: "5 April 2024",
    readTime: "7 min read",
    title: "How Healthcare CRM Automation Reduces Manual Follow-Ups Effectively",
    description: "Manual follow-ups remain a major source of inefficiency for clinics and hospitals managing high patient volumes. Healthcare CRM automation...",
    author: "Sandeep Verma",
    href: "#",
  },
  {
    id: "16",
    imageUrl: BLOG_IMAGES["4"],
    category: "Marketing",
    date: "19 March 2024",
    readTime: "7 min read",
    title: "Turning Healthcare Marketing Enquiries Into Meaningful Patient Conversations",
    description: "Generating patient enquiries through marketing is only the first step in healthcare growth. Without structured lead handling and timely communic...",
    author: "Neha Kulkarni",
    href: "#",
  },
  {
    id: "17",
    imageUrl: BLOG_IMAGES["5"],
    category: "Digital Health",
    date: "7 January 2024",
    readTime: "7 min read",
    title: "Digital Transformation Challenges Clinics Face During Healthcare Modernization",
    description: "Digital transformation in healthcare often stalls not because of technology limitations, but due to workflow disruption and adoption resistance...",
    author: "Priya Menon",
    href: "#",
  },
  {
    id: "18",
    imageUrl: BLOG_IMAGES["6"],
    category: "Operations",
    date: "22 February 2024",
    readTime: "7 min read",
    title: "Improving Front Desk Operations for Better Patient Flow Management",
    description: "Front desk teams play a critical role in shaping patient experience and operational efficiency. Without clear tools and visibility, appointment....",
    author: "Rohit Iyer",
    href: "#",
  },
  {
    id: "19",
    imageUrl: BLOG_IMAGES["7"],
    category: "Web & Tech",
    date: "14 February 2024",
    readTime: "7 min read",
    title: "Designing Healthcare Websites That Support Patient Decision Making",
    description: "Healthcare websites are often the first interaction patients have with a clinic or hospital. Beyond visual appeal, effective websites guide...",
    author: "Arjun Patel",
    href: "#",
  },
  {
    id: "20",
    imageUrl: BLOG_IMAGES["8"],
    category: "Insights",
    date: "3 April 2024",
    readTime: "7 min read",
    title: "What Modern Healthcare Teams Expect From Digital Care Platforms",
    description: "Healthcare teams today expect digital platforms to simplify work rather than add complexity. Doctors, administrators, and front desk staff need...",
    author: "Kavita Srinivasan",
    href: "#",
  },
  {
    id: "21",
    imageUrl: BLOG_IMAGES["9"],
    category: "Patient Journey",
    date: "18 March 2024",
    readTime: "7 min read",
    title: "Reducing Patient Drop-Offs Across Consultation and Follow-Up Stages",
    description: "Patient drop-offs commonly occur between consultation, procedures, and follow-up care. Without clear ownership and communication...",
    author: "Meera Nair",
    href: "#",
  },
  {
    id: "22",
    imageUrl: BLOG_IMAGES["10"],
    category: "CRM & Automation",
    date: "27 January 2024",
    readTime: "7 min read",
    title: "Why Centralized Patient Records Matter for Healthcare Operations",
    description: "Scattered patient information across spreadsheets, calls, and messages creates inefficiencies and risk. Centralized patient reco...",
    author: "Sandeep Verma",
    href: "#",
  },
  {
    id: "23",
    imageUrl: BLOG_IMAGES["11"],
    category: "Marketing",
    date: "9 February 2024",
    readTime: "7 min read",
    title: "Aligning Healthcare Marketing Campaigns With Real Clinic Capacity",
    description: "Healthcare marketing often focuses on generating demand without considering operational readiness. When campaigns are aligned with...",
    author: "Neha Kulkarni",
    href: "#",
  },
  {
    id: "24",
    imageUrl: BLOG_IMAGES["12"],
    category: "Operations",
    date: "31 March 2024",
    readTime: "7 min read",
    title: "Managing Daily Healthcare Operations Without Increasing Administrative Burden",
    description: "As clinics and hospitals grow, daily operational tasks can multiply quickly. Without structured systems, administrative burden falls...",
    author: "Rohit Iyer",
    href: "#",
  },
];

/** Get article by slug (id). Use for /blog/[slug] detail page. */
export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return MOCK_ARTICLES.find((a) => a.id === slug);
}

/** Get recommended articles excluding the current one. */
export function getRecommendedArticles(excludeId: string, limit = 3): BlogArticle[] {
  return MOCK_ARTICLES.filter((a) => a.id !== excludeId)
    .slice(0, limit + 10)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
}

export interface TocItem {
  id: string;
  label: string;
}

export interface BlogArticleDetail extends BlogArticle {
  tag?: string;
  toc: TocItem[];
  bodySections: { id: string; heading?: string; content: string; isCallout?: boolean }[];
}

/** Default TOC and body for any article when no custom detail exists. */
function getDefaultDetail(article: BlogArticle): BlogArticleDetail {
  const toc: TocItem[] = [
    { id: "section-1", label: `${article.title.split(" ").slice(0, 4).join(" ")}...` },
    {
      id: "callout-1",
       label: "Recommendation"
    },
    { id: "section-2", label: "Key insights and takeaways" },
    { id: "section-3", label: "Operational best practices" },
    {
      id: "callout-2",
      label: "Success story"
    },
    { id: "section-4", label: "Examples & scenarios" },
    { id: "section-5", label: "Summary & next steps" },
  ];

  const bodySections = [
    {
      id: "section-1",
      heading: article.title.toUpperCase(),
      content:
        `${article.description} ` +
        "In this article, we break the topic down into practical sections so care teams, operations leaders, and business owners can understand what to do next. " +
        "The goal is not only to describe the challenge, but to make it clear how a modern care platform like DecentCare can support day‑to‑day work.",
    },
    {
      id: "callout-1",
      content:
        "If you are reading this on a busy clinic day, focus on one or two actions from each section. Small, consistent improvements compound faster than one‑time, large initiatives.",
      isCallout: true,
    },
    {
      id: "section-2",
      heading: "KEY INSIGHTS AND TAKEAWAYS",
      content:
        "Healthcare organizations that align strategy with operational capacity see better patient satisfaction and more predictable growth. " +
        "Teams that invest in clear workflows, shared visibility on patient journeys, and simple automations are able to respond faster without burning out frontline staff. " +
        "When data from marketing, enquiries, appointments, and follow‑ups lives in one place, leaders can spot bottlenecks, test changes, and measure the impact of every improvement.",
    },
    {
      id: "section-3",
      heading: "OPERATIONAL BEST PRACTICES",
      content:
        "Start by mapping the steps your patients or internal users actually take today. Capture where information is lost, where hand‑offs are unclear, and where work depends on a single person. " +
        "Introduce lightweight checklists, templates, and alerts so that the system carries some of the responsibility instead of individuals needing to remember every detail. " +
        "Finally, review these flows regularly with your team so they can suggest changes based on real‑world experience.",
    },
    {
      id: "callout-2",
      content:
        "The most successful teams do not try to digitize everything at once. They pick one journey—such as enquiries to first appointment—and make it feel effortless before expanding to others.",
      isCallout: true,
    },
    {
      id: "section-4",
      heading: "EXAMPLES & REAL‑WORLD SCENARIOS",
      content:
        "Consider a multi‑location hospital that receives hundreds of enquiries a week. Without a clear system, follow‑ups are manual, and many high‑intent patients never receive a response. " +
        "By centralizing enquiries, assigning clear ownership, and using simple reminders, the team can respond faster and track conversion all the way to procedure or consultation. " +
        "The same thinking applies to post‑procedure follow‑ups, chronic care programs, or marketing campaigns aimed at specific service lines.",
    },
    {
      id: "section-5",
      heading: "SUMMARY & NEXT STEPS",
      content:
        "In summary, focusing on both clinical quality and operational consistency helps build sustainable healthcare growth. " +
        "Choose one journey, involve the people who run it every day, and implement a small set of improvements you can measure. " +
        "As your team gains confidence, expand the same discipline to other journeys so that great care becomes the default experience for every patient.",
      isCallout: true,
    },
  ];

  return { ...article, tag: article.category, toc, bodySections };
}

/** Get full detail for the blog post (TOC, body, callouts). */
export function getArticleDetailBySlug(slug: string): BlogArticleDetail | undefined {
  const article = getArticleBySlug(slug);
  if (!article) return undefined;
  return getDefaultDetail(article);
}
