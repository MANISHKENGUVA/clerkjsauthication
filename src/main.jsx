import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';

// Ensure you have the correct Clerk Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Render the app, wrapping it with the ClerkProvider for authentication context
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      fallbackRedirectUrl="/dashboard" 
      forceRedirectUrl="/dashboard" 
      afterSignOutUrl="/"
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
