'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helpText?: string;
  options: SelectOption[];
  placeholder?: string;
  variant?: 'default' | 'filled' | 'flushed';
  selectSize?: 'sm' | 'md' | 'lg';
  requiredAriaLabel?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className,
    label,
    error,
    helpText,
    options,
    placeholder,
    variant = 'default',
    selectSize = 'md',
    id,
    disabled,
    required,
    requiredAriaLabel = 'required',
    ...props 
  }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;
    const hasError = !!error;

    const baseStyles = [
      'flex w-full rounded-md border transition-colors duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'focus-visible:ring-offset-background',
      'appearance-none bg-no-repeat bg-right',
      'pr-10' // Space for custom arrow
    ];

    const variants = {
      default: [
        'border-border bg-background',
        hasError 
          ? 'border-error focus-visible:ring-error'
          : 'focus-visible:ring-primary',
        !hasError && 'hover:border-border-hover'
      ],
      filled: [
        'border-transparent bg-surface',
        hasError
          ? 'bg-error-light focus-visible:ring-error'
          : 'focus-visible:ring-primary',
        !hasError && 'hover:bg-surface-hover'
      ],
      flushed: [
        'border-0 border-b-2 rounded-none bg-transparent',
        hasError
          ? 'border-error focus-visible:ring-0 focus-visible:border-error'
          : 'border-border focus-visible:ring-0 focus-visible:border-primary'
      ]
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-3 text-base',
      lg: 'h-12 px-4 text-lg'
    };

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              'block text-sm font-medium mb-2',
              hasError 
                ? 'text-error'
                : 'text-foreground',
              disabled && 'opacity-50'
            )}
          >
            {label}
            {required && (
              <span className="text-error ml-1" aria-label={requiredAriaLabel}>
                *
              </span>
            )}
          </label>
        )}

        {/* Select Container */}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              baseStyles,
              variants[variant],
              sizes[selectSize],
              className
            )}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${selectId}-error` : helpText ? `${selectId}-help` : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom Arrow */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Help Text */}
        {helpText && !error && (
          <p 
            id={`${selectId}-help`}
            className="mt-2 text-sm text-muted"
          >
            {helpText}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p 
            id={`${selectId}-error`}
            className="mt-2 text-sm text-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
