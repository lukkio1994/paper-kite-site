/**
 * Contact Page with Internationalization
 * 
 * Localized contact page providing company contact information
 * and demonstrating professional i18n implementation.
 */

import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import { CONTACT_INFO } from '@/lib/constants';

// Generate metadata with translated content
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  // Await params for Next.js 15 compatibility
  await params;
  const t = await getTranslations('contact');
  
  return {
    title: `${t('pageTitle')} - ${CONTACT_INFO.company}`,
    description: t('pageDescription'),
  };
}

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {t('info.title')}
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {t('info.email.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {t('info.email.description')}
                    </p>
                    <a 
                      href={CONTACT_INFO.emailMailto}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Business Inquiries */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8zM12 11h0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {t('info.business.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('info.business.description')}
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {t('info.response.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('info.response.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {t('form.title')}
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">📬</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t('form.placeholder.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('form.placeholder.description')}
                </p>
                <a 
                  href={CONTACT_INFO.emailMailto}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  {t('form.placeholder.cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('faq.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('faq.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FAQ 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t('faq.items.gameUpdates.question')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('faq.items.gameUpdates.answer')}
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t('faq.items.collaboration.question')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('faq.items.collaboration.answer')}
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t('faq.items.support.question')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('faq.items.support.answer')}
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t('faq.items.press.question')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('faq.items.press.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
