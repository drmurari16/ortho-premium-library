import Link from 'next/link';
import { ArrowRight, BookOpen, ShieldCheck, Smartphone, Sparkles, TrendingUp, Video } from 'lucide-react';
import { books, homeFeatures, news, stats, videos } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';

export default function HomePage() {
  return (
    <>
      <section className="section-shell py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="tag">Orthopaedic learning platform</span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              Premium medical education, news and digital publishing for modern orthopaedic growth.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Explore expert-led books, secure paid media, clinical news and educational videos curated for postgraduate residents, surgeons and healthcare professionals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/books" className="gold-btn">Browse library</Link>
              <Link href="/pricing" className="navy-btn">₹99 membership</Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold-600" /> Secure access</span>
              <span className="flex items-center gap-2"><Video size={16} className="text-gold-600" /> Video learning</span>
              <span className="flex items-center gap-2"><Sparkles size={16} className="text-gold-600" /> Premium content</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-navy-900 via-sky-900 to-slate-700 p-6 text-white shadow-premium">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="mb-5 flex items-center justify-between text-sm text-slate-200">
                <span>Featured collection</span>
                <span className="rounded-full bg-gold-500/20 px-2 py-1 text-xs font-semibold text-gold-200">New</span>
              </div>

              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895973?auto=format&fit=crop&w=1100&q=80"
                alt="Orthopaedic clinical learning"
                className="h-56 w-full rounded-2xl object-cover"
              />

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-gold-300">Course</p>
                  <h3 className="mt-2 text-2xl font-bold">Advanced Trauma Review</h3>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-2 text-sm font-medium">₹799</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-surface p-6 text-center">
              <div className="text-3xl font-black text-navy-900">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="Why members choose us"
          title="A premium platform built for learning, publishing and sustainable digital growth"
          description="From curated orthopaedic books to secure media access, every part of the experience is designed to serve doctors, students and public health audiences."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homeFeatures.map((feature) => (
            <div key={feature.title} className="card-surface p-8">
              <div className="mb-4 inline-flex rounded-2xl bg-gold-100 p-3 text-gold-700"><BookOpen size={20} /></div>
              <h3 className="text-xl font-bold text-navy-900">{feature.title}</h3>
              <p className="mt-3 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading eyebrow="Featured books" title="Digital reading designed for professionals" />
          <Link href="/books" className="hidden items-center gap-2 text-sm font-semibold text-navy-900 md:inline-flex">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <article key={book.slug} className="card-surface overflow-hidden">
              <img src={book.image} alt={book.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
                  <span>{book.category}</span>
                  <span>{book.isFree ? 'Free' : `₹${book.price}`}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-navy-900">{book.title}</h3>
                <p className="mt-2 text-sm text-slate-600">by {book.author}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{book.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-500">
                  {book.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2 py-1">#{tag}</span>
                  ))}
                </div>
                <Link href={`/books/${book.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900">
                  Open book <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="Latest news" title="Clinical updates, research briefs and surgery insights" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article key={item.slug} className="card-surface overflow-hidden">
              <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-gold-600">{item.category}</div>
                <h3 className="mt-3 text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                  <span>{item.author}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="Video library" title="Premium lectures, procedural walkthroughs and skill-building resources" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <article key={video.slug} className="card-surface p-4">
              <img src={video.image} alt={video.title} className="h-48 w-full rounded-2xl object-cover" />
              <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-slate-500">
                <span>{video.category}</span>
                <span>{video.premium ? 'Premium' : 'Free'}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy-900">{video.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{video.description}</p>
              <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                <span>{video.duration}</span>
                <Link href={`/videos/${video.slug}`} className="font-semibold text-navy-900">Watch</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="card-surface overflow-hidden bg-gradient-to-r from-navy-900 to-sky-900 p-8 text-white md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="tag bg-white/10 text-gold-200">Membership</span>
              <h2 className="mt-5 text-3xl font-black sm:text-4xl">Launch your premium learning journey for just ₹99/month.</h2>
              <p className="mt-4 max-w-lg text-slate-200">
                Unlock premium e-books, member-only videos, journaling tools, and the latest orthopaedic coverage for an affordable subscription.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.18em] text-gold-300">Membership plan</div>
              <div className="mt-4 text-5xl font-black">₹99<span className="text-lg text-slate-300">/mo</span></div>
              <ul className="mt-6 space-y-3 text-sm text-slate-100">
                <li>• All premium e-books</li>
                <li>• Full video library</li>
                <li>• Digital downloads with secure access</li>
                <li>• Payment verification and renewal support</li>
              </ul>
              <Link href="/pricing" className="mt-8 inline-flex rounded-full bg-gold-500 px-5 py-3 font-semibold text-navy-900">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="Newsletter"
          title="Stay updated with clinical, publishing and business news"
          description="Get curated orthopaedic education, new book launches, and member-only updates in your inbox."
          align="center"
        />
        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm outline-none ring-0"
          />
          <button className="gold-btn">Subscribe</button>
        </div>
      </section>
    </>
  );
}
