/**
 * Theme Detection Script
 * 
 * CRITICAL: This script must run BEFORE React hydration to prevent hydration mismatches.
 * 
 * Purpose:
 * - Detects user's system theme preference (light/dark mode)
 * - Sets data-theme attribute on <html> element immediately
 * - Listens for system theme changes and updates live
 * - Prevents flash of incorrect theme on page load
 * 
 * Requirements:
 * - Must be included in <head> as blocking script (NOT async/defer)
 * - Must run before any React components render
 * - HTML element must have suppressHydrationWarning={true}
 * - Do NOT modify this script without testing hydration thoroughly
 */

(function() {
  'use strict';
  
  /**
   * Sets the theme based on system preference
   * Adds data-theme="dark" for dark mode, removes for light mode
   */
  function setTheme() {
    try {
      // Check if user prefers dark mode
      var isDark = window.matchMedia && 
                   window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    } catch (error) {
      // Silently fail if matchMedia not supported
      console.warn('Theme detection failed:', error);
    }
  }
  
  // Set initial theme immediately to prevent flash
  setTheme();
  
  // Listen for system theme changes and update live
  if (window.matchMedia) {
    try {
      window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', setTheme);
    } catch (error) {
      // Fallback for older browsers
      console.warn('Theme change listener failed:', error);
    }
  }
})();
