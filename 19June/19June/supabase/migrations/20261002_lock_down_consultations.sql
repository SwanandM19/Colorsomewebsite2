-- The website saves leads through the server (service-role key, which bypasses
-- Row-Level Security), so the public/anon key does NOT need insert access.
-- Leaving it open would let anyone with the public key write rows straight into
-- the table and skip the form's spam protection. Run this after
-- 20260616_create_consultations.sql.
drop policy if exists "Anyone can insert consultations" on public.consultations;
revoke insert on public.consultations from anon;
