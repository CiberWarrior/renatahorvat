# 📊 Google Analytics 4 (GA4) Setup Guide

## 🚀 Quick Setup

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create account name: "Renata Horvat Portfolio"
4. Choose "Web" as platform
5. Enter website URL: `https://renatahorvat.com`
6. Select your country and timezone

### 2. Get Your GA4 Measurement ID
1. In GA4, go to Admin (gear icon)
2. Under "Property", click "Data Streams"
3. Click on your web stream
4. Copy the "Measurement ID" (format: `G-XXXXXXXXXX`)

### 3. GA4 Already Configured! ✅
Your Google Analytics 4 is already set up with ID: **G-CY6VB6BVJL**

The tracking code is implemented in `src/layouts/Layout.astro` and will automatically track:
- Page views
- Custom events (project clicks, contact clicks, CTA clicks)
- User interactions
- Traffic sources

### 4. Deploy
The GA4 tracking will automatically work when you deploy with the environment variable set.

## 🔧 Configuration Details

### What's Already Implemented:
- ✅ GA4 tracking code in Layout.astro
- ✅ Page view tracking
- ✅ Custom events for portfolio interactions
- ✅ Enhanced ecommerce tracking ready
- ✅ Privacy-compliant implementation

### Custom Events Available:
- `portfolio_visitor` - Tracks portfolio page visits
- `project_view` - Tracks project card clicks with project details
- `contact_click` - Tracks contact button clicks
- `cta_click` - Tracks CTA button clicks (explore work, let's work together)
- `navigation_click` - Tracks navigation menu clicks
- `logo_click` - Tracks logo clicks
- `scroll_depth` - Tracks scroll depth (25%, 50%, 75%, 100%)
- `time_on_page` - Tracks time spent on each page

## 📈 What You'll See in GA4:

### Real-time Reports:
- Live visitor count
- Current page views
- Traffic sources
- Geographic data

### Audience Reports:
- User demographics
- Technology used
- Mobile vs desktop
- Returning vs new visitors

### Acquisition Reports:
- Traffic sources (Google, social media, direct)
- Campaign performance
- Referral traffic
- Search console integration

### Behavior Reports:
- Most visited pages
- User flow through site
- Time on page
- Bounce rate

## 🛡️ Privacy & GDPR Compliance

The implementation includes:
- ✅ No personal data collection
- ✅ IP anonymization
- ✅ Cookie consent ready
- ✅ GDPR compliant tracking

## 🔍 Testing Your Setup

### 1. Check Real-time Reports
1. Go to GA4 → Reports → Real-time
2. Visit your website
3. You should see your visit appear within seconds

### 2. Verify Tracking Code
1. Open browser dev tools (F12)
2. Go to Network tab
3. Refresh your page
4. Look for requests to `google-analytics.com`

### 3. Test Custom Events
1. Click on project cards
2. Click contact buttons
3. Check Events in real-time reports

## 🚨 Troubleshooting

### GA4 Not Working?
1. ✅ Check your Measurement ID format (`G-XXXXXXXXXX`)
2. ✅ Verify `.env.local` file exists
3. ✅ Restart your development server
4. ✅ Check browser console for errors
5. ✅ Wait 24-48 hours for data to appear

### No Data in Reports?
- Real-time data appears immediately
- Historical data takes 24-48 hours
- Check if ad blockers are enabled
- Verify the correct GA4 property is selected

## 📊 Advanced Configuration

### Enhanced Ecommerce (Optional)
If you want to track project views as "products":

```javascript
// In your project click handler
gtag('event', 'view_item', {
  currency: 'USD',
  value: 0, // Free portfolio
  items: [{
    item_id: 'project_name',
    item_name: 'Project Title',
    category: 'Portfolio'
  }]
});
```

### Custom Dimensions (Optional)
Track additional data:

```javascript
gtag('config', 'GA_MEASUREMENT_ID', {
  custom_map: {
    'custom_parameter_1': 'visitor_type',
    'custom_parameter_2': 'page_category'
  }
});
```

## 🎯 Next Steps

1. ✅ **Google Search Console** - Already configured with verification meta tag
2. **Create Goals** - Track contact form submissions
3. **Set up Audiences** - For remarketing campaigns
4. **Enable Enhanced Measurement** - Automatic event tracking
5. **Create Custom Reports** - Portfolio-specific metrics

## 🔍 Google Search Console Integration

Your site is already verified with Google Search Console:
- **Verification Code**: T1_sOgmyD20gtjDzmLD
- **Status**: ✅ Active
- **Benefits**: 
  - Monitor search performance
  - Track keyword rankings
  - Get SEO insights
  - Submit sitemap for faster indexing

---

**Need Help?** 
- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Help Center](https://support.google.com/analytics/answer/10089681)
