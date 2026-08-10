export const seoPageSchema = {
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
        "contactType": "sales and customer support",
        "telephone": "+91-8065916085",
        "email": "support@decentcare.ai",
        "url": "https://decentcare.ai/contact",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "availableLanguage": "English"
      }
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
      "@id": "https://decentcare.ai/services/seo-ai-search#webpage",
      "url": "https://decentcare.ai/services/seo-ai-search",
      "name": "Healthcare SEO with AI Search Intelligence | DecentCare",
      "headline": "Future-Proof Healthcare SEO: Dominate Google & AI Search",
      "description": "Healthcare SEO services that help hospitals, clinics and healthcare brands capture high-intent patient searches across Google, AI answer engines and healthcare discovery platforms.",
      "isPartOf": {
        "@id": "https://decentcare.ai/#website"
      },
      "about": {
        "@id": "https://decentcare.ai/services/seo-ai-search#service"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/services/seo-ai-search#service"
      },
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "breadcrumb": {
        "@id": "https://decentcare.ai/services/seo-ai-search#breadcrumb"
      },
      "mentions": [
        {
          "@id": "https://decentcare.ai/services/seo-ai-search#service-catalog"
        },
        {
          "@id": "https://decentcare.ai/services/seo-ai-search#deliverables"
        }
      ],
      "keywords": "healthcare SEO, hospital SEO, clinic SEO, medical SEO, AI search optimisation, answer engine optimisation, AEO, LLMO, AIO, entity SEO, technical SEO",
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://decentcare.ai/services/seo-ai-search#breadcrumb",
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
          "name": "SEO with AI Search Intelligence",
          "item": "https://decentcare.ai/services/seo-ai-search"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://decentcare.ai/services/seo-ai-search#service",
      "url": "https://decentcare.ai/services/seo-ai-search",
      "name": "SEO with AI Search Intelligence",
      "serviceType": "Healthcare SEO and AI search optimisation",
      "category": [
        "Healthcare SEO",
        "Medical SEO",
        "AI Search Optimisation",
        "Patient Acquisition Marketing"
      ],
      "description": "A healthcare-first SEO service combining patient-intent research, information architecture, on-page SEO, technical SEO, entity SEO and AI-search optimisation to improve visibility across traditional search engines and AI discovery platforms.",
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
          "audienceType": "Hospitals and health systems"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Multi-specialty and specialty clinics"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Super-specialty and procedure-focused practices"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Healthcare brands scaling locations and service lines"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Healthcare platforms requiring trust and discoverability"
        }
      ],
      "hasOfferCatalog": {
        "@id": "https://decentcare.ai/services/seo-ai-search#service-catalog"
      },
      "serviceOutput": {
        "@id": "https://decentcare.ai/services/seo-ai-search#deliverables"
      },
      "mainEntityOfPage": {
        "@id": "https://decentcare.ai/services/seo-ai-search#webpage"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://decentcare.ai/services/seo-ai-search#service-catalog",
      "name": "Healthcare SEO and AI Search Services",
      "description": "The core SEO and AI-search optimisation capabilities included in DecentCare's healthcare SEO service.",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Core Healthcare SEO Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Patient-Intent Keyword and Topic Research",
                "description": "Keyword and topic clusters based on patient awareness, discovery, evaluation, treatment, provider-selection and location-based search intent.",
                "provider": {
                  "@id": "https://decentcare.ai/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Healthcare SEO Information Architecture",
                "description": "Scalable website structures for healthcare departments, specialties, services, conditions, treatments, doctors and locations.",
                "provider": {
                  "@id": "https://decentcare.ai/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Healthcare On-Page SEO",
                "description": "On-page optimisation for service, condition, doctor and location pages using patient-friendly, medically responsible language.",
                "provider": {
                  "@id": "https://decentcare.ai/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical SEO",
                "description": "Technical optimisation covering crawling, indexing, Core Web Vitals, canonicalisation, duplicate-content management and structured-data readiness.",
                "provider": {
                  "@id": "https://decentcare.ai/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Entity SEO for Healthcare",
                "description": "Entity mapping, internal linking and schema recommendations for conditions, treatments, specialties, providers and healthcare locations.",
                "provider": {
                  "@id": "https://decentcare.ai/#organization"
                }
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "AI Search Optimisation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Answer Engine Optimization",
                "description": "Question-first content, concise answer blocks, structured formatting and internal signals designed to improve answer and snippet eligibility.",
                "provider": {
                  "@id": "https://decentcare.ai/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Search Interface Optimization",
                "description": "Service, specialty, provider and location-data optimisation for maps, voice assistants, health applications and other discovery interfaces.",
                "provider": {
                  "@id": "https://decentcare.ai/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Large Language Model Optimization",
                "description": "Entity and content optimisation designed to help AI systems interpret, verify and summarise healthcare services accurately.",
                "provider": {
                  "@id": "https://decentcare.ai/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Driven Optimization",
                "description": "AI-supported workflows for content-gap detection, intent clustering, performance-decay analysis, internal linking and opportunity monitoring.",
                "provider": {
                  "@id": "https://decentcare.ai/#organization"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/seo-ai-search#deliverables",
      "name": "Healthcare SEO Service Deliverables",
      "description": "The primary deliverables provided as part of DecentCare's healthcare SEO engagement.",
      "numberOfItems": 7,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Technical SEO audit and priority roadmap"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Keyword and intent cluster map for services, conditions and locations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Entity map for medical topics"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Templates for service, condition, doctor and location pages"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Structured data and schema recommendations"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Content briefs designed for trust and AI readability"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Monthly reporting focused on patient-intent visibility and conversions"
        }
      ]
    }
  ]
};
