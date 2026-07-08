'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { locales, localeNames, type Locale } from '@/lib/i18n';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function switchTo(next: Locale) {
    const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');
    router.push(`/${next}${rest || ''}`);
    setOpen(false);
  }

  return (
    <div className="lang" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="lang__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{localeNames[locale]}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <ul className="lang__menu" role="listbox">
          {locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                className={`lang__item${l === locale ? ' is-active' : ''}`}
                onClick={() => switchTo(l)}
              >
                {localeNames[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
