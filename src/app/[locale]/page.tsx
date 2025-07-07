import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center space-y-8 p-8">

      {/* Header */}
      <div className="bg-surface border border-border rounded-xl shadow-lg p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">{t('title')}</h1>
        <p className="text-muted text-lg mb-6">
          🎉 Tailwind CSS v4 + Expanded Palette Demo
        </p>

        {/* Color Test Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

          {/* Primary variations */}
          <div className="bg-primary text-white p-4 rounded-lg text-sm text-center">Primary</div>
          <div className="bg-primary-light text-white p-4 rounded-lg text-sm text-center">Primary Light</div>
          <div className="bg-primary-dark text-white p-4 rounded-lg text-sm text-center">Primary Dark</div>

          {/* Functional colors */}
          <div className="bg-secondary text-white p-4 rounded-lg text-sm text-center">Secondary</div>
          <div className="bg-accent text-white p-4 rounded-lg text-sm text-center">Accent</div>
          <div className="bg-success text-white p-4 rounded-lg text-sm text-center">Success</div>
          <div className="bg-info text-white p-4 rounded-lg text-sm text-center">Info</div>
          <div className="bg-warn text-white p-4 rounded-lg text-sm text-center">Warn</div>
          <div className="bg-error text-white p-4 rounded-lg text-sm text-center">Error</div>

          {/* Neutral and structure */}
          <div className="bg-background text-foreground border border-border p-4 rounded-lg text-sm text-center">
            Background
          </div>
          <div className="bg-surface text-foreground border border-border p-4 rounded-lg text-sm text-center">
            Surface
          </div>
          <div className="bg-overlay text-white p-4 rounded-lg text-sm text-center">
            Overlay
          </div>
          <div className="bg-muted text-white p-4 rounded-lg text-sm text-center">
            Muted
          </div>
          <div className="bg-border text-foreground p-4 rounded-lg text-sm text-center">
            Border
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-muted text-sm max-w-md">
        If you can see all the colors above, your Tailwind + expanded palette + dark mode setup is working perfectly!
      </div>
    </div>
  );
}
