"use client";

import { FormEvent, useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setStatus({ type: 'success', message: data.message || 'Subscribed successfully.' });
      setEmail('');
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to subscribe right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        aria-label="Email address"
        className="flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400"
      />
      <button type="submit" disabled={isSubmitting} className="gold-btn disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? 'Joining...' : 'Subscribe'}
      </button>

      {status.type !== 'idle' && (
        <div className={`w-full text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
          {status.message}
        </div>
      )}
    </form>
  );
}
