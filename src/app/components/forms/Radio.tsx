'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  options: RadioOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ 
    className,
    options,
    value,
    onValueChange,
    orientation = 'vertical',
    size = 'md',
    error,
    label,
    name,
    disabled,
    ...props 
  }, ref) => {
    const radioName = name || `radio-${Math.random().toString(36).substring(2, 9)}`;
    const hasError = !!error;

    const baseStyles = [
      'relative flex items-center justify-center',
      'rounded-full border-2 transition-all duration-200 cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'focus:ring-offset-background',
      'disabled:cursor-not-allowed disabled:opacity-50'
    ];

    const sizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };

    const dotSizes = {
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3'
    };

    const containerClasses = cn(
      'flex gap-4',
      orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col space-y-3'
    );

    const handleChange = (optionValue: string) => {
      onValueChange?.(optionValue);
    };

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            className={cn(
              'block text-sm font-medium mb-3',
              hasError 
                ? 'text-error'
                : 'text-foreground',
              disabled && 'opacity-50'
            )}
          >
            {label}
          </label>
        )}

        {/* Radio Group */}
        <div className={containerClasses} role="radiogroup">
          {options.map((option) => {
            const isSelected = value === option.value;
            const isDisabled = disabled || option.disabled;
            
            return (
              <div key={option.value} className="flex items-start gap-3">
                {/* Radio Input */}
                <div className="relative flex items-center">
                  <input
                    ref={ref}
                    type="radio"
                    id={`${radioName}-${option.value}`}
                    name={radioName}
                    value={option.value}
                    checked={isSelected}
                    onChange={() => handleChange(option.value)}
                    className="sr-only"
                    disabled={isDisabled}
                    aria-describedby={
                      option.description ? `${radioName}-${option.value}-description` : undefined
                    }
                    {...props}
                  />
                  
                  {/* Custom Radio */}
                  <label
                    htmlFor={`${radioName}-${option.value}`}
                    className={cn(
                      baseStyles,
                      sizes[size],
                      hasError 
                        ? 'border-error'
                        : 'border-border',
                      isSelected && !hasError && 'border-primary',
                      !isDisabled && !hasError && 'hover:border-border-hover',
                      className
                    )}
                  >
                    {/* Selected Dot */}
                    {isSelected && (
                      <div
                        className={cn(
                          'rounded-full transition-all duration-200',
                          hasError
                            ? 'bg-error'
                            : 'bg-primary',
                          dotSizes[size]
                        )}
                      />
                    )}
                  </label>
                </div>

                {/* Label and Description */}
                <div className="flex-1">
                  <label
                    htmlFor={`${radioName}-${option.value}`}
                    className={cn(
                      'block text-sm font-medium cursor-pointer',
                      hasError 
                        ? 'text-error'
                        : 'text-foreground',
                      isDisabled && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    {option.label}
                  </label>
                  
                  {option.description && (
                    <p 
                      id={`${radioName}-${option.value}-description`}
                      className={cn(
                        'mt-1 text-sm text-muted',
                        isDisabled && 'opacity-50'
                      )}
                    >
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Error Message */}
        {error && (
          <p 
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

Radio.displayName = 'Radio';

export default Radio;
