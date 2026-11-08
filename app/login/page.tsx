import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="section-shell flex min-h-[70vh] items-center justify-center py-16">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-premium">
        <span className="tag">Member access</span>
        <h1 className="mt-5 text-3xl font-black text-navy-900">Log in</h1>
        <p className="mt-3 text-sm text-slate-600">Access your saved books, payments and premium content.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
            <input id="email" type="email" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input id="password" type="password" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none" placeholder="••••••••" />
          </div>
          <button type="submit" className="gold-btn w-full">Sign in</button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Don’t have an account? <Link href="/signup" className="font-semibold text-navy-900">Create one</Link>
        </div>
      </div>
    </div>
  );
}
