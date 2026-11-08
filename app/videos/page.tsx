import Link from 'next/link';
import { ArrowLeft, Play, Video } from 'lucide-react';
import { notFound } from 'next/navigation';
import { videos } from '@/lib/data';

export default function VideosPage() {
  return (
    <div className="section-shell py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="tag">Video library</span>
          <h1 className="mt-4 text-4xl font-black text-navy-900">Paywalled and free educational media</h1>
        </div>
        <Link href="/pricing" className="gold-btn">Unlock premium access</Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <article key={video.slug} className="card-surface p-4">
            <div className="relative">
              <img src={video.image} alt={video.title} className="h-56 w-full rounded-2xl object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 text-navy-900 shadow-lg">
                  <Play size={24} className="ml-1 fill-current" />
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
              <span>{video.category}</span>
              <span>{video.premium ? 'Premium' : 'Free'}</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-navy-900">{video.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{video.description}</p>
            <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><Video size={14} /> {video.duration}</span>
              <Link href={`/videos/${video.slug}`} className="font-semibold text-navy-900">Watch</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
