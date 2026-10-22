-- HYRUP Supabase starter schema
-- Run this in Supabase Dashboard > SQL Editor after creating your Supabase project.
-- These policies are suitable for a public prototype; add authentication, rate limits,
-- and moderation before using this for a production job marketplace.

create extension if not exists pgcrypto;

create table if not exists public.hyrup_jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  company text not null,
  location text not null,
  job_type text not null default 'Full-time',
  experience_level text not null default 'Entry level',
  description text not null,
  salary text,
  apply_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.hyrup_experts (
  id uuid primary key default gen_random_uuid(),
  display_name text not null,
  headline text not null,
  field text not null,
  bio text not null,
  skills text[] not null default '{}',
  years_experience integer not null default 0,
  hourly_rate numeric,
  is_verified boolean not null default false,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.hyrup_expert_questions (
  id uuid primary key default gen_random_uuid(),
  expert_id uuid references public.hyrup_experts(id) on delete set null,
  question text not null,
  field text not null,
  preferred_format text not null default 'Message / written advice',
  contact_email text,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

alter table public.hyrup_jobs enable row level security;
alter table public.hyrup_experts enable row level security;
alter table public.hyrup_expert_questions enable row level security;

grant select, insert on public.hyrup_jobs to anon, authenticated;
grant select on public.hyrup_experts to anon, authenticated;
grant insert on public.hyrup_expert_questions to anon, authenticated;

drop policy if exists "Anyone can read jobs" on public.hyrup_jobs;
create policy "Anyone can read jobs" on public.hyrup_jobs
  for select to anon, authenticated using (true);

drop policy if exists "Anyone can submit a job" on public.hyrup_jobs;
create policy "Anyone can submit a job" on public.hyrup_jobs
  for insert to anon, authenticated
  with check (
    length(trim(title)) > 0 and
    length(trim(company)) > 0 and
    length(trim(location)) > 0 and
    length(trim(description)) > 0
  );

drop policy if exists "Anyone can read published experts" on public.hyrup_experts;
create policy "Anyone can read published experts" on public.hyrup_experts
  for select to anon, authenticated using (is_published = true);

drop policy if exists "Anyone can submit expert questions" on public.hyrup_expert_questions;
create policy "Anyone can submit expert questions" on public.hyrup_expert_questions
  for insert to anon, authenticated
  with check (
    length(trim(question)) >= 10 and
    length(trim(field)) > 0
  );
