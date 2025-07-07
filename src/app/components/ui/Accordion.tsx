'use client';

import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (item: string) => void;
  type: 'single' | 'multiple';
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion component');
  }
  return context;
};

export interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
  className?: string;
}

export interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ 
  type = 'single',
  defaultValue,
  value,
  onValueChange,
  children,
  className
}) => {
  const getInitialOpenItems = () => {
    if (value !== undefined) {
      return Array.isArray(value) ? value : [value];
    }
    if (defaultValue !== undefined) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  };

  const [internalOpenItems, setInternalOpenItems] = useState<string[]>(getInitialOpenItems());
  
  const openItems = value !== undefined 
    ? (Array.isArray(value) ? value : [value])
    : internalOpenItems;
  
  const toggleItem = (item: string) => {
    let newOpenItems: string[];
    
    if (type === 'single') {
      newOpenItems = openItems.includes(item) ? [] : [item];
    } else {
      newOpenItems = openItems.includes(item)
        ? openItems.filter(i => i !== item)
        : [...openItems, item];
    }
    
    if (value === undefined) {
      setInternalOpenItems(newOpenItems);
    }
    
    const callbackValue = type === 'single' ? newOpenItems[0] || '' : newOpenItems;
    onValueChange?.(callbackValue);
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn('w-full', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ value, children, className }) => {
  return (
    <div 
      className={cn('border-b border-border', className)}
      data-value={value}
    >
      {children}
    </div>
  );
};

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className }) => {
  const { openItems, toggleItem } = useAccordionContext();
  
  // Get the parent AccordionItem's value
  const getItemValue = (element: HTMLElement): string => {
    const accordionItem = element.closest('[data-value]') as HTMLElement;
    return accordionItem?.getAttribute('data-value') || '';
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const itemValue = getItemValue(event.currentTarget);
    if (itemValue) {
      toggleItem(itemValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const itemValue = getItemValue(event.currentTarget);
      if (itemValue) {
        toggleItem(itemValue);
      }
    }
  };

  // Check if current item is open
  const isItemOpen = (element: HTMLElement): boolean => {
    const itemValue = getItemValue(element);
    return openItems.includes(itemValue);
  };

  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-center justify-between py-4 px-0',
        'text-left font-medium transition-all text-foreground',
        'hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'dark:focus:ring-offset-background',
        '[&[data-state=open]>svg]:rotate-180',
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={(el) => {
        if (el) {
          const isOpen = isItemOpen(el);
          el.setAttribute('data-state', isOpen ? 'open' : 'closed');
          el.setAttribute('aria-expanded', isOpen.toString());
        }
      }}
    >
      {children}
      <svg
        className="h-4 w-4 shrink-0 transition-transform duration-200"
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
  );
};

const AccordionContent: React.FC<AccordionContentProps> = ({ children, className }) => {
  const { openItems } = useAccordionContext();
  
  // Get the parent AccordionItem's value
  const getItemValue = (element: HTMLElement): string => {
    const accordionItem = element.closest('[data-value]') as HTMLElement;
    return accordionItem?.getAttribute('data-value') || '';
  };

  return (
    <div
      ref={(el) => {
        if (el) {
          const itemValue = getItemValue(el);
          const isOpen = openItems.includes(itemValue);
          el.setAttribute('data-state', isOpen ? 'open' : 'closed');
        }
      }}
      className={cn(
        'overflow-hidden text-sm transition-all',
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
    >
      <div className="pb-4 pt-0">
        {children}
      </div>
    </div>
  );
};

// Compound component exports with proper typing
const AccordionCompound = Accordion as typeof Accordion & {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

AccordionCompound.Item = AccordionItem;
AccordionCompound.Trigger = AccordionTrigger;
AccordionCompound.Content = AccordionContent;

export { AccordionCompound as Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export default AccordionCompound;
