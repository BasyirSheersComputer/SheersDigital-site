/**
 * SEO Configuration for Servora Website
 * Centralized SEO settings and metadata
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  structuredData?: object;
}

export const defaultSEO: SEOConfig = {
  title: "Servora - Template Platform + Professional Services | F&B Operations Transformation",
  description: "Premium Malaysian F&B chains: Professional Plan (RM 5K/month per 10 outlets) + Enterprise Plan (RM 10K/month per 10 outlets). Professional services for custom implementations. 250+ chains optimized.",
  keywords: "F&B software Malaysia, restaurant management system, template platform, professional services, Malaysian restaurant technology, F&B automation, restaurant POS integration, supply chain optimization, enterprise F&B solutions",
  canonicalUrl: "https://sheerssoft.com",
  ogImage: "https://sheerssoft.com/og-image.jpg",
  ogType: "website"
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: "Template Platform + Professional Services | F&B Management System Malaysia | Servora",
    description: "Malaysia's leading F&B management system with template platform (Professional: RM 5K/month per 10 outlets, Enterprise: RM 10K/month per 10 outlets) + professional services for custom implementations. Transform operations with inventory management, waste reduction, supplier automation, and AI forecasting.",
    keywords: "restaurant software Malaysia, F&B management system Malaysia, template platform, professional services, restaurant automation Malaysia, food service software Malaysia, restaurant technology Malaysia, F&B software Malaysia, restaurant management system, Malaysian restaurant technology, F&B automation, restaurant POS integration, supply chain optimization, enterprise F&B solutions",
    canonicalUrl: "https://sheerssoft.com",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Servora",
      "legalName": "Sheers Software Sdn. Bhd.",
      "url": "https://sheerssoft.com",
      "logo": "https://sheerssoft.com/logo.png",
      "description": "Premium F&B software solutions for Malaysian restaurants. Transform operational chaos into competitive advantage with our enterprise-grade inventory, waste management, and automation systems.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MY",
        "addressRegion": "Malaysia"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English", "Malay", "Chinese"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/sheers-software",
        "https://www.facebook.com/sheerssoftware"
      ],
      "foundingDate": "2020",
      "numberOfEmployees": "10-50",
      "industry": "Software Development",
      "serviceArea": {
        "@type": "Country",
        "name": "Malaysia"
      }
    }
  },
  
  inventoryIntegration: {
    title: "Restaurant Inventory Management System Malaysia - Real-Time Stock Tracking F&B",
    description: "Eliminate stockouts and overstocking with Malaysia's leading restaurant inventory management system. Real-time stock tracking, automated ordering, and multi-location inventory software. Save RM 25,000+ monthly. From RM 8,500 • 7 days setup.",
    keywords: "restaurant inventory management system Malaysia, real-time stock tracking F&B, automated restaurant ordering system, multi-location inventory software, POS inventory integration Malaysia, F&B inventory management, restaurant stock control software, food and beverage inventory solutions",
    canonicalUrl: "https://sheerssoft.com/inventory-integration",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Inventory Integration System",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Real-time inventory management system for F&B businesses. Eliminate stockouts and overstocking with automated ordering and multi-location sync.",
      "offers": {
        "@type": "Offer",
        "price": "8500",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Organization",
        "name": "Servora",
        "legalName": "Sheers Software Sdn. Bhd."
      },
      "featureList": [
        "Real-time inventory tracking",
        "Automated supplier ordering",
        "Multi-location synchronization",
        "Smart alerts and notifications"
      ]
    }
  },

  wasteLoggingAutomation: {
    title: "Food Waste Management Software Malaysia - Restaurant Waste Tracking System",
    description: "End food waste and boost profit margins with Malaysia's top food waste management software. Restaurant waste tracking system with F&B waste reduction automation. Save RM 18,000+ monthly. From RM 6,500 • 5 days setup.",
    keywords: "food waste management software Malaysia, restaurant waste tracking system, F&B waste reduction automation, food cost control software restaurant, waste logging app Malaysia, restaurant waste management, food waste tracking software, F&B waste analytics",
    canonicalUrl: "https://sheerssoft.com/waste-logging-automation",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Waste Logging Automation System",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Automated food waste tracking and reduction system for F&B businesses. Reduce waste by up to 40% and boost profit margins.",
      "offers": {
        "@type": "Offer",
        "price": "6500",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Organization",
        "name": "Servora",
        "legalName": "Sheers Software Sdn. Bhd."
      }
    }
  },

  supplierIntegration: {
    title: "Restaurant Supplier Management Software - F&B Procurement Automation Malaysia",
    description: "Optimize procurement and reduce costs with Malaysia's leading restaurant supplier management software. F&B procurement automation with automated supplier ordering system. Save RM 35,000+ monthly. From RM 12,500 • 10 days setup.",
    keywords: "restaurant supplier management software, F&B procurement automation Malaysia, automated supplier ordering system, restaurant vendor management platform, supply chain optimization F&B, supplier integration software, restaurant procurement system, F&B supplier automation",
    canonicalUrl: "https://sheerssoft.com/supplier-integration",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Supplier Integration System",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Comprehensive supplier management and procurement optimization system for F&B businesses.",
      "offers": {
        "@type": "Offer",
        "price": "12500",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Organization",
        "name": "Servora",
        "legalName": "Sheers Software Sdn. Bhd."
      }
    }
  },

  aiForecasting: {
    title: "AI Demand Forecasting Restaurant - F&B Sales Prediction Software Malaysia",
    description: "Predict demand and maximize sales with Malaysia's advanced AI demand forecasting restaurant system. F&B sales prediction software with machine learning restaurant analytics. Save RM 45,000+ monthly. From RM 18,500 • 14 days setup.",
    keywords: "AI demand forecasting restaurant, F&B sales prediction software, restaurant demand planning automation, machine learning restaurant analytics, predictive analytics F&B Malaysia, AI restaurant forecasting, F&B demand prediction software, restaurant sales optimization AI",
    canonicalUrl: "https://sheerssoft.com/ai-forecasting",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AI Forecasting System",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "AI-powered demand forecasting and sales optimization system for F&B businesses.",
      "offers": {
        "@type": "Offer",
        "price": "18500",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Organization",
        "name": "Servora",
        "legalName": "Sheers Software Sdn. Bhd."
      }
    }
  },

  complianceAutomation: {
    title: "Restaurant Compliance Management Software - F&B Regulatory Compliance Automation Malaysia",
    description: "Automate compliance and reduce risk with Malaysia's leading restaurant compliance management software. F&B regulatory compliance automation with food safety compliance software. Reduce costs by 60%. From RM 7,500 • 7 days setup.",
    keywords: "restaurant compliance management software, F&B regulatory compliance automation, food safety compliance software Malaysia, restaurant audit automation system, compliance tracking software F&B, restaurant regulatory software, F&B compliance automation, food safety management system Malaysia",
    canonicalUrl: "https://sheerssoft.com/compliance-automation",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Compliance Automation System",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Automated compliance management system for F&B businesses to ensure regulatory adherence and reduce risk.",
      "offers": {
        "@type": "Offer",
        "price": "7500",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Organization",
        "name": "Servora",
        "legalName": "Sheers Software Sdn. Bhd."
      }
    }
  },

  wasteWisePlatform: {
    title: "Template Platform + Professional Services | Complete F&B Management System Malaysia",
    description: "Transform your F&B operations with our template platform (Professional: RM 5K/month per 10 outlets, Enterprise: RM 10K/month per 10 outlets) + professional services for custom implementations. Complete integrated F&B management platform with all-in-one restaurant software.",
    keywords: "template platform, professional services, complete restaurant management system Malaysia, integrated F&B management platform, all-in-one restaurant software Malaysia, comprehensive F&B automation solution, enterprise restaurant management platform, restaurant management system Malaysia, F&B management software Malaysia, integrated restaurant solution",
    canonicalUrl: "https://sheerssoft.com/wastewise-platform",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Servora Template Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Complete F&B management platform with template solutions and professional services for custom implementations.",
      "offers": [
        {
          "@type": "Offer",
          "name": "Professional Plan",
          "price": "5000",
          "priceCurrency": "MYR",
          "availability": "https://schema.org/InStock",
          "description": "Per 10 outlets per month"
        },
        {
          "@type": "Offer",
          "name": "Enterprise Plan",
          "price": "10000",
          "priceCurrency": "MYR",
          "availability": "https://schema.org/InStock",
          "description": "Per 10 outlets per month"
        }
      ],
      "provider": {
        "@type": "Organization",
        "name": "Servora",
        "legalName": "Sheers Software Sdn. Bhd."
      }
    }
  },

  roiCalculator: {
    title: "ROI Calculator - Calculate Your F&B Savings Potential",
    description: "Discover how much money you could save with our F&B management solutions. Our ROI calculator shows you the potential savings from waste reduction, inventory optimization, and operational efficiency improvements.",
    keywords: "ROI calculator F&B, restaurant savings calculator, waste reduction ROI, inventory optimization savings, F&B cost savings calculator",
    canonicalUrl: "https://sheerssoft.com/roi-calculator",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website"
  },

  industryReports: {
    title: "Industry Reports - F&B Insights & Market Analysis",
    description: "Access comprehensive industry reports and market analysis for the Malaysian F&B sector. Stay informed about trends, challenges, and opportunities in the food and beverage industry.",
    keywords: "F&B industry reports Malaysia, restaurant market analysis, food industry insights, Malaysian F&B trends, restaurant industry research",
    canonicalUrl: "https://sheerssoft.com/industry-reports",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website"
  },

  implementationGuide: {
    title: "Implementation Guide - Get Started with F&B Automation",
    description: "Step-by-step guide to implementing F&B automation solutions. Learn how to transform your restaurant operations with our proven implementation methodology and best practices.",
    keywords: "F&B implementation guide, restaurant automation guide, implementation best practices, F&B transformation guide, restaurant setup guide",
    canonicalUrl: "https://sheerssoft.com/implementation-guide",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website"
  },

  supportCenter: {
    title: "Support Center - Get Help & Resources",
    description: "Access comprehensive support resources, documentation, and help for all Servora solutions. Get the assistance you need to maximize your F&B operations.",
    keywords: "F&B software support, restaurant software help, technical support, documentation, user guides, customer support",
    canonicalUrl: "https://sheerssoft.com/support-center",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website"
  },

  getStarted: {
    title: "Get Started - Begin Your F&B Transformation Journey",
    description: "Start your journey to F&B operational excellence. Get personalized recommendations, free consultations, and step-by-step guidance to transform your restaurant operations.",
    keywords: "get started F&B software, restaurant transformation, free consultation, F&B automation setup, restaurant improvement guide",
    canonicalUrl: "https://sheerssoft.com/get-started",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website"
  }
};

export const getSEOConfig = (pageKey: string): SEOConfig => {
  return pageSEO[pageKey] || defaultSEO;
};
