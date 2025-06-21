
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Starting React app...');

// Enhanced error handling for production
const handleError = (error: Error, errorInfo?: any) => {
  console.error('Application Error:', error);
  if (errorInfo) {
    console.error('Error Info:', errorInfo);
  }
  
  // In production, you might want to send errors to a logging service
  if (process.env.NODE_ENV === 'production') {
    // Example: sendToErrorReporting(error, errorInfo);
  }
};

// Global error handler
window.addEventListener('error', (event) => {
  handleError(new Error(event.message), {
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  });
});

window.addEventListener('unhandledrejection', (event) => {
  handleError(new Error('Unhandled Promise Rejection: ' + event.reason));
});

// Ensure the root element exists before attempting to render
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('Root element not found!');
  throw new Error('Failed to find the root element');
}

console.log('Root element found, initializing React...');

// Remove loading fallback once React takes over
const loadingFallback = document.getElementById('loading-fallback');
if (loadingFallback) {
  loadingFallback.style.display = 'none';
}

try {
  console.log('Creating React root...');
  createRoot(rootElement).render(<App />);
  console.log('React app rendered successfully!');
} catch (error) {
  console.error('Failed to render React app:', error);
  handleError(error as Error);
  
  // Fallback UI if React fails to render
  rootElement.innerHTML = `
    <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
      <h1>Application Error</h1>
      <p>Sorry, something went wrong. Please refresh the page or try again later.</p>
      <button onclick="window.location.reload()" style="padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Refresh Page
      </button>
    </div>
  `;
}
