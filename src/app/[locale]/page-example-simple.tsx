import { usePageTranslations } from '@/lib/page-config-resolver';

/**
 * Simple page with direct translations
 */
export default function AboutPage() {
  const t = usePageTranslations('about'); // Simple translations
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <p>{t('mission')}</p>
      
      <section>
        <h2>{t('team.title')}</h2>
        <p>{t('team.description')}</p>
      </section>
    </div>
  );
}
