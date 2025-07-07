'use client';

import React from 'react';

export interface IconProps {
  className?: string;
  'aria-hidden'?: boolean;
}

/**
 * Hamburger menu icon
 */
export const HamburgerIcon: React.FC<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

/**
 * Close/X icon
 */
export const CloseIcon: React.FC<IconProps> = ({ className = "w-6 h-6", ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/**
 * Chevron down icon for dropdowns
 */
export const ChevronDownIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

/**
 * External link icon
 */
export const ExternalLinkIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

/**
 * Download icon for file links
 */
export const DownloadIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

/**
 * Arrow up icon for back to top
 */
export const ArrowUpIcon: React.FC<IconProps> = ({ className = "w-5 h-5", ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

/**
 * Location/map pin icon for addresses
 */
export const LocationIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

/**
 * Phone icon for phone numbers
 */
export const PhoneIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

/**
 * Email icon for email addresses
 */
export const EmailIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0v4m8-4v4" />
  </svg>
);

// Animated hamburger component that transforms into an X
export interface AnimatedHamburgerProps extends IconProps {
  isOpen: boolean;
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({ 
  isOpen, 
  className = "w-6 h-6", 
  ...props 
}) => (
  <div className={className} {...props}>
    <span
      className={`absolute top-2 left-0 w-6 h-0.5 bg-current transform transition-all duration-200 ${
        isOpen ? 'rotate-45 translate-y-1' : ''
      }`}
    />
    <span
      className={`absolute top-3.5 left-0 w-6 h-0.5 bg-current transition-opacity duration-200 ${
        isOpen ? 'opacity-0' : ''
      }`}
    />
    <span
      className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-200 ${
        isOpen ? '-rotate-45 -translate-y-1' : ''
      }`}
    />
  </div>
);
