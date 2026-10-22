create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  booking_id text not null unique,
  service text not null,
  clinician text not null,
  date date not null,
  time_slot text not null,
  patient_name text not null,
  email text not null,
  phone text not null,
  dob date not null,
  gender text not null,
  notes text not null default '',
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create index bookings_date_idx on public.bookings (date);

-- Patient data: lock the table down. With RLS on and no policies, the public
-- anon key can't read or write it; only the server's service-role key can.
alter table public.bookings enable row level security;
