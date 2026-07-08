import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { locales, isLocale, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { CONTACT } from '@/lib/products';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: '#241812',
  width: 'device-width',
  initialScale: 1,
};

const ogLocale: Record<Locale, string> = { es: 'es_ES', pt: 'pt_PT', ru: 'ru_RU', en: 'en_US' };

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: 'ETERNO design — Suelos SPC premium para profesionales',
    description:
      'Suelos SPC premium para promotoras, arquitectos, diseñadores de interiores y constructoras. 100% impermeable, alta durabilidad, instalación Click. Precios profesionales y entrega rápida en España.',
  },
  pt: {
    title: 'ETERNO design — Pavimentos SPC premium para profissionais',
    description:
      'Pavimentos SPC premium para promotores, arquitetos, designers de interiores e construtoras. 100% impermeável, alta durabilidade, sistema Click. Preços para profissionais e entrega rápida.',
  },
  ru: {
    title: 'ETERNO design — Премиальные SPC-полы для профессионалов',
    description:
      'Премиальные SPC-полы для застройщиков, архитекторов, дизайнеров и строительных компаний. 100% влагостойкость, высокая износостойкость, замковая система Click. Профессиональные цены и быстрая доставка.',
  },
  en: {
    title: 'ETERNO design — Premium SPC flooring for professionals',
    description:
      'Premium SPC flooring for developers, architects, interior designers and construction companies. 100% waterproof, high durability, Click installation. Trade pricing and fast delivery.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = isLocale(lang) ? lang : 'es';
  return {
    title: meta[l].title,
    description: meta[l].description,
    metadataBase: new URL('https://eternodesigns.com'),
    applicationName: 'ETERNO design',
    keywords:
      'SPC flooring, suelos SPC, pavimentos SPC, SPC-полы, vinyl flooring, click flooring, underfloor heating, waterproof flooring, ETERNO design',
    alternates: {
      canonical: `/${l}`,
      languages: {
        ...Object.fromEntries(locales.map((x) => [x, `/${x}`])),
        'x-default': `/es`,
      },
    },
    openGraph: {
      title: meta[l].title,
      description: meta[l].description,
      type: 'website',
      siteName: 'ETERNO design',
      url: `/${l}`,
      locale: ogLocale[l],
      alternateLocale: locales.filter((x) => x !== l).map((x) => ogLocale[x]),
      images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'ETERNO design — Premium SPC Flooring' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta[l].title,
      description: meta[l].description,
      images: ['/og.jpg'],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ETERNO design',
    url: 'https://eternodesigns.com',
    logo: 'https://eternodesigns.com/og.jpg',
    image: 'https://eternodesigns.com/og.jpg',
    description: meta[lang].description,
    email: CONTACT.email,
    telephone: CONTACT.phoneRaw,
    areaServed: ['ES', 'PT'],
    slogan: dict.hero.title,
    sameAs: [CONTACT.whatsapp],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.phoneRaw,
      email: CONTACT.email,
      contactType: 'sales',
      availableLanguage: ['es', 'pt', 'ru', 'en'],
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: { '@type': 'Product', category: 'SPC flooring', name: 'Premium SPC flooring' },
    },
  };

  return (
    <html lang={lang}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="skip-link">Skip to content</a>
        <Header locale={lang} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={lang} dict={dict} />
      </body>
    </html>
  );
}
