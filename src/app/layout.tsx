/**
 * Root Layout - Locale Redirect
 * 
 * This layout now serves as a minimal wrapper that redirects to localized routes.
 * The actual layout with internationalization features is in [locale]/layout.tsx
 */

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // This layout should only be hit for non-localized routes
  // which we redirect to the default locale
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
