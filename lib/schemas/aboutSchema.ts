export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://decentcare.ai/#organization",
      "name": "DecentCare",
      "url": "https://decentcare.ai/",
      "description": "DecentCare is an AI-powered healthcare technology platform built to help hospitals, clinics and medical practitioners attract more patients, manage care journeys and grow sustainably.",
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
      "founder": [
        {
          "@id": "https://decentcare.ai/about#swaroop-esd"
        },
        {
          "@id": "https://decentcare.ai/about#karthik-reddy-k"
        }
      ],
      "knowsAbout": [
        "Healthcare technology",
        "Healthcare marketing",
        "Patient acquisition",
        "Digital Twin technology",
        "Care journey management",
        "Healthcare CRM",
        "Patient journey automation",
        "Healthcare SEO",
        "Healthcare social media marketing",
        "Healthcare paid advertising",
        "Healthcare business strategy",
        "Healthcare web development"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://decentcare.ai/#website",
      "url": "https://decentcare.ai/",
      "name": "DecentCare",
      "description": "AI-powered healthcare growth, patient acquisition, care journey management and digital services for healthcare providers.",
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "AboutPage",
      "@id": "https://decentcare.ai/about#webpage",
      "url": "https://decentcare.ai/about",
      "name": "About DecentCare",
      "headline": "About DecentCare",
      "description": "Learn about DecentCare, its story, healthcare-focused approach, integrated capabilities, clients and the founders behind its AI-powered healthcare growth platform.",
      "isPartOf": {
        "@id": "https://decentcare.ai/#website"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/#organization"
      },
      "about": {
        "@id": "https://decentcare.ai/#organization"
      },
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "breadcrumb": {
        "@id": "https://decentcare.ai/about#breadcrumb"
      },
      "mentions": [
        {
          "@id": "https://decentcare.ai/about#swaroop-esd"
        },
        {
          "@id": "https://decentcare.ai/about#karthik-reddy-k"
        },
        {
          "@id": "https://decentcare.ai/about#capabilities"
        }
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://decentcare.ai/about#breadcrumb",
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
          "name": "About Us",
          "item": "https://decentcare.ai/about"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://decentcare.ai/about#swaroop-esd",
      "name": "Swaroop ESD",
      "jobTitle": "Founder and CEO",
      "description": "Swaroop ESD is the Founder and CEO of DecentCare, with more than 14 years of experience across healthcare technology and strategic marketing.",
      "worksFor": {
        "@id": "https://decentcare.ai/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://decentcare.ai/about#karthik-reddy-k",
      "name": "Karthik Reddy K",
      "jobTitle": "Founder and COO",
      "description": "Karthik Reddy K is the Founder and COO of DecentCare, with more than 14 years of experience in operations and large-scale technology platform execution.",
      "worksFor": {
        "@id": "https://decentcare.ai/#organization"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/about#capabilities",
      "name": "DecentCare Integrated Capabilities",
      "description": "Six integrated healthcare growth and operations capabilities offered by DecentCare.",
      "numberOfItems": 6,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/seo-ai-search#service",
            "url": "https://decentcare.ai/services/seo-ai-search",
            "name": "SEO with AI Search Intelligence",
            "serviceType": "Healthcare SEO and AI search optimisation",
            "description": "Organic visibility strategies combining AI-enhanced SEO, AIO, GEO and AEO for traditional search and generative AI responses.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
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
            "@id": "https://decentcare.ai/services/smm#service",
            "url": "https://decentcare.ai/services/smm",
            "name": "Social Media Marketing with AI Insights and Automation",
            "serviceType": "Healthcare social media marketing",
            "description": "Healthcare social media marketing using AI-driven audience segmentation, sentiment analysis and predictive creative optimisation.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
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
            "@id": "https://decentcare.ai/services/paid-marketing#service",
            "url": "https://decentcare.ai/services/paid-marketing",
            "name": "Paid Advertising with AI-Driven Optimisation",
            "serviceType": "Healthcare paid advertising",
            "description": "Healthcare paid advertising using intelligent bidding, conversion modelling and real-time budget optimisation to attract qualified patient enquiries.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
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
            "@id": "https://decentcare.ai/services/care-journey-crm#service",
            "url": "https://decentcare.ai/services/care-journey-crm",
            "name": "AI-Enabled Care Journey CRM",
            "serviceType": "Healthcare care journey CRM",
            "description": "A healthcare CRM using intelligent automation and predictive patient scoring to manage follow-ups, communication, appointments and patient retention.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
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
            "@id": "https://decentcare.ai/services/business-strategy#service",
            "url": "https://decentcare.ai/services/business-strategy",
            "name": "Business Strategy and Growth Consulting",
            "serviceType": "Healthcare business strategy and growth consulting",
            "description": "Healthcare growth consulting supported by AI-powered forecasting, market positioning, competitive mapping and operational scenario modelling.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
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
            "@id": "https://decentcare.ai/services/web-development#service",
            "url": "https://decentcare.ai/services/web-development",
            "name": "Web Development with AI-Powered Personalisation",
            "serviceType": "Healthcare web development",
            "description": "Healthcare website development using conversational AI, behaviour-based journeys and patient-focused conversion pathways.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
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
