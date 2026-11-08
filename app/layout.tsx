import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Ortho Premium Library & Media',
    template: '%s | Ortho Premium Library & Media',
  },
  description:
    'Premium orthopaedic education, digital publications, medical books, news, gallery, and video content for professionals and students.',
  keywords: ['orthopaedics', 'medical books', 'doctor education', 'premium library', 'orthopaedic news'],
  openGraph: {
    title: 'Ortho Premium Library & Media',
    description: 'A premium orthopaedic publishing and learning platform.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-gold-400/70 selection:text-navy-900">
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
