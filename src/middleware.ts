import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

function detectLocale(req: NextRequest): string {
  const header = req.headers.get('accept-language');
  if (header) {
    const preferred = header
      .split(',')
      .map((p) => p.split(';')[0].trim().slice(0, 2).toLowerCase());
    for (const p of preferred) {
      if ((locales as readonly string[]).includes(p)) return p;
    }
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, static assets and files with an extension (images, etc.)
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
