export const webDevelopmentPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://decentcare.ai/#organization",
      "name": "DecentCare",
      "url": "https://decentcare.ai/",
      "description": "DecentCare is an AI-powered healthcare growth company combining Care Journey CRM with digital marketing, technology and growth services for hospitals, clinics and doctors.",
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
        "Healthcare web development",
        "Hospital website development",
        "Clinic website development",
        "Healthcare website design",
        "Patient enquiry journeys",
        "Healthcare website architecture",
        "Multi-location healthcare websites",
        "Healthcare website performance",
        "Healthcare chatbot integration",
        "Healthcare conversion tracking"
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
      "@id": "https://decentcare.ai/services/web-development#webpage",
      "url": "https://decentcare.ai/services/web-development",
      "name": "Web Development for Hospitals and Clinics | DecentCare",
      "headline": "Web Development for Hospitals and Clinics",
      "description": "Healthcare website development for hospitals and clinics, covering site architecture, patient enquiry journeys, responsive design, secure forms, performance, integrations and conversion tracking.",
      "isPartOf": {
        "@id": "https://decentcare.ai/#website"
      },
      "about": {
        "@id": "https://decentcare.ai/services/web-development#service"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/services/web-development#service"
      },
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "breadcrumb": {
        "@id": "https://decentcare.ai/services/web-development#breadcrumb"
      },
      "mentions": [
        {
          "@id": "https://decentcare.ai/services/web-development#service-catalog"
        },
        {
          "@id": "https://decentcare.ai/services/web-development#delivery-process"
        },
        {
          "@id": "https://decentcare.ai/services/web-development#ai-chat-integration"
        }
      ],
      "keywords": "healthcare web development, hospital website development, clinic website development, medical website design, healthcare website design, patient enquiry journey, multi-location hospital website, healthcare chatbot integration",
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://decentcare.ai/services/web-development#breadcrumb",
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
          "name": "Web Development with AI-Powered Personalisation",
          "item": "https://decentcare.ai/services/web-development"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://decentcare.ai/services/web-development#service",
      "url": "https://decentcare.ai/services/web-development",
      "name": "Web Development with AI-Powered Personalisation",
      "serviceType": "Healthcare website design and development",
      "category": [
        "Healthcare Web Development",
        "Hospital Website Development",
        "Clinic Website Development",
        "Healthcare Website Design",
        "Healthcare Website Optimisation"
      ],
      "description": "End-to-end healthcare website design and development for hospitals and clinics, including information architecture, reusable page systems, mobile-first design, patient enquiry journeys, secure forms, integrations, performance optimisation and conversion measurement.",
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
          "audienceType": "Doctors and medical practices"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Multi-location healthcare organizations"
        }
      ],
      "hasOfferCatalog": {
        "@id": "https://decentcare.ai/services/web-development#service-catalog"
      },
      "mainEntityOfPage": {
        "@id": "https://decentcare.ai/services/web-development#webpage"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://decentcare.ai/services/web-development#service-catalog",
      "name": "Healthcare Web Development Services",
      "description": "Healthcare website architecture, design, development, performance and patient-conversion services offered by DecentCare.",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/web-development#website-architecture",
            "name": "Healthcare Website Architecture",
            "description": "Clear website hierarchies and repeatable templates for healthcare specialties, services, doctors and branch locations.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/web-development#design-system",
            "name": "Reusable Healthcare Website Design System",
            "description": "Reusable sections, page templates and interface components that maintain consistent spacing, typography and page flow as the website grows.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/web-development#enquiry-journeys",
            "name": "Patient Enquiry Journey Design",
            "description": "Low-friction patient journeys connecting calls, WhatsApp, forms, booking tools and directions with healthcare front-desk workflows.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/web-development#multi-location-websites",
            "name": "Multi-Location Healthcare Websites",
            "description": "Consistent branch-page structures covering addresses, timings, directions, contact routes and service availability.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/web-development#website-performance",
            "name": "Healthcare Website Performance Optimisation",
            "description": "Fast, responsive website interactions across navigation, page transitions, forms and other important patient actions.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/web-development#campaign-landing-pages",
            "name": "Healthcare Campaign Landing Pages",
            "description": "Single-goal landing pages with clear calls to action, trust sections and tracking connected to enquiries and appointment actions.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://decentcare.ai/services/web-development#ai-chat-integration"
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://decentcare.ai/services/web-development#ai-chat-integration",
      "name": "AI Chatbot Integration for Healthcare Websites",
      "serviceType": "Healthcare website chatbot integration",
      "description": "AI-assisted healthcare website chat that helps route users to the appropriate department, doctor type or branch and supports handoff to calls, WhatsApp or enquiry forms.",
      "provider": {
        "@id": "https://decentcare.ai/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://decentcare.ai/services/web-development#webpage"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/web-development#ai-chat-capabilities",
      "name": "Healthcare AI Chat Integration Capabilities",
      "description": "Patient-routing and enquiry-support capabilities provided through healthcare website chatbot integration.",
      "numberOfItems": 3,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Guided Patient Routing",
          "description": "Guide users toward the appropriate healthcare department, doctor type or branch."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Approved FAQ Support",
          "description": "Provide answers based on approved healthcare website content."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Enquiry Handoff",
          "description": "Transfer users to a phone call, WhatsApp conversation or enquiry form at the appropriate stage."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/web-development#delivery-process",
      "name": "Healthcare Website Development Process",
      "description": "The four-phase process DecentCare uses to plan, design, build and launch healthcare websites.",
      "numberOfItems": 4,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Plan",
          "description": "Define the site structure, page templates, enquiry goals and patient-action flows for calls, WhatsApp, forms, booking and directions."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Design",
          "description": "Create wireframes for important page types and a reusable interface system for consistent layouts, spacing and components."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Build",
          "description": "Develop responsive templates, forms, integrations and tracking for important website actions."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Launch",
          "description": "Complete content migration, apply redirects for old URLs and release the website with stabilization and handover documentation."
        }
      ]
    }
  ]
};
