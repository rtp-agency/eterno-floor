import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

const BASE = 'https://eternodesigns.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/catalog'];
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: new Date('2026-07-08'),
        changeFrequency: path === '' ? 'monthly' : 'weekly',
        priority: path === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${BASE}/${l}${path}`])),
        },
      });
    }
  }

  return entries;
}
