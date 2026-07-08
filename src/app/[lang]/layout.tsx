import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, isLocale, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

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
    alternates: {
      canonical: `/${l}`,
      languages: Object.fromEntries(locales.map((x) => [x, `/${x}`])),
    },
    openGraph: {
      title: meta[l].title,
      description: meta[l].description,
      type: 'website',
    },
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

  return (
    <html lang={lang}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header locale={lang} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={lang} dict={dict} />
      </body>
    </html>
  );
}
