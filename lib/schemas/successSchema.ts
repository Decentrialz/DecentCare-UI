export const successPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://decentcare.ai/#organization",
      "name": "DecentCare",
      "url": "https://decentcare.ai/",
      "description": "DecentCare is an AI-powered healthcare growth company combining Care Journey CRM with healthcare marketing, digital strategy and technology services for clinics, hospitals and doctors.",
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
      "knowsAbout": [
        "Healthcare marketing",
        "Patient acquisition",
        "Healthcare SEO",
        "Healthcare social media marketing",
        "Healthcare paid advertising",
        "Care Journey CRM",
        "Patient journey management",
        "Healthcare web development",
        "Healthcare growth consulting"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://decentcare.ai/#website",
      "url": "https://decentcare.ai/",
      "name": "DecentCare",
      "description": "AI-powered healthcare growth, patient acquisition, Care Journey CRM, marketing and digital services for healthcare providers.",
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "CollectionPage",
      "@id": "https://decentcare.ai/success#webpage",
      "url": "https://decentcare.ai/success",
      "name": "Healthcare Success Stories | DecentCare",
      "headline": "Success Stories from Modern Healthcare Teams",
      "description": "Explore healthcare case studies showing how clinics and hospitals improved patient acquisition, digital growth, care coordination and operational efficiency with DecentCare.",
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
        "@id": "https://decentcare.ai/success#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/success#case-studies"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://decentcare.ai/success#breadcrumb",
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
          "name": "Success Stories",
          "item": "https://decentcare.ai/success"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/success#case-studies",
      "name": "DecentCare Healthcare Case Studies",
      "description": "Healthcare growth and patient-care case studies covering SEO, social media marketing, paid advertising and Care Journey CRM.",
      "numberOfItems": 3,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "@id": "https://decentcare.ai/success#gutcare-clinics-case-study",
            "url": "https://decentcare.ai/success#gutcare-clinics-case-study",
            "headline": "GutCare Clinics Healthcare SEO Case Study",
            "name": "GutCare Clinics: 340% Growth in Procedure-Intent Organic Sessions",
            "description": "A healthcare SEO case study showing how procedure-specific landing pages, local search optimisation and decision-stage content improved qualified patient enquiries.",
            "articleSection": "Healthcare SEO Case Study",
            "keywords": [
              "Healthcare SEO",
              "Procedure-intent SEO",
              "Local healthcare SEO",
              "Patient acquisition",
              "Surgical marketing"
            ],
            "about": {
              "@type": "Organization",
              "name": "GutCare Clinics",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              }
            },
            "mentions": {
              "@type": "Person",
              "name": "Dr. Yuvrajsingh Gehlot",
              "jobTitle": "Laparoscopic Surgeon, General Surgeon and Proctologist"
            },
            "author": {
              "@id": "https://decentcare.ai/#organization"
            },
            "publisher": {
              "@id": "https://decentcare.ai/#organization"
            },
            "isPartOf": {
              "@id": "https://decentcare.ai/success#webpage"
            },
            "inLanguage": "en-IN"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "@id": "https://decentcare.ai/success#dr-gowds-dental-hospital-case-study",
            "url": "https://decentcare.ai/success#dr-gowds-dental-hospital-case-study",
            "headline": "Dr. Gowds Dental Hospital Digital Growth Case Study",
            "name": "Dr. Gowds Dental Hospital: 4x Increase in High-Value Procedure Inquiries",
            "description": "A healthcare marketing case study showing how specialty-focused social content, paid campaigns and retargeting increased high-value dental procedure inquiries.",
            "articleSection": "Healthcare Digital Marketing Case Study",
            "keywords": [
              "Dental marketing",
              "Healthcare social media marketing",
              "Healthcare paid advertising",
              "Patient acquisition",
              "Dental hospital growth"
            ],
            "about": {
              "@type": "Organization",
              "name": "Dr. Gowds Dental Hospital",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              }
            },
            "mentions": {
              "@type": "Person",
              "name": "Prof. Dr. Snigdha Gowd",
              "jobTitle": "Chairperson and CEO"
            },
            "author": {
              "@id": "https://decentcare.ai/#organization"
            },
            "publisher": {
              "@id": "https://decentcare.ai/#organization"
            },
            "isPartOf": {
              "@id": "https://decentcare.ai/success#webpage"
            },
            "inLanguage": "en-IN"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Article",
            "@id": "https://decentcare.ai/success#chirag-global-hospital-case-study",
            "url": "https://decentcare.ai/success#chirag-global-hospital-case-study",
            "headline": "Chirag Global Hospital Care Journey CRM Case Study",
            "name": "Chirag Global Hospital: 3x Improvement in Care Coordination Turnaround",
            "description": "A Care Journey CRM case study showing how automated follow-ups and unified patient-status visibility improved post-surgical coordination.",
            "articleSection": "Healthcare CRM Case Study",
            "keywords": [
              "Care Journey CRM",
              "Healthcare CRM",
              "Post-surgical follow-up",
              "Patient care coordination",
              "Hospital workflow automation"
            ],
            "about": {
              "@type": "Organization",
              "name": "Chirag Global Hospital",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              }
            },
            "mentions": {
              "@type": "Person",
              "name": "Dr. Rajashekar M R",
              "jobTitle": "Founder and Chief Proctologist"
            },
            "author": {
              "@id": "https://decentcare.ai/#organization"
            },
            "publisher": {
              "@id": "https://decentcare.ai/#organization"
            },
            "isPartOf": {
              "@id": "https://decentcare.ai/success#webpage"
            },
            "inLanguage": "en-IN"
          }
        }
      ]
    }
  ]
};
