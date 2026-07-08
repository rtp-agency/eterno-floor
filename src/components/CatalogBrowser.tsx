'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import {
  products,
  collections,
  collectionOrder,
  productName,
  CONTACT,
  type Tone,
  type CollectionId,
  type Product,
} from '@/lib/products';

const TONES: Tone[] = ['light', 'grey', 'beige', 'brown', 'dark'];

export function CatalogBrowser({
  locale,
  dict,
  initialCollection = 'all',
}: {
  locale: Locale;
  dict: Dictionary;
  initialCollection?: CollectionId | 'all';
}) {
  const c = dict.catalog;
  const [collection, setCollection] = useState<CollectionId | 'all'>(initialCollection);
  const [tone, setTone] = useState<Tone | 'all'>('all');
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (collection === 'all' || p.collection === collection) &&
          (tone === 'all' || p.tone === tone),
      ),
    [collection, tone],
  );

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) => {
      setActive((i) => {
        if (i === null) return i;
        const n = filtered.length;
        return (i + dir + n) % n;
      });
    },
    [filtered.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, step]);

  const activeProduct = active !== null ? filtered[active] : null;

  return (
    <div className="catalog">
      <div className="catalog__filters">
        <div className="filter-group">
          <span className="filter-group__label">{c.filterCollection}</span>
          <div className="chips">
            <button className={`chip${collection === 'all' ? ' is-active' : ''}`} onClick={() => setCollection('all')}>
              {c.all}
            </button>
            {collectionOrder.map((id) => (
              <button
                key={id}
                className={`chip${collection === id ? ' is-active' : ''}`}
                onClick={() => setCollection(id)}
              >
                {collections[id].name}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-group__label">{c.filterTone}</span>
          <div className="chips">
            <button className={`chip${tone === 'all' ? ' is-active' : ''}`} onClick={() => setTone('all')}>
              {c.all}
            </button>
            {TONES.map((t) => (
              <button key={t} className={`chip chip--tone tone-${t}${tone === t ? ' is-active' : ''}`} onClick={() => setTone(t)}>
                <span className={`tone-dot tone-dot--${t}`} />
                {c.tones[t]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="catalog__count">{filtered.length} {c.decorsWord}</p>

      {filtered.length === 0 ? (
        <p className="catalog__empty">{c.empty}</p>
      ) : (
        <ul className="grid">
          {filtered.map((p, i) => (
            <li key={p.id}>
              <button className="card" onClick={() => setActive(i)}>
                <span className="card__media">
                  <img src={`/products/${p.id}-thumb.webp`} alt={productName(p, locale)} loading="lazy" />
                </span>
                <span className="card__body">
                  <span className="card__name">{productName(p, locale)}</span>
                  <span className="card__meta">
                    <span className="card__collection">{collections[p.collection].name}</span>
                    <span className="card__ref">{c.specs.article} {p.article}</span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {activeProduct && (
        <Lightbox locale={locale} dict={dict} product={activeProduct} onClose={close} onPrev={() => step(-1)} onNext={() => step(1)} />
      )}
    </div>
  );
}

function Lightbox({
  locale,
  dict,
  product,
  onClose,
  onPrev,
  onNext,
}: {
  locale: Locale;
  dict: Dictionary;
  product: Product;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const c = dict.catalog;
  const col = collections[product.collection];
  const specs = [
    { label: c.specs.thickness, value: `${col.thickness} mm` },
    { label: c.specs.wear, value: `${col.wear} mm` },
    { label: c.specs.size, value: col.size },
    { label: c.specs.bevel, value: col.bevel },
    { label: c.specs.pack, value: `${col.pcsPerPack} ${c.packUnit} · ${col.m2PerPack} m²` },
    { label: c.specs.article, value: product.article },
  ];
  const subject = encodeURIComponent(`${col.name} — ${productName(product, locale)} (${product.article})`);

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" aria-label="Close" onClick={onClose}>×</button>
        <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous" onClick={onPrev}>‹</button>
        <button className="lightbox__nav lightbox__nav--next" aria-label="Next" onClick={onNext}>›</button>

        <div className="lightbox__media">
          <img src={`/products/${product.id}.webp`} alt={productName(product, locale)} />
        </div>
        <div className="lightbox__info">
          <span className="lightbox__collection">{col.name}</span>
          <h3 className="lightbox__name">{productName(product, locale)}</h3>
          <dl className="specs">
            {specs.map((sp) => (
              <div className="specs__row" key={sp.label}>
                <dt>{sp.label}</dt>
                <dd>{sp.value}</dd>
              </div>
            ))}
          </dl>
          <a
            className="btn btn--primary lightbox__cta"
            href={`${CONTACT.whatsapp}?text=${subject}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.request}
          </a>
        </div>
      </div>
    </div>
  );
}
