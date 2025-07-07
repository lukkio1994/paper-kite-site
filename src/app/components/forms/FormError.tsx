import React from 'react';
import { cn } from '../../../lib/utils';

interface FormErrorProps {
  error?: string | string[] | null;
  className?: string;
  id?: string;
}

const FormError: React.FC<FormErrorProps> = ({
  error,
  className,
  id,
}) => {
  if (!error) {
    return null;
  }

  // Handle both string and array of errors
  const errors = Array.isArray(error) ? error : [error];
  const hasMultipleErrors = errors.length > 1;

  return (
    <div
      id={id}
      role="alert"
      className={cn(
        'text-sm text-error',
        className
      )}
    >
      {hasMultipleErrors ? (
        <ul className="list-disc list-inside space-y-1">
          {errors.map((err, index) => (
            <li key={index}>{err}</li>
          ))}
        </ul>
      ) : (
        <span>{errors[0]}</span>
      )}
    </div>
  );
};

export default FormError;
export type { FormErrorProps };
