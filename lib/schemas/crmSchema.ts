export const crmPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://decentcare.ai/#organization",
      "name": "DecentCare",
      "url": "https://decentcare.ai/",
      "description": "DecentCare is an AI-powered healthcare growth company combining Care Journey CRM with digital services for clinics, hospitals and doctors.",
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
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "knowsAbout": [
        "Healthcare CRM",
        "Patient journey management",
        "Patient enquiry management",
        "Healthcare appointment scheduling",
        "Clinical workflow management",
        "Surgery coordination",
        "Post-operative follow-up",
        "Healthcare task management",
        "Patient care coordination"
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
      "@id": "https://decentcare.ai/services/care-journey-crm#webpage",
      "url": "https://decentcare.ai/services/care-journey-crm",
      "name": "AI-Enabled Care Journey CRM | DecentCare",
      "headline": "Every Patient. Every Stage. Connected.",
      "description": "AI-Enabled Care Journey CRM connects patient enquiries, appointments, clinical workflows, procedure coordination, recovery and post-operative follow-up in one structured healthcare system.",
      "isPartOf": {
        "@id": "https://decentcare.ai/#website"
      },
      "about": {
        "@id": "https://decentcare.ai/services/care-journey-crm#service"
      },
      "mainEntity": {
        "@id": "https://decentcare.ai/services/care-journey-crm#service"
      },
      "publisher": {
        "@id": "https://decentcare.ai/#organization"
      },
      "breadcrumb": {
        "@id": "https://decentcare.ai/services/care-journey-crm#breadcrumb"
      },
      "mentions": [
        {
          "@id": "https://decentcare.ai/services/care-journey-crm#capabilities"
        },
        {
          "@id": "https://decentcare.ai/services/care-journey-crm#journey-stages"
        },
        {
          "@id": "https://decentcare.ai/services/care-journey-crm#care-roles"
        },
        {
          "@id": "https://decentcare.ai/services/care-journey-crm#operational-insights"
        }
      ],
      "keywords": [
        "healthcare CRM",
        "care journey CRM",
        "patient journey management",
        "hospital CRM",
        "clinic CRM",
        "patient enquiry management",
        "surgery coordination software",
        "post-operative follow-up",
        "healthcare workflow management"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://decentcare.ai/services/care-journey-crm#breadcrumb",
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
          "name": "AI-Enabled Care Journey CRM",
          "item": "https://decentcare.ai/services/care-journey-crm"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://decentcare.ai/services/care-journey-crm#service",
      "url": "https://decentcare.ai/services/care-journey-crm",
      "name": "AI-Enabled Care Journey CRM",
      "serviceType": "Healthcare care journey and patient relationship management",
      "category": [
        "Healthcare CRM",
        "Patient Journey Management",
        "Clinical Workflow Management",
        "Patient Care Coordination",
        "Healthcare Automation"
      ],
      "description": "A healthcare-focused Care Journey CRM that connects patient enquiries, appointments, consultations, diagnostics, financial and insurance coordination, surgery scheduling, discharge and post-operative follow-up in one structured system.",
      "provider": {
        "@id": "https://decentcare.ai/#organization"
      },
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Hospitals"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Multi-specialty hospitals"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Clinics and specialty practices"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Doctors and clinical teams"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Hospital operations and patient coordination teams"
        }
      ],
      "hasOfferCatalog": {
        "@id": "https://decentcare.ai/services/care-journey-crm#capabilities"
      },
      "mainEntityOfPage": {
        "@id": "https://decentcare.ai/services/care-journey-crm#webpage"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://decentcare.ai/services/care-journey-crm#capabilities",
      "name": "Care Journey CRM Capabilities",
      "description": "Patient journey, clinical workflow and healthcare operations capabilities included in the DecentCare Care Journey CRM.",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/care-journey-crm#enquiry-management",
            "name": "Unified Patient Enquiry Management",
            "description": "Capture and manage enquiries from phone calls, WhatsApp, walk-ins and digital campaigns without repeated manual entry.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/care-journey-crm#appointment-scheduling",
            "name": "Appointment and Calendar Management",
            "description": "Manage doctor schedules, department calendars, appointment confirmations and patient check-ins through daily and weekly calendar views.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/care-journey-crm#consultation-workflow",
            "name": "Consultation and Diagnostic Workflow",
            "description": "Record clinical notes, track diagnostic requirements, manage reports and maintain the patient's care direction within one connected workflow.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/care-journey-crm#procedure-coordination",
            "name": "Procedure and Surgery Coordination",
            "description": "Coordinate financial discussions, insurance requirements, operating-room schedules and pre-operative requirements within the patient record.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/care-journey-crm#discharge-follow-up",
            "name": "Discharge and Automated Follow-Up",
            "description": "Connect recovery documentation and discharge summaries while automatically creating Day-1, Week-1 and Month-1 follow-up tasks.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/care-journey-crm#task-management",
            "name": "Role-Based Healthcare Task Management",
            "description": "Assign responsibilities and track task ownership across telecallers, front-desk teams, nurses, counsellors and doctors.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://decentcare.ai/services/care-journey-crm#journey-analytics",
            "name": "Patient Journey Analytics",
            "description": "Monitor stage distribution, patient drop-offs, no-show patterns, department workload and post-operative follow-up compliance.",
            "provider": {
              "@id": "https://decentcare.ai/#organization"
            }
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/care-journey-crm#journey-stages",
      "name": "Seven Patient Journey Stages",
      "description": "The seven connected stages managed through DecentCare Care Journey CRM.",
      "numberOfItems": 7,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Enquiry",
          "description": "Capture patient enquiries from calls, WhatsApp and walk-ins."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Appointment",
          "description": "Track appointments from scheduled through confirmed and checked in."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Consultation",
          "description": "Maintain clinical notes, diagnostics and care direction."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Procedure Suggested",
          "description": "Coordinate financial discussions, insurance requirements and operating-room scheduling."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Procedure Done",
          "description": "Manage recovery, discharge and clinical documentation."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Post-Operative Follow-Up",
          "description": "Track Day-1, Week-1 and Month-1 follow-ups and required escalations."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Episode Closed",
          "description": "Retain the patient's record to support lifetime care continuity."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/care-journey-crm#care-roles",
      "name": "Care-Team Roles Supported",
      "description": "The five healthcare-team roles whose responsibilities can be managed through Care Journey CRM.",
      "numberOfItems": 5,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Telecallers",
          "description": "Enquiry follow-up, appointment reminders and post-operative check-in calls."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Front Desk",
          "description": "Patient check-ins, scheduling confirmations and queue management."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Nurses",
          "description": "Pre-operative preparation, recovery monitoring and discharge documentation."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Counsellors",
          "description": "Financial discussions, insurance coordination and patient guidance."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Doctors",
          "description": "Clinical notes, procedure decisions and follow-up instructions."
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://decentcare.ai/services/care-journey-crm#operational-insights",
      "name": "Care Journey CRM Operational Insights",
      "description": "Operational insights available to healthcare teams through the Care Journey CRM.",
      "numberOfItems": 6,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Stage Drop-Off Detection",
          "description": "Identify patients who are stalling between different care-journey stages."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "No-Show Rate by Doctor",
          "description": "Identify doctors or appointment slots with recurring patient no-show patterns."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Department Workload",
          "description": "Understand patient-volume concentration and underused capacity across departments."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Follow-Up Compliance",
          "description": "Monitor whether post-operative follow-up milestones are completed on schedule."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Journey Overview Dashboard",
          "description": "View patient distribution across all seven journey stages in real time."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Doctor and Department View",
          "description": "Review workload distribution and patient-stage flow by department and individual doctor."
        }
      ]
    }
  ]
};
