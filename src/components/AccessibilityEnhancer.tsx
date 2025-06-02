
import { useEffect } from 'react';

export const AccessibilityEnhancer = () => {
  useEffect(() => {
    // Add skip navigation link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg';
      skipLink.style.cssText = `
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.cssText = `
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 9999;
          padding: 0.5rem 1rem;
          background-color: #2563eb;
          color: white;
          border-radius: 0.375rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          text-decoration: none;
          font-weight: 500;
        `;
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.cssText = `
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        `;
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add main content landmark
    const addMainLandmark = () => {
      const main = document.querySelector('main');
      if (!main) {
        const body = document.body;
        const mainElement = document.createElement('main');
        mainElement.id = 'main-content';
        mainElement.setAttribute('role', 'main');
        
        // Move all body content into main
        while (body.firstChild && body.firstChild !== mainElement) {
          mainElement.appendChild(body.firstChild);
        }
        
        body.appendChild(mainElement);
      } else {
        main.id = 'main-content';
        main.setAttribute('role', 'main');
      }
    };

    // Enhance focus management
    const enhanceFocus = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #2563eb !important;
          outline-offset: 2px !important;
        }
        
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible {
          outline: 2px solid #2563eb !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1) !important;
        }
        
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const enhanceAriaLabels = () => {
      // Add aria-labels to buttons without text
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button) => {
        const icon = button.querySelector('svg');
        const text = button.textContent?.trim();
        
        if (!text && icon) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add aria-labels to links without text
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link) => {
        const text = link.textContent?.trim();
        const href = link.getAttribute('href');
        
        if (!text && href) {
          link.setAttribute('aria-label', `Link to ${href}`);
        }
      });

      // Ensure images have alt text
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img) => {
        img.setAttribute('alt', 'Image');
      });
    };

    // Add keyboard navigation for custom components
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (event) => {
        // Handle Escape key for modal/popup closures
        if (event.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.closest('[role="dialog"]')) {
            const closeButton = activeElement.closest('[role="dialog"]')?.querySelector('[aria-label*="close"], .close-button') as HTMLElement;
            closeButton?.click();
          }
        }

        // Handle Enter key for custom interactive elements
        if (event.key === 'Enter') {
          const target = event.target as HTMLElement;
          if (target.getAttribute('role') === 'button' && !target.disabled) {
            target.click();
          }
        }
      });
    };

    // Announce dynamic content changes
    const createLiveRegion = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      // Function to announce messages
      (window as any).announceToScreenReader = (message: string) => {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      };
    };

    // Initialize all accessibility enhancements
    addSkipLink();
    addMainLandmark();
    enhanceFocus();
    enhanceAriaLabels();
    addKeyboardNavigation();
    createLiveRegion();

    // Re-run aria enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};
