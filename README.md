# HYRUP

HYRUP is a static job-discovery and expert-discovery web app.

## Pages
- `index.html` — job board, filters, saved jobs, application tracking, and job-posting form.
- `experts.html` — sample expert directory and question forms.

## Deploy on Vercel
1. Import this GitHub repository into Vercel.
2. Framework preset: **Other**.
3. Build command: leave empty.
4. Output directory: leave empty so Vercel serves the root static files.
5. Deploy.

## Supabase setup
1. In Supabase, open **SQL Editor** and run `supabase/schema.sql`.
2. In Project Settings > API Keys, copy the **Publishable key** (often begins `sb_publishable_`). The legacy anon key is also supported.
3. In `supabase-config.js`, set `supabasePublishableKey` to that key. The project URL has been prefilled from the project reference you provided.
4. Commit the change and redeploy Vercel.

The front-end integration reads community jobs from `hyrup_jobs`, inserts job posts into that table, and inserts questions into `hyrup_expert_questions`. Saved jobs and application tracking still use browser localStorage. Expert cards are sample/demo profiles and are not yet loaded from `hyrup_experts`.

## Important
- Never put a Supabase `service_role` or secret key in browser code.
- The SQL policies allow public job submissions and public question submissions; add authentication, spam controls, and moderation before launching as a production marketplace.
- Expert names, ratings, and session counts are demonstration content, not verified real listings.
