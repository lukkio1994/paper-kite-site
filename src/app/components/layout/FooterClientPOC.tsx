'use client';

import { Footer } from './Footer';
import { useFooterConfig } from '@/lib/site-config';

/**
 * POC: Client wrapper for Footer using the new JSON-based configuration system
 * This demonstrates how the unified site config can be used instead of separate config files
 */
export default function FooterClientPOC() {
  const config = useFooterConfig();

  return (
    <Footer
      contact={config.contact}
      socialLinks={config.socialLinks}
      legalLinks={config.legalLinks}
      productLinks={config.productLinks}
      solutionLinks={config.solutionLinks}
      resourceLinks={config.resourceLinks}
      supportLinks={config.supportLinks}
      companyLinks={config.companyLinks}
      appearance={config.appearance}
      copyright={config.copyright}
    />
  );
}
