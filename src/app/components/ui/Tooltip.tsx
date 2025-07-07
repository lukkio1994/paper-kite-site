'use client';

import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  disabled?: boolean;
  className?: string;
}

const Tooltip = ({ 
  content,
  children,
  side = 'top',
  delay = 200,
  disabled = false,
  className
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const showTooltip = () => {
    if (disabled || !triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    let x = 0;
    let y = 0;

    // Calculate position based on side
    switch (side) {
      case 'top':
        x = rect.left + scrollX + rect.width / 2;
        y = rect.top + scrollY - 8;
        break;
      case 'bottom':
        x = rect.left + scrollX + rect.width / 2;
        y = rect.bottom + scrollY + 8;
        break;
      case 'left':
        x = rect.left + scrollX - 8;
        y = rect.top + scrollY + rect.height / 2;
        break;
      case 'right':
        x = rect.right + scrollX + 8;
        y = rect.top + scrollY + rect.height / 2;
        break;
    }

    setPosition({ x, y });
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(showTooltip, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    hideTooltip();
  };

  // Position classes based on side
  const getTooltipPosition = () => {
    const positions = {
      top: '-translate-x-1/2 -translate-y-full',
      bottom: '-translate-x-1/2 translate-y-0',
      left: '-translate-x-full -translate-y-1/2',
      right: 'translate-x-0 -translate-y-1/2'
    };

    return positions[side];
  };

  const tooltip = isVisible && (
    <div
      className={cn(
        'absolute z-50 px-2 py-1 text-sm text-primary-foreground bg-popover rounded shadow-lg',
        'pointer-events-none',
        'max-w-xs break-words',
        getTooltipPosition(),
        className
      )}
      style={{
        left: position.x,
        top: position.y
      }}
      role="tooltip"
    >
      {content}
    </div>
  );

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-block"
      >
        {children}
      </div>
      {typeof window !== 'undefined' && createPortal(tooltip, document.body)}
    </>
  );
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
