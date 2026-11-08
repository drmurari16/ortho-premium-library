# Ortho Premium Library & Media

A premium, mobile-first education and digital publishing website for orthopaedic professionals and medical learners.

## Features included

- Responsive homepage with premium navy, white and gold visual system
- Book store with secure preview patterns and pricing management
- News portal, gallery, video library and membership plans
- Admin dashboard layout for content and revenue operations
- Razorpay-ready payment API route and environment configuration guidance
- SEO-friendly metadata, robots and sitemap files
- Privacy, terms and refund policy pages
- Notes on security, deployment and production checks

## Stack

- Next.js 14
- React 18
- Tailwind CSS
- Supabase + PostgreSQL ready schema
- Razorpay integration ready
- Vercel deployment ready

## Local development

1. Install dependencies:
   npm install
2. Copy environment file:
   cp .env.example .env.local
3. Start the app:
   npm run dev
4. Open http://localhost:3000

## Production deployment

- Deploy to Vercel from GitHub
- Configure environment variables from `.env.example`
- Add custom domain
- Enable HTTPS and custom DNS records
- Configure Supabase Auth, storage bucket and database migrations
- Add Razorpay live keys and set webhook signing

## Important production notes

This project is structured as a working front-end and modular application shell. Before launch, you must complete:

- real Supabase project setup
- database migration execution from `docs/database-schema.sql`
- secure auth configuration via Supabase Auth
- actual Razorpay live credentials and webhook verification
- storage bucket rules for private book and media files
- content licensing verification for all media assets
- legal review for medical content and patient image consent

## Production security checklist

- HTTPS enforced in production
- Private file storage with signed URLs
- role-based access checks for premium content
- rate limiting on public APIs
- server-side validation for payments and membership activation
- audit logs for admin actions
- backups configured in Supabase
- watermarking enabled for paid access content
- no sensitive card details stored on the server

## Main project structure

- `app/` — route pages and API endpoints
- `components/` — reusable site layout pieces
- `lib/` — data definitions and helper functions
- `docs/database-schema.sql` — database schema for Supabase/PostgreSQL
- `docs/deployment-guide.md` — step-by-step deployment instructions

## Useful links

- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Supabase docs: https://supabase.com/docs
- Razorpay docs: https://razorpay.com/docs
