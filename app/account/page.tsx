import Link from 'next/link';
import { Bookmark, CreditCard, LogOut, UserCog } from 'lucide-react';

export default function AccountPage() {
  return (
    <div className="section-shell py-16">
      <div className="mb-8">
        <span className="tag">My account</span>
        <h1 className="mt-4 text-4xl font-black text-navy-900">Welcome back, Dr. Sharma</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card-surface p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-xl font-black text-white">DS</div>
            <div>
              <h2 className="text-xl font-bold text-navy-900">Dr. Sharma</h2>
              <p className="text-sm text-slate-600">Premium Member • Active</p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3 text-sm text-slate-700"><UserCog size={16} /> Profile management</div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3 text-sm text-slate-700"><Bookmark size={16} /> Saved books</div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3 text-sm text-slate-700"><CreditCard size={16} /> Payment history</div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3 text-sm text-slate-700"><LogOut size={16} /> Secure logout</div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-surface p-6">
            <h2 className="text-xl font-bold text-navy-900">Membership status</h2>
            <div className="mt-4 flex items-center justify-between rounded-2xl bg-gold-50 p-4">
              <div>
                <div className="text-sm uppercase tracking-[0.15em] text-gold-700">Premium</div>
                <div className="mt-2 text-2xl font-black text-navy-900">₹99 / month</div>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Active until 10 Dec 2026</span>
            </div>
          </div>

          <div className="card-surface p-6">
            <h2 className="text-xl font-bold text-navy-900">Recent activity</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>• Read: Evidence-Based Hip and Knee Surgery</li>
              <li>• Saved: Fracture Management Essentials</li>
              <li>• Purchased: Advanced Trauma Review</li>
              <li>• Payment: Razorpay subscription successful</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
