# BNS Constructions — Setup Guide

## Sanity Project Details
- **Project ID:** `s43kbmnk`
- **Dataset:** `production`
- **Studio URL (local):** http://localhost:3000/studio
- **Studio URL (live):** https://bns-infra.vercel.app/studio

---

## After deployment, complete these steps:

### 1. Add Vercel Environment Variables
Go to: vercel.com → bns-infra project → Settings → Environment Variables

Add these three variables:
```
NEXT_PUBLIC_SANITY_PROJECT_ID = s43kbmnk
NEXT_PUBLIC_SANITY_DATASET = production
SANITY_API_TOKEN = (use the write token from .env.local)
```
Redeploy after adding variables.

### 2. CORS Origins (already configured)
The following CORS origins are already added to your Sanity project:
- ✅ http://localhost:3000
- ✅ https://bns-infra.vercel.app

To add more (e.g. custom domain):
- Go to sanity.io/manage → project s43kbmnk → API → CORS Origins

### 3. Access Sanity Studio
- Local: http://localhost:3000/studio
- Live: https://bns-infra.vercel.app/studio

### 4. Add Content in Studio (in this order)
1. **Site Settings** — company name, phone, email, address, WhatsApp
2. **Stats** — 4 stat entries with real numbers (e.g. "500+" / "Projects Completed")
3. **Hero Slides** — 5 slides with real project images
4. **Projects** — add all real projects with photos
5. **Services** — 4 services with full descriptions
6. **About Page** — company story and mission
7. **Team Members** — with photos
8. **Three Panel Section** — headings and images for homepage panels
9. **Contact Page** — address and Google Maps embed URL

### 5. Add Google Search Console
1. Go to search.google.com/search-console
2. Add property: https://bns-infra.vercel.app
3. Copy the HTML tag verification code
4. In `src/app/layout.tsx`, replace `add-your-google-search-console-verification-code-here` with your code
5. Submit sitemap: https://bns-infra.vercel.app/sitemap.xml

### 6. Replace Placeholder Business Info
In `src/app/layout.tsx`, update the `localBusinessSchema` object:
- `"telephone"` — real phone number (e.g. "+91-9876543210")
- `"email"` — real email address
- `"streetAddress"` — real street address
- `"postalCode"` — real postal code
- `"sameAs"` — add social media profile URLs

### 7. Replace OG Image
Replace `public/og-image.jpg` with a real 1200×630px image showing:
- Company name "BNS Constructions"
- A high-quality project photo as background
- Dark overlay with gold text

### 8. Verify SEO Endpoints
After deployment, these should work:
- https://bns-infra.vercel.app/sitemap.xml
- https://bns-infra.vercel.app/robots.txt

---

## Development
```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build for production
```

## API Tokens
- **Read Token** — stored in `.env.local` (for public CDN reads, not needed separately)
- **Write Token** — stored in `.env.local` as `SANITY_API_TOKEN` (for ISR revalidation)

> ⚠️ Never commit `.env.local` to git — it contains secret tokens.
