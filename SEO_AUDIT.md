# GDS Media Website — SEO Audit

**Date:** 2026-11-03
**Stack:** Next.js 15 (App Router, TypeScript), Tailwind CSS, hosted at `https://www.gdsmedia.in`
**Routes audited:** 15 static routes (`lib/routes.ts`) + 2 dynamic blog posts (`lib/blog-posts.ts`) = **17 pages**

Inferred without needing to ask:
- **Business location:** India (pan-India, no single physical storefront — remote/MSME-focused agency)
- **Primary services (current, post-consolidation):** Performance Marketing, SEO & Content, Brand & Creative, Analytics & CRO, plus the standalone "Lead-to-Sale Autopilot" (AI sales automation) page
- **Target keywords:** already defined per-route in `lib/routes.ts` (`keyword` field), e.g. "AI marketing agency India", "performance marketing agency India", "SEO agency for small business India", etc.

---

## Summary Score: **70 / 100**

The technical SEO foundation is genuinely strong — centralized route/metadata config, self-referencing canonicals on every page, a complete sitemap (including blog posts), clean URL structure, correct 404 handling, one `<h1>` per page, and solid JSON-LD coverage (Organization, BreadcrumbList, Service, FAQPage, Article). The score is pulled down by two concrete, high-impact bugs — a broken Open Graph image on 13 of 17 pages, and a 13MB autoplay video loading on 16 of 17 pages — plus a handful of smaller performance/accessibility gaps.

---

## Issue Table

| Page(s) | Issue | Severity | Recommended Fix |
|---|---|---|---|
| All except `/`, blog posts | **Open Graph image is broken on 13/17 pages.** `buildMetadata()` falls back to `/og/default.png` when no `ogImage` is passed; `public/og/` is an **empty directory** — that file doesn't exist. Same for `/og/blog-default.png` used as the `Article` schema fallback. Any social/WhatsApp share of Home, About, Services (all 5), Lead-to-Sale, Work, Process, FAQ, Blog index, Contact, Privacy, Terms shows a broken image. | **Critical** | Generate a real default OG image (1200×630) at `public/og/default.png` and `public/og/blog-default.png`, or pass an explicit `ogImage` per route. |
| Every page except Home (16/17 pages) | **13MB uncompressed `about-hero.mp4` autoplays on every `PageHero`.** No `poster` is ever passed, no `preload` attribute set. This is the single largest performance/CWV liability on the site — it directly hurts LCP and burns mobile data on every page view. Already flagged earlier in this project and never remediated. | **Critical** | Compress the video (target <2–3MB, H.264, reduce resolution/bitrate), generate and pass a `videoPoster` per page, add `preload="metadate"` (or lazy-load below the fold where the hero isn't the first paint). |
| `/work` | **5 raw PNG images (1.4–1.8MB each, ~8MB total)** loaded via `three.js` texture (`Image 1.png`…`Image 5.png`) for the magazine-flip corridor — not optimized, not WebP/AVIF, not responsive. | **High** | Re-export as compressed WebP at a sane max dimension (these are full 1080p+ ad-creative screenshots being shown in a ~500×650 viewer). |
| `/work` | Image filenames are generic/non-descriptive with spaces (`Image 1.png`), which URL-encode to `%20` in the served path. Alt text is good and descriptive; only filenames are weak. | **Low** | Rename to descriptive slugs, e.g. `healthcare-ai-ad-campaign.webp`. |
| Site-wide | **Brand-blue text (`#008DBB`) on the light background (`#F5FAFD`) measures ~3.7:1 contrast** — fails WCAG AA (4.5:1) for normal-size text. It's used extensively for nav links, labels, and small badges. Passes AA for large/bold text only. | **Medium-High** | Darken the blue token slightly for text use (keep the brighter blue for large decorative elements), or add a darker `text-brand-blue-ink` variant for small text. |
| Homepage trust-bar (`LogoMarquee`) | Client logo images use raw `<img>` with no `width`/`height` attributes — no reserved aspect ratio before load, a CLS risk. Alt text is present and correct. | **Medium** | Add explicit `width`/`height` (or switch to `next/image`) per logo. |
| Site-wide | No code-level enforcement of the apex (`gdsmedia.in`) → `www.gdsmedia.in` redirect that `SITE_URL`/canonical tags assume. This likely needs to live at the hosting/DNS layer (no `middleware.ts` or `vercel.json` exists in the repo). | **Medium** | Verify this is configured in the hosting provider's domain settings; if not, add a `middleware.ts` redirect as a code-level fallback. |
| Organization schema (`lib/schema.ts`) | `sameAs` array is empty with a `TODO` comment — no verified social profile URLs, weakening entity/brand understanding for Google. | **Medium** | Add real Instagram/Facebook/LinkedIn URLs once available. |
| Site-wide | No `WebSite` schema type (used for Google's sitelinks search box eligibility). Not currently relevant since there's no on-site search, but worth adding alongside `Organization` for completeness. | **Low** | Add a minimal `WebSite` JSON-LD block in the root layout. |
| `/privacy-policy`, `/terms` | Meta titles (26/28 chars) and descriptions (112/101 chars) are well under the 50–60 / 140–160 char targets. Low priority — legal boilerplate pages rarely drive organic traffic. | **Low** | Optional: lightly expand for consistency, not urgent. |
| `/services`, `/services/analytics-cro` | Meta descriptions (138, 132 chars) sit just under the 140-char floor. | **Low** | Add a few words to each. |
| Both blog posts | Meta descriptions (137, 127 chars) are under the 140-char floor. | **Low** | Expand slightly. |
| Repo-wide (not shipped, no live impact) | `components/bento/*` (5 files) and `components/originkit/ui/xylophone-helix-04.tsx` are dead code — unused anywhere, leftover from an earlier reverted redesign. Doesn't affect the live bundle (unused imports are tree-shaken) or SEO, but worth noting as repo hygiene. | **Low** (informational) | Delete if confirmed unused — not an SEO fix, mentioning for completeness only. |

### What's already correct (no action needed)
- `robots.txt` (`app/robots.ts`): correct, allows all, points to sitemap, disallows `/api/`
- `sitemap.xml` (`app/sitemap.ts`): complete — all 15 static routes + both blog posts, correct `lastModified`/priority
- Self-referencing canonical tag on every single page via `buildMetadata()`
- Every page has exactly one `<h1>`, logical heading order (verified across all 17 pages)
- Unique, keyword-targeted titles/descriptions per route (centralized in `lib/routes.ts`)
- 404 handling: real Next.js `not-found.tsx` returns a true HTTP 404, not a soft-404
- No redirect chains — one single-hop 301 (`/hkwtuhhw → /`)
- Clean, lowercase, hyphenated URL structure throughout
- No broken internal links (cross-checked every `href` in Header/Footer/Services-index against live routes)
- JSON-LD coverage: `Organization`/`ProfessionalService` (site-wide), `BreadcrumbList` (every inner page), `Service` (all 4 service pages), `FAQPage` (FAQ page, homepage, both blog posts), `Article` (blog posts)
- OG + Twitter Card tags (`summary_large_image`) generated on every page — only the *image file itself* is broken (see Critical issue above)
- Custom favicon (`app/icon.png`, `app/apple-icon.png`) generated from the real logo, not framework defaults
- `lang="en-IN"` set, viewport meta auto-provided by Next.js
- `next/font` used throughout with `display: swap` — no font-loading layout shift
- GA4 script loads `async`; Google Search Console verification tag present
- `next/image` used correctly (with alt text + explicit dimensions) for the logo and blog hero images
- Mobile layout: horizontal-overflow bug from decorative hero elements already fixed in a prior pass; responsive nav with proper `aria-label`s on interactive icon-only buttons

---

## Prioritized Fix List (Critical → Low)

1. **[Critical]** Generate real `public/og/default.png` + `public/og/blog-default.png` (or pass explicit `ogImage` per route)
2. **[Critical]** Compress `about-hero.mp4`, add poster images, add `preload` attribute
3. **[High]** Compress/convert the 5 `/work` portfolio images to WebP
4. **[Medium-High]** Fix brand-blue text contrast ratio for small/normal text
5. **[Medium]** Add `width`/`height` to `LogoMarquee` images
6. **[Medium]** Verify/implement apex → www redirect
7. **[Medium]** Add real `sameAs` social URLs to Organization schema (pending you having the URLs)
8. **[Low]** Add `WebSite` schema
9. **[Low]** Rename `/work` image files to descriptive slugs
10. **[Low]** Pad the handful of meta descriptions sitting just under 140 chars

---

## Phase 2 — Fixed vs Remaining

Approved and applied on 2026-11-03. `tsc --noEmit` and `next build` both pass clean after every change below (no ESLint config exists in this project — `next lint` prompts to create one interactively, so I didn't configure a new linter unprompted; flagging as a manual step below instead).

### Fixed

| # | Item | What was actually done |
|---|---|---|
| 1 | Broken OG image (Critical) | Generated real branded 1200×630 images at `public/og/default.png` and `public/og/blog-default.png` (logo + tagline on the brand palette, via `sharp`). Both verified to resolve correctly. |
| 2 | 13MB autoplay video (Critical) | **Partially mitigated, not fully fixed** — see "Remaining" below. Added `preload="metadata"` to the `<video>` tag, and `PageHero` now defaults to a lightweight generated placeholder poster (`public/videos/hero-poster.jpg`, 14KB) instead of a blank/black flash, wherever a page doesn't pass its own `videoPoster`. |
| 3 | `/work` unoptimized images (High) | Converted all 5 images from PNG to WebP via `sharp` (quality 78, max width 1200px): **7.86MB → ~611KB total, a 92% reduction.** Verified rendering correctly in the magazine-flip viewer. |
| 9 | Non-descriptive filenames (Low) | Renamed alongside the WebP conversion: `Image 1.png` → `healthcare-ai-ad-campaign.webp`, etc. — all 5 now descriptive. `app/work/page.tsx` updated, old PNGs deleted. |
| 4 | Brand-blue text contrast (Medium-High) | Darkened the single `brand.blue` Tailwind token from `#008DBB` → `#0076A3` (contrast vs `#F5FAFD` background: ~3.7:1 → ~4.9:1, passes WCAG AA for normal text). One-line token change in `tailwind.config.ts`, cascades everywhere `brand-blue` is used — same hue family, just darker. |
| 5 | `LogoMarquee` CLS risk (Medium) | Added explicit `width`/`height` attributes to all 8 client logo `<img>` tags, computed from each file's real aspect ratio via `sharp` (e.g. square logos `56×56`, wide logos like The Watch Store `211×56`). |
| 6 | No apex→www redirect (Medium) | Added `middleware.ts`: a 301 redirect from `gdsmedia.in` → `www.gdsmedia.in` at the application layer, so this doesn't depend solely on hosting/DNS configuration. Confirmed it doesn't interfere with `localhost` dev traffic. |
| 8 | No `WebSite` schema (Low) | Added `websiteSchema()` to `lib/schema.ts`, included alongside `organizationSchema()` in the root layout's JSON-LD. |
| 10 | 4 short meta descriptions (Low) | Expanded `/services`, `/services/analytics-cro`, and both blog post descriptions to land in the 140–160 char range (verified exact character counts after editing). |
| — | **New issue found during Phase 2 (not in the original audit table)** | Running a clean production build after these fixes surfaced that the **homepage's First Load JS was 248kB** (vs ~103–108kB on every other page) — `NeuralHero` and `OrbitalType` both import `three.js` directly and were bundled synchronously into the server component. Converted both to `next/dynamic(..., { ssr: false })` via a new Client Component wrapper (`components/home/LazyHero.tsx`), matching the pattern already used for `/work`'s magazine component. **Result: homepage First Load JS dropped from 248kB to 108kB** (a 140kB / 56% reduction). Verified visually — both decorative elements still render identically, just load async post-hydration. |

### Remaining — needs you

| # | Item | Why it's not done |
|---|---|---|
| 2 | **Real video compression** | I don't have `ffmpeg` (or any video encoder) available in this environment, so I could not compress `about-hero.mp4` or extract a real poster frame from it. The poster I generated is a flat brand-colored placeholder, not an actual frame. **This is still the single biggest performance issue on the site** — a 13MB file loading on 16 pages. You'll need to compress it yourself (target: H.264, <2–3MB, e.g. via HandBrake or an online compressor) and I can swap it in and wire up a real poster frame from the compressed file. |
| 7 | **`sameAs` social URLs** | Skipped as agreed — I don't have your real Instagram/Facebook/LinkedIn URLs. Send them whenever and I'll add them to `lib/schema.ts`. |
| — | **ESLint not configured** | `next lint` wants to interactively scaffold a new config (Strict/Base choice) — I didn't do this unprompted since it's a project-tooling decision, not an SEO fix. If you want lint-on-commit going forward, let me know and I'll set it up. |

### Manual steps you still need to do (outside this codebase)
- **Google Search Console**: verification meta tag is already in place (`app/layout.tsx`) — go to [search.google.com/search-console](https://search.google.com/search-console), confirm verification, and submit `https://www.gdsmedia.in/sitemap.xml`.
- **Google Business Profile**: not something I can set up from the codebase — create/claim one for local relevance signals (even for a remote-first agency, it helps India-wide trust signals).
- **Backlinks**: outside code scope entirely — outreach/guest posts/directory listings.
- **Verify the apex→www redirect** actually works in production once deployed (I added the `middleware.ts` fallback, but also check your hosting provider's own domain settings for www).
- **Compress `about-hero.mp4`** and send me the compressed file (or a link) so I can wire it back in with a real poster frame.
- **Social profile URLs** for the `sameAs` schema field, whenever you have them.
