import Link from 'next/link';
import { ArrowLeft, Calendar, UserRound } from 'lucide-react';
import { news } from '@/lib/data';

export default function NewsPage() {
  return (
    <div className="section-shell py-16">
      <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="inline-flex items-center gap-2 hover:text-navy-900"><ArrowLeft size={16} /> Home</Link>
      </div>

      <div>
        <span className="tag">News portal</span>
        <h1 className="mt-4 text-4xl font-black text-navy-900">Latest orthopaedic and medical news</h1>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {news.map((article) => (
          <article key={article.slug} className="card-surface overflow-hidden">
            <img src={article.image} alt={article.title} className="h-52 w-full object-cover" />
            <div className="p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-600">{article.category}</div>
              <h2 className="mt-3 text-2xl font-bold text-navy-900">{article.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{article.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-2"><UserRound size={12} /> {article.author}</span>
                <span className="inline-flex items-center gap-2"><Calendar size={12} /> {article.date}</span>
              </div>
              <Link href={`/news/${article.slug}`} className="mt-6 inline-flex items-center text-sm font-semibold text-navy-900">
                Read article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
