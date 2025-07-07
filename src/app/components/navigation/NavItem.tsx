'use client';

import React, { forwardRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'ghost' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  badge?: string | number;
}

const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ 
    className,
    href,
    children,
    variant = 'default',
    size = 'md',
    active,
    external = false,
    icon,
    badge,
    ...props 
  }, ref) => {
    const pathname = usePathname();
    
    // Auto-detect active state if not explicitly provided
    const isActive = active !== undefined ? active : pathname === href;
    
    const baseStyles = [
      'inline-flex items-center gap-2',
      'font-medium transition-all duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md',
      'disabled:opacity-50 disabled:cursor-not-allowed'
    ];

    const variants = {
      default: [
        'text-foreground hover:text-foreground',
        isActive && 'text-primary'
      ],
      ghost: [
        'text-foreground hover:text-foreground hover:bg-surface',
        'rounded-md px-3 py-2',
        isActive && 'bg-surface text-foreground'
      ],
      underline: [
        'text-foreground hover:text-foreground',
        'border-b-2 border-transparent hover:border-border',
        'pb-1',
        isActive && 'border-primary text-primary'
      ]
    };

    const sizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };

    const linkProps = {
      ref,
      className: cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      ),
      ...(isActive && { 'aria-current': 'page' as const }),
      ...props
    };

    const content = (
      <>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {badge && (
          <span className={cn(
            'inline-flex items-center justify-center',
            'px-2 py-0.5 text-xs font-medium rounded-full',
            'bg-surface text-muted'
          )}>
            {badge}
          </span>
        )}
        {external && (
          <svg
            className="w-3 h-3 flex-shrink-0"
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
      </>
    );

    // External links
    if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {content}
        </a>
      );
    }

    // Internal Next.js links
    return (
      <Link href={href} {...linkProps}>
        {content}
      </Link>
    );
  }
);

NavItem.displayName = 'NavItem';

export default NavItem;
