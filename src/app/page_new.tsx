/**
 * Home Page
 * 
 * Landing page for Paper Kite Games website.
 * Features a hero section with logo, tagline, and call-to-action.
 * 
 * Sections:
 * - Hero: Main banner with branding and primary CTA
 * - Features: Brief highlights of what the studio offers
 * - Recent Games: Showcase of latest games (placeholder)
 */

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo Placeholder */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-3xl">PK</span>
              </div>
            </div>
            
            {/* Tagline */}
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Paper Kite Games
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Crafting immersive gaming experiences that soar beyond imagination
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/games"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Our Games
              </Link>
              <Link
                href="/about"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We&apos;re passionate about creating games that bring joy, challenge, and wonder to players around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Innovative Gameplay
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We push the boundaries of traditional gaming with fresh mechanics and creative storytelling.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Player-Focused
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every design decision is made with our players in mind, ensuring enjoyable and accessible experiences.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Quality Craftsmanship
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We take pride in polished, well-crafted games that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Game Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Latest Creation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our newest gaming adventure
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              {/* Game Screenshot Placeholder */}
              <div className="md:flex-shrink-0">
                <div className="h-48 w-full md:w-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <span className="text-white font-semibold">Aera Screenshot</span>
                </div>
              </div>
              
              {/* Game Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Aera
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An atmospheric adventure game that takes you on a journey through mystical landscapes filled with ancient secrets and challenging puzzles.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/games"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 text-center"
                  >
                    Learn More
                  </Link>
                  <a
                    href="#"
                    className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 text-center"
                  >
                    Wishlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
