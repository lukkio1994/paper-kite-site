"use client";

import { Header } from "./Header";
import { useResolvedHeaderConfig } from '@/lib/config-resolver';

export default function HeaderClient() {
  const config = useResolvedHeaderConfig();

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
