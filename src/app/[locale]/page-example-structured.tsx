import { useHomePageConfig } from '@/lib/page-config-resolver';

/**
 * Homepage with structured configuration
 */
export default function HomePage() {
  const config = useHomePageConfig(); // Structured config like header/footer
  
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>{config.hero.headline}</h1>
        <p>{config.hero.subtitle}</p>
        <a href={config.hero.ctaHref} className="btn-primary">
          {config.hero.ctaText}
        </a>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>{config.features.title}</h2>
        <div className="grid">
          {config.features.items.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Section */}
      <section className="social">
        <h2>{config.social.title}</h2>
        <p>{config.social.description}</p>
      </section>
    </div>
  );
}
