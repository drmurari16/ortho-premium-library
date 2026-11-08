import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PWA Manifest',
};

export default function Manifest() {
  return {
    name: 'Ortho Premium Library & Media',
    short_name: 'Ortho Premium',
    description: 'Premium orthopaedic education, books, media and membership portal.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
