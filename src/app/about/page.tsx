/**
 * About Page
 * 
 * About page for Paper Kite Games website.
 * Contains company information, mission, and team details.
 * 
 * Sections:
 * - Hero: Introduction to the company
 * - Mission: Official Paper Kite Games mission statement
 * - Values: Company values and principles
 * - Team: Team member profiles (placeholder)
 * - History: Company timeline (placeholder)
 * 
 * Mission Statement: Uses the official mission statement from constants.ts
 * To update the mission statement, edit MISSION_STATEMENT in src/lib/constants.ts
 */

import type { Metadata } from "next";
import { CONTACT_INFO, BRAND_CONTENT } from '@/lib/constants';

export const metadata: Metadata = {
  title: `About - ${CONTACT_INFO.company}`,
  description: `Learn about ${CONTACT_INFO.company}. ${BRAND_CONTENT.tagline} ${BRAND_CONTENT.subline}`,
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Paper Kite Games
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are an indie game development studio passionate about creating unique, 
              immersive gaming experiences that captivate and inspire players worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {BRAND_CONTENT.missionStatement}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8 h-64 flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300 font-semibold">
                Mission Image Placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly push boundaries and explore new ideas to create unique gaming experiences.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Passion
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our love for gaming drives us to create experiences that we would want to play ourselves.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We value our players and actively engage with the gaming community for feedback and collaboration.
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The creative minds behind Paper Kite Games
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                John Doe
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Game Designer & Founder</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Passionate about creating innovative gameplay mechanics and compelling narratives.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Jane Smith
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Lead Developer</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Expert in game engine development and technical implementation of creative visions.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Alex Brown
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Art Director</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Creates beautiful visual worlds that bring our game concepts to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Follow our development process and be part of the Paper Kite Games community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Follow Our Blog
            </a>
            <a
              href="#"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
