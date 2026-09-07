// Ganti dengan URL dan Anon Key dari dashboard Supabase Anda
const SUPABASE_URL = "https://rhwceclmhyzadocjqxvl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJod2NlY2xtaHl6YWRvY2pxeHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3ODE0MDMsImV4cCI6MjEwNDM1NzQwM30.lrM3goGi5Ps0XeKkZWgBY4ebLpvFsSt-ym-VWf2BMXA";

// Inisialisasi Supabase Client menggunakan library CDN
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);