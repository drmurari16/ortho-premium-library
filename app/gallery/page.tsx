import Link from 'next/link';
import { ArrowRight, Images, Search, Tag } from 'lucide-react';
import { gallery } from '@/lib/data';

export default function GalleryPage() {
  return (
    <div className="section-shell py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="tag">Photo gallery</span>
          <h1 className="mt-4 text-4xl font-black text-navy-900">Clinical images and educational visuals</h1>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
          <Search size={16} />
          <input aria-label="Search gallery" placeholder="Search images" className="w-40 outline-none" />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-2 text-sm">
        {['Medical Illustrations', 'Orthopaedic Implants', 'Clinical Images', 'Infographics', 'Event Photographs'].map((item) => (
          <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2">{item}</span>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {gallery.map((item) => (
          <article key={item.title} className="card-surface overflow-hidden">
            <img src={item.image} alt={item.title} className="h-60 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-[0.22em] text-gold-600">{item.category}</span>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase text-slate-600">{item.tag}</span>
              </div>
              <h2 className="mt-4 text-xl font-bold text-navy-900">{item.title}</h2>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><Images size={14} /> Attributed</span>
                <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-navy-900">License info <ArrowRight size={14} /></Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
