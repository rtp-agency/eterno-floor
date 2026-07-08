'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: `${base}`, label: dict.nav.home },
    { href: `${base}/catalog`, label: dict.nav.catalog },
    { href: `${base}#features`, label: dict.nav.features },
    { href: `${base}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header__inner">
        <Link href={base} className="header__logo" onClick={() => setOpen(false)}>
          <Logo compact />
        </Link>

        <nav className={`header__nav${open ? ' is-open' : ''}`}>
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="header__link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="header__nav-lang">
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>

        <div className="header__right">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className={`burger${open ? ' is-open' : ''}`}
            aria-label={dict.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
