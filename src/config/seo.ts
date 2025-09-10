/**
 * SEO Configuration for Sheers Software Website
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
  title: "Sheers Software - Transform Your F&B Empire | Reclaim RM 45,000 Monthly",
  description: "Premium Malaysian F&B chains: Stop losing RM 45,000 monthly to operational chaos. Get enterprise solutions in 7 days. 250+ chains optimized. Free consultation available.",
  keywords: "F&B software Malaysia, restaurant management system, inventory management, food waste reduction, Malaysian restaurant technology, F&B automation, restaurant POS integration, supply chain optimization",
  canonicalUrl: "https://sheerssoft.com",
  ogImage: "https://sheerssoft.com/og-image.jpg",
  ogType: "website"
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    ...defaultSEO,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sheers Software Sdn Bhd",
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
    title: "Real-Time Inventory Management - Eliminate Stockouts & Overstocking",
    description: "Stop losing sales to stockouts and money to over-ordering. Our integrated inventory system gives you real-time visibility and automated ordering to optimize your supply chain. From RM 8,500 • 7 days setup.",
    keywords: "inventory management Malaysia, restaurant inventory system, stock management, automated ordering, F&B inventory software, real-time tracking, multi-location inventory",
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
        "name": "Sheers Software Sdn Bhd"
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
    title: "Waste Logging Automation - End Food Waste & Boost Profit Margins",
    description: "Automate food waste tracking and reduce losses by up to 40%. Our intelligent waste logging system helps you identify patterns, optimize portions, and maximize profit margins. From RM 6,500 • 5 days setup.",
    keywords: "food waste management Malaysia, restaurant waste tracking, waste reduction software, F&B waste automation, profit optimization, food cost control",
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
        "name": "Sheers Software Sdn Bhd"
      }
    }
  },

  supplierIntegration: {
    title: "Supplier Integration - Optimize Procurement & Reduce Costs",
    description: "Streamline your supplier relationships and reduce procurement costs by up to 25%. Our integrated supplier management system automates ordering, tracks performance, and optimizes pricing. From RM 12,500 • 10 days setup.",
    keywords: "supplier management Malaysia, procurement optimization, F&B supplier integration, cost reduction software, automated ordering, supplier performance tracking",
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
        "name": "Sheers Software Sdn Bhd"
      }
    }
  },

  aiForecasting: {
    title: "AI Forecasting - Predict Demand & Maximize Sales",
    description: "Leverage AI to predict customer demand and optimize your menu planning. Our intelligent forecasting system helps you reduce waste, increase sales, and improve customer satisfaction. From RM 18,500 • 14 days setup.",
    keywords: "AI forecasting Malaysia, demand prediction, restaurant AI, sales optimization, menu planning software, predictive analytics F&B",
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
        "name": "Sheers Software Sdn Bhd"
      }
    }
  },

  complianceAutomation: {
    title: "Compliance Automation - Automate Compliance & Reduce Risk",
    description: "Stay compliant with food safety regulations and reduce compliance costs by 60%. Our automated compliance system tracks certifications, manages documentation, and ensures regulatory adherence. From RM 7,500 • 7 days setup.",
    keywords: "food safety compliance Malaysia, restaurant compliance software, regulatory automation, food safety management, compliance tracking, risk reduction",
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
        "name": "Sheers Software Sdn Bhd"
      }
    }
  },

  wasteWisePlatform: {
    title: "WasteWise Platform - Complete F&B Management Solution",
    description: "The all-in-one platform that transforms your F&B operations. Integrate inventory, waste management, supplier relations, and AI forecasting in one powerful system. Starting from RM 25,000.",
    keywords: "WasteWise platform, complete F&B management, restaurant management system, integrated F&B software, comprehensive restaurant solution",
    canonicalUrl: "https://sheerssoft.com/wastewise-platform",
    ogImage: "https://sheerssoft.com/og-image.jpg",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "WasteWise Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Complete F&B management platform integrating inventory, waste management, supplier relations, and AI forecasting.",
      "offers": {
        "@type": "Offer",
        "price": "25000",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Organization",
        "name": "Sheers Software Sdn Bhd"
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
    description: "Access comprehensive support resources, documentation, and help for all Sheers Software solutions. Get the assistance you need to maximize your F&B operations.",
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
