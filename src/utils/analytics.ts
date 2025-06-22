// Google Analytics tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
    });
  }
};

// Facebook Pixel tracking functions
export const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackFacebookCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

// Combined tracking for key events
export const trackBookingAttempt = (source: string) => {
  // Google Analytics
  trackEvent('booking_attempt', {
    event_category: 'engagement',
    event_label: source,
    value: 1
  });
  
  // Facebook Pixel
  trackFacebookEvent('InitiateCheckout', {
    content_name: 'IT Strategy Call',
    content_category: 'consultation',
    value: 2500, // Value of free audit
    currency: 'MYR'
  });
};

export const trackCalendlyOpen = (source: string) => {
  // Google Analytics
  trackEvent('calendly_modal_open', {
    event_category: 'engagement',
    event_label: source,
    value: 1
  });
  
  // Facebook Pixel
  trackFacebookCustomEvent('CalendlyModalOpen', {
    source: source,
    content_name: 'Free IT Audit Booking'
  });
};

export const trackSectionView = (sectionName: string) => {
  // Google Analytics
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
    value: 1
  });
  
  // Facebook Pixel
  trackFacebookCustomEvent('SectionView', {
    section_name: sectionName
  });
};

export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
  // Google Analytics
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: `${ctaLocation} - ${ctaText}`,
    value: 1
  });
  
  // Facebook Pixel
  trackFacebookCustomEvent('CTAClick', {
    cta_location: ctaLocation,
    cta_text: ctaText
  });
};

export const trackFormSubmission = (formType: string) => {
  // Google Analytics
  trackEvent('form_submit', {
    event_category: 'conversion',
    event_label: formType,
    value: 1
  });
  
  // Facebook Pixel
  trackFacebookEvent('Lead', {
    content_name: formType,
    value: 2500,
    currency: 'MYR'
  });
};

// Declare global types for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}