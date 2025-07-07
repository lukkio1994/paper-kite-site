'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import IconButton from './IconButton';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ 
  children: React.ReactNode;
  closeNotificationAriaLabel?: string;
}> = ({ children, closeNotificationAriaLabel }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    
    setToasts(prev => [...prev, newToast]);

    // Auto remove after duration
    if (toast.duration !== 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, toast.duration || 5000);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer closeNotificationAriaLabel={closeNotificationAriaLabel} />
    </ToastContext.Provider>
  );
};

const ToastContainer: React.FC<{ closeNotificationAriaLabel?: string }> = ({ closeNotificationAriaLabel }) => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  const toastList = (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {toasts.map(toast => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onClose={() => removeToast(toast.id)}
          closeNotificationAriaLabel={closeNotificationAriaLabel}
        />
      ))}
    </div>
  );

  return typeof window !== 'undefined' 
    ? createPortal(toastList, document.body)
    : null;
};

interface ToastItemProps {
  toast: Toast;
  onClose: () => void;
  closeNotificationAriaLabel?: string;
}

const ToastItem: React.FC<ToastItemProps> = ({ 
  toast, 
  onClose, 
  closeNotificationAriaLabel = 'Close notification' 
}) => {
  const variants = {
    default: [
      'bg-surface border-border text-foreground'
    ],
    success: [
      'bg-success border-success text-white'
    ],
    warning: [
      'bg-warn border-warn text-white'
    ],
    error: [
      'bg-error border-error text-white'
    ]
  };

  const icons = {
    default: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-lg border shadow-lg',
        'animate-in slide-in-from-right duration-300',
        'max-w-sm',
        variants[toast.variant || 'default']
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-shrink-0 mt-0.5">
        {icons[toast.variant || 'default']}
      </div>
      
      <div className="flex-1 min-w-0">
        {toast.title && (
          <div className="font-medium text-sm">
            {toast.title}
          </div>
        )}
        {toast.description && (
          <div className="text-sm opacity-90 mt-1">
            {toast.description}
          </div>
        )}
        {toast.action && (
          <button
            className="text-sm font-medium underline mt-2 hover:no-underline"
            onClick={toast.action.onClick}
          >
            {toast.action.label}
          </button>
        )}
      </div>
      
      <IconButton
        variant="ghost"
        size="sm"
        onClick={onClose}
        aria-label={closeNotificationAriaLabel}
        className="flex-shrink-0 -mt-1 -mr-1"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        }
      />
    </div>
  );
};

export default ToastItem;
