import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { getLocale } from 'next-intl/server';
import { ErrorBoundary } from "./components/utils/ErrorBoundary";
import Analytics from "./components/utils/Analytics";

import { Bungee, Rubik } from 'next/font/google';

const bungee = Bungee({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | Paper Kite Games',
    default: 'Paper Kite Games',
  },
  description: "Clean, scalable Next.js + Tailwind baseline for UI/UX-friendly sites",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yourproductiondomain.com"),
  openGraph: {
    type: 'website',
    siteName: 'Paper Kite',
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
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${bungee.variable} ${rubik.variable}`}
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
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
                setTheme();
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

        <Analytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"}
          gtagConfig={{
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
          }}
          enableGoogleAnalytics={process.env.NODE_ENV === 'production'}
          enableCustomTracking={false}
        />
      </body>
    </html>
  );
}
