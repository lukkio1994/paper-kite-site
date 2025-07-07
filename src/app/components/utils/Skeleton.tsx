'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  lines?: number;
  animation?: 'pulse' | 'wave' | 'none';
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'text',
  width,
  height,
  lines = 1,
  animation = 'pulse'
}) => {
  const baseStyles = [
    'bg-surface',
    animation === 'pulse' && 'animate-pulse',
    animation === 'wave' && 'animate-pulse' // Can be enhanced with custom wave animation
  ];

  const variants = {
    text: 'rounded',
    rectangular: 'rounded-md',
    circular: 'rounded-full'
  };

  const defaultSizes = {
    text: { width: '100%', height: '1em' },
    rectangular: { width: '100%', height: '8rem' },
    circular: { width: '3rem', height: '3rem' }
  };

  const skeletonWidth = width || defaultSizes[variant].width;
  const skeletonHeight = height || defaultSizes[variant].height;

  const skeletonStyle = {
    width: typeof skeletonWidth === 'number' ? `${skeletonWidth}px` : skeletonWidth,
    height: typeof skeletonHeight === 'number' ? `${skeletonHeight}px` : skeletonHeight
  };

  // For text variant with multiple lines
  if (variant === 'text' && lines > 1) {
    return (
      <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              baseStyles,
              variants[variant],
              index === lines - 1 && 'w-3/4' // Last line is shorter
            )}
            style={{
              width: index === lines - 1 ? '75%' : skeletonStyle.width,
              height: skeletonStyle.height
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      style={skeletonStyle}
    />
  );
};

// Common skeleton patterns
export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('p-4 space-y-4', className)}>
    <Skeleton variant="rectangular" height="12rem" />
    <div className="space-y-2">
      <Skeleton variant="text" height="1.25rem" />
      <Skeleton variant="text" lines={2} />
    </div>
    <Skeleton variant="rectangular" height="2.5rem" width="8rem" />
  </div>
);

export const SkeletonAvatar: React.FC<{ 
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  className?: string;
}> = ({ size = 'md', withText = false, className }) => {
  const sizes = {
    sm: { width: '2rem', height: '2rem' },
    md: { width: '3rem', height: '3rem' },
    lg: { width: '4rem', height: '4rem' }
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Skeleton 
        variant="circular" 
        width={sizes[size].width}
        height={sizes[size].height}
      />
      {withText && (
        <div className="flex-1 space-y-1">
          <Skeleton variant="text" height="1rem" width="60%" />
          <Skeleton variant="text" height="0.75rem" width="40%" />
        </div>
      )}
    </div>
  );
};

export const SkeletonTable: React.FC<{ 
  rows?: number;
  columns?: number;
  className?: string;
}> = ({ rows = 5, columns = 4, className }) => (
  <div className={cn('space-y-3', className)}>
    {/* Header */}
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array.from({ length: columns }).map((_, index) => (
        <Skeleton key={`header-${index}`} variant="text" height="1.25rem" />
      ))}
    </div>
    
    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div 
        key={`row-${rowIndex}`}
        className="grid gap-4" 
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton 
            key={`cell-${rowIndex}-${colIndex}`} 
            variant="text" 
            height="1rem"
            width={colIndex === 0 ? '80%' : '100%'}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Skeleton;
