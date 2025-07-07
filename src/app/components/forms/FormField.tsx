import React from 'react';
import { cn } from '../../../lib/utils';

interface FormFieldProps {
  children: React.ReactNode;
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
  disabled?: boolean;
  requiredAriaLabel?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  children,
  label,
  error,
  hint,
  required = false,
  className,
  labelClassName,
  errorClassName,
  hintClassName,
  disabled = false,
  requiredAriaLabel = 'required',
}) => {
  // Generate unique IDs for accessibility
  const fieldId = React.useId();
  const errorId = error ? `${fieldId}-error` : undefined;
  const hintId = hint ? `${fieldId}-hint` : undefined;

  // Clone children to add accessibility attributes
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as Record<string, unknown>;
      const additionalProps: Record<string, unknown> = {};
      
      if (errorId || hintId) {
        const describedBy = [
          childProps['aria-describedby'],
          errorId,
          hintId,
        ].filter(Boolean).join(' ');
        
        if (describedBy) {
          additionalProps['aria-describedby'] = describedBy;
        }
      }

      if (error) {
        additionalProps['aria-invalid'] = true;
      }

      if (required) {
        additionalProps['aria-required'] = true;
      }

      return React.cloneElement(child, {
        ...childProps,
        id: (childProps.id as string) || fieldId,
        ...additionalProps,
      } as React.Attributes);
    }
    return child;
  });

  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <label
          htmlFor={fieldId}
          className={cn(
            'block text-sm font-medium text-foreground',
            disabled && 'cursor-not-allowed opacity-50',
            labelClassName
          )}
        >
          {label}
          {required && (
            <span className="ml-1 text-error" aria-label={requiredAriaLabel}>
              *
            </span>
          )}
        </label>
      )}
      
      {enhancedChildren}
      
      {hint && !error && (
        <p
          id={hintId}
          className={cn(
            'text-sm text-muted',
            disabled && 'opacity-50',
            hintClassName
          )}
        >
          {hint}
        </p>
      )}
      
      {error && (
        <p
          id={errorId}
          role="alert"
          className={cn(
            'text-sm text-error',
            errorClassName
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
export type { FormFieldProps };
