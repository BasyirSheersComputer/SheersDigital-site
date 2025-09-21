# 🗄️ Database Setup Guide for WasteWise Forms

This guide will help you set up the Supabase database and connect all your forms to it.

## 📋 What's Been Created

### 1. **Database Schema** (`supabase/migrations/20250412000000_complete_forms_schema.sql`)
- ✅ `waste_audit_requests` - Hero component waste audit form
- ✅ `solution_inquiries` - SolutionForms component inquiries  
- ✅ `support_tickets` - SupportCenter support ticket form
- ✅ `roi_calculations` - ROI calculator form submissions
- ✅ Proper indexing, constraints, and RLS policies
- ✅ Sample data for testing

### 2. **Supabase Client** (`src/lib/supabase.ts`)
- ✅ Supabase client configuration
- ✅ TypeScript interfaces for all form data
- ✅ Service functions for database operations
- ✅ Error handling and type safety

### 3. **Dependencies**
- ✅ Added `@supabase/supabase-js` to package.json

## 🚀 Setup Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Get Your Supabase Credentials
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `nbupfkhtkoggqnyvpdfl`
3. Go to **Settings** → **API**
4. Copy the **Project URL** and **anon public** key

### Step 3: Create Environment File
Create a `.env` file in your project root:
```bash
VITE_SUPABASE_URL=https://nbupfkhtkoggqnyvpdfl.supabase.co
VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
```

### Step 4: Run Database Migration
Connect to your Supabase database and run the migration:

```bash
# Option 1: Using psql directly
psql postgresql://postgres:[YOUR-PASSWORD]@db.nbupfkhtkoggqnyvpdfl.supabase.co:5432/postgres

# Option 2: Using Supabase CLI (if installed)
supabase db push

# Option 3: Copy-paste the SQL from the migration file into Supabase SQL Editor
```

### Step 5: Verify Database Setup
```sql
-- Check if tables were created
\dt

-- Verify table structure
\d waste_audit_requests
\d solution_inquiries
\d support_tickets
\d roi_calculations

-- Test with sample data
SELECT * FROM waste_audit_requests;
```

## 🔗 Form Integration

### 1. **Hero Component (Waste Audit Form)**
The form in `src/components/Hero.tsx` will now submit to the `waste_audit_requests` table.

### 2. **Solution Forms**
All solution-specific forms in `src/components/SolutionForms.tsx` will submit to the `solution_inquiries` table.

### 3. **Support Center**
The support ticket form in `src/components/pages/SupportCenter.tsx` will submit to the `support_tickets` table.

### 4. **ROI Calculator**
The ROI calculation form will submit to the `roi_calculations` table.

## 🛡️ Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Anonymous users** can insert form submissions
- **Authenticated users** can read and update records
- **Data validation** with CHECK constraints
- **Proper indexing** for performance

## 📊 Database Views & Functions

### Views
- `form_submissions_summary` - Overview of all form submissions
- `get_form_statistics(days_back)` - Function to get form statistics

### Sample Queries
```sql
-- Get all new waste audit requests
SELECT * FROM waste_audit_requests WHERE status = 'new';

-- Get solution inquiries by type
SELECT * FROM solution_inquiries WHERE solution_type = 'ai-forecasting';

-- Get support tickets by priority
SELECT * FROM support_tickets WHERE priority = 'High - System issue';

-- Get form submission summary
SELECT * FROM form_submissions_summary;
```

## 🧪 Testing

### Test Form Submission
1. Start your development server: `npm run dev`
2. Fill out any form on your site
3. Check the database to see if the record was created
4. Check the browser console for any errors

### Test Database Connection
```sql
-- Insert test record
INSERT INTO waste_audit_requests (name, email, company_size, locations)
VALUES ('Test User', 'test@example.com', '11-50', '2-5');

-- Verify insertion
SELECT * FROM waste_audit_requests WHERE email = 'test@example.com';
```

## 🔧 Troubleshooting

### Common Issues

1. **"Invalid API key" error**
   - Check your `.env` file has the correct `VITE_SUPABASE_ANON_KEY`
   - Verify the key in your Supabase dashboard

2. **"Table doesn't exist" error**
   - Run the migration file again
   - Check if you're connected to the right database

3. **"RLS policy violation" error**
   - Verify RLS policies are created correctly
   - Check if the user has proper permissions

4. **"Connection refused" error**
   - Verify your database URL is correct
   - Check if your IP is whitelisted in Supabase

### Debug Steps
1. Check browser console for errors
2. Verify environment variables are loaded
3. Test database connection directly
4. Check Supabase logs in dashboard

## 📈 Next Steps

After setup is complete:

1. **Update your forms** to use the new Supabase service
2. **Add error handling** for failed submissions
3. **Implement success notifications** for users
4. **Set up email notifications** for new submissions
5. **Create admin dashboard** to view submissions
6. **Add analytics** to track form performance

## 📞 Support

If you encounter issues:
1. Check the Supabase documentation
2. Review the migration file for syntax errors
3. Verify all environment variables are set correctly
4. Test database connection step by step

---

**🎉 Congratulations!** Your forms are now connected to a robust, scalable database with proper security and performance optimizations.

