import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { getLocale } from 'next-intl/server'; // Localization integration
import { ErrorBoundary } from "./components/utils/ErrorBoundary"; // Enhanced error handling
import Analytics from "./components/utils/Analytics"; // Enhanced analytics

import "@/styles/globals.css"; // Global Tailwind + resets

// Base SEO metadata - page-specific SEO should be handled in individual pages
export const metadata: Metadata = {
  title: {
    template: '%s | My Next.js App',
    default: 'My Next.js App',
  },
  description: "Clean, scalable Next.js + Tailwind baseline for UI/UX-friendly sites",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yourproductiondomain.com"),
  openGraph: {
    type: 'website',
    siteName: 'My Next.js App',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Next.js App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Responsive viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale(); // Get user's locale

  return (
    <html 
      lang={locale} 
      className="scroll-smooth" 
      suppressHydrationWarning={true} // REQUIRED: Prevents theme hydration mismatch
    >
      <head>
        {/* 
          CRITICAL THEME SCRIPT - DO NOT MODIFY OR MOVE
          
          Requirements:
          1. Must be FIRST script in <head>
          2. Must be blocking (no async/defer) 
          3. Must run before React hydration
          4. suppressHydrationWarning={true} must remain on <html>
          
          Purpose: Prevents theme flash and hydration mismatches
          Source: This script is maintained in /public/theme-script.js
          
          ⚠️  MAINTENANCE NOTE:
          - Any changes to this script must also be updated in /public/theme-script.js
          - Test hydration thoroughly after any modifications
          - Keep both versions in sync
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                'use strict';
                
                function setTheme() {
                  try {
                    var isDark = window.matchMedia && 
                                 window.matchMedia('(prefers-color-scheme: dark)').matches;
                    
                    if (isDark) {
                      document.documentElement.setAttribute('data-theme', 'dark');
                    } else {
                      document.documentElement.removeAttribute('data-theme');
                    }
                  } catch (error) {
                    console.warn('Theme detection failed:', error);
                  }
                }
                
                // Set initial theme immediately to prevent flash
                setTheme();
                
                // Listen for system theme changes and update live
                if (window.matchMedia) {
                  try {
                    window.matchMedia('(prefers-color-scheme: dark)')
                          .addEventListener('change', setTheme);
                  } catch (error) {
                    console.warn('Theme change listener failed:', error);
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`
          min-h-screen
          bg-white text-neutral-900
          dark:bg-neutral-900 dark:text-neutral-100
          antialiased
          selection:bg-blue-200 selection:text-blue-900
          dark:selection:bg-blue-600 dark:selection:text-blue-100
          flex flex-col
          transition-colors duration-300
        `}
      >

        <main className="flex-1 w-full">
          <ErrorBoundary 
            errorTitle="Something went wrong"
            errorMessage="An unexpected error occurred. Please try again or contact support if the problem persists."
            retryButtonText="Try again"
          >
            {children}
          </ErrorBoundary>
        </main>

        {/* Enhanced Analytics with privacy compliance */}
        <Analytics 
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"}
          gtagConfig={{
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          }}
          enableGoogleAnalytics={process.env.NODE_ENV === 'production'}
          enableCustomTracking={false}
        />
      </body>
    </html>
  );
}
