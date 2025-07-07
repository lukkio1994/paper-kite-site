'use client';

import { useState, useEffect, useCallback } from 'react';
import { Header } from './Header';
import type { ResolvedHeaderConfig } from '@/lib/config-resolver';

/**
 * Props for the DynamicHeader component
 */
interface DynamicHeaderProps {
  /** Initial/fallback header configuration */
  initialConfig?: Partial<ResolvedHeaderConfig>;
  /** Whether to fetch config on mount */
  enableDynamicConfig?: boolean;
  /** Polling interval for config updates in milliseconds (0 to disable) */
  pollingInterval?: number;
  /** Callback when config is loaded */
  onConfigLoad?: (config: ResolvedHeaderConfig) => void;
  /** Callback when config loading fails */
  onConfigError?: (error: Error) => void;
}

/**
 * DynamicHeader component that supports runtime configuration updates
 * 
 * This component wraps the Header component and provides dynamic configuration
 * capabilities by fetching config from the /api/config endpoint.
 * 
 * Features:
 * - Fetches configuration on mount
 * - Optional polling for real-time updates
 * - Graceful fallback to initial config on errors
 * - Type-safe configuration merging
 * - Loading state management
 */
export function DynamicHeader({
  initialConfig,
  enableDynamicConfig = true,
  pollingInterval = 0,
  onConfigLoad,
  onConfigError
}: DynamicHeaderProps) {
  const [config, setConfig] = useState<Partial<ResolvedHeaderConfig> | undefined>(initialConfig);
  const [isLoading, setIsLoading] = useState(enableDynamicConfig);
  const [error, setError] = useState<Error | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  /**
   * Fetch header configuration from API
   */
  const fetchConfig = useCallback(async () => {
    try {
      const response = await fetch('/api/config?component=header', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch header config: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.message || 'Unknown error occurred');
      }

      if (data.header) {
        setConfig(data.header);
        setLastUpdated(data.lastUpdated);
        setError(null);
        onConfigLoad?.(data.header);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error occurred');
      console.error('Failed to fetch header configuration:', error);
      setError(error);
      onConfigError?.(error);
      
      // Fallback to initial config if available
      if (initialConfig && !config) {
        setConfig(initialConfig);
      }
    } finally {
      setIsLoading(false);
    }
  }, [initialConfig, config, onConfigLoad, onConfigError]);

  /**
   * Initialize configuration fetching
   */
  useEffect(() => {
    if (!enableDynamicConfig) {
      setIsLoading(false);
      return;
    }

    fetchConfig();
  }, [enableDynamicConfig, fetchConfig]);

  /**
   * Set up polling for configuration updates
   */
  useEffect(() => {
    if (!enableDynamicConfig || pollingInterval <= 0) {
      return;
    }

    const interval = setInterval(fetchConfig, pollingInterval);
    return () => clearInterval(interval);
  }, [enableDynamicConfig, pollingInterval, fetchConfig]);

  // Show nothing while loading unless we have initial config
  if (isLoading && !config) {
    return (
      <div className="h-16 bg-background border-b border-border animate-pulse" 
           role="banner" 
           aria-label="Loading header">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="h-8 w-32 bg-muted rounded animate-pulse" />
          <div className="flex items-center gap-4">
            <div className="h-8 w-20 bg-muted rounded animate-pulse" />
            <div className="h-8 w-20 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  // If no config available, don't render anything
  if (!config) {
    return null;
  }

  return (
    <Header
      logo={config.logo}
      navigation={config.navigation}
      actions={config.actions}
      appearance={config.appearance}
      mobile={config.mobile}
      accessibility={config.accessibility}
      data-last-updated={lastUpdated}
      data-dynamic-config={enableDynamicConfig}
      data-error={error?.message}
    />
  );
}

/**
 * Hook for manually fetching header configuration
 * Useful for admin panels or configuration management interfaces
 */
export function useHeaderConfig() {
  const [config, setConfig] = useState<ResolvedHeaderConfig | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchConfig = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/config?component=header');
      if (!response.ok) {
        throw new Error(`Failed to fetch header config: ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.message);
      }
      setConfig(data.header);
      setError(null);
      return data.header;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateConfig = async (newConfig: Partial<ResolvedHeaderConfig>) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ component: 'header', config: newConfig }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update header config: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.error) {
        throw new Error(data.message);
      }
      
      // Refresh config after update
      await fetchConfig();
      return data;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    config,
    isLoading,
    error,
    fetchConfig,
    updateConfig,
  };
}
