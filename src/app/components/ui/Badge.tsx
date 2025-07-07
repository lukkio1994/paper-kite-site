'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  children: React.ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    className,
    variant = 'default',
    size = 'md',
    dot = false,
    children,
    ...props 
  }, ref) => {
    const baseStyles = [
      'inline-flex items-center font-medium rounded-full',
      'transition-colors duration-200',
      dot && 'gap-1.5'
    ];

    const variants = {
      default: [
        'bg-surface text-foreground border border-border'
      ],
      success: [
        'bg-success text-white'
      ],
      warning: [
        'bg-warn text-white'
      ],
      error: [
        'bg-error text-white'
      ],
      info: [
        'bg-info text-white'
      ],
      secondary: [
        'bg-secondary text-white'
      ]
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base'
    };

    const dotColors = {
      default: 'bg-muted',
      success: 'bg-success',
      warning: 'bg-warn',
      error: 'bg-error',
      info: 'bg-info',
      secondary: 'bg-secondary'
    };

    const dotSizes = {
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-2.5 h-2.5'
    };

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              'rounded-full',
              dotColors[variant],
              dotSizes[size]
            )}
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
