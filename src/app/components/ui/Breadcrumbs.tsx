'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const defaultSeparator = (
  <svg
    className="w-4 h-4 text-muted"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  separator = defaultSeparator,
  className,
  ariaLabel = 'Breadcrumb'
}) => {
  return (
    <nav 
      aria-label={ariaLabel}
      className={cn('flex items-center space-x-2 text-sm', className)}
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = item.current || isLast;
          
          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 flex-shrink-0">
                  {separator}
                </span>
              )}
              
              {item.href && !isCurrent ? (
                <Link
                  href={item.href}
                  className={cn(
                    'font-medium transition-colors duration-200',
                    'text-muted hover:text-foreground',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    'font-medium',
                    isCurrent 
                      ? 'text-foreground' 
                      : 'text-muted'
                  )}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
