# Email Integration Setup Guide

This guide explains how to set up email notifications for form submissions.

## Overview

The application uses Supabase Edge Functions with Resend API to send beautifully formatted email notifications to `a.basyir@sheerssoft.com` whenever a form is submitted.

## Email Flow

```
User fills form → Submit → Supabase Database → Email Service → Admin Email (a.basyir@sheerssoft.com)
```

### Forms that trigger emails:
1. **Solution Inquiry Forms** - When users request solutions (AI Forecasting, Compliance, etc.)
2. **Support Tickets** - When users submit support requests
3. **ROI Calculator** - When users request detailed ROI reports
4. **Contact Forms** - General contact inquiries

## Setup Instructions

### 1. Get Resend API Key

1. Go to [Resend.com](https://resend.com/)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (starts with `re_`)

### 2. Deploy Supabase Edge Function

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref YOUR_PROJECT_REF

# Deploy the email function
supabase functions deploy send-email

# Set the Resend API key as a secret
supabase secrets set RESEND_API_KEY=your_resend_api_key_here
```

### 3. Verify Setup

The deployment creates a serverless function at:
```
https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-email
```

Test the function using the provided test script:
```bash
node scripts/test-form-email-flow.js
```

## Email Templates

All emails are beautifully formatted with:
- ✅ Professional HTML templates
- ✅ Responsive design
- ✅ Color-coded by form type
- ✅ All form data clearly displayed
- ✅ Timestamp in Malaysian timezone (MYT)

### Email Types

#### 1. Solution Inquiry
- **Subject**: `New Solution Inquiry: [Solution Type]`
- **Color**: Purple gradient
- **Contains**: Contact info, company details, solution-specific data

#### 2. Support Ticket
- **Subject**: `Support Ticket: [Subject]`
- **Color**: Red gradient with priority badge
- **Contains**: Customer info, priority level, detailed message

#### 3. ROI Calculation
- **Subject**: `ROI Calculation Request: [Company Name]`
- **Color**: Green gradient
- **Contains**: Business metrics, calculated savings, ROI percentage

#### 4. Contact Message
- **Subject**: `Contact Form: [Service/General Inquiry]`
- **Color**: Blue gradient
- **Contains**: Contact details, service interest, message

## Fallback Behavior

If email sending fails:
- ✅ Form data is still saved to Supabase database
- ✅ Error is logged but user sees success message
- ✅ Admin can access all submissions via database

## Testing Email Delivery

### Test in Development:

1. Fill out any form on the website
2. Submit the form
3. Check the Supabase database for the entry
4. Check the Supabase Functions logs:
   ```bash
   supabase functions logs send-email
   ```
5. Verify email delivery to `a.basyir@sheerssoft.com`

### Test Using Script:

```bash
node scripts/test-form-email-flow.js
```

This script:
- Creates test entries in each table
- Verifies database insertion works
- Cleans up test data automatically
- Shows which emails would be sent

## Monitoring

### Check Function Logs
```bash
supabase functions logs send-email --follow
```

### Check Database
All form submissions are stored in Supabase tables:
- `solution_inquiries`
- `support_tickets`
- `roi_calculations`
- `contact_messages`

### Email Delivery Status

Check Resend dashboard for:
- Delivery status
- Open rates
- Bounce/spam reports

## Troubleshooting

### Email not received?

1. **Check Spam Folder**
   - First time emails from new domains may be flagged

2. **Verify Resend Configuration**
   ```bash
   # Check if secret is set
   supabase secrets list
   ```

3. **Check Function Logs**
   ```bash
   supabase functions logs send-email
   ```

4. **Test Function Directly**
   ```bash
   curl -i --location --request POST \
     'https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-email' \
     --header 'Authorization: Bearer YOUR_ANON_KEY' \
     --header 'Content-Type: application/json' \
     --data '{"to":"a.basyir@sheerssoft.com","subject":"Test","html":"<h1>Test</h1>"}'
   ```

### Common Issues

**Issue**: "Authorization header missing"
- **Solution**: Ensure your Supabase client is properly configured

**Issue**: "Resend API error"
- **Solution**: Verify API key is correct and has proper permissions

**Issue**: "CORS error"
- **Solution**: CORS headers are already configured in the Edge Function

## Alternative: Without Supabase Edge Functions

If you prefer not to use Edge Functions, you can:

1. **Use a webhook service** (Zapier, Make.com)
2. **Use client-side email service** (EmailJS)
3. **Poll database** with a cron job and send emails

### Example with EmailJS:

```typescript
// In emailService.ts, replace the sendEmail method:

private static async sendEmail(data: EmailData) {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: data.to,
        subject: data.subject,
        html_content: data.htmlContent
      },
      'YOUR_PUBLIC_KEY'
    );
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

## Security Notes

- ✅ API keys are stored as secrets (never in code)
- ✅ Edge Functions run in isolated environment
- ✅ CORS properly configured
- ✅ Rate limiting via Resend
- ✅ Email addresses validated before sending

## Cost Considerations

### Resend Pricing (as of 2024)
- Free tier: 3,000 emails/month
- Pro tier: $20/month for 50,000 emails

### Supabase Edge Functions
- Free tier: 500,000 invocations/month
- Pro tier: Included, higher limits

For typical usage (50-200 forms/day), the free tiers are sufficient.

## Next Steps

1. ✅ Deploy the Edge Function
2. ✅ Configure Resend API key
3. ✅ Test with a real form submission
4. ✅ Monitor email delivery
5. ✅ Set up custom domain for emails (optional)

## Support

If you encounter issues:
1. Check Supabase Functions logs
2. Check Resend delivery dashboard
3. Verify all environment variables
4. Test with the provided test script

---

**Email Target**: a.basyir@sheerssoft.com  
**Last Updated**: November 2025

