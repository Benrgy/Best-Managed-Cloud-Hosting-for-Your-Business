
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error) => {
        // Don't retry on 404s
        if (error && 'status' in error && error.status === 404) {
          return false;
        }
        // Retry up to 2 times for other errors
        return failureCount < 2;
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
  },
});

const App = () => {
  useEffect(() => {
    // Handle GitHub Pages SPA redirects
    const isRedirected = window.sessionStorage.redirect;
    if (isRedirected) {
      delete window.sessionStorage.redirect;
      window.history.replaceState(null, '', isRedirected);
    }

    // Enhanced resource preloading
    const preloadResources = () => {
      const criticalResources = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.googletagmanager.com'
      ];

      criticalResources.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = url;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    preloadResources();

    // Enhanced performance monitoring
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        console.log('App initialized during idle time - optimal performance');
        
        // Report performance metrics
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'navigation') {
                const navEntry = entry as PerformanceNavigationTiming;
                console.log('Navigation timing:', {
                  domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
                  loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
                  firstPaint: navEntry.loadEventEnd - navEntry.fetchStart
                });
              }
            });
          });
          observer.observe({ entryTypes: ['navigation'] });
        }
      });
    }

    // Service worker registration for PWA capabilities
    if ('serviceWorker' in navigator && 'production' === process.env.NODE_ENV) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <PerformanceMonitor />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={lazy(() => import("./pages/BlogPost"))} />
                <Route path="/admin/blog" element={lazy(() => import("./pages/BlogAdmin"))} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
