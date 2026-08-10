export const paidMarketingPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://decentcare.ai/#organization",
      "name": "DecentCare",
      "url": "https://decentcare.ai/",
      "description": "DecentCare is an AI-powered healthcare growth company combining Care Journey CRM with healthcare marketing, technology and growth services for hospitals, clinics and doctors.",
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
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "availableLanguage": "English"
      },
      "knowsAbout": [
        "Healthcare paid advertising",
        "Healthcare Google Ads",
        "Healthcare Meta Ads",
        "Healthcare YouTube advertising",
        "Patient acquisition",
        "Healthcare campaign optimisation",
        "Healthcare retargeting",
        "Healthcare lead generation",
        "Multi-location healthcare marketing"
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
      "@id": "https://decentcare.ai/services/paid-marketing#webpage",
      "url": "https://decentcare.ai/services/paid-marketing",
      "name": "AI-Powered Paid Marketing for Healthcare | DecentCare",
      "headline": "AI-Powered Paid Marketing For Healthcare",
      "description": "AI-powered healthcare paid marketing services covering strategy, campaign management, enquiry capture, optimisation and reporting to generate predictable patient growth.",
      "isPartOf": {
        "@id": "https://decentcare.ai/#website"
      },
      "about": {
        "@id": "https://decentcare.ai/services/paid-marketing#service"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/services/paid-marketing#service"
      },
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "breadcrumb": {
        "@id": "https://decentcare.ai/services/paid-marketing#breadcrumb"
      },
      "mentions": [
        {
          "@id": "https://decentcare.ai/services/paid-marketing#service-catalog"
        },
        {
          "@id": "https://decentcare.ai/services/paid-marketing#marketing-system"
        },
        {
          "@id": "https://decentcare.ai/services/paid-marketing#delivery-process"
        },
        {
          "@id": "https://decentcare.ai/services/paid-marketing#deliverables"
        }
      ],
      "keywords": [
        "healthcare paid marketing",
        "healthcare paid advertising",
        "hospital Google Ads",
        "clinic Meta Ads",
        "healthcare YouTube advertising",
        "healthcare retargeting",
        "patient acquisition campaigns",
        "healthcare PPC",
        "medical paid advertising"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://decentcare.ai/services/paid-marketing#breadcrumb",
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
          "name": "Paid Advertising with AI-Driven Optimization",
          "item": "https://decentcare.ai/services/paid-marketing"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://decentcare.ai/services/paid-marketing#service",
      "url": "https://decentcare.ai/services/paid-marketing",
      "name": "AI-Powered Paid Marketing for Healthcare",
      "serviceType": "Healthcare paid advertising and patient acquisition",
      "category": [
        "Healthcare Paid Marketing",
        "Healthcare PPC",
        "Google Ads Management",
        "Meta Ads Management",
        "YouTube Advertising",
        "Healthcare Retargeting",
        "Patient Acquisition"
      ],
      "description": "A healthcare-focused paid marketing service covering patient-intent strategy, search advertising, paid social, YouTube campaigns, video advertising, retargeting, multi-location campaigns, enquiry-path design, AI-assisted optimisation and performance reporting.",
      "provider": {
        "@id": "https://decentcare.ai/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Multi-specialty hospitals"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Specialist clinics"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "New healthcare facility launches"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Private medical practices"
        }
      ],
      "hasOfferCatalog": {
        "@id": "https://decentcare.ai/services/paid-marketing#service-catalog"
      },
      "mainEntityOfPage": {
        "@id": "https://decentcare.ai/services/paid-marketing#webpage"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://decentcare.ai/services/paid-marketing#service-catalog",
      "name": "Healthcare Paid Marketing Services",
      "description": "Paid media services across the channels healthcare patients use to research and choose providers.",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/paid-marketing#healthcare-search-ads",
            "name": "Healthcare Search Ads",
            "description": "Google Search campaigns designed to capture high-intent patient demand for healthcare services and treatments.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/paid-marketing#paid-social-campaigns",
            "name": "Paid Social Campaigns",
            "description": "Meta advertising campaigns designed to build patient trust, generate enquiries and support healthcare service-line growth.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/paid-marketing#youtube-campaigns",
            "name": "YouTube Campaigns",
            "description": "Healthcare video advertising through YouTube inventory to improve reach, consideration and patient awareness.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/paid-marketing#video-ads",
            "name": "Video Ads Across Platforms",
            "description": "Short-form and mid-length video advertising designed for healthcare patient acquisition across relevant digital platforms.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/paid-marketing#retargeting",
            "name": "Retargeting and Remarketing",
            "description": "Follow-up advertising across Google and Meta to reconnect with prospective patients and improve conversion rates.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/paid-marketing#multi-location-campaigns",
            "name": "Multi-Location Healthcare Campaigns",
            "description": "Paid marketing campaign structures that provide service-line clarity, budget control and performance reporting across multiple healthcare branches.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/paid-marketing#marketing-system",
      "name": "DecentCare Healthcare Paid Marketing System",
      "description": "The five connected stages used to create predictable healthcare patient enquiries.",
      "numberOfItems": 5,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Patient Intent",
          "description": "Identify healthcare search behaviour and patient-intent patterns by service line."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Campaigns",
          "description": "Build channel and service-line campaigns aligned with patient demand."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Enquiry Capture",
          "description": "Create direct paths for calls, WhatsApp enquiries and appointment-request forms."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Performance Reporting",
          "description": "Track campaign performance and patient-enquiry signals through clear reporting."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Optimisation",
          "description": "Continuously improve targeting, search terms, budgets and advertising messages."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/paid-marketing#delivery-process",
      "name": "Healthcare Paid Marketing Delivery Process",
      "description": "The four-step framework used by DecentCare to build and optimise healthcare paid marketing campaigns.",
      "numberOfItems": 4,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Patient Intent Mapping",
          "description": "Translate patient behaviour into intent clusters for urgent care needs, planned treatments and elective procedures."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Service Line Campaign Architecture",
          "description": "Organise campaigns by specialty and service line to keep optimisation focused and prevent budget cannibalisation."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Enquiry Path Design",
          "description": "Align calls, WhatsApp enquiries and appointment-request forms with each healthcare service line."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Weekly Optimisation Rhythm",
          "description": "Improve performance through regular search-term analysis, audience refinement and messaging tests."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/paid-marketing#ai-capabilities",
      "name": "AI Capabilities for Healthcare Paid Marketing",
      "description": "AI-supported capabilities used to improve targeting, bidding, creative testing and campaign monitoring.",
      "numberOfItems": 4,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Predictive Intent",
          "description": "Identify high-value healthcare search patterns and emerging patient demand."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Smart Bidding",
          "description": "Shift budgets toward the strongest-performing healthcare service lines."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Creative Iteration",
          "description": "Test advertising variations to identify messaging that resonates with prospective patients."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Anomaly Detection",
          "description": "Monitor campaigns for unusual budget changes and potential tracking issues."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/paid-marketing#deliverables",
      "name": "DecentCare Paid Marketing Deliverables",
      "description": "Primary deliverables included in DecentCare healthcare paid marketing engagements.",
      "numberOfItems": 5,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Paid Marketing Strategy and Channel Plan"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "NMC Compliant Ad Creatives and Copy"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Targeting and Audience Architecture by Service Line"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "AI Assisted Optimisation Workflow"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Performance Reporting Built for Growth Decisions"
        }
      ]
    }
  ]
};
