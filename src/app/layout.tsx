import './globals.css';
import type { ReactNode } from 'react';

// Pass-through root layout. The <html>/<body> shell is rendered by
// src/app/[lang]/layout.tsx so the document language matches the locale.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
