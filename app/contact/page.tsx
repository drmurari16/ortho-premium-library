export default function ContactPage() {
  return (
    <div className="section-shell py-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="tag">Contact</span>
        <h1 className="mt-4 text-4xl font-black text-navy-900">Get in touch</h1>
        <p className="mt-4 text-slate-600">For partnership enquiries, support requests, licensing questions or editorial submissions.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="card-surface p-8">
          <h2 className="text-2xl font-bold text-navy-900">Send a message</h2>
          <form className="mt-6 space-y-5">
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Your name" />
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Email address" />
            <textarea className="min-h-32 w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="How can we help?" />
            <button className="gold-btn">Submit</button>
          </form>
        </div>

        <div className="card-surface p-8">
          <h2 className="text-2xl font-bold text-navy-900">Reach us</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li>Email: hello@orthopremiumlibrary.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: India</li>
            <li>Hours: Monday to Saturday, 9 AM to 6 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
