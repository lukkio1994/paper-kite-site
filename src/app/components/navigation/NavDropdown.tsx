'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import NavItem, { NavItemProps } from './NavItem';

export interface DropdownItem extends Omit<NavItemProps, 'variant' | 'size'> {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
}

export interface NavDropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
  className?: string;
  dropdownClassName?: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  trigger,
  items,
  align = 'left',
  className,
  dropdownClassName
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      // Focus first item
      setTimeout(() => {
        const firstItem = dropdownRef.current?.querySelector('a, button');
        (firstItem as HTMLElement)?.focus();
      }, 0);
    }
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={cn('relative inline-block', className)}>
      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          'inline-flex items-center gap-1 px-3 py-2',
          'text-foreground hover:text-foreground',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md',
          'transition-colors duration-200'
        )}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <svg
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={cn(
            'absolute z-50 mt-2 min-w-48',
            'bg-background border border-border rounded-lg shadow-lg',
            'animate-in fade-in-0 zoom-in-95 duration-200',
            align === 'right' && 'right-0',
            dropdownClassName
          )}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1">
            {items.map((item, index) => {
              const { divider, disabled, className: itemClassName, ...itemProps } = item;
              
              if (divider) {
                return (
                  <hr 
                    key={`divider-${index}`}
                    className="my-1 border-border"
                  />
                );
              }

              return (
                <div
                  key={index}
                  className={cn(
                    'block',
                    disabled && 'opacity-50 cursor-not-allowed'
                  )}
                  onClick={disabled ? undefined : handleItemClick}
                >
                  <NavItem
                    {...itemProps}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      'w-full justify-start rounded-none px-4 py-2',
                      'hover:bg-surface focus:bg-surface',
                      itemClassName
                    )}
                    role="menuitem"
                    tabIndex={disabled ? -1 : 0}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
