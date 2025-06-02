
import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    const observePerformance = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
          });
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

          // First Input Delay (FID)
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              // Cast to PerformanceEventTiming for FID measurements
              const eventEntry = entry as any;
              if (eventEntry.processingStart) {
                console.log('FID:', eventEntry.processingStart - eventEntry.startTime);
              }
            });
          });
          fidObserver.observe({ type: 'first-input', buffered: true });

          // Cumulative Layout Shift (CLS)
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              // Cast to layout shift entry type
              const layoutEntry = entry as any;
              if (layoutEntry.hadRecentInput !== undefined && !layoutEntry.hadRecentInput) {
                console.log('CLS:', layoutEntry.value);
              }
            });
          });
          clsObserver.observe({ type: 'layout-shift', buffered: true });
        } catch (error) {
          console.log('Performance Observer not fully supported');
        }
      }

      // Page load performance
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
          const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
          const totalLoadTime = perfData.loadEventEnd - perfData.fetchStart;
          
          console.log('Page Load Metrics:', {
            loadTime,
            domContentLoaded,
            totalLoadTime
          });
        }, 0);
      });
    };

    observePerformance();
  }, []);

  return null;
};
