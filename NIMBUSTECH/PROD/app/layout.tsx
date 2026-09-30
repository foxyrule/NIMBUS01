import './globals.css';

import type { Metadata } from 'next';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileNavigation } from '@/components/layout/MobileNavigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://nimbustechllc.com'),
  title: 'Nimbus Technologies & Services LLC',
  description: 'Business technology, healthcare records management, real estate services, fantasy sports, and talent scouting solutions from Nimbus Technologies & Services LLC.',
  icons: {
    icon: '/brand/favicon.svg',
    shortcut: '/brand/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Header />
        <MobileNavigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
