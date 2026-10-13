# GDS Media Website — Project Rules

> These rules apply to every session. Read before writing any code.

## BUSINESS DETAILS
- Brand: GDS Media | Domain: https://www.gdsmedia.in (canonical host)
- Phone/WhatsApp: 7400168255 | Email: yogeshgdsmedia@gmail.com
- Hours: Mon–Sat, 11AM–8PM IST
- Primary CTA: "Book Your Strategy Call" → https://calendly.com/gdstejovex/ai-powered-marketing
- Secondary CTA: WhatsApp → https://wa.me/917400168255
- Audience: Indian business owners & MSMEs (clinics, aesthetics, salons, retail, real estate, fashion, luxury products)

## PURPOSE
Make AI-powered marketing accessible, affordable and results-driven for every Indian business owner — without bloated timelines and studio costs of traditional agencies.

## THE GDS LEAD-TO-SALE ENGINE
Brand Blueprint → Story + Ad Script → Cinematic AI Ad → AI-Optimised Advertising → Quality Leads → Instant Reply Assistant (WhatsApp) → Voice Follow-Up Agent (AI calling) → Sales + Growth

## THREE PILLARS
- **BLUEPRINT**: Strategy + Brand
- **STUDIO**: AI Creative + Storytelling
- **GROWTH ENGINE**: AI Advertising + Sales Automation

---

## SITE STRUCTURE

| Display Name | URL Slug |
|---|---|
| Home | / |
| About | /about |
| Services Overview | /services |
| Brand Blueprint | /services/brand-strategy |
| Cinematic AI Ads | /services/ai-ad-films |
| AI Brand Ambassador | /services/ai-avatars |
| Micro-Drama Studio | /services/branded-micro-dramas |
| Jingle & Sound Lab | /services/brand-music |
| Sound & Vision Reels | /services/music-videos |
| Product Spotlight Videos | /services/ai-product-explainer-videos |
| Virtual Creator Studio | /services/ai-influencer-ugc-videos |
| Always-On Social | /services/social-media-management |
| Meta Ads Lab | /services/meta-performance-marketing |
| Intent Ads | /services/google-ads |
| Instant Reply Assistant | /services/ai-whatsapp-chat-assistant |
| Voice Follow-Up Agent | /services/ai-calling-bot |
| Lead-to-Sale Autopilot | /ai-sales-automation |
| Work / Portfolio | /work |
| Process | /process |
| FAQ | /faq |
| Blog Index | /blog |
| Blog Post | /blog/[slug] |
| Contact | /contact |
| Privacy Policy | /privacy-policy |
| Terms | /terms |

**Do NOT create any OTT advertising page. Do NOT mention OTT or JioHotstar anywhere.**

---

## STACK
- Next.js (App Router, TypeScript)
- Tailwind CSS
- `use client` only for interactive components (menu, accordion, form, video)
- Every page: server-rendered or statically generated — real content in initial HTML
- Contact form: server route/API, honeypot spam protection, destination is a TODO

## URLS
- Lowercase, hyphenated, short slugs
- No trailing slashes (301 redirect slash → no-slash)
- Redirect non-www → https://www.gdsmedia.in (301)
- All redirects: single hop, defined in next.config.ts
- Old URL /hkwtuhhw → 301 to / (confirm before launch)

## METADATA & CANONICALS
- metadataBase: https://www.gdsmedia.in
- Every page: unique title (50–60 chars), meta description (140–160 chars), self-referencing canonical
- Open Graph + Twitter card (summary_large_image), unique OG image per page where possible
- No default/template titles

## INDEXING
- sitemap.xml generated programmatically (same data as routes)
- robots.txt pointing to sitemap
- Exclude: 404, thank-you, draft pages
- Custom not-found page → real HTTP 404; missing dynamic slugs call notFound()
- No client-side redirects

## PERFORMANCE
- Install only dependencies actually used
- next/image: width/height, WebP/AVIF, lazy below fold, priority on hero
- Videos: poster image, compressed, no autoplay with sound, lazy below fold
- next/font with few weights
- Third-party scripts via next/script (afterInteractive or lazyOnload)
- Targets: LCP < 2.5s, INP < 200ms, CLS < 0.1, Lighthouse mobile 90+

## HEADINGS & SEMANTICS
- Exactly ONE h1 per page, logical h2/h3 order, no skipped levels
- Semantic HTML: header, nav, main, section, footer
- Descriptive alt text on meaningful images

## STRUCTURED DATA (JSON-LD)
- Organization / ProfessionalService: site-wide (name, url, logo, phone, email, hours, areaServed India, social profiles)
- BreadcrumbList: all inner pages
- FAQPage: /faq and any page with FAQ section
- Service: each service page
- Article: blog posts
- Review/AggregateRating: ONLY if real verifiable reviews provided

## BRANDING & CONTENT
- Replace all framework default favicons — use placeholders named clearly
- ORIGINAL copy only — do not copy from aisochstudio.com or current gdsmedia.in
- Mark placeholder copy as: `TODO: replace with human-written copy`
- Tone: confident, practical, plain English for busy Indian business owners
- Core messages: strategy before AI, marketing shouldn't stop at the lead, premium look at fraction of shoot costs
- Do NOT invent: client names, case studies, statistics, testimonials, ratings, pricing, delivery promises
- Create clearly marked slots for: client logos, case studies, testimonials
- Do NOT add fake urgency (no countdown timers, no "limited time offer" banners)
- Numeric claims (turnaround times, cost comparisons) → mark `TODO: confirm with GDS Media`

## WORKFLOW ORDER
1. Propose folder structure + route map + keywords/titles/descriptions → wait for approval
2. Scaffold SEO foundations first (metadata helper, sitemap, robots, not-found, canonical, schema helpers, redirects)
3. Build pages
4. Audit production build (view-source content, titles/descriptions/canonicals, h1s, sitemap, robots, 404s, redirect chains, unused deps, Lighthouse)
5. List all TODOs, placeholders, and assets still needed
