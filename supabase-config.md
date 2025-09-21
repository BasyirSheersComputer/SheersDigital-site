# Supabase Configuration Guide

## Environment Variables Setup

Create a `.env` file in your project root with the following variables:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://nbupfkhtkoggqnyvpdfl.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Database Connection (for direct database access if needed)
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.nbupfkhtkoggqnyvpdfl.supabase.co:5432/postgres

# Other Environment Variables
VITE_APP_NAME=WasteWise
VITE_APP_ENVIRONMENT=development
```

## Getting Your Supabase Anon Key

1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Navigate to Settings → API
3. Copy the "anon public" key
4. Replace `your_supabase_anon_key_here` with the actual key

## Database Setup Steps

1. **Run the migration file:**
   ```bash
   # Connect to your Supabase database
   psql postgresql://postgres:[YOUR-PASSWORD]@db.nbupfkhtkoggqnyvpdfl.supabase.co:5432/postgres
   
   # Run the migration
   \i supabase/migrations/20250412000000_complete_forms_schema.sql
   ```

2. **Verify tables were created:**
   ```sql
   \dt
   ```

3. **Check table structure:**
   ```sql
   \d waste_audit_requests
   \d solution_inquiries
   \d support_tickets
   \d roi_calculations
   ```

## Testing the Connection

You can test the database connection by running:

```sql
-- Test inserting a sample record
INSERT INTO waste_audit_requests (name, email, company_size, locations)
VALUES ('Test User', 'test@example.com', '11-50', '2-5');

-- Verify the record was inserted
SELECT * FROM waste_audit_requests;
```

## Security Notes

- The `anon` key is safe to use in the frontend as it only has access to insert data
- Row Level Security (RLS) is enabled on all tables
- Only authenticated users can read/update records
- Anyone can insert records (for form submissions)

