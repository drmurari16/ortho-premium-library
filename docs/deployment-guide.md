# Ortho Premium Library & Media

This guide explains how to deploy the project on Vercel and connect it to Supabase and Razorpay.

## 1. Prepare the repository

1. Push this code to GitHub.
2. In the repository settings, connect it to Vercel.
3. Import the project and use the default build settings for Next.js.

## 2. Configure environment variables

Copy `.env.example` to `.env.local` for local development, and add the same variables to Vercel Project Settings > Environment Variables.

Required values:

- `NEXT_PUBLIC_SITE_URL` — production domain such as `https://orthopremiumlibrary.com`
- `NEXT_PUBLIC_SUPABASE_URL` — from your Supabase project
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — from Supabase auth settings
- `SUPABASE_SERVICE_ROLE_KEY` — for secure server-side operations
- `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` — from Razorpay dashboard
- `RAZORPAY_WEBHOOK_SECRET` — webhook secret for order verification

## 3. Set up Supabase

1. Create a Supabase project.
2. Run the SQL in `docs/database-schema.sql` in the SQL editor.
3. Create storage buckets: `private` for premium PDFs and protected video assets, and optionally a `public` bucket for shareable images.
4. Enable Supabase Auth and configure email login.
5. Set up row-level security or use server-side middleware for private access logic.

## 4. Configure Razorpay

1. Log in to the Razorpay dashboard.
2. Add your live key credentials.
3. Create a webhook endpoint using your production URL, such as:
   `https://your-domain.com/api/payments/razorpay`
4. Add the webhook secret to `RAZORPAY_WEBHOOK_SECRET`.
5. Test with a small UPI or card payment using the test environment before production launch.

## 5. Mobile deployment guidance

Because this is a mobile-first platform, we recommend:

- enabling responsive design testing on Chrome DevTools mobile emulation
- using Vercel preview URLs to test on Android devices
- ensuring all buttons are large enough for thumb interaction
- testing PWA install prompts and dark/light mode switches
- validating forms using mobile keyboards and reduced motion settings

## 6. Launch checklist

- Domain connected to Vercel with HTTPS enabled
- custom domain configured for production site
- Supabase database migrated and tested
- admin login working
- payment test complete and webhook validated
- private storage working for premium books and videos
- newsletter integration configured
- sitemaps and robots are live
- legal pages reviewed and finalised

## 7. Configuration still required before production

The following items are required before public launch:

- live Razorpay merchant account and verification
- real Supabase project and secure credentials
- original or licensed media content for all books, photos and videos
- explicit patient consent records where clinical images are used
- legal review for Indian digital commerce and privacy compliance
