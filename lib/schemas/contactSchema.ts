export const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://decentcare.ai/#organization",
      "name": "DecentCare",
      "url": "https://decentcare.ai/",
      "description": "DecentCare is an AI-powered healthcare growth company combining Care Journey CRM with digital marketing, technology and growth services for doctors, clinics and hospitals.",
      "telephone": "+91-8065916085",
      "email": "support@decentcare.ai",
      "address": {
        "@type": "PostalAddress",
        "@id": "https://decentcare.ai/contact#office-address",
        "streetAddress": "Plot No. 1/C, Sy. No. 83/1, Raidurgam, Knowledge City Road, Panmaktha",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500032",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "@id": "https://decentcare.ai/contact#sales-contact",
          "contactType": "sales",
          "telephone": "+91-8065916085",
          "email": "support@decentcare.ai",
          "url": "https://decentcare.ai/contact",
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "availableLanguage": [
            "English"
          ],
          "hoursAvailable": {
            "@id": "https://decentcare.ai/contact#contact-hours"
          }
        },
        {
          "@type": "ContactPoint",
          "@id": "https://decentcare.ai/contact#general-contact",
          "contactType": "customer service",
          "telephone": "+91-8065916085",
          "email": "support@decentcare.ai",
          "url": "https://decentcare.ai/contact",
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "availableLanguage": [
            "English"
          ],
          "hoursAvailable": {
            "@id": "https://decentcare.ai/contact#contact-hours"
          }
        },
        {
          "@type": "ContactPoint",
          "@id": "https://decentcare.ai/contact#software-support",
          "contactType": "technical support",
          "telephone": "+91-8065916085",
          "email": "support@decentcare.ai",
          "url": "https://decentcare.ai/contact",
          "productSupported": "DecentCare software platform",
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "availableLanguage": [
            "English"
          ],
          "hoursAvailable": {
            "@id": "https://decentcare.ai/contact#contact-hours"
          }
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    {
      "@type": "OpeningHoursSpecification",
      "@id": "https://decentcare.ai/contact#contact-hours",
      "dayOfWeek": [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
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
      "@type": "ContactPage",
      "@id": "https://decentcare.ai/contact#webpage",
      "url": "https://decentcare.ai/contact",
      "name": "Contact DecentCare",
      "headline": "Contact Us",
      "description": "Contact DecentCare for a product demonstration, sales enquiry, general question or help with the DecentCare software platform.",
      "isPartOf": {
        "@id": "https://decentcare.ai/#website"
      },
      "about": {
        "@id": "https://decentcare.ai/#organization"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/#organization"
      },
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "breadcrumb": {
        "@id": "https://decentcare.ai/contact#breadcrumb"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://decentcare.ai/contact#breadcrumb",
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
          "name": "Contact Us",
          "item": "https://decentcare.ai/contact"
        }
      ]
    }
  ]
};
