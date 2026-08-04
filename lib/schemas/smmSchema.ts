export const smmPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://decentcare.ai/#organization",
      "name": "DecentCare",
      "url": "https://decentcare.ai/",
      "description": "DecentCare is an AI-powered healthcare growth company combining Care Journey CRM with healthcare marketing, technology and growth services for clinics, hospitals and doctors.",
      "slogan": "AI-powered growth, built responsibly for healthcare.",
      "telephone": "+91-8065916085",
      "email": "support@decentcare.ai",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "T-Hub Foundation, I/C, 8(A), Raimaktha, Raidurgam",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500032",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "telephone": "+91-8065916085",
        "email": "support@decentcare.ai",
        "url": "https://decentcare.ai/contact",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "knowsAbout": [
        "Healthcare social media marketing",
        "Healthcare content strategy",
        "Patient education content",
        "Social media community management",
        "Healthcare video marketing",
        "Patient enquiry management",
        "Social media analytics",
        "AI-assisted content production"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://decentcare.ai/#website",
      "url": "https://decentcare.ai/",
      "name": "DecentCare",
      "description": "AI-powered healthcare growth, patient acquisition, Care Journey CRM and digital services for healthcare providers.",
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://decentcare.ai/services/smm#webpage",
      "url": "https://decentcare.ai/services/smm",
      "name": "AI Healthcare Social Media Marketing | DecentCare",
      "headline": "AI Healthcare Social Media Marketing",
      "description": "Healthcare social media marketing combining strategy, content production, community management and AI-assisted delivery to improve visibility, trust, engagement and patient enquiries.",
      "isPartOf": {
        "@id": "https://decentcare.ai/#website"
      },
      "about": {
        "@id": "https://decentcare.ai/services/smm#service"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/services/smm#service"
      },
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "breadcrumb": {
        "@id": "https://decentcare.ai/services/smm#breadcrumb"
      },
      "mentions": [
        {
          "@id": "https://decentcare.ai/services/smm#service-catalog"
        },
        {
          "@id": "https://decentcare.ai/services/smm#process"
        }
      ],
      "keywords": [
        "healthcare social media marketing",
        "hospital social media marketing",
        "clinic social media marketing",
        "medical social media marketing",
        "healthcare content marketing",
        "patient education content",
        "healthcare video marketing",
        "social media patient acquisition"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://decentcare.ai/services/smm#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://decentcare.ai/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://decentcare.ai/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AI Healthcare Social Media Marketing",
          "item": "https://decentcare.ai/services/smm"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://decentcare.ai/services/smm#service",
      "url": "https://decentcare.ai/services/smm",
      "name": "AI Healthcare Social Media Marketing",
      "serviceType": "Healthcare social media marketing",
      "category": [
        "Healthcare Marketing",
        "Social Media Marketing",
        "Healthcare Content Marketing",
        "Patient Engagement",
        "Patient Acquisition"
      ],
      "description": "A healthcare-focused social media marketing service covering strategy, content creation, publishing, platform management, community moderation, enquiry workflows, analytics and AI-assisted production.",
      "provider": {
        "@id": "https://decentcare.ai/#organization"
      },
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Hospitals and healthcare institutions"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Clinics and specialty practices"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Doctors and medical practitioners"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Healthcare brands and platforms"
        }
      ],
      "hasOfferCatalog": {
        "@id": "https://decentcare.ai/services/smm#service-catalog"
      },
      "mainEntityOfPage": {
        "@id": "https://decentcare.ai/services/smm#webpage"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://decentcare.ai/services/smm#service-catalog",
      "name": "Healthcare Social Media Marketing Services",
      "description": "Social media strategy, production, management, engagement and performance services offered by DecentCare.",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/smm#strategy-planning",
            "name": "Social Media Strategy and Planning",
            "description": "Patient-intent mapping, content pillars, brand voice development and monthly content-calendar planning.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/smm#content-studio",
            "name": "In-House Healthcare Content Studio",
            "description": "Production of Reels and Shorts scripts, carousels, stories, healthcare explainers and reusable design templates.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/smm#platform-management",
            "name": "Social Media Platform Management",
            "description": "Publishing and management across Instagram, Facebook, LinkedIn, YouTube and other relevant social media channels.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/smm#community-moderation",
            "name": "Community Management and Moderation",
            "description": "Patient-response playbooks, escalation rules, misinformation handling, community engagement and review-prompt workflows.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/smm#creative-direction",
            "name": "Healthcare Creative Direction",
            "description": "Development of content-series formats, visual styles, messaging tone and healthcare storytelling guidelines.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/smm#performance-optimisation",
            "name": "Social Media Performance and Optimisation",
            "description": "Performance analysis identifying content to scale, stop or improve using engagement, retention, enquiry and profile-action data.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/smm#social-lead-engine",
            "name": "Social Lead Engine",
            "description": "Structured social-media enquiry handling, booking actions, service navigation, front-desk handoff and follow-up workflows.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/smm#ai-assisted-delivery",
            "name": "AI-Assisted Social Media Delivery",
            "description": "AI-supported topic discovery, monthly planning, draft acceleration, content-quality checks and performance summaries.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/smm#process",
      "name": "DecentCare Social Media Marketing Process",
      "description": "The four-step process used to plan, produce and improve healthcare social media marketing.",
      "numberOfItems": 4,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Audit and Direction",
          "description": "Review brand voice, content gaps, competitors and immediate improvement opportunities."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Build the System",
          "description": "Establish content pillars, recurring series, templates, approval workflows and the production plan."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Produce and Publish",
          "description": "Create content in batches, execute the publishing calendar and monitor social channels."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Improve Monthly",
          "description": "Scale successful content, refresh topics and optimise formats and recurring series."
        }
      ]
    }
  ]
};
