'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import IconButton from '../ui/IconButton';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  side?: 'left' | 'right';
  title?: string;
  closeMenuAriaLabel?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  children,
  className,
  overlayClassName,
  side = 'left',
  title = 'Menu',
  closeMenuAriaLabel = 'Close menu'
}) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const slideClasses = {
    left: {
      enter: 'animate-in slide-in-from-left duration-300',
      position: 'left-0'
    },
    right: {
      enter: 'animate-in slide-in-from-right duration-300',
      position: 'right-0'
    }
  };

  const menu = (
    <div
      className={cn(
        'fixed inset-0 z-50 flex',
        overlayClassName
      )}
      onClick={handleOverlayClick}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div
        className={cn(
          'relative flex flex-col',
          'w-full max-w-sm h-full',
          'bg-background',
          'border-r border-border',
          'shadow-xl',
          slideClasses[side].enter,
          slideClasses[side].position,
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 
            id="mobile-menu-title"
            className="text-lg font-semibold text-foreground"
          >
            {title}
          </h2>
          
          <IconButton
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label={closeMenuAriaLabel}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            }
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );

  // Render menu in portal
  return typeof window !== 'undefined' 
    ? createPortal(menu, document.body)
    : null;
};

export default MobileMenu;
