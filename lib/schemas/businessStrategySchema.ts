export const businessStrategyPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://decentcare.ai/#organization",
      "name": "DecentCare",
      "url": "https://decentcare.ai/",
      "description": "DecentCare is an AI-powered healthcare growth company combining Care Journey CRM with healthcare marketing, technology and growth consulting services for hospitals, clinics and doctors.",
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
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "knowsAbout": [
        "Healthcare business strategy",
        "Healthcare growth consulting",
        "Hospital market entry strategy",
        "Healthcare revenue growth",
        "Hospital operations consulting",
        "Healthcare market research",
        "Patient journey improvement",
        "Hospital profitability analysis",
        "Healthcare operational efficiency",
        "Healthcare financial forecasting"
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
      "@id": "https://decentcare.ai/services/business-strategy#webpage",
      "url": "https://decentcare.ai/services/business-strategy",
      "name": "Healthcare Business Strategy and Growth Consulting | DecentCare",
      "headline": "Strategy and Consultation",
      "description": "Healthcare business strategy and growth consulting covering market entry, revenue growth and hospital operations improvement for healthcare organizations.",
      "isPartOf": {
        "@id": "https://decentcare.ai/#website"
      },
      "about": {
        "@id": "https://decentcare.ai/services/business-strategy#service"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/services/business-strategy#service"
      },
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "breadcrumb": {
        "@id": "https://decentcare.ai/services/business-strategy#breadcrumb"
      },
      "mentions": [
        {
          "@id": "https://decentcare.ai/services/business-strategy#service-catalog"
        },
        {
          "@id": "https://decentcare.ai/services/business-strategy#consulting-process"
        }
      ],
      "keywords": [
        "healthcare business strategy",
        "hospital growth consulting",
        "hospital operations consulting",
        "healthcare market entry strategy",
        "hospital revenue growth",
        "healthcare consulting India",
        "hospital profitability consulting",
        "healthcare financial forecasting"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://decentcare.ai/services/business-strategy#breadcrumb",
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
          "name": "Business Strategy and Growth Consulting",
          "item": "https://decentcare.ai/services/business-strategy"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://decentcare.ai/services/business-strategy#service",
      "url": "https://decentcare.ai/services/business-strategy",
      "name": "Healthcare Business Strategy and Growth Consulting",
      "serviceType": "Healthcare business strategy and hospital growth consulting",
      "category": [
        "Healthcare Consulting",
        "Hospital Business Strategy",
        "Healthcare Market Entry",
        "Hospital Revenue Growth",
        "Hospital Operations Consulting"
      ],
      "description": "A healthcare-focused consulting service that helps hospitals, clinics and healthcare organizations address market entry, revenue growth and operational performance through structured diagnostics, strategy development and implementation support.",
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
          "audienceType": "Single-specialty and multi-specialty clinics"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "New hospital promoters, doctors and healthcare investors"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Underperforming hospital units"
        }
      ],
      "hasOfferCatalog": {
        "@id": "https://decentcare.ai/services/business-strategy#service-catalog"
      },
      "mainEntityOfPage": {
        "@id": "https://decentcare.ai/services/business-strategy#webpage"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://decentcare.ai/services/business-strategy#service-catalog",
      "name": "Healthcare Strategy and Consulting Services",
      "description": "Three focused consulting practices covering healthcare market entry, revenue growth and hospital operations.",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/business-strategy#market-entry-strategy",
            "name": "Market Entry Strategy",
            "serviceType": "Healthcare market entry consulting",
            "description": "Market intelligence, positioning and go-to-market planning for healthcare organizations entering a new geography, launching a specialty or opening an additional location.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            },
            "serviceOutput": {
              "@id": "https://decentcare.ai/services/business-strategy#market-entry-deliverables"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/business-strategy#revenue-growth-strategy",
            "name": "Revenue Growth Strategy",
            "serviceType": "Healthcare revenue growth consulting",
            "description": "Healthcare revenue analysis and growth planning focused on revenue leakage, department profitability, referral structures, pricing, payer mix and patient retention.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            },
            "serviceOutput": {
              "@id": "https://decentcare.ai/services/business-strategy#revenue-growth-deliverables"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/business-strategy#hospital-operations-consulting",
            "name": "Hospital Operations Consulting",
            "serviceType": "Hospital operations and process improvement consulting",
            "description": "Process-level hospital consulting focused on patient flow, staff productivity, patient experience, clinical workflows, capacity, costs and accreditation readiness.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            },
            "serviceOutput": {
              "@id": "https://decentcare.ai/services/business-strategy#operations-deliverables"
            }
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/business-strategy#market-entry-deliverables",
      "name": "Market Entry Strategy Deliverables",
      "numberOfItems": 6,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Location feasibility and catchment analysis"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Direct and indirect competitor landscape assessment"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Positioning and differentiation strategy"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Specialty gap mapping against target-market demand"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Patient persona development and demand estimation"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Financial projection model with defined assumptions"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/business-strategy#revenue-growth-deliverables",
      "name": "Revenue Growth Strategy Deliverables",
      "numberOfItems": 8,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Revenue leakage audit across departments and billing processes"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Referral doctor mapping and engagement-program design"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Package pricing and service-bundling strategy"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Patient retention and recall-program design"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Department-wise profitability analysis"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Payer-mix optimization"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "High-revenue specialty identification and activation"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Marketing return-on-investment tracking framework"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/business-strategy#operations-deliverables",
      "name": "Hospital Operations Consulting Deliverables",
      "numberOfItems": 8,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Full patient journey mapping across OPD, IPD, emergency and discharge"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Nursing and staff productivity framework"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Patient experience audit and improvement program"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Supply-chain and pharmacy cost reduction"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "OPD-flow optimization and wait-time reduction"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Standard operating procedure design for key clinical workflows"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Bed-management and occupancy optimization"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "NABH and JCI accreditation-readiness support"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/business-strategy#consulting-process",
      "name": "DecentCare Healthcare Consulting Process",
      "description": "The five-phase process used to move healthcare consulting engagements from diagnostic assessment to implementation and handover.",
      "numberOfItems": 5,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Discovery and Diagnostic",
          "description": "Review hospital financials, patient data, team structure, market position and competitive landscape."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Strategy Design",
          "description": "Develop a customized strategy based on organizational data, market conditions and defined objectives."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Alignment Workshop",
          "description": "Present the strategy to the leadership team, incorporate feedback and confirm priorities before execution."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Execution and Optimization",
          "description": "Support implementation, monitor key performance indicators, address blockers and refine the plan using performance data."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Review and Handover",
          "description": "Deliver a documented operational playbook, review outcomes against projections and define the next steps."
        }
      ]
    }
  ]
};
