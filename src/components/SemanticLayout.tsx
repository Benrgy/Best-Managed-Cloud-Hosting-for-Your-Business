
import { ReactNode } from 'react';
import { Navigation } from './Navigation';

interface SemanticLayoutProps {
  children: ReactNode;
}

export const SemanticLayout = ({ children }: SemanticLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      
      <header role="banner">
        <Navigation />
      </header>

      <main id="main-content" role="main">
        {children}
      </main>
    </div>
  );
};
