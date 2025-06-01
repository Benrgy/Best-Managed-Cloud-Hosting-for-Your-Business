
import { useEffect } from 'react';

export const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 setup
    const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 tracking ID
    
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    // Track page views for SPA
    const trackPageView = () => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    };

    // Listen for route changes
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function() {
      originalPushState.apply(history, arguments);
      setTimeout(trackPageView, 0);
    };

    history.replaceState = function() {
      originalReplaceState.apply(history, arguments);
      setTimeout(trackPageView, 0);
    };

    window.addEventListener('popstate', trackPageView);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', trackPageView);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  // Track affiliate link clicks
  useEffect(() => {
    const trackAffiliateClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a, button');
      
      if (link && (
        link.getAttribute('href')?.includes('cloudways.com') ||
        link.getAttribute('onclick')?.includes('cloudways.com')
      )) {
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'affiliate_click', {
            event_category: 'engagement',
            event_label: 'cloudways_affiliate',
            value: 1
          });
        }
      }
    };

    document.addEventListener('click', trackAffiliateClick);
    
    return () => {
      document.removeEventListener('click', trackAffiliateClick);
    };
  }, []);

  return null;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}
