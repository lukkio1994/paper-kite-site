'use client';

import React, { forwardRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

/**
 * Button component props interface
 * Extends HTML button attributes with custom styling and behavior options
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'outline';
  /** Size variant affecting padding and font size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Loading state - shows spinner and disables interaction */
  loading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Icon to display before children */
  startIcon?: React.ReactNode;
  /** Icon to display after children */
  endIcon?: React.ReactNode;
  /** Children content */
  children: React.ReactNode;
}

/**
 * Production-ready Button component with comprehensive accessibility,
 * responsive design, and interaction feedback.
 * 
 * Features:
 * - Full keyboard navigation support
 * - Screen reader optimized
 * - Loading states with ARIA attributes
 * - Smooth animations and transitions
 * - Dark mode support
 * - Multiple size and style variants
 * - Icon support with proper spacing
 * - Touch-friendly tap targets
 * - Performance optimized with useCallback
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    fullWidth = false,
    startIcon,
    endIcon,
    disabled,
    children,
    onClick,
    ...props 
  }, ref) => {
    
    // Memoized click handler to prevent unnecessary re-renders
    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      if (loading || disabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    }, [loading, disabled, onClick]);

    // Base styles with comprehensive interaction states
    const baseStyles = [
      // Layout and display
      'inline-flex items-center justify-center',
      'relative overflow-hidden',
      'font-medium rounded-lg',
      'border border-transparent',
      
      // Transitions and animations
      'transition-all duration-200 ease-out',
      'transform-gpu', // GPU acceleration for better performance
      
      // Focus management
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background',
      
      // Interaction feedback
      'active:scale-[0.98] active:transition-transform active:duration-75',
      'hover:shadow-sm hover:transition-shadow hover:duration-200',
      
      // Disabled state
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      'disabled:shadow-none disabled:transform-none',
      
      // Accessibility - minimum touch target size
      'min-h-[44px] min-w-[44px]',
      
      // Full width option
      fullWidth && 'w-full',
      
      // Loading state
      loading && 'cursor-wait'
    ];

    // Variant styles with improved contrast and accessibility
    const variants = {
      primary: [
        'bg-primary text-primary-foreground shadow-sm',
        'hover:bg-primary/90 hover:shadow-md',
        'focus:ring-primary',
        'active:bg-primary/80'
      ],
      secondary: [
        'bg-secondary text-secondary-foreground shadow-sm',
        'hover:bg-secondary/80 hover:shadow-md',
        'focus:ring-secondary',
        'active:bg-secondary/70'
      ],
      outline: [
        'border-border text-foreground bg-transparent',
        'hover:bg-accent hover:text-accent-foreground',
        'focus:ring-ring',
        'active:bg-accent/80'
      ],
      ghost: [
        'bg-transparent text-foreground',
        'hover:bg-accent hover:text-accent-foreground',
        'focus:ring-ring',
        'active:bg-accent/80'
      ],
      destructive: [
        'bg-destructive text-destructive-foreground shadow-sm',
        'hover:bg-destructive/90 hover:shadow-md',
        'focus:ring-destructive',
        'active:bg-destructive/80'
      ]
    };

    // Size variants with improved spacing and typography scale
    const sizes = {
      xs: 'px-2 py-1 text-xs gap-1 min-h-[32px]',
      sm: 'px-3 py-1.5 text-sm gap-1.5 min-h-[36px]',
      md: 'px-4 py-2 text-base gap-2 min-h-[44px]',
      lg: 'px-6 py-3 text-lg gap-2.5 min-h-[48px]',
      xl: 'px-8 py-4 text-xl gap-3 min-h-[56px]'
    };

    // Loading spinner component
    const LoadingSpinner = () => (
      <svg
        className={cn(
          'animate-spin',
          size === 'xs' ? 'h-3 w-3' :
          size === 'sm' ? 'h-3.5 w-3.5' :
          size === 'md' ? 'h-4 w-4' :
          size === 'lg' ? 'h-5 w-5' : 'h-6 w-6'
        )}
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
    );

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
        aria-disabled={disabled || loading}
        onClick={handleClick}
        {...props}
      >
        {/* Start icon with proper spacing */}
        {!loading && startIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {startIcon}
          </span>
        )}
        
        {/* Loading spinner */}
        {loading && <LoadingSpinner />}
        
        {/* Button content */}
        <span className={cn(loading && 'opacity-70')}>
          {children}
        </span>
        
        {/* End icon with proper spacing */}
        {!loading && endIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {endIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
