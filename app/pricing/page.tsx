import Link from 'next/link';
import { CheckCircle2, CreditCard, ShieldCheck, Users } from 'lucide-react';
import { pricingPlans } from '@/lib/data';

export default function PricingPage() {
  return (
    <div className="section-shell py-16">
      <div className="text-center">
        <span className="tag">Membership plans</span>
        <h1 className="mt-4 text-4xl font-black text-navy-900">Simple pricing for learners, doctors and teams</h1>
        <p className="mt-4 mx-auto max-w-2xl text-slate-600">
          Choose a plan that matches your learning objectives, digital library needs, and professional growth.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className={`rounded-[2rem] border p-8 ${plan.highlight ? 'border-gold-500 bg-gradient-to-b from-gold-50 to-white shadow-premium' : 'border-slate-200 bg-white'}`}>
            <div className="text-sm uppercase tracking-[0.18em] text-slate-500">{plan.name}</div>
            <div className="mt-4 text-4xl font-black text-navy-900">{plan.price}</div>
            <p className="mt-3 text-sm text-slate-600">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {plan.featureList.map((feature) => (
                <li key={feature} className="flex items-center gap-3"><CheckCircle2 size={16} className="text-gold-600" /> {feature}</li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-full px-4 py-3 font-semibold ${plan.highlight ? 'bg-gold-500 text-navy-900' : 'bg-navy-900 text-white'}`}>
              {plan.highlight ? 'Choose premium' : 'Get started'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="card-surface p-6">
          <CreditCard className="text-gold-600" />
          <h3 className="mt-4 text-xl font-bold text-navy-900">Razorpay-ready checkout</h3>
          <p className="mt-3 text-sm text-slate-600">UPI, cards, net banking and secure payment verification for India-friendly subscriptions.</p>
        </div>
        <div className="card-surface p-6">
          <ShieldCheck className="text-gold-600" />
          <h3 className="mt-4 text-xl font-bold text-navy-900">Secure payment flows</h3>
          <p className="mt-3 text-sm text-slate-600">Webhook validation, signed payload checks and server-side access validation for premium content.</p>
        </div>
        <div className="card-surface p-6">
          <Users className="text-gold-600" />
          <h3 className="mt-4 text-xl font-bold text-navy-900">Admin control</h3>
          <p className="mt-3 text-sm text-slate-600">Approve or block members, manage pricing and control access rights from a single dashboard.</p>
        </div>
      </div>
    </div>
  );
}
