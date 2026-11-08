export default function NotFoundPage() {
  return (
    <div className="section-shell flex min-h-[60vh] items-center justify-center py-16">
      <div className="text-center">
        <span className="tag">404</span>
        <h1 className="mt-5 text-4xl font-black text-navy-900">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you are looking for does not exist or has moved.</p>
      </div>
    </div>
  );
}
