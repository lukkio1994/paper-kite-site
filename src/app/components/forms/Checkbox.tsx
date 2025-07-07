'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className,
    label,
    description,
    error,
    size = 'md',
    indeterminate = false,
    id,
    disabled,
    checked,
    ...props 
  }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
    const hasError = !!error;

    const baseStyles = [
      'rounded border transition-all duration-200 cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'focus:ring-offset-background',
      'disabled:cursor-not-allowed disabled:opacity-50'
    ];

    const sizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };

    const checkboxStyles = cn(
      baseStyles,
      sizes[size],
      hasError 
        ? 'border-error'
        : 'border-border',
      checked || indeterminate
        ? hasError
          ? 'bg-error border-error'
          : 'bg-primary border-primary'
        : 'bg-background',
      !disabled && !hasError && 'hover:border-border-hover',
      className
    );

    const iconSize = {
      sm: 'w-3 h-3',
      md: 'w-3 h-3',
      lg: 'w-4 h-4'
    };

    const renderIcon = () => {
      if (indeterminate) {
        return (
          <svg
            className={cn('text-primary-foreground', iconSize[size])}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <rect x="4" y="9" width="12" height="2" />
          </svg>
        );
      }

      if (checked) {
        return (
          <svg
            className={cn('text-primary-foreground', iconSize[size])}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      }

      return null;
    };

    return (
      <div className="flex items-start gap-3">
        {/* Checkbox Input */}
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className="sr-only"
            disabled={disabled}
            checked={checked}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${checkboxId}-error` : description ? `${checkboxId}-description` : undefined
            }
            {...props}
          />
          
          {/* Custom Checkbox */}
          <label
            htmlFor={checkboxId}
            className={cn(
              'relative flex items-center justify-center',
              checkboxStyles
            )}
          >
            {renderIcon()}
          </label>
        </div>

        {/* Label and Description */}
        {(label || description) && (
          <div className="flex-1">
            {label && (
              <label
                htmlFor={checkboxId}
                className={cn(
                  'block text-sm font-medium cursor-pointer',
                  hasError 
                    ? 'text-error'
                    : 'text-foreground',
                  disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                {label}
              </label>
            )}
            
            {description && (
              <p 
                id={`${checkboxId}-description`}
                className={cn(
                  'text-sm text-muted',
                  label && 'mt-1',
                  disabled && 'opacity-50'
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <p 
            id={`${checkboxId}-error`}
            className="text-sm text-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
