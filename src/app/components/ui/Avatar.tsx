'use client';

import React, { forwardRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'circle' | 'square';
  status?: 'online' | 'offline' | 'away' | 'busy';
  priority?: boolean;
  statusAriaLabelPrefix?: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    className,
    src,
    alt = 'Avatar',
    fallback,
    size = 'md',
    shape = 'circle',
    status,
    priority = false,
    statusAriaLabelPrefix = 'Status:',
    ...props 
  }, ref) => {
    const [imageError, setImageError] = useState(false);

    const baseStyles = [
      'relative inline-flex items-center justify-center',
      'bg-surface border border-border',
      'text-foreground',
      'font-medium overflow-hidden',
      'transition-all duration-200'
    ];

    const sizes = {
      xs: 'w-6 h-6 text-xs',
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
      xl: 'w-16 h-16 text-xl',
      '2xl': 'w-20 h-20 text-2xl'
    };

    const shapes = {
      circle: 'rounded-full',
      square: 'rounded-lg'
    };

    const statusColors = {
      online: 'bg-success',
      offline: 'bg-muted',
      away: 'bg-warn',
      busy: 'bg-error'
    };

    const statusSizes = {
      xs: 'w-1.5 h-1.5 border',
      sm: 'w-2 h-2 border',
      md: 'w-2.5 h-2.5 border-2',
      lg: 'w-3 h-3 border-2',
      xl: 'w-4 h-4 border-2',
      '2xl': 'w-5 h-5 border-2'
    };

    // Generate initials from fallback text
    const getInitials = (text: string) => {
      return text
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
    };

    const displayFallback = fallback ? getInitials(fallback) : alt.charAt(0).toUpperCase();

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          sizes[size],
          shapes[shape],
          className
        )}
        {...props}
      >
        {src && !imageError ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            onError={() => setImageError(true)}
            sizes={`${size === 'xs' ? '24px' : size === 'sm' ? '32px' : size === 'md' ? '40px' : size === 'lg' ? '48px' : size === 'xl' ? '64px' : '80px'}`}
          />
        ) : (
          <span className="select-none">
            {displayFallback}
          </span>
        )}
        
        {status && (
          <span
            className={cn(
              'absolute -bottom-0 -right-0 rounded-full',
              'border-background',
              statusColors[status],
              statusSizes[size]
            )}
            aria-label={`${statusAriaLabelPrefix} ${status}`}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
