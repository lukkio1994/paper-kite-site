/**
 * Games Page with Internationalization
 * 
 * Localized games showcase page demonstrating portfolio presentation
 * with proper i18n implementation.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from '@/lib/constants';

// Generate metadata with translated content
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  // Await params for Next.js 15 compatibility
  await params;
  const t = await getTranslations('games');
  
  return {
    title: `${t('pageTitle')} - ${CONTACT_INFO.company}`,
    description: t('pageDescription'),
  };
}

export default async function GamesPage() {
  const t = await getTranslations('games');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Game - This Is Not A Dungeon */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {t('featured.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('tiniad.title')}
            </h2>
            <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-2">
              {t('tiniad.tagline')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('tiniad.subtitle')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              {/* Game Image */}
              <div className="lg:flex-shrink-0">
                <div className="p-4">
                  <Image
                    src="/images/this-is-not-a-dungeon/tinad-hero.png"
                    alt={t('tiniad.imageAlt')}
                    width={400}
                    height={210}
                    priority
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Game Details */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('tiniad.description')}
                  </p>
                  
                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {t('tiniad.features.title')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t('tiniad.features.humor')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t('tiniad.features.strategy')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t('tiniad.features.characters')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t('tiniad.features.challenge')}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status and Platform */}
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                      {t('tiniad.status')}
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {t('tiniad.platform')}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      variant="primary" 
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <Link href="/contact">
                        {t('tiniad.cta')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Games Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('upcoming.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              {t('upcoming.description')}
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('upcoming.placeholder.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('upcoming.placeholder.description')}
              </p>
              <Button variant="outline">
                <Link href="/contact">
                  {t('upcoming.placeholder.cta')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
