'use client';

import React, { forwardRef } from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'default' | 'primary' | 'muted' | 'destructive';
  underline?: 'none' | 'hover' | 'always';
  external?: boolean;
  children: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className,
    href,
    variant = 'default',
    underline = 'hover',
    external = false,
    children,
    ...props 
  }, ref) => {
    const baseStyles = [
      'transition-colors duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-sm'
    ];

    const variants = {
      default: [
        'text-primary hover:text-primary-dark'
      ],
      primary: [
        'text-primary hover:text-primary-dark'
      ],
      muted: [
        'text-muted hover:text-foreground'
      ],
      destructive: [
        'text-error hover:text-error-dark'
      ]
    };

    const underlineStyles = {
      none: '',
      hover: 'hover:underline',
      always: 'underline'
    };

    const linkProps = {
      ref,
      className: cn(
        baseStyles,
        variants[variant],
        underlineStyles[underline],
        className
      ),
      ...props
    };

    // External links
    if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {children}
          {external && (
            <svg
              className="inline ml-1 w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </a>
      );
    }

    // Internal Next.js links
    return (
      <NextLink href={href} {...linkProps}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
