import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_INFO, BRAND_CONTENT } from "@/lib/constants";
import { LOCALES, type Locale } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${CONTACT_INFO.company} - ${BRAND_CONTENT.tagline}`,
  description: `${BRAND_CONTENT.subline} Indie game development studio creating simple, joyful gaming experiences.`,
  /**
   * Official Paper Kite Games favicon and touch icon package.
   * These icons ensure branding consistency across devices and platforms.
   */
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/paper_kite_favicon_512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: '#6BAF92'
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

/**
 * Root Layout with Internationalization Support
 * 
 * This layout provides:
 * - Locale validation and 404 for unsupported locales
 * - Translation message loading for the current locale
 * - NextIntlClientProvider for client-side translation access
 * - Proper HTML lang attribute for accessibility
 */
export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  // Await params before accessing properties (Next.js 15 requirement)
  const { locale } = await params;
  
  // Validate that the incoming locale is supported
  const isValidLocale = LOCALES.includes(locale as Locale);
  
  if (!isValidLocale) {
    notFound();
  }

  // Load translation messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Provide translations to client components */}
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
