'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'flushed';
  inputSize?: 'sm' | 'md' | 'lg';
  requiredAriaLabel?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    type = 'text',
    label,
    error,
    helpText,
    startIcon,
    endIcon,
    variant = 'default',
    inputSize = 'md',
    id,
    disabled,
    required,
    requiredAriaLabel = 'required',
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    const hasError = !!error;

    const baseStyles = [
      'flex w-full rounded-md border transition-colors duration-200',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'placeholder:text-muted',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'dark:focus-visible:ring-offset-background'
    ];

    const variants = {
      default: [
        'border-border bg-background text-foreground',
        hasError 
          ? 'border-error focus-visible:ring-error'
          : 'focus-visible:ring-primary',
        !hasError && 'hover:border-primary'
      ],
      filled: [
        'border-transparent bg-surface text-foreground',
        hasError
          ? 'bg-error/10 focus-visible:ring-error'
          : 'focus-visible:ring-primary',
        !hasError && 'hover:bg-surface/80'
      ],
      flushed: [
        'border-0 border-b-2 rounded-none bg-transparent text-foreground',
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

    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };

    const iconPadding = {
      sm: startIcon ? 'pl-8' : endIcon ? 'pr-8' : '',
      md: startIcon ? 'pl-10' : endIcon ? 'pr-10' : '',
      lg: startIcon ? 'pl-12' : endIcon ? 'pr-12' : ''
    };

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
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

        {/* Input Container */}
        <div className="relative">
          {/* Start Icon */}
          {startIcon && (
            <div className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2',
              'text-muted pointer-events-none',
              iconSizes[inputSize]
            )}>
              {startIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            type={type}
            id={inputId}
            className={cn(
              baseStyles,
              variants[variant],
              sizes[inputSize],
              iconPadding[inputSize],
              className
            )}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined
            }
            {...props}
          />

          {/* End Icon */}
          {endIcon && (
            <div className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2',
              'text-muted pointer-events-none',
              iconSizes[inputSize]
            )}>
              {endIcon}
            </div>
          )}
        </div>

        {/* Help Text */}
        {helpText && !error && (
          <p 
            id={`${inputId}-help`}
            className="mt-2 text-sm text-muted"
          >
            {helpText}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p 
            id={`${inputId}-error`}
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

Input.displayName = 'Input';

export default Input;
