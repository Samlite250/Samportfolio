# Samuel Ndayambaje — Portfolio

A modern, fully-responsive Full-Stack Software Engineer portfolio built with React, Vite, and Tailwind CSS. Features dark/light mode, smooth Framer Motion animations, a Supabase-powered contact system, and a full suite of SEO optimizations.

**Live URL:** [https://samportfolio-beta.vercel.app](https://samportfolio-beta.vercel.app)

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Backend / DB | Supabase (PostgreSQL) |
| Email | FormSubmit.co |
| Deployment | Vercel |

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 🔍 SEO Checklist — What Has Been Done

All of the following SEO improvements have been implemented:

- ✅ **Optimized `<title>` tag** — Includes full name, role, and keywords
- ✅ **Meta description** — Rich, keyword-relevant description
- ✅ **Meta robots** — `index, follow` with image/snippet hints
- ✅ **Open Graph tags** — For sharing on WhatsApp, Facebook, LinkedIn
- ✅ **Twitter Card tags** — For sharing on Twitter/X
- ✅ **Canonical URL** — Prevents duplicate content issues
- ✅ **JSON-LD Structured Data** — Person schema, WebSite schema, BreadcrumbList
- ✅ **Image preload** — Profile image preloaded for faster LCP
- ✅ **robots.txt** — Allows all crawlers, disallows API routes
- ✅ **sitemap.xml** — All sections listed with priority and change frequency
- ✅ **vercel.json** — 1-year cache for assets, security headers
- ✅ **Semantic HTML** — `<main>`, `<header role="banner">`, `<nav aria-label>`, `<section aria-label>` on every section
- ✅ **Skip-to-content link** — Required for WCAG + Google Lighthouse
- ✅ **Descriptive `alt` attributes** on all images
- ✅ **`aria-label`** on all icon-only links and buttons
- ✅ **`noscript` fallback** — For crawlers/browsers without JavaScript

---

## 📋 Next Steps — Submit to Google

To fully appear on Google, follow these steps **after deploying to Vercel**:

### 1. Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property: `https://samportfolio-beta.vercel.app`
3. Verify ownership (choose **HTML tag** method — copy the tag value)
4. Add the tag to `index.html` inside `<head>`: `<meta name="google-site-verification" content="YOUR_CODE_HERE" />`
5. After verification, go to **Sitemaps** → Submit: `https://samportfolio-beta.vercel.app/sitemap.xml`
6. Request indexing of your URL under **URL Inspection**

### 2. Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site: `https://samportfolio-beta.vercel.app`
3. Submit sitemap: `https://samportfolio-beta.vercel.app/sitemap.xml`

### 3. LinkedIn & GitHub Profile
- Make sure your LinkedIn/GitHub profiles link back to your portfolio URL — this creates backlinks that boost your domain authority.

---

## 📁 Project Structure

```
portfolio-project/
├── public/
│   ├── favicon.png
│   ├── robots.txt          # Crawler rules
│   ├── sitemap.xml         # All sections listed
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Skip link, nav landmark
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Stats.jsx
│   ├── App.jsx             # Semantic <main> landmark
│   └── main.jsx
├── api/                    # Serverless API routes
├── index.html              # All SEO meta tags + JSON-LD
├── vercel.json             # Caching + security headers
└── tailwind.config.js
```

---

© 2026 Samuel Ndayambaje — All rights reserved.
