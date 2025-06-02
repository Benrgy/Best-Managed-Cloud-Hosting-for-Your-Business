
import { useState, useRef, useEffect, useCallback } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  loading = 'lazy',
  fallbackSrc = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23374151'%3EImage%3C/text%3E%3C/svg%3E",
  onLoad,
  onError
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [currentSrc, setCurrentSrc] = useState(loading === 'eager' ? src : '');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer setup
  useEffect(() => {
    if (loading === 'eager' || isInView) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '50px 0px'
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loading, isInView]);

  // Update src when in view
  useEffect(() => {
    if (isInView && !currentSrc && !hasError) {
      setCurrentSrc(src);
    }
  }, [isInView, src, currentSrc, hasError]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    console.warn(`Failed to load image: ${src}`);
    setHasError(true);
    setCurrentSrc(fallbackSrc);
    onError?.();
  }, [src, fallbackSrc, onError]);

  // Preload image for better UX
  useEffect(() => {
    if (currentSrc && currentSrc !== fallbackSrc) {
      const preloadImg = new Image();
      preloadImg.onload = handleLoad;
      preloadImg.onerror = handleError;
      preloadImg.src = currentSrc;
    }
  }, [currentSrc, fallbackSrc, handleLoad, handleError]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded flex items-center justify-center"
          style={{ width, height }}
          aria-label="Loading image..."
        >
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        ref={imgRef}
        src={currentSrc || fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'filter grayscale' : ''} w-full h-full object-cover`}
        style={{ 
          aspectRatio: width && height ? `${width}/${height}` : undefined 
        }}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
};
