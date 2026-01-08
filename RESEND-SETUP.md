# 📧 Resend Setup Instructions

This guide will help you set up the contact form on your website using Resend to send emails directly to your Gmail.

## 🎯 Overview

Your contact form now uses **Resend** to send emails. This is a much better solution than Formspree because:
- ✅ You already have a Resend account
- ✅ Free tier: 100 emails/day, 3,000/month
- ✅ Complete control over email design
- ✅ More professional and reliable
- ✅ Better privacy for your users

## 📋 Prerequisites

- ✅ You already have a Resend account
- ✅ Vercel account (you're already hosting on Vercel)

---

## 🚀 Setup Steps

### Step 1: Get Your Resend API Key

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Log in with your existing account
3. Click **"Create API Key"**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Select permissions: **"Sending access"**
6. Click **"Create"**
7. **Copy the API key** (it starts with `re_`)
   - ⚠️ **Important**: Save this key immediately - you won't be able to see it again!

### Step 2: Update the API Endpoint

Open `src/pages/api/contact.ts` and update these lines:

**Line 60** - Replace `'onboarding@resend.dev'` with your verified domain:
```typescript
from: 'Kontakt Forma <noreply@yourdomain.com>',
```

If you haven't verified your domain yet, you can use the default for testing:
```typescript
from: 'Kontakt Forma <onboarding@resend.dev>',
```

**Line 61** - Replace `'your-email@gmail.com'` with your actual Gmail:
```typescript
to: 'screatives.info@gmail.com',
```

### Step 3: Add API Key to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **renatahorvat**
3. Click on **"Settings"** tab
4. Click on **"Environment Variables"** in the left sidebar
5. Click **"Add New"**
6. Enter the following:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
   - **Environment**: Check all three boxes (Production, Preview, Development)
7. Click **"Save"**

### Step 4: Add API Key for Local Development (Optional)

If you want to test the form locally:

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Make sure `.env` is in your `.gitignore` (it should be by default)

⚠️ **Never commit your `.env` file to Git!**

### Step 5: Install Dependencies

Run this command to install the Resend package:

```bash
npm install
```

### Step 6: Deploy to Vercel

Push your changes to GitHub:

```bash
git add .
git commit -m "Integrate Resend for contact form"
git push
```

Vercel will automatically deploy your changes.

---

## 🧪 Testing

### Test on Your Live Site

1. Wait for Vercel deployment to complete (usually 1-2 minutes)
2. Visit your live site: [https://renatahorvat.com/contact](https://renatahorvat.com/contact)
3. Fill out the contact form
4. Click "Send Message"
5. Check your Gmail for the email

### Test Locally (Optional)

1. Make sure you've added `RESEND_API_KEY` to your `.env` file
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:4321/contact`
4. Fill out and submit the form

---

## 📧 Email Customization

The email template is defined in `src/pages/api/contact.ts` (lines 65-157).

### Current Template Features:
- 📨 Beautiful HTML email with gradient header
- 🎨 Professional styling matching your brand
- 📱 Responsive design
- 💬 Includes name, email, and message
- 🔄 Reply-to set to sender's email

### To Customize the Email:

1. Open `src/pages/api/contact.ts`
2. Find the `html` section (starting at line 65)
3. Modify the HTML to your liking
4. Save and redeploy

---

## 🔐 Security Features

Your contact form includes:
- ✅ **Honeypot field** - Catches spam bots
- ✅ **GDPR consent** - Required checkbox
- ✅ **Email validation** - Server-side checks
- ✅ **Rate limiting** - Built into Resend
- ✅ **Environment variables** - API key never exposed

---

## 🎯 What Happens When Someone Submits the Form?

1. User fills out the form on `/contact` page
2. JavaScript sends data to `/api/contact` endpoint
3. API endpoint validates the data
4. Resend sends a beautiful HTML email to your Gmail
5. User sees success message
6. You receive the email and can reply directly

---

## 🆓 Resend Free Tier Limits

- **100 emails per day**
- **3,000 emails per month**
- This is more than enough for your portfolio site!

If you ever need more, paid plans start at $20/month for 50,000 emails.

---

## ❓ Troubleshooting

### "API key not found" error

**Solution**: Make sure you've added `RESEND_API_KEY` to Vercel environment variables and redeployed.

### Emails not arriving

1. Check your Gmail spam folder
2. Verify your Resend API key is correct
3. Check the Resend Dashboard for error logs: [https://resend.com/logs](https://resend.com/logs)
4. Make sure you updated the `to` email address in `contact.ts`

### "From" email rejected

**Solution**: Either:
- Use the default `onboarding@resend.dev` for testing
- Or verify your domain in Resend Dashboard: [https://resend.com/domains](https://resend.com/domains)

### Form not submitting

1. Open browser console (F12) and check for errors
2. Make sure you've run `npm install` after pulling changes
3. Make sure the API endpoint exists at `/api/contact`

---

## 🎨 Verifying Your Domain (Optional but Recommended)

To send emails from `contact@renatahorvat.com` instead of `onboarding@resend.dev`:

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter `renatahorvat.com`
4. Add the DNS records Resend provides to your domain registrar
5. Wait for verification (usually a few minutes to a few hours)
6. Update the `from` field in `contact.ts` to use your domain

---

## 📞 Support

If you need help:
- **Resend Documentation**: [https://resend.com/docs](https://resend.com/docs)
- **Resend Support**: [https://resend.com/support](https://resend.com/support)

---

## ✅ Checklist

- [ ] Created Resend API key
- [ ] Updated `contact.ts` with your Gmail address
- [ ] Added `RESEND_API_KEY` to Vercel environment variables
- [ ] Ran `npm install`
- [ ] Pushed changes to GitHub
- [ ] Tested contact form on live site
- [ ] Received test email successfully

---

**🎉 Once you complete all steps, your contact form will be fully functional!**
