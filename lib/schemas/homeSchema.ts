export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://decentcare.ai/#organization",
      "name": "DecentCare",
      "url": "https://decentcare.ai/",
      "description": "DecentCare is an AI-powered healthcare growth company combining patient acquisition, Digital Twin technology, Care Journey CRM, healthcare marketing and full-stack digital services for doctors, clinics and hospitals.",
      "slogan": "AI-powered growth, built responsibly for healthcare.",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://decentcare.ai/#logo",
        "url": "https://decentcare.ai/_next/static/media/dcLogo.4c424854.svg",
        "contentUrl": "https://decentcare.ai/_next/static/media/dcLogo.4c424854.svg",
        "caption": "DecentCare logo"
      },
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
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+91-8065916085",
          "email": "support@decentcare.ai",
          "areaServed": "IN",
          "availableLanguage": ["English"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": "+91-8065916085",
          "email": "support@decentcare.ai",
          "areaServed": "IN",
          "availableLanguage": ["English"]
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "knowsAbout": [
        "Healthcare marketing",
        "Patient acquisition",
        "Healthcare SEO",
        "Healthcare social media marketing",
        "Healthcare paid advertising",
        "Care Journey CRM",
        "Patient journey automation",
        "Digital Twin technology",
        "Healthcare web development",
        "Healthcare growth consulting"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://decentcare.ai/#website",
      "url": "https://decentcare.ai/",
      "name": "DecentCare",
      "alternateName": ["decentcare.ai"],
      "description": "AI-powered healthcare marketing, patient acquisition and care journey management for doctors, clinics and hospitals.",
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://decentcare.ai/#webpage",
      "url": "https://decentcare.ai/",
      "name": "DecentCare - AI-Powered Healthcare Marketing",
      "description": "DecentCare combines AI-powered patient acquisition, Digital Twin technology and empathetic automation to help healthcare providers attract more patients and scale sustainably.",
      "isPartOf": {
        "@id": "https://decentcare.ai/#website"
      },
      "about": {
        "@id": "https://decentcare.ai/#organization"
      },
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/#healthcare-growth-service"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Service",
      "@id": "https://decentcare.ai/#healthcare-growth-service",
      "name": "DecentCare AI-Powered Healthcare Growth Platform",
      "url": "https://decentcare.ai/",
      "serviceType": "Healthcare marketing, patient acquisition and care journey management",
      "description": "An integrated healthcare growth platform combining AI-powered patient acquisition, Digital Twin technology, Care Journey CRM, healthcare marketing, web development and growth consulting.",
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
          "audienceType": "Doctors and medical practitioners"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Clinics and diagnostic centres"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Hospitals and healthcare networks"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "@id": "https://decentcare.ai/#service-catalog",
        "name": "DecentCare Healthcare Growth Solutions",
        "numberOfItems": 6,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://decentcare.ai/#ai-healthcare-seo",
              "name": "AI-Driven Healthcare SEO",
              "description": "Healthcare SEO designed to build patient demand through service-line keyword architecture, local search visibility, medical content and conversion tracking.",
              "provider": {
                "@id": "https://decentcare.ai/#organization"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://decentcare.ai/#ai-social-media-marketing",
              "name": "AI-Powered Social Media Marketing",
              "description": "Healthcare social media marketing designed to strengthen brand trust, patient confidence, engagement and measurable demand.",
              "provider": {
                "@id": "https://decentcare.ai/#organization"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://decentcare.ai/#ai-paid-advertising",
              "name": "AI-Optimised Paid Advertising",
              "description": "Healthcare advertising across Google and Meta using specialty-driven campaign structures, conversion modelling, attribution and budget optimisation.",
              "provider": {
                "@id": "https://decentcare.ai/#organization"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://decentcare.ai/#care-journey-crm",
              "name": "AI-Enabled Care Journey CRM",
              "description": "A healthcare-native CRM for tracking and optimising the patient lifecycle from first enquiry through appointments, follow-ups and long-term retention.",
              "provider": {
                "@id": "https://decentcare.ai/#organization"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://decentcare.ai/#healthcare-web-development",
              "name": "AI-Enabled Healthcare Web Development",
              "description": "Healthcare website development focused on patient experience, specialty-service journeys, SEO, lead capture and appointment conversion.",
              "provider": {
                "@id": "https://decentcare.ai/#organization"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://decentcare.ai/#growth-consulting",
              "name": "AI-Led Strategy and Growth Consulting",
              "description": "Healthcare growth consulting using market forecasting, service-line planning, revenue analysis, capacity insights and performance dashboards.",
              "provider": {
                "@id": "https://decentcare.ai/#organization"
              }
            }
          }
        ]
      }
    }
  ]
};
