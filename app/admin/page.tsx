import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, BarChart3, FolderKanban, ShoppingBag, Users, Wallet } from 'lucide-react';
import { adminSections } from '@/lib/types';

export default function AdminPage() {
  return (
    <div className="section-shell py-16">
      <div className="mb-8 flex items-center justify-between gap-3">
        <div>
          <span className="tag">Admin dashboard</span>
          <h1 className="mt-4 text-4xl font-black text-navy-900">Content and revenue operations</h1>
        </div>
        <Link href="/" className="navy-btn">Open public site</Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Books published', value: '148', icon: ShoppingBag },
          { label: 'Members', value: '2,416', icon: Users },
          { label: 'Revenue', value: '₹84.5k', icon: Wallet },
          { label: 'Conversions', value: '12.8%', icon: BarChart3 },
        ].map((item) => (
          <div key={item.label} className="card-surface p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">{item.label}</div>
              <item.icon className="text-gold-600" size={18} />
            </div>
            <div className="mt-6 text-3xl font-black text-navy-900">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card-surface p-6">
          <h2 className="text-xl font-bold text-navy-900">Operations</h2>
          <div className="mt-6 space-y-3">
            {adminSections.map((section) => (
              <div key={section.slug} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-navy-900">{section.title}</span>
                  <ArrowUpRight size={16} className="text-slate-400" />
                </div>
                <p className="mt-2 text-sm text-slate-600">{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-6">
          <h2 className="text-xl font-bold text-navy-900">Recent activity</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3">Item</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Owner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Evidence-Based Hip and Knee Surgery', 'E-book', 'Published', 'Admin'],
                  ['Robotic-Assisted Total Knee Replacement', 'News', 'Scheduled', 'Editorial'],
                  ['Shoulder Arthroscopy for Beginners', 'Video', 'Premium', 'Video Team'],
                  ['Dr. R. Singh', 'Member', 'Active', 'Finance'],
                ].map(([item, type, status, owner]) => (
                  <tr key={item} className="border-t border-slate-200">
                    <td className="px-4 py-3">{item}</td>
                    <td className="px-4 py-3">{type}</td>
                    <td className="px-4 py-3"><span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{status}</span></td>
                    <td className="px-4 py-3">{owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
