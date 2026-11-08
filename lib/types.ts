export type SiteSection = {
  slug: string;
  title: string;
  description: string;
};

export const adminSections: SiteSection[] = [
  { slug: 'books', title: 'Books', description: 'Upload and manage e-books, pricing and viewer access.' },
  { slug: 'gallery', title: 'Gallery', description: 'Organise images, categories and attribution records.' },
  { slug: 'news', title: 'News', description: 'Publish articles, schedule updates and share content.' },
  { slug: 'videos', title: 'Videos', description: 'Upload courses and keep members-only playlists secure.' },
  { slug: 'users', title: 'Users', description: 'Review membership state, user access and payment logs.' },
  { slug: 'payments', title: 'Payments', description: 'Monitor subscriptions, invoices and refunds.' },
];
