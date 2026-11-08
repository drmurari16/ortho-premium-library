import Link from 'next/link';
import { ArrowLeft, BookOpen, Lock, ShieldCheck, Star } from 'lucide-react';
import { books } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

export default function BooksPage() {
  return (
    <div className="section-shell py-16">
      <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="inline-flex items-center gap-2 hover:text-navy-900"><ArrowLeft size={16} /> Home</Link>
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="tag">Digital books</span>
          <h1 className="mt-4 text-4xl font-black text-navy-900">Professional orthopaedic library</h1>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-2">Free ebooks</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-2">Premium access</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-2">Secure reader</span>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
          <article key={book.slug} className="card-surface overflow-hidden">
            <img src={book.image} alt={book.title} className="h-60 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
                <span>{book.category}</span>
                <span>{book.isFree ? 'Free' : formatPrice(book.price)}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-navy-900">{book.title}</h2>
              <p className="mt-2 text-sm text-slate-600">by {book.author}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <Star size={14} className="fill-gold-400 text-gold-500" /> {book.pages} pages • {book.tags.join(' • ')}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{book.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <Link href={`/books/${book.slug}`} className="inline-flex items-center gap-2 font-semibold text-navy-900">
                  Read preview <ArrowLeft size={16} className="rotate-180" />
                </Link>
                {book.isFree ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <Lock size={12} /> Free access
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                    <ShieldCheck size={12} /> Premium
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
