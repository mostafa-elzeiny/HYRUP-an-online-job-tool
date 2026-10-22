# HYRUP

HYRUP is a static job-discovery and expert-discovery web app.

## Pages
- `index.html` — job board, filters, saved jobs, application tracking, and job-posting preview.
- `experts.html` — sample expert directory and question forms.

## Deploy on Vercel
1. Import this GitHub repository into Vercel.
2. Framework preset: **Other**.
3. Build command: leave empty.
4. Output directory: leave empty / use the repository root for this static HTML site.
5. Deploy.

The main files are at the repository root for simple static hosting.

## Database setup (Supabase)
1. Create a Supabase project.
2. Open **SQL Editor** and run `supabase/schema.sql`.
3. Copy the Project URL and publishable/anon key from the Supabase project's API settings.
4. The current front-end is still in preview mode and uses browser localStorage for saved jobs, applications, custom jobs, and expert questions. The Supabase schema is prepared, but the UI is **not connected to Supabase yet**; wire the client and data operations before treating submissions as shared/persistent data.

## Demo content
Job listings and expert profiles are sample/demo content. Expert names, ratings, and session counts are not verified real-world listings.
