'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon: React.ReactNode;
  'aria-label': string; // Required for accessibility
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ 
    className, 
    variant = 'ghost', 
    size = 'md', 
    loading = false,
    disabled,
    icon,
    'aria-label': ariaLabel,
    ...props 
  }, ref) => {
    const baseStyles = [
      'inline-flex items-center justify-center',
      'rounded-lg transition-all duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'active:scale-95'
    ];

    const variants = {
      primary: [
        'bg-primary text-white',
        'hover:bg-primary-light',
        'focus:ring-primary'
      ],
      secondary: [
        'bg-surface text-foreground',
        'hover:bg-surface-hover',
        'focus:ring-primary'
      ],
      ghost: [
        'bg-transparent text-foreground',
        'hover:bg-surface',
        'focus:ring-primary'
      ],
      destructive: [
        'bg-error text-white',
        'hover:bg-error-hover',
        'focus:ring-error'
      ]
    };

    const sizes = {
      sm: 'p-1.5 [&>svg]:w-4 [&>svg]:h-4',
      md: 'p-2 [&>svg]:w-5 [&>svg]:h-5',
      lg: 'p-3 [&>svg]:w-6 [&>svg]:h-6'
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        aria-busy={loading}
        aria-label={ariaLabel}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          icon
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
