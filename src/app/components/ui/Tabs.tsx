'use client';

import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs component');
  }
  return context;
};

export interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ 
  defaultValue = '',
  value,
  onValueChange,
  children,
  className
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultValue);
  
  const activeTab = value !== undefined ? value : internalActiveTab;
  
  const setActiveTab = (tab: string) => {
    if (value === undefined) {
      setInternalActiveTab(tab);
    }
    onValueChange?.(tab);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn('w-full', className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList: React.FC<TabsListProps> = ({ children, className }) => {
  return (
    <div 
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md',
        'bg-surface p-1 text-muted border border-border',
        className
      )}
      role="tablist"
    >
      {children}
    </div>
  );
};

const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
  value, 
  children, 
  disabled = false,
  className 
}) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap',
        'rounded-sm px-3 py-1.5 text-sm font-medium',
        'ring-offset-background transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        isActive 
          ? 'bg-background text-foreground shadow-sm'
          : 'hover:bg-background/50 hover:text-foreground',
        className
      )}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, className }) => {
  const { activeTab } = useTabsContext();
  
  if (activeTab !== value) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      className={cn(
        'mt-2 ring-offset-background',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className
      )}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

// Compound component exports with proper typing
const TabsCompound = Tabs as typeof Tabs & {
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
  Content: typeof TabsContent;
};

TabsCompound.List = TabsList;
TabsCompound.Trigger = TabsTrigger;
TabsCompound.Content = TabsContent;

export { TabsCompound as Tabs, TabsList, TabsTrigger, TabsContent };
export default TabsCompound;
