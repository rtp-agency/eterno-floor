import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { CatalogBrowser } from '@/components/CatalogBrowser';
import { collectionOrder, type CollectionId } from '@/lib/products';

export default async function CatalogPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ c?: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { c } = await searchParams;
  const dict = getDictionary(lang);

  const initial: CollectionId | 'all' =
    c && (collectionOrder as string[]).includes(c) ? (c as CollectionId) : 'all';

  return (
    <section className="page">
      <div className="container">
        <div className="section-head section-head--page">
          <h1 className="section-head__title">{dict.catalog.title}</h1>
          <p className="section-head__lead">{dict.catalog.lead}</p>
        </div>
        <CatalogBrowser locale={lang} dict={dict} initialCollection={initial} />
      </div>
    </section>
  );
}
