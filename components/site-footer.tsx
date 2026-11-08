import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-navy-900 text-slate-200">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-black text-navy-900">
              O
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold-400">Premium</div>
              <div className="text-lg font-bold text-white">Ortho Library</div>
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-300">
            Premium educational media and digital publishing for orthopaedic learners, clinicians and public health audiences.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">Explore</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/books">Books</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/videos">Videos</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">Policies</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/refund">Refund Policy</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Mail size={14} /> hello@orthopremiumlibrary.com</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="section-shell flex flex-col gap-3 py-5 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Ortho Premium Library & Media</span>
          <span className="flex items-center gap-2"><ShieldCheck size={14} /> Secure educational publishing, verified payments, compliance-first access.</span>
        </div>
      </div>
    </footer>
  );
}
