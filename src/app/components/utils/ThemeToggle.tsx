'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import IconButton from '../ui/IconButton';

export interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'icon' | 'button';
  showLabel?: boolean;
  // Localization props
  lightModeLabel?: string;
  darkModeLabel?: string;
  systemModeLabel?: string;
  toggleThemeLabel?: string;
  loadingLabel?: string;
  switchToModeAriaLabel?: (mode: string) => string;
}

type Theme = 'light' | 'dark' | 'system';

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className,
  size = 'md',
  variant = 'icon',
  showLabel = false,
  lightModeLabel = 'Light mode',
  darkModeLabel = 'Dark mode',
  systemModeLabel = 'System mode',
  toggleThemeLabel = 'Toggle theme',
  loadingLabel = 'Loading theme toggle',
  switchToModeAriaLabel = (mode: string) => `Switch to ${mode} mode`
}) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    // Get initial theme from localStorage or data-theme attribute
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      // If no saved theme, check if data-theme is already set (from SSR/initial load)
      const currentDataTheme = document.documentElement.getAttribute('data-theme');
      if (currentDataTheme === 'dark') {
        setTheme('dark');
      } else if (currentDataTheme === 'light') {
        setTheme('light');
      } else {
        setTheme('system'); // Default to system
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    
    const applyTheme = (newTheme: Theme) => {
      // Remove existing theme attributes and classes
      root.removeAttribute('data-theme');
      
      if (newTheme === 'system') {
        // Use system preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const systemPrefersDark = mediaQuery.matches;
        
        // Debug logging to check if system preference is working
        console.log('System theme detection:', {
          systemPrefersDark,
          mediaQueryMatches: mediaQuery.matches,
          mediaQueryMedia: mediaQuery.media
        });
        
        if (systemPrefersDark) {
          root.setAttribute('data-theme', 'dark');
        } else {
          root.setAttribute('data-theme', 'light');
        }
        localStorage.removeItem('theme');
      } else if (newTheme === 'dark') {
        // Use dark theme
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', newTheme);
      } else {
        // Use light theme (default)
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', newTheme);
      }
    };

    applyTheme(theme);

    // Listen for system theme changes when using system theme
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        console.log('System theme changed:', e.matches ? 'dark' : 'light');
        applyTheme('system');
      };
      
      // Use the newer API if available, fallback to older one
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    if (!mounted) {
      // Return a neutral icon during SSR
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
        </svg>
      );
    }

    switch (theme) {
      case 'light':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        );
      case 'dark':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        );
      case 'system':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return lightModeLabel;
      case 'dark':
        return darkModeLabel;
      case 'system':
        return systemModeLabel;
      default:
        return toggleThemeLabel;
    }
  };

  if (!mounted) {
    // Return a placeholder during SSR
    return (
      <div className={cn('w-10 h-10', className)}>
        <span className="sr-only">{loadingLabel}</span>
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <IconButton
        variant="ghost"
        size={size}
        onClick={toggleTheme}
        aria-label={switchToModeAriaLabel(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light')}
        icon={getThemeIcon()}
        className={className}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'inline-flex items-center gap-2 px-3 py-2',
        'text-sm font-medium rounded-md',
        'text-foreground hover:text-foreground',
        'hover:bg-surface',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'transition-colors duration-200',
        className
      )}
      aria-label={getThemeLabel()}
    >
      {getThemeIcon()}
      {showLabel && <span>{getThemeLabel()}</span>}
    </button>
  );
};

export default ThemeToggle;
