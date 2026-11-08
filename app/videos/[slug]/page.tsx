import Link from 'next/link';
import { ArrowLeft, Lock, PlayCircle, Video } from 'lucide-react';
import { notFound } from 'next/navigation';
import { videos } from '@/lib/data';

export function generateStaticParams() {
  return videos.map((video) => ({ slug: video.slug }));
}

export default function VideoDetailPage({ params }: { params: { slug: string } }) {
  const video = videos.find((item) => item.slug === params.slug);

  if (!video) {
    notFound();
  }

  return (
    <div className="section-shell py-16">
      <Link href="/videos" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-navy-900">
        <ArrowLeft size={16} /> Back to videos
      </Link>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="card-surface p-4">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <img src={video.image} alt={video.title} className="h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-navy-900 shadow-xl">
                <PlayCircle size={28} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="tag">{video.category}</span>
          <h1 className="mt-5 text-4xl font-black text-navy-900">{video.title}</h1>
          <p className="mt-4 text-slate-600">{video.description}</p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <Video size={16} /> Duration: {video.duration}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              {video.premium ? <Lock size={16} /> : <PlayCircle size={16} />} {video.premium ? 'Premium member-only video' : 'Free video access'}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button className="gold-btn">{video.premium ? 'Unlock access' : 'Watch now'}</button>
            <Link href="/pricing" className="navy-btn">Membership</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
