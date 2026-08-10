export const servicesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://decentcare.ai/#organization",
      "name": "DecentCare",
      "url": "https://decentcare.ai/",
      "description": "DecentCare is an AI-powered healthcare growth company combining Care Journey CRM with digital services for clinics, hospitals and doctors.",
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
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://decentcare.ai/#website",
      "url": "https://decentcare.ai/",
      "name": "DecentCare",
      "alternateName": [
        "decentcare.ai"
      ],
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "CollectionPage",
      "@id": "https://decentcare.ai/services/#webpage",
      "url": "https://decentcare.ai/services",
      "name": "Healthcare Growth Services | DecentCare",
      "headline": "Our Services",
      "description": "Integrated healthcare growth services combining AI-powered marketing, Care Journey CRM, business strategy and web development for modern healthcare organizations.",
      "isPartOf": {
        "@id": "https://decentcare.ai/#website"
      },
      "about": {
        "@id": "https://decentcare.ai/#organization"
      },
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "breadcrumb": {
        "@id": "https://decentcare.ai/services/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/services/#services-list"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Clinics, hospitals, doctors and healthcare teams"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://decentcare.ai/services/#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/#services-list",
      "name": "DecentCare Healthcare Growth Services",
      "description": "A collection of AI-enabled marketing, CRM, consulting and web development services for healthcare organizations.",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/seo-ai-search/#service",
            "url": "https://decentcare.ai/services/seo-ai-search",
            "name": "SEO with AI Search Intelligence",
            "serviceType": "Healthcare SEO and AI search optimization",
            "description": "Healthcare SEO combining conventional search optimization with AIO, GEO and AEO to improve visibility across search engines and AI-generated answers.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Hospitals, clinics and healthcare organizations"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/smm/#service",
            "url": "https://decentcare.ai/services/smm",
            "name": "Social Media Marketing with AI Insights & Automation",
            "serviceType": "Healthcare social media marketing",
            "description": "AI-supported healthcare social media strategy, content, community management and optimization designed to increase engagement, trust and patient enquiries.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Hospitals, clinics, doctors and healthcare brands"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/paid-marketing/#service",
            "url": "https://decentcare.ai/services/paid-marketing",
            "name": "Paid Advertising with AI-Driven Optimization",
            "serviceType": "Healthcare paid advertising",
            "description": "AI-powered healthcare advertising using intelligent bidding, conversion modelling and budget optimization to generate qualified patient enquiries.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Hospitals, clinics, doctors and healthcare organizations"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/care-journey-crm/#service",
            "url": "https://decentcare.ai/services/care-journey-crm",
            "name": "AI-Enabled Care Journey CRM",
            "serviceType": "Healthcare customer relationship management",
            "description": "A healthcare-focused CRM using automation and predictive patient scoring to manage outreach, follow-ups, appointments and patient journeys.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Clinics, hospitals, doctors and healthcare teams"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/business-strategy/#service",
            "url": "https://decentcare.ai/services/business-strategy",
            "name": "Business Strategy & Growth Consulting with AI-Driven Forecasting",
            "serviceType": "Healthcare business strategy and growth consulting",
            "description": "Healthcare growth consulting supported by market forecasting, competitive mapping and operational scenario modelling for strategic decision-making.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Hospitals, clinics and healthcare organizations"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/web-development/#service",
            "url": "https://decentcare.ai/services/web-development",
            "name": "Web Development with AI-Powered Personalisation",
            "serviceType": "Healthcare web development",
            "description": "Healthcare website development using AI personalization, conversational assistance and behavior-based journeys to improve patient experience and appointment conversions.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Hospitals, clinics, doctors and healthcare organizations"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          }
        }
      ]
    }
  ]
};
