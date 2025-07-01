/**
 * Home Page
 * 
 * Landing page for Paper Kite Games website.
 * Features a hero section with company branding and showcases the featured game
 * "This Is Not A Dungeon" - a comedic strategy base-defense game.
 * 
 * Sections:
 * - Hero: Main banner with branding and primary CTA
 * - Features: Brief highlights of what the studio offers
 * - Featured Game: Showcase of "This Is Not A Dungeon"
 * 
 * @page
 */

import Link from "next/link";
import { HeroSection } from "@/components/ui/HeroSection";
import { Button } from "@/components/ui/Button";

export default function Home() {
  // Paper Kite Games logo component
  const Logo = () => (
    <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
      <span className="text-white font-bold text-3xl">PK</span>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Paper Kite Games"
        subtitle="Crafting immersive gaming experiences that soar beyond imagination"
        description="We're an indie game development studio passionate about creating unique, engaging games that bring joy and challenge to players worldwide."
        primaryCta={{
          text: "Explore Our Games",
          href: "/games"
        }}
        secondaryCta={{
          text: "Learn About Us", 
          href: "/about"
        }}
        logo={<Logo />}
        backgroundVariant="gradient"
      />

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
            {/* Feature 1 - Innovative Gameplay */}
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

            {/* Feature 2 - Player-Focused */}
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

            {/* Feature 3 - Quality Craftsmanship */}
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

      {/* Featured Game Section - This Is Not A Dungeon */}
      <section className="py-20 bg-gradient-to-br from-dungeon-dark to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-dungeon-gold/20 text-dungeon-gold text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Featured Game
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              This Is Not A Dungeon
            </h2>
            <p className="text-xl text-purple-100">
              A comedic strategy base-defense game where you play as a weak dark mage
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              {/* Game Screenshot Placeholder */}
              <div className="md:flex-shrink-0">
                <div className="h-48 w-full md:w-64 bg-gradient-to-br from-dungeon-purple to-dungeon-gold flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <p className="font-semibold text-sm">Game Screenshot</p>
                    <p className="text-xs opacity-80">Coming Soon</p>
                  </div>
                </div>
              </div>
              
              {/* Game Description */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Defend Your &quot;Totally Not A Dungeon&quot;
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  You&apos;re a weak dark mage who definitely doesn&apos;t have a dungeon (wink wink). 
                  Defend your perfectly legitimate underground lair from heroes using cunning 
                  strategy, creative traps, and a healthy dose of humor.
                </p>
                
                <div className="space-y-3 mb-8">
                  {[
                    'Strategic tower defense with a comedic twist',
                    'Play as the "villain" for once',
                    'Unique magic system and trap combinations',
                    'Charming pixel art and witty dialogue'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-dungeon-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-dungeon-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/games">
                    <Button variant="primary" size="lg">
                      Learn More
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    Wishlist Soon
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
