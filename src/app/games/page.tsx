/**
 * Games Page
 * 
 * Games showcase page for Paper Kite Games website.
 * Displays current games with screenshots and descriptions.
 * 
 * Sections:
 * - Hero: Games overview
 * - Featured Game: Detailed showcase of "This Is Not A Dungeon"
 * - Development Progress: Current game development status
 * - Newsletter: Stay updated with development news
 */

import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT_INFO, BRAND_CONTENT, TINIAD_CONTENT } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Games - ${CONTACT_INFO.company}`,
  description: `Explore games by ${CONTACT_INFO.company}. ${BRAND_CONTENT.tagline} Discover our comedic base-defense strategy games for PC (Steam, itch.io) including single-player experiences.`,
};

export default function Games() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Games
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our collection of immersive gaming experiences, each crafted 
              with passion and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Game - This Is Not A Dungeon */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Featured Game
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              This Is Not A Dungeon
            </h2>
            <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mt-2">
              {TINIAD_CONTENT.microTagline}
            </p>
          </div>

          {/* Hero Image - Temporary placeholder art, to be replaced with final marketing art before public marketing */}
          <div className="mb-12">
            <Image
              src="/images/this-is-not-a-dungeon/tinad-hero.png"
              alt="Promotional artwork for This Is Not A Dungeon showing a grumpy wizard, quirky heroes, and minions"
              width={1200}
              height={630}
              priority
              className="mx-auto rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Game Screenshots - Additional media */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-2xl h-80 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-semibold">Gameplay Screenshots</p>
                  <p className="text-sm opacity-80">Coming Soon</p>
                </div>
              </div>
            </div>
            
            {/* Game Description */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                A Comedic Base-Defense Strategy Game
              </h3>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 mb-6">
                <p>
                  {TINIAD_CONTENT.descriptionPart1}
                </p>
                <p>
                  {TINIAD_CONTENT.descriptionPart2}
                </p>
              </div>
              
              {/* Official Launch Key Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features</h4>
                <ul className="space-y-4">
                  {TINIAD_CONTENT.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm" aria-label={`${feature.title} icon`}>
                          {feature.emoji}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {feature.title}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 ml-2">
                          – {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  Wishlist on Steam
                </a>
                <a
                  href="#"
                  className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900"
                >
                  Watch Trailer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Development Status */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Development Progress
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Track the progress of This Is Not A Dungeon&apos;s development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pre-Production</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Completed</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 border-2 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Production</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">In Progress - 65%</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Release</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Q3 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-purple-600 dark:bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the latest news about This Is Not A Dungeon development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
