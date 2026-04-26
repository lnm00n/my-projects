import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://arnaykhpftozimqqoshu.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybmF5a2hwZnRvemltcXFvc2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxOTUwMDIsImV4cCI6MjA5Mjc3MTAwMn0.JAQgoNcLctCFH6cfwNDCsITjQ-Kv36auY68pqSp_83I"

export const supabase = createClient(supabaseUrl, supabaseKey)