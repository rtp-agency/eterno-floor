import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { CONTACT } from '@/lib/products';
import { Logo } from './Logo';

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const year = 2025;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <p>{dict.footer.tagline}</p>
        </div>

        <nav className="footer__nav">
          <Link href={base}>{dict.nav.home}</Link>
          <Link href={`${base}/catalog`}>{dict.nav.catalog}</Link>
          <Link href={`${base}#features`}>{dict.nav.features}</Link>
          <Link href={`${base}#contact`}>{dict.nav.contact}</Link>
        </nav>

        <div className="footer__contact">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">{CONTACT.phoneDisplay}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.websiteUrl} target="_blank" rel="noopener noreferrer">{CONTACT.website}</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {year} ETERNO design. {dict.footer.rights}</span>
        <span>{dict.footer.madeFor}</span>
      </div>
    </footer>
  );
}
