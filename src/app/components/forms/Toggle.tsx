'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../../lib/utils';

interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  description?: string;
  name?: string;
  id?: string;
  className?: string;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
  toggleAriaLabel?: string;
}

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({
    checked = false,
    onChange,
    disabled = false,
    size = 'md',
    label,
    description,
    name,
    id,
    className,
    'aria-describedby': ariaDescribedby,
    'aria-labelledby': ariaLabelledby,
    toggleAriaLabel,
  }, ref) => {
    const handleToggle = () => {
      if (!disabled && onChange) {
        onChange(!checked);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handleToggle();
      }
    };

    const sizeClasses = {
      sm: 'h-5 w-9',
      md: 'h-6 w-11',
      lg: 'h-7 w-12',
    };

    const thumbSizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    };

    const thumbTranslateClasses = {
      sm: checked ? 'translate-x-4' : 'translate-x-0',
      md: checked ? 'translate-x-5' : 'translate-x-0',
      lg: checked ? 'translate-x-5' : 'translate-x-0',
    };

    const toggleId = id || `toggle-${name}`;
    const descriptionId = description ? `${toggleId}-description` : undefined;

    return (
      <div className={cn('flex items-start space-x-3', className)}>
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-describedby={ariaDescribedby || descriptionId}
          aria-labelledby={ariaLabelledby}
          id={toggleId}
          name={name}
          disabled={disabled}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className={cn(
            'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
            sizeClasses[size],
            checked
              ? 'bg-primary'
              : 'bg-surface',
            disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <span className="sr-only">{toggleAriaLabel || (label ? `Toggle ${label}` : 'Toggle switch')}</span>
          <span
            aria-hidden="true"
            className={cn(
              'pointer-events-none inline-block rounded-full bg-background shadow transform ring-0 transition duration-200 ease-in-out',
              thumbSizeClasses[size],
              thumbTranslateClasses[size]
            )}
          />
        </button>
        
        {(label || description) && (
          <div className="min-w-0 flex-1">
            {label && (
              <label
                htmlFor={toggleId}
                className={cn(
                  'block text-sm font-medium text-foreground',
                  disabled && 'cursor-not-allowed opacity-50'
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p
                id={descriptionId}
                className={cn(
                  'mt-1 text-sm text-muted',
                  disabled && 'opacity-50'
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
export type { ToggleProps };
