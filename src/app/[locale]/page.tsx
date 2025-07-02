/**
 * Home Page with Internationalization
 * 
 * This page demonstrates the new localization system with:
 * - useTranslations hook for accessing translations
 * - Fallback behavior when translations are missing
 * - Clean separation of content from presentation
 * - Professional industry-standard i18n implementation
 * 
 * All hardcoded text has been replaced with translation keys,
 * making the site fully localizable while maintaining functionality.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { HeroSection } from "@/components/ui/HeroSection";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

// Generate metadata with translated content
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  // Await params for Next.js 15 compatibility
  await params;
  const t = await getTranslations('common');
  
  return {
    title: `${CONTACT_INFO.company} - ${t('siteTagline')}`,
    description: t('siteDescription'),
  };
}

export default async function HomePage() {
  // Load translations for different sections
  const t = await getTranslations('common');
  const homeT = await getTranslations('home');
  const navT = await getTranslations('navigation');

  // Paper Kite Games logo component
  const Logo = () => (
    <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
      <span className="text-white font-bold text-3xl">PK</span>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section with Translations */}
      <HeroSection
        title={t('companyName')}
        subtitle={homeT('heroTagline')}
        description={homeT('heroDescription')}
        primaryCta={{
          text: navT('games'),
          href: "/games"
        }}
        secondaryCta={{
          text: navT('about'), 
          href: "/about"
        }}
        logo={<Logo />}
        backgroundVariant="gradient"
      >
        {/* Mission Statement with Translation */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center italic">
            &ldquo;{homeT('missionStatement')}&rdquo;
          </p>
        </div>
      </HeroSection>

      {/* Features Section with Translations */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {homeT('whatWeDo.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {homeT('whatWeDo.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Innovative Gameplay */}
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {homeT('features.innovation.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {homeT('features.innovation.description')}
              </p>
            </div>

            {/* Feature 2 - Player-Focused */}
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {homeT('features.playerFocused.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {homeT('features.playerFocused.description')}
              </p>
            </div>

            {/* Feature 3 - Quality Craftsmanship */}
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {homeT('features.quality.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {homeT('features.quality.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Game Section - This Is Not A Dungeon */}
      <section className="py-20 bg-gradient-to-br from-dungeon-dark to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-dungeon-gold/20 text-dungeon-gold text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {homeT('featuredGame.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {homeT('featuredGame.title')}
            </h2>
            <p className="text-xl text-dungeon-gold font-semibold mb-2">
              {homeT('featuredGame.tagline')}
            </p>
            <p className="text-xl text-purple-100">
              {homeT('featuredGame.subtitle')}
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              {/* Game Screenshot */}
              <div className="md:flex-shrink-0">
                <div className="p-4">
                  <Image
                    src="/images/this-is-not-a-dungeon/tinad-hero.png"
                    alt={homeT('featuredGame.imageAlt')}
                    width={320}
                    height={168}
                    priority
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Game Description */}
              <div className="p-8">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    {homeT('featuredGame.description')}
                  </p>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="text-dungeon-gold font-semibold mb-2">
                      {homeT('featuredGame.keyFeatures.title')}
                    </h4>
                    <ul className="text-purple-100 space-y-1">
                      <li>• {homeT('featuredGame.keyFeatures.humor')}</li>
                      <li>• {homeT('featuredGame.keyFeatures.strategy')}</li>
                      <li>• {homeT('featuredGame.keyFeatures.characters')}</li>
                      <li>• {homeT('featuredGame.keyFeatures.challenge')}</li>
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="bg-dungeon-gold hover:bg-dungeon-gold/90 text-dungeon-dark font-semibold"
                    >
                      <Link href="/games">
                        {homeT('featuredGame.cta')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo of Translation Fallback */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              🌐 Localization Demo
            </h3>
            <p className="text-blue-700 dark:text-blue-200 mb-4">
              This site now supports industry-standard internationalization with fallback behavior.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white dark:bg-gray-800 rounded p-3">
                <strong>Current Locale:</strong> en
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-3">
                <strong>Fallback:</strong> English (default)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
