
import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SEOWrapper } from "@/components/SEOWrapper";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

// Lazy load components for better performance
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogAdmin = lazy(() => import("./pages/BlogAdmin"));

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
    // Enhanced resource preloading for production
    const preloadResources = () => {
      const criticalResources = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
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

    // Production performance monitoring
    if (process.env.NODE_ENV === 'production') {
      // Monitor performance metrics
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            if (perfData) {
              console.log('Page Load Performance:', {
                dns: perfData.domainLookupEnd - perfData.domainLookupStart,
                connect: perfData.connectEnd - perfData.connectStart,
                response: perfData.responseEnd - perfData.requestStart,
                dom: perfData.domContentLoadedEventEnd - perfData.responseEnd,
                load: perfData.loadEventEnd - perfData.loadEventStart,
                total: perfData.loadEventEnd - perfData.fetchStart
              });
            }
          }, 0);
        });
      }
    }
  }, []);

  // Determine the basename for GitHub Pages
  const basename = process.env.NODE_ENV === 'production' ? '/Best-Managed-Cloud-Hosting-for-Your-Business' : '';

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
            <Toaster />
            <Sonner />
            <BrowserRouter basename={basename}>
              <SEOWrapper>
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen bg-white">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading CloudHost Pro...</p>
                    </div>
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/admin/blog" element={<BlogAdmin />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </SEOWrapper>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
