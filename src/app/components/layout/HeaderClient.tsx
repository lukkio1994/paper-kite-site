"use client";

import { Header } from "./Header";
import { useHeaderConfig } from '@/lib/site-config';

export default function HeaderClient() {
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
