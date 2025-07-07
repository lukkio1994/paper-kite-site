'use client';

import React, { forwardRef, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Button from './Button';

/**
 * Card component props interface
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: 'default' | 'elevated' | 'outlined' | 'glass' | 'gradient';
  /** Padding size */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Card image configuration */
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'auto';
    objectFit?: 'cover' | 'contain' | 'fill';
  };
  /** Card header content */
  header?: React.ReactNode;
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Card description */
  description?: string;
  /** Card footer content */
  footer?: React.ReactNode;
  /** Call-to-action button configuration */
  cta?: {
    text: string;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'outline';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    external?: boolean;
    loading?: boolean;
    disabled?: boolean;
  };
  /** Secondary action button */
  secondaryAction?: {
    text: string;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'outline';
  };
  /** Card content */
  children?: React.ReactNode;
  /** Make entire card clickable */
  clickable?: boolean;
  /** Card click handler */
  onCardClick?: () => void;
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Card badge */
  badge?: {
    text: string;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  };
}

/**
 * Production-ready Card component with comprehensive features,
 * accessibility, and responsive design.
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className,
    variant = 'default',
    padding = 'md',
    image,
    header,
    title,
    subtitle,
    description,
    footer,
    cta,
    secondaryAction,
    children,
    clickable = false,
    onCardClick,
    loading = false,
    disabled = false,
    badge,
    ...props 
  }, ref) => {
    
    // Loading image state
    const [imageLoading, setImageLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    // Handle card click
    const handleCardClick = useCallback(() => {
      if (disabled || loading) return;
      onCardClick?.();
    }, [disabled, loading, onCardClick]);

    // Handle key press for card accessibility
    const handleKeyPress = useCallback((event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleCardClick();
      }
    }, [handleCardClick]);

    // Base styles with enhanced accessibility and interactions
    const baseStyles = [
      'rounded-xl overflow-hidden relative',
      'transition-all duration-300 ease-out',
      'group', // For group hover effects
      
      // Focus management
      clickable && [
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'
      ],
      
      // Cursor states
      clickable && !disabled && 'cursor-pointer',
      disabled && 'cursor-not-allowed',
      
      // Loading state
      loading && 'animate-pulse'
    ];

    // Variant styles with improved visual hierarchy
    const variants = {
      default: [
        'bg-card border border-border shadow-sm',
        !disabled && !loading && 'hover:shadow-md hover:border-border/60'
      ],
      elevated: [
        'bg-card shadow-lg border border-border',
        !disabled && !loading && 'hover:shadow-xl hover:-translate-y-1'
      ],
      outlined: [
        'bg-transparent border-2 border-border',
        !disabled && !loading && 'hover:border-border/60 hover:bg-accent/50'
      ],
      glass: [
        'bg-card/80 backdrop-blur-md border border-border/50 shadow-lg',
        !disabled && !loading && 'hover:bg-card/90 hover:shadow-xl'
      ],
      gradient: [
        'bg-gradient-to-br from-primary/10 to-secondary/10 border border-border',
        !disabled && !loading && 'hover:from-primary/20 hover:to-secondary/20'
      ]
    };

    // Padding styles with responsive considerations
    const paddingStyles = {
      none: '',
      xs: 'p-2',
      sm: 'p-3',
      md: 'p-4 sm:p-5',
      lg: 'p-5 sm:p-6',
      xl: 'p-6 sm:p-8'
    };

    // Image aspect ratio styles
    const aspectRatios = {
      square: 'aspect-square',
      video: 'aspect-video',
      portrait: 'aspect-[3/4]',
      wide: 'aspect-[21/9]',
      auto: 'aspect-auto'
    };

    // Badge component
    const Badge = ({ badge }: { badge: NonNullable<CardProps['badge']> }) => {
      const badgeVariants = {
        default: 'bg-secondary text-secondary-foreground',
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        success: 'bg-success text-success-foreground',
        warning: 'bg-warn text-warn-foreground',
        error: 'bg-error text-error-foreground'
      };

      return (
        <span className={cn(
          'absolute top-3 right-3 z-10',
          'px-2 py-1 text-xs font-medium rounded-full',
          badgeVariants[badge.variant || 'default']
        )}>
          {badge.text}
        </span>
      );
    };

    // Skeleton loader for content
    const SkeletonLoader = () => (
      <div className="animate-pulse">
        {image && (
          <div className={cn(
            'bg-muted',
            aspectRatios[image.aspectRatio || 'video']
          )} />
        )}
        <div className={cn(paddingStyles[padding])}>
          <div className="h-6 bg-muted rounded w-3/4 mb-2" />
          <div className="h-4 bg-muted rounded w-1/2 mb-4" />
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-5/6" />
          </div>
        </div>
      </div>
    );

    // Render loading state
    if (loading) {
      return (
        <div
          ref={ref}
          className={cn(baseStyles, variants[variant], className)}
          {...props}
        >
          <SkeletonLoader />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          disabled && 'opacity-50',
          className
        )}
        onClick={clickable ? handleCardClick : undefined}
        onKeyPress={clickable ? handleKeyPress : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        role={clickable ? 'button' : undefined}
        aria-disabled={disabled}
        {...props}
      >
        {/* Badge */}
        {badge && <Badge badge={badge} />}

        {/* Image */}
        {image && (
          <div className={cn(
            'relative overflow-hidden',
            aspectRatios[image.aspectRatio || 'video']
          )}>
            {imageLoading && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            
            {!imageError ? (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 800}
                height={image.height || 600}
                priority={image.priority}
                className={cn(
                  'w-full h-full transition-all duration-500',
                  image.objectFit === 'contain' ? 'object-contain' :
                  image.objectFit === 'fill' ? 'object-fill' : 'object-cover',
                  !disabled && 'group-hover:scale-105',
                  imageLoading && 'opacity-0'
                )}
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageLoading(false);
                  setImageError(true);
                }}
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <svg 
                  className="w-12 h-12 text-muted-foreground" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className={cn(paddingStyles[padding])}>
          {/* Header */}
          {header && (
            <div className="mb-3">
              {header}
            </div>
          )}

          {/* Title */}
          {title && (
            <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-2">
              {title}
            </h3>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {subtitle}
            </p>
          )}
          
          {/* Description */}
          {description && (
            <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
              {description}
            </p>
          )}
          
          {/* Children content */}
          {children && (
            <div className="mb-4">
              {children}
            </div>
          )}
          
          {/* Actions */}
          {(cta || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-2 mt-auto">
              {cta && (
                <div className="flex-1">
                  {cta.href ? (
                    <Link
                      href={cta.href}
                      target={cta.external ? '_blank' : undefined}
                      rel={cta.external ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <Button
                        variant={cta.variant || 'primary'}
                        size={cta.size || 'md'}
                        fullWidth
                        loading={cta.loading}
                        disabled={cta.disabled || disabled}
                        onClick={cta.onClick}
                      >
                        {cta.text}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant={cta.variant || 'primary'}
                      size={cta.size || 'md'}
                      fullWidth
                      loading={cta.loading}
                      disabled={cta.disabled || disabled}
                      onClick={cta.onClick}
                    >
                      {cta.text}
                    </Button>
                  )}
                </div>
              )}

              {secondaryAction && (
                <div className="flex-1">
                  {secondaryAction.href ? (
                    <Link href={secondaryAction.href} className="block">
                      <Button
                        variant={secondaryAction.variant || 'secondary'}
                        fullWidth
                        disabled={disabled}
                        onClick={secondaryAction.onClick}
                      >
                        {secondaryAction.text}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant={secondaryAction.variant || 'secondary'}
                      fullWidth
                      disabled={disabled}
                      onClick={secondaryAction.onClick}
                    >
                      {secondaryAction.text}
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          {footer && (
            <div className="mt-4 pt-4 border-t border-border">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
