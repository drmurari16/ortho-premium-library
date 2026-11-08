import Link from 'next/link';
import { Search, ShoppingBag, ShieldCheck, Menu } from 'lucide-react';
import { siteNavigation } from '@/lib/data';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 via-sky-900 to-gold-500 text-lg font-black text-white">
            O
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Premium</div>
            <div className="text-lg font-black text-navy-900">Ortho Library</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {siteNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-navy-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
            <Search size={16} />
            <input
              aria-label="Search content"
              className="w-32 border-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
              placeholder="Search"
            />
          </div>
          <Link href="/pricing" className="gold-btn">
            Membership
          </Link>
          <Link href="/account" className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:border-slate-300">
            <ShoppingBag size={16} />
            My Library
          </Link>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white lg:hidden" aria-label="Open menu">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
