
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
        page_location: window.location.href,
        custom_map: {'dimension1': 'user_type'},
        enhanced_conversions: true
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

    // Enhanced conversion tracking
    const trackConversion = (conversionType: string, value?: number) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          event_category: 'conversion',
          event_label: conversionType,
          value: value || 1,
          currency: 'USD'
        });
      }
    };

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: `${scrollPercent}%`,
            value: scrollPercent
          });
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', trackPageView);
      window.removeEventListener('scroll', trackScrollDepth);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  // Track affiliate link clicks and conversions
  useEffect(() => {
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a, button');
      
      if (link) {
        const href = link.getAttribute('href');
        const onclick = link.getAttribute('onclick');
        
        // Track affiliate clicks
        if (href?.includes('cloudways.com') || onclick?.includes('cloudways.com')) {
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'affiliate_click', {
              event_category: 'conversion',
              event_label: 'cloudways_cta',
              value: 1
            });
          }
        }

        // Track email signups
        if (link.textContent?.toLowerCase().includes('subscribe') || 
            link.textContent?.toLowerCase().includes('newsletter')) {
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'email_signup_intent', {
              event_category: 'engagement',
              event_label: 'newsletter',
              value: 1
            });
          }
        }

        // Track trial signups
        if (link.textContent?.toLowerCase().includes('trial') || 
            link.textContent?.toLowerCase().includes('free')) {
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'trial_signup_intent', {
              event_category: 'conversion',
              event_label: 'free_trial',
              value: 10
            });
          }
        }
      }
    };

    document.addEventListener('click', trackInteraction);
    
    return () => {
      document.removeEventListener('click', trackInteraction);
    };
  }, []);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 30 && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'time_on_page', {
          event_category: 'engagement',
          event_label: 'quality_visitor',
          value: timeSpent
        });
      }
    };

    // Track when user leaves page
    window.addEventListener('beforeunload', trackTimeOnPage);
    
    return () => {
      window.removeEventListener('beforeunload', trackTimeOnPage);
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
