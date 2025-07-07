'use client';

import { useState } from 'react';
import { useHeaderConfig, useFooterConfig } from '@/app/components/layout';
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';
import { Card } from '@/app/components/ui';

/**
 * Admin demo page for managing dynamic configuration
 * 
 * This page demonstrates:
 * - Fetching current configuration using hooks
 * - Updating configuration via API
 * - Real-time configuration management
 * - Error handling in admin interfaces
 */
export default function AdminConfigDemo() {
  const headerConfig = useHeaderConfig();
  const footerConfig = useFooterConfig();
  const [updateMessage, setUpdateMessage] = useState<string>('');

  const handleUpdateHeaderLogo = async () => {
    try {
      await headerConfig.updateConfig({
        logo: {
          text: `Dynamic App ${Date.now()}`,
          href: '/',
          className: 'text-foreground text-xl font-bold'
        }
      });
      setUpdateMessage('Header logo updated successfully!');
      setTimeout(() => setUpdateMessage(''), 3000);
    } catch (error) {
      setUpdateMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setTimeout(() => setUpdateMessage(''), 5000);
    }
  };

  const handleUpdateFooterCopyright = async () => {
    try {
      await footerConfig.updateConfig({
        copyright: `© ${new Date().getFullYear()} Dynamic App - Updated at ${new Date().toLocaleTimeString()}`
      });
      setUpdateMessage('Footer copyright updated successfully!');
      setTimeout(() => setUpdateMessage(''), 3000);
    } catch (error) {
      setUpdateMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setTimeout(() => setUpdateMessage(''), 5000);
    }
  };

  const handleFetchConfigs = async () => {
    try {
      await Promise.all([
        headerConfig.fetchConfig(),
        footerConfig.fetchConfig()
      ]);
      setUpdateMessage('Configurations refreshed successfully!');
      setTimeout(() => setUpdateMessage(''), 3000);
    } catch (error) {
      setUpdateMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setTimeout(() => setUpdateMessage(''), 5000);
    }
  };

  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Configuration Admin Demo
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 text-center">
          This page demonstrates how to manage dynamic configurations using the provided hooks.
        </p>

        {updateMessage && (
          <div className={`mb-6 p-4 rounded-lg text-center ${
            updateMessage.startsWith('Error') 
              ? 'bg-destructive/10 text-destructive border border-destructive/20' 
              : 'bg-green-50 text-green-800 border border-green-200'
          }`}>
            {updateMessage}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Header Configuration */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Header Configuration</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Current Logo:</h3>
                <code className="block bg-muted p-2 rounded text-sm">
                  {headerConfig.config?.logo?.text || 'Loading...'}
                </code>
              </div>

              <div>
                <h3 className="font-medium mb-2">Navigation Items:</h3>
                <code className="block bg-muted p-2 rounded text-sm">
                  {headerConfig.config?.navigation?.length || 0} items
                </code>
              </div>

              <div>
                <h3 className="font-medium mb-2">Actions:</h3>
                <code className="block bg-muted p-2 rounded text-sm">
                  {headerConfig.config?.actions?.length || 0} buttons
                </code>
              </div>

              <Button 
                onClick={handleUpdateHeaderLogo}
                disabled={headerConfig.isLoading}
                className="w-full"
              >
                {headerConfig.isLoading ? 'Updating...' : 'Update Logo'}
              </Button>

              {headerConfig.error && (
                <p className="text-destructive text-sm">
                  Error: {headerConfig.error.message}
                </p>
              )}
            </div>
          </Card>

          {/* Footer Configuration */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Footer Configuration</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Copyright:</h3>
                <code className="block bg-muted p-2 rounded text-sm">
                  {footerConfig.config?.copyright || 'Loading...'}
                </code>
              </div>

              <div>
                <h3 className="font-medium mb-2">Social Links:</h3>
                <code className="block bg-muted p-2 rounded text-sm">
                  {footerConfig.config?.socialLinks?.length || 0} links
                </code>
              </div>

              <div>
                <h3 className="font-medium mb-2">Contact Email:</h3>
                <code className="block bg-muted p-2 rounded text-sm">
                  {footerConfig.config?.contact?.email || 'Loading...'}
                </code>
              </div>

              <Button 
                onClick={handleUpdateFooterCopyright}
                disabled={footerConfig.isLoading}
                className="w-full"
              >
                {footerConfig.isLoading ? 'Updating...' : 'Update Copyright'}
              </Button>

              {footerConfig.error && (
                <p className="text-destructive text-sm">
                  Error: {footerConfig.error.message}
                </p>
              )}
            </div>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <Button 
            onClick={handleFetchConfigs}
            disabled={headerConfig.isLoading || footerConfig.isLoading}
            variant="outline"
            className="mr-4"
          >
            {(headerConfig.isLoading || footerConfig.isLoading) ? 'Refreshing...' : 'Refresh All Configs'}
          </Button>

          <Button 
            onClick={() => window.open('/api/config', '_blank')}
            variant="primary"
          >
            View API Response
          </Button>
        </div>

        <div className="mt-12 bg-muted/50 border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">API Usage Examples</h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Fetch Header Config:</h4>
              <code className="block bg-background border rounded p-3">
                const config = await fetch(&apos;/api/config?component=header&apos;);
              </code>
            </div>
            <div>
              <h4 className="font-medium mb-2">Update Footer Config:</h4>
              <code className="block bg-background border rounded p-3">
                {`await fetch(&apos;/api/config&apos;, {
  method: &apos;POST&apos;,
  headers: { &apos;Content-Type&apos;: &apos;application/json&apos; },
  body: JSON.stringify({
    component: &apos;footer&apos;,
    config: { copyright: &apos;New copyright text&apos; }
  })
});`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
