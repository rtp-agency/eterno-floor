import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { FeatureIcon } from '@/components/FeatureIcon';
import { Logo } from '@/components/Logo';
import { collections, collectionOrder, products, CONTACT } from '@/lib/products';

const HERO_IMG = '/products/galerie-salerno.webp';

// representative decor thumbnail per collection
const collectionCover: Record<string, string> = {
  galerie: 'galerie-ventura',
  gravity: 'gravity-meadow',
  handshaben: 'handshaben-walter',
  visage: 'visage-carter',
  rivera: 'rivera-latte',
};

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const base = `/${lang}`;

  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ ['--hero-img' as string]: `url(${HERO_IMG})` }}>
        <div className="container hero__inner">
          <div className="hero__brand">
            <Logo />
          </div>
          <p className="hero__eyebrow">{dict.hero.eyebrow}</p>
          <h1 className="hero__title">{dict.hero.title}</h1>
          <p className="hero__lead">{dict.hero.lead}</p>
          <ul className="hero__audience">
            {dict.hero.audience.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <div className="hero__cta">
            <Link className="btn btn--primary" href={`${base}/catalog`}>{dict.hero.ctaCatalog}</Link>
            <Link className="btn btn--ghost" href={`${base}#contact`}>{dict.hero.ctaContact}</Link>
          </div>
        </div>
      </section>

      {/* PERFORMANCE STRIP */}
      <section className="perf">
        <div className="container">
          <div className="section-head">
            <h2 className="section-head__title">{dict.performance.title}</h2>
            <p className="section-head__lead">{dict.performance.lead}</p>
          </div>
          <ul className="perf__grid">
            {dict.performance.points.map((p, i) => (
              <li key={p} className="perf__item">
                <span className="perf__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="perf__text">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-head">
            <h2 className="section-head__title">{dict.features.title}</h2>
            <p className="section-head__lead">{dict.features.lead}</p>
          </div>
          <ul className="features__grid">
            {dict.features.items.map((label, i) => (
              <li key={label} className="feature">
                <span className="feature__icon">
                  <FeatureIcon index={i} />
                </span>
                <span className="feature__label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections" id="collections">
        <div className="container">
          <div className="section-head">
            <h2 className="section-head__title">{dict.collections.title}</h2>
            <p className="section-head__lead">{dict.collections.lead}</p>
          </div>
          <ul className="collections__grid">
            {collectionOrder.map((id) => {
              const col = collections[id];
              const count = products.filter((p) => p.collection === id).length;
              return (
                <li key={id}>
                  <Link className="col-card" href={`${base}/catalog?c=${id}`}>
                    <span className="col-card__media">
                      <img src={`/products/${collectionCover[id]}-thumb.webp`} alt={col.name} loading="lazy" />
                    </span>
                    <span className="col-card__body">
                      <span className="col-card__name">{col.name}</span>
                      <span className="col-card__meta">
                        {count} {dict.collections.decorsWord} · {col.thickness} mm
                      </span>
                      <span className="col-card__link">{dict.collections.view} →</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* PARTNER */}
      <section className="partner">
        <div className="container">
          <div className="section-head">
            <h2 className="section-head__title">{dict.partner.title}</h2>
            <p className="section-head__lead">{dict.partner.lead}</p>
          </div>
          <ul className="partner__grid">
            {dict.partner.points.map((p) => (
              <li key={p.title} className="partner__item">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container contact__inner">
          <div className="contact__intro">
            <h2 className="section-head__title">{dict.contact.title}</h2>
            <p className="section-head__lead">{dict.contact.lead}</p>
            <a className="btn btn--primary" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              {dict.contact.whatsapp}
            </a>
          </div>
          <ul className="contact__cards">
            <li>
              <span className="contact__label">{dict.contact.phoneLabel}</span>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">{CONTACT.phoneDisplay}</a>
            </li>
            <li>
              <span className="contact__label">{dict.contact.emailLabel}</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <span className="contact__label">{dict.contact.webLabel}</span>
              <a href={CONTACT.websiteUrl} target="_blank" rel="noopener noreferrer">{CONTACT.website}</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
