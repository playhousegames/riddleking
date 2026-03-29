# ♛ Riddle King — riddleking.co.uk

A fast, SEO-optimised, LLM-visible riddle website built with Next.js. Statically exported for near-zero hosting costs. Ad-revenue ready from day one.

---

## Site Architecture

```
riddleking.co.uk/
├── /                          → Homepage: today's daily riddle + recent riddles grid
├── /riddles                   → Full vault: all riddles with difficulty + category filters
├── /riddles/[slug]            → Individual riddle page (SEO + LLM optimised, QAPage schema)
├── /categories                → Category browser
├── /categories/[category]     → Riddles filtered by category
├── /about                     → About page
├── /submit                    → Submit a riddle
├── /privacy                   → Privacy policy (required for AdSense)
├── /sitemap.xml               → Auto-generated XML sitemap
└── /robots.txt                → Crawler permissions
```

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 14 | Static export, file-based routing, SEO-friendly |
| Hosting | Vercel (free tier) | Zero config, global CDN, auto-deploys from GitHub |
| Styling | Plain CSS + CSS variables | No build dependency, fast, easy to maintain |
| Fonts | Google Fonts (Playfair Display + Crimson Pro) | Distinctive editorial look |
| Data | Local JS file (`data/riddles.js`) | No database needed at this scale |
| Ads | Google AdSense → Ezoic/Mediavine later | Start simple, upgrade on traffic |

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build
```

---

## Deployment (Vercel — recommended, free)

1. Push this folder to a GitHub repository
2. Go to vercel.com → New Project → Import your repo
3. Leave all settings as default (Next.js auto-detected)
4. Click Deploy
5. Add your custom domain: riddleking.co.uk → Settings → Domains

Total deploy time: under 5 minutes.

---

## Adding New Riddles

Open `data/riddles.js` and add a new object to the `riddles` array:

```js
{
  id: "unique-id",
  slug: "url-friendly-slug",          // becomes /riddles/url-friendly-slug
  question: "Your riddle question?",
  answer: "The Answer",
  explanation: "Why this is the answer...",
  category: "classic",                // classic | wordplay | lateral | abstract | modern
  difficulty: "medium",               // easy | medium | hard
  tags: ["tag1", "tag2"]
}
```

The daily riddle rotates automatically based on the date — no manual curation needed.

---

## Advertising Setup

### Step 1: Google AdSense (0–10k sessions/month)
1. Sign up at adsense.google.com with your domain
2. Add the AdSense script to `pages/_app.js`:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
3. Replace the `<div className="ad-slot ...">` placeholder divs with real `<ins class="adsbygoogle">` tags

### Ad Slots Already Built In
| Location | Size | File |
|----------|------|------|
| Homepage top | 728×90 leaderboard | `pages/index.js` |
| Homepage mid | 2× 300×250 rectangles | `pages/index.js` |
| All riddles page | 728×90 + in-feed every 8 riddles | `pages/riddles/index.js` |
| Individual riddle | 728×90 + 336×280 rectangle | `pages/riddles/[slug].js` |
| Category pages | 728×90 + in-feed every 5 riddles | `pages/categories/[category].js` |

### Step 2: Ezoic (10k–50k sessions/month)
Switch from AdSense to Ezoic for significantly higher RPMs and AI-optimised ad placement.

### Step 3: Mediavine (50k+ sessions/month)
Premium ad network. Typical RPM: £8–£25 depending on audience. This is where meaningful revenue begins.

---

## SEO & LLM Strategy

### Why this site will appear in AI answers

Each individual riddle page (`/riddles/[slug]`) uses:

- **`QAPage` structured data** (schema.org) — tells Google and AI crawlers this is a question with an accepted answer
- **The answer in the visible DOM** — the answer is in the HTML source, not hidden behind JS that crawlers can't read. The "reveal" button is purely visual
- **`<details>` element** — a fallback "Quick answer" visible to all crawlers without any JavaScript
- **Semantic HTML** — h1 for the question, clear answer heading, explanation paragraph
- **Descriptive meta descriptions** — include both question and answer text

### Pinterest / Social sharing
- Each riddle page has Open Graph tags
- The question makes for a great Pinterest image (you know how to make those!)
- Consider creating a Canva/Illustrator template for riddle cards: question on front, answer on back

---

## File Structure

```
riddleking/
├── pages/
│   ├── _app.js                → Global app wrapper
│   ├── index.js               → Homepage
│   ├── about.js               → About page
│   ├── submit.js              → Submit a riddle
│   ├── privacy.js             → Privacy policy
│   ├── 404.js                 → Custom 404
│   ├── sitemap.xml.js         → Auto sitemap
│   ├── robots.txt.js          → robots.txt
│   ├── riddles/
│   │   ├── index.js           → All riddles (with filters)
│   │   └── [slug].js          → Individual riddle page
│   └── categories/
│       ├── index.js           → Category browser
│       └── [category].js      → Category riddle list
├── components/
│   ├── Nav.js                 → Sticky navigation
│   ├── Footer.js              → Site footer
│   ├── RiddleCard.js          → Core interactive riddle card
│   └── SEOHead.js             → Meta tags + structured data
├── data/
│   └── riddles.js             → All 40 riddles + helper functions
├── styles/
│   └── globals.css            → Global styles + design system
├── public/
│   └── favicon.ico            → Add your crown favicon here
├── next.config.js
├── package.json
└── README.md
```

---

## Revenue Projections (rough estimates)

| Monthly Sessions | Platform | Est. Monthly Revenue |
|-----------------|----------|----------------------|
| 5,000 | AdSense | £5–£15 |
| 20,000 | Ezoic | £40–£80 |
| 50,000 | Mediavine | £250–£600 |
| 200,000 | Mediavine | £1,000–£2,500 |

Key lever: **Pinterest**. Riddle content is extremely shareable. A single viral riddle pin can send thousands of sessions.

---

## Growth Checklist

- [ ] Buy riddleking.co.uk (Namecheap / GoDaddy ~£10/yr)
- [ ] Deploy to Vercel
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (GA4)
- [ ] Apply for Google AdSense
- [ ] Create Pinterest Business account → pin each riddle
- [ ] Add 10 new riddles per month to keep growing
- [ ] Reach 10k sessions → switch to Ezoic
- [ ] Reach 50k sessions → apply for Mediavine
