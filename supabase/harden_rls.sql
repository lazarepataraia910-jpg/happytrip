-- HappyTrip: restrict writes to authenticated admins only
-- Run once in the Supabase Dashboard -> SQL Editor -> New query -> Run.
--
-- This does NOT touch table structure or existing rows - it only tightens
-- policies. Safe to run at any time; does not need re-seeding afterward.
--
-- Why: the original policies (in schema.sql) let ANYONE holding the public
-- "anon"/"publishable" key insert, update, or delete rows - no login
-- required. That key lives in data.js in the public GitHub repo, so anyone
-- (including bots that scan GitHub for exposed Supabase keys) can find it
-- and use it. That's the most likely explanation for `tours` being wiped
-- repeatedly while `destinations` (never targeted) stayed untouched.
--
-- After running this, admin.html's add/edit/delete tour actions will stop
-- working until the site is updated to establish a real Supabase-authenticated
-- session (not just decode the Google ID token locally, which is what it
-- does today) - that follow-up change is what actually makes this function
-- return true for the two admin emails below. Public browsing (SELECT on
-- destinations/tours/reviews/blog_posts) is completely untouched.

create or replace function public.is_admin_user()
returns boolean
language sql
stable
as $$
  select coalesce(auth.jwt() ->> 'email', '') in (
    'lazarepataraia910@gmail.com',
    'irineirnola@gmail.com'
  );
$$;

-- ---------- Destinations ----------
drop policy if exists "Public insert access" on public.destinations;
drop policy if exists "Public update access" on public.destinations;
drop policy if exists "Public delete access" on public.destinations;
drop policy if exists "Admin insert access" on public.destinations;
drop policy if exists "Admin update access" on public.destinations;
drop policy if exists "Admin delete access" on public.destinations;

create policy "Admin insert access" on public.destinations for insert with check (public.is_admin_user());
create policy "Admin update access" on public.destinations for update using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admin delete access" on public.destinations for delete using (public.is_admin_user());

-- ---------- Tours ----------
drop policy if exists "Public insert access" on public.tours;
drop policy if exists "Public update access" on public.tours;
drop policy if exists "Public delete access" on public.tours;
drop policy if exists "Admin insert access" on public.tours;
drop policy if exists "Admin update access" on public.tours;
drop policy if exists "Admin delete access" on public.tours;

create policy "Admin insert access" on public.tours for insert with check (public.is_admin_user());
create policy "Admin update access" on public.tours for update using (public.is_admin_user()) with check (public.is_admin_user());
create policy "Admin delete access" on public.tours for delete using (public.is_admin_user());

-- ---------- Reviews ----------
-- Insert stays public (a future "leave a review" feature shouldn't require
-- admin login) - just add moderation delete for admins, which didn't exist
-- before.
drop policy if exists "Admin delete access" on public.reviews;
create policy "Admin delete access" on public.reviews for delete using (public.is_admin_user());

-- ---------- Blog posts ----------
drop policy if exists "Public insert access" on public.blog_posts;
drop policy if exists "Public update access" on public.blog_posts;
drop policy if exists "Admin insert access" on public.blog_posts;
drop policy if exists "Admin update access" on public.blog_posts;

create policy "Admin insert access" on public.blog_posts for insert with check (public.is_admin_user());
create policy "Admin update access" on public.blog_posts for update using (public.is_admin_user()) with check (public.is_admin_user());

-- ---------- Storage (tour/destination photos) ----------
-- This bucket's policies were never touched by the earlier table hardening
-- above - it was still fully open to the public key for upload/delete.
insert into storage.buckets (id, name, public)
values ('happytrip-images', 'happytrip-images', true)
on conflict (id) do nothing;

drop policy if exists "Public read happytrip images" on storage.objects;
drop policy if exists "Public upload happytrip images" on storage.objects;
drop policy if exists "Public delete happytrip images" on storage.objects;
drop policy if exists "Admin upload happytrip images" on storage.objects;
drop policy if exists "Admin delete happytrip images" on storage.objects;

create policy "Public read happytrip images" on storage.objects
  for select using (bucket_id = 'happytrip-images');

create policy "Admin upload happytrip images" on storage.objects
  for insert with check (bucket_id = 'happytrip-images' and public.is_admin_user());

create policy "Admin delete happytrip images" on storage.objects
  for delete using (bucket_id = 'happytrip-images' and public.is_admin_user());
