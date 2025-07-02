/**
 * About Page with Internationalization
 * 
 * Localized about page showcasing company information, mission, and values.
 * Uses the TeamMemberList component to dynamically render team members from JSON.
 */

import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import TeamMemberList from '@/components/TeamMemberList';
import { CONTACT_INFO } from '@/lib/constants';

// Generate metadata with translated content
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  // Await params for Next.js 15 compatibility
  await params;
  const t = await getTranslations('about');
  
  return {
    title: `${t('pageTitle')} - ${CONTACT_INFO.company}`,
    description: t('pageDescription'),
  };
}

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
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

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('mission.title')}
            </h2>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
              {t('mission.statement')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              {t('mission.description')}
            </p>
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
              {t('mission.tagline')}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('values.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('values.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 - Creativity */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🎨</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('values.creativity.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('values.creativity.description')}
              </p>
            </div>

            {/* Value 2 - Quality */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⭐</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('values.quality.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('values.quality.description')}
              </p>
            </div>

            {/* Value 3 - Community */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('values.community.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('values.community.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('team.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('team.description')}
            </p>
          </div>
          
          <TeamMemberList />
        </div>
      </section>
    </div>
  );
}
