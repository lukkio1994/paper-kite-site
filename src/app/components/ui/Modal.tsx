'use client';

import React, { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import IconButton from './IconButton';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
  children: React.ReactNode;
  closeModalAriaLabel?: string;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ 
    open,
    onClose,
    title,
    description,
    size = 'md',
    closeOnOverlayClick = true,
    closeOnEscape = true,
    showCloseButton = true,
    className,
    children,
    closeModalAriaLabel = 'Close modal'
  }, ref) => {
    // Handle escape key
    useEffect(() => {
      if (!closeOnEscape || !open) return;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [closeOnEscape, open, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [open]);

    if (!open) return null;

    const sizes = {
      sm: 'max-w-md',
      md: 'max-w-lg',
      lg: 'max-w-2xl',
      xl: 'max-w-4xl',
      full: 'max-w-[95vw] max-h-[95vh]'
    };

    const handleOverlayClick = (event: React.MouseEvent) => {
      if (closeOnOverlayClick && event.target === event.currentTarget) {
        onClose();
      }
    };

    const modalContent = (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={handleOverlayClick}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-overlay backdrop-blur-sm"
          aria-hidden="true"
        />
        
        {/* Modal */}
        <div
          ref={ref}
          className={cn(
            'relative w-full bg-surface',
            'rounded-lg shadow-xl',
            'transform transition-all duration-300',
            'animate-in fade-in-0 zoom-in-95',
            'border border-border',
            sizes[size],
            size === 'full' && 'h-full overflow-auto',
            className
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          aria-describedby={description ? 'modal-description' : undefined}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex-1">
                {title && (
                  <h2 
                    id="modal-title"
                    className="text-lg font-semibold text-foreground"
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p 
                    id="modal-description"
                    className="mt-1 text-sm text-muted"
                  >
                    {description}
                  </p>
                )}
              </div>
              
              {showCloseButton && (
                <IconButton
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  aria-label={closeModalAriaLabel}
                  icon={
                    <svg
                      width="16"
                      height="16"
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
              )}
            </div>
          )}
          
          {/* Content */}
          <div className={cn(
            'p-6',
            size === 'full' && 'flex-1 overflow-auto'
          )}>
            {children}
          </div>
        </div>
      </div>
    );

    // Render modal in portal
    return typeof window !== 'undefined' 
      ? createPortal(modalContent, document.body)
      : null;
  }
);

Modal.displayName = 'Modal';

export default Modal;
