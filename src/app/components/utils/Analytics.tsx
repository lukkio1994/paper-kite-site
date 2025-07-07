'use client';

import React, { useEffect } from 'react';

// Type for Google Analytics gtag function
type GtagFunction = (...args: unknown[]) => void;

interface AnalyticsProps {
  gaId?: string;
  gtagConfig?: object;
  enableGoogleAnalytics?: boolean;
  enableCustomTracking?: boolean;
  customTrackingFunction?: (event: string, data?: Record<string, unknown>) => void;
}

interface TrackEventOptions {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
}

// Google Analytics tracking function
export const trackEvent = (
  action: string,
  options: TrackEventOptions = {}
) => {
  if (typeof window !== 'undefined') {
    const gtag = (window as { gtag?: GtagFunction }).gtag;
    if (gtag) {
      gtag('event', action, {
        event_category: options.event_category,
        event_label: options.event_label,
        value: options.value,
        ...options.custom_parameters,
      });
    }
  }
};

// Page view tracking
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined') {
    const gtag = (window as { gtag?: GtagFunction }).gtag;
    if (gtag) {
      gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
        page_location: url,
        page_title: title,
      });
    }
  }
};

// Custom event tracking
export const trackCustomEvent = (
  event: string,
  data?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined') {
    // Google Analytics
    const gtag = (window as { gtag?: GtagFunction }).gtag;
    if (gtag) {
      gtag('event', event, data);
    }
    
    // Custom tracking (could be any analytics service)
    console.log('Custom Event:', event, data);
  }
};

const Analytics: React.FC<AnalyticsProps> = ({
  gaId,
  gtagConfig = {},
  enableGoogleAnalytics = true,
  enableCustomTracking = false,
  customTrackingFunction,
}) => {
  const googleAnalyticsId = gaId || process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (enableGoogleAnalytics && googleAnalyticsId) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Analytics
      const windowWithGtag = window as { dataLayer?: unknown[]; gtag?: GtagFunction };
      windowWithGtag.dataLayer = windowWithGtag.dataLayer || [];
      windowWithGtag.gtag = function gtag(...args: unknown[]) {
        windowWithGtag.dataLayer?.push(args);
      };
      const gtag = windowWithGtag.gtag;
      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
        ...gtagConfig,
      });
    }

    // Initialize custom tracking
    if (enableCustomTracking && customTrackingFunction) {
      customTrackingFunction('init', { timestamp: new Date().toISOString() });
    }
  }, [googleAnalyticsId, enableGoogleAnalytics, enableCustomTracking, customTrackingFunction, gtagConfig]);

  // This component doesn't render anything
  return null;
};

export default Analytics;
export type { AnalyticsProps, TrackEventOptions };
