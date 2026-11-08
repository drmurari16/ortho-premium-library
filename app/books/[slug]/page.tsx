import Link from 'next/link';
import { ArrowLeft, BookOpen, Lock, ShieldCheck } from 'lucide-react';
import { notFound } from 'next/navigation';
import { books } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default function BookDetailPage({ params }: { params: { slug: string } }) {
  const book = books.find((item) => item.slug === params.slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="section-shell py-16">
      <Link href="/books" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-navy-900">
        <ArrowLeft size={16} /> Back to books
      </Link>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface overflow-hidden">
          <img src={book.image} alt={book.title} className="h-full w-full object-cover" />
        </div>

        <div>
          <span className="tag">{book.category}</span>
          <h1 className="mt-5 text-4xl font-black text-navy-900">{book.title}</h1>
          <p className="mt-3 text-lg text-slate-600">by {book.author}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span>{book.pages} pages</span>
            <span>•</span>
            <span>{book.isFree ? 'Open access' : `${formatPrice(book.price)} digital purchase`}</span>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button className="gold-btn">{book.isFree ? 'Read now' : 'Buy now'}</button>
            <button className="navy-btn">Save to library</button>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-bold text-navy-900">About this title</h2>
            <p className="mt-3 text-slate-600">{book.description}</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-2 font-semibold text-navy-900"><BookOpen size={16} /> Access</div>
              <p className="mt-3 text-sm text-slate-600">{book.isFree ? 'Read-only secure preview and free access' : 'Paid secure checkout with membership support'}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-2 font-semibold text-navy-900"><ShieldCheck size={16} /> Protection</div>
              <p className="mt-3 text-sm text-slate-600">Watermarked digital access without exposing the original PDF for unlawful download.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-3xl bg-navy-900 p-8 text-white">
        <h2 className="text-2xl font-bold">Secure digital reading preview</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['Chapter 1 | Clinical fundamentals', 'Chapter 2 | Surgical decision-making', 'Chapter 3 | Patient rehabilitation'].map((chapter) => (
            <div key={chapter} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              {chapter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
