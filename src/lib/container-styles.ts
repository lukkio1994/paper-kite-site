import { ContainerSize, ContainerSpacing, ContainerBackground, ContainerVariant } from '@/types/container';

// Size mappings with professional proportions
export const containerSizes: Record<ContainerSize, string> = {
  xs: 'max-w-xs',      // 320px - Mobile widgets, small cards
  sm: 'max-w-sm',      // 384px - Compact forms, buttons
  md: 'max-w-md',      // 448px - Medium forms, modals
  lg: 'max-w-lg',      // 512px - Articles, blog posts
  xl: 'max-w-xl',      // 576px - Main content areas
  '2xl': 'max-w-2xl',  // 672px - Wide content, dashboards
  '3xl': 'max-w-3xl',  // 768px - Large layouts
  '4xl': 'max-w-4xl',  // 896px - Wide applications
  '5xl': 'max-w-5xl',  // 1024px - Full layouts
  '6xl': 'max-w-6xl',  // 1152px - Large screens
  '7xl': 'max-w-7xl',  // 1280px - Ultra wide layouts
  full: 'max-w-full',  // 100% - Fluid containers
  screen: 'max-w-screen-2xl' // Viewport constrained
};

// Spacing system with responsive breakpoints
export const containerSpacing: Record<ContainerSpacing, string> = {
  none: 'p-0',
  tight: 'px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4',
  compact: 'px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8',
  comfortable: 'px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12',
  loose: 'px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16',
  spacious: 'px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24'
};

// Background treatments for visual hierarchy
export const containerBackgrounds: Record<ContainerBackground, string> = {
  transparent: '',
  subtle: '',
  card: '',
  elevated: '',
  primary: '',
  secondary: ''
};

// Variant-specific styling for different use cases
export const containerVariants: Record<ContainerVariant, string> = {
  base: 'relative',
  section: 'relative w-full',
  content: 'relative prose-container',
  nav: 'relative z-40 backdrop-blur-sm',
  card: 'relative rounded-lg overflow-hidden',
  elevated: 'relative rounded-xl overflow-hidden'
};

// Professional micro-interactions and accessibility
export const containerBase = [
  'antialiased'
].join(' ');

// Centering utilities
export const containerCentering = {
  centered: 'mx-auto',
  fluid: 'w-full'
};

// Responsive utilities
export const containerResponsive = {
  mobile: 'w-full',
  desktop: 'mx-auto'
};
