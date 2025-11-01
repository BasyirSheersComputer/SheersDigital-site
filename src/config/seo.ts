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
  title: "Reduce Food Waste 30-40% in 60 Days | Save RM 15-25K Monthly | WasteWise Malaysia",
  description: "Stop losing RM 15,000-25,000 monthly to preventable waste. WasteWise helps Malaysian F&B businesses reduce food waste by 30-40% and increase profit margins by 10-15%. 30-day money-back guarantee. Start in 5 days.",
  keywords: "food waste reduction Malaysia, restaurant waste management, F&B waste tracking, reduce food waste, waste management system Malaysia, restaurant profit optimization, F&B cost savings, waste reduction software, Malaysian restaurant technology, food waste prevention",
  canonicalUrl: "https://sheerssoft.com",
  ogImage: "https://sheerssoft.com/og-image.jpg",
  ogType: "website"
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: "Reduce Food Waste 30-40% in 60 Days | Save RM 15-25K Monthly | WasteWise Malaysia",
    description: "Stop losing RM 15,000-25,000 monthly to preventable waste. WasteWise helps Malaysian F&B businesses reduce food waste by 30-40% and increase profit margins by 10-15%. 30-day money-back guarantee. Results in 60 days.",
    keywords: "food waste reduction Malaysia, restaurant waste management, F&B waste tracking, reduce food waste, waste management system Malaysia, restaurant profit optimization, F&B cost savings, waste reduction software, Malaysian restaurant technology, food waste prevention",
    canonicalUrl: "https://sheerssoft.com",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "WasteWise",
      "legalName": "Sheers Software Sdn. Bhd.",
      "url": "https://sheerssoft.com",
      "logo": "https://sheerssoft.com/logo.png",
      "description": "Reduce food waste by 30-40% in 60 days. WasteWise helps Malaysian F&B businesses save RM 15,000-25,000 monthly through smart waste management and inventory optimization. Professional, data-driven, results-guaranteed.",
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
    description: "Eliminate stockouts and overstocking with Malaysia's leading restaurant inventory management system. Real-time stock tracking, automated ordering, and multi-location inventory software. Save RM 20,000+ monthly. From RM 8,500 • 7 days setup.",
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
    title: "Reduce Food Waste 25-40% | Automated Waste Tracking | WasteWise Malaysia",
    description: "Track every item, reduce waste by 25-40%, save RM 15,000-25,000 monthly. Automated waste logging with AI insights. 30-day money-back guarantee. From RM 2,997/month.",
    keywords: "food waste management software Malaysia, restaurant waste tracking system, F&B waste reduction automation, food cost control software restaurant, waste logging app Malaysia, restaurant waste management, food waste tracking software, F&B waste analytics",
    canonicalUrl: "https://sheerssoft.com/waste-logging-automation",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "WasteWise Waste Logging",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Automated food waste tracking and reduction system for F&B businesses. Reduce waste by 25-40% in 60 days.",
      "offers": {
        "@type": "Offer",
        "price": "2997",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Organization",
        "name": "WasteWise",
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
    title: "Complete Waste Management Platform | 40-50% Reduction | WasteWise Malaysia",
    description: "Full digital transformation for F&B chains. Reduce waste by 40-50%, save RM 35,000-50,000 monthly, increase profit margins by 10-15%. All features included. From RM 5,997/month. 60-day savings guarantee.",
    keywords: "complete waste management platform, F&B digital transformation, restaurant management system Malaysia, integrated waste reduction, all-in-one F&B software Malaysia, comprehensive restaurant automation, enterprise waste management platform",
    canonicalUrl: "https://sheerssoft.com/wastewise-platform",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "WasteWise Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Complete F&B waste management and inventory optimization platform. 40-50% waste reduction, 10-15% profit margin increase.",
      "offers": [
        {
          "@type": "Offer",
          "name": "Growth System",
          "price": "5997",
          "priceCurrency": "MYR",
          "availability": "https://schema.org/InStock",
          "description": "Per month with 60-day savings guarantee"
        },
        {
          "@type": "Offer",
          "name": "Enterprise",
          "price": "Custom",
          "priceCurrency": "MYR",
          "availability": "https://schema.org/InStock",
          "description": "Custom pricing for large chains"
        }
      ],
      "provider": {
        "@type": "Organization",
        "name": "WasteWise",
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
