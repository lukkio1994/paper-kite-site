'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
  variant?: 'default' | 'filled' | 'flushed';
  textareaSize?: 'sm' | 'md' | 'lg';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  requiredAriaLabel?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className,
    label,
    error,
    helpText,
    variant = 'default',
    textareaSize = 'md',
    resize = 'vertical',
    id,
    disabled,
    required,
    requiredAriaLabel = 'required',
    ...props 
  }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
    const hasError = !!error;

    const baseStyles = [
      'flex min-h-[80px] w-full rounded-md border transition-colors duration-200',
      'placeholder:text-muted',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'focus-visible:ring-offset-background'
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
      sm: 'px-3 py-2 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg'
    };

    const resizeClasses = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize'
    };

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
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

        {/* Textarea */}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            baseStyles,
            variants[variant],
            sizes[textareaSize],
            resizeClasses[resize],
            className
          )}
          disabled={disabled}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${textareaId}-error` : helpText ? `${textareaId}-help` : undefined
          }
          {...props}
        />

        {/* Help Text */}
        {helpText && !error && (
          <p 
            id={`${textareaId}-help`}
            className="mt-2 text-sm text-muted"
          >
            {helpText}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p 
            id={`${textareaId}-error`}
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

Textarea.displayName = 'Textarea';

export default Textarea;
