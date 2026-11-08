export default function RefundPolicyPage() {
  return (
    <div className="section-shell py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-premium">
        <span className="tag">Refund and cancellation</span>
        <h1 className="mt-4 text-4xl font-black text-navy-900">Refund policy</h1>
        <div className="mt-8 space-y-5 text-slate-700">
          <p>Digital media and memberships are generally non-refundable once access has been granted, except where the purchase is fully invalid, duplicate, or cancelled before the content is accessed.</p>
          <p>Refund reviews may be handled manually in cases of payment failure, account misuse, or technical access issues caused by the platform. Users should contact support with the order identifier and relevant purchase details.</p>
          <p>Subscription cancellations will continue to provide access until the current billing period ends unless otherwise stated in the plan terms.</p>
        </div>
      </div>
    </div>
  );
}
