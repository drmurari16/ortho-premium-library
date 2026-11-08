import Link from 'next/link';
import { ArrowLeft, CalendarDays, UserRound } from 'lucide-react';
import { notFound } from 'next/navigation';
import { news } from '@/lib/data';

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const article = news.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="section-shell py-16">
      <Link href="/news" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-navy-900">
        <ArrowLeft size={16} /> Back to news
      </Link>

      <article className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-premium">
        <img src={article.image} alt={article.title} className="h-80 w-full object-cover" />
        <div className="p-8 md:p-12">
          <span className="tag">{article.category}</span>
          <h1 className="mt-5 text-3xl font-black text-navy-900 md:text-5xl">{article.title}</h1>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><UserRound size={14} /> {article.author}</span>
            <span className="inline-flex items-center gap-2"><CalendarDays size={14} /> {article.date}</span>
          </div>

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
            <p>
              This detailed clinical update explores practical workflows, perioperative planning and patient communication strategies that improve outcomes in modern orthopaedic practice.
            </p>
            <p>
              Content production, evidence triage and high-quality editorial review are essential to maintain medical trust in a digital media environment. Article archives provide residents and general practitioners with a structured, accessible source of professional knowledge.
            </p>
            <p>
              Modern health publishing also demands secure, compliant and transparent disclosures, especially when featuring sponsorship, partnerships and educational updates to public audiences.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
