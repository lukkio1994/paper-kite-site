'use client';

import { Header } from './Header';
import { useHeaderConfig } from '@/lib/site-config';

/**
 * POC: Client wrapper for Header using the new JSON-based configuration system
 * This demonstrates how the unified site config can be used instead of separate config files
 */
export default function HeaderClientPOC() {
  const config = useHeaderConfig();

  return (
    <Header
      logo={config.logo}
      navigation={config.navigation}
      actions={config.actions}
      appearance={config.appearance}
      mobile={config.mobile}
      accessibility={config.accessibility}
    />
  );
}
