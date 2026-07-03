# TODO SEO

> Last updated: 2026-07-03

## Pending Changes

### Replace hotlinked Spotify logo used as favicon / og:image / twitter:image
- **Source:** https://developer.spotify.com/documentation/design (Spotify brand guidelines — third-party apps must not use Spotify's own logo as their own app icon/brand mark) + general OG image best practice (image should represent *your* product, not the platform you integrate with)
- **What:** `index.html` currently sets `<link rel="icon">`, `og:image`, and `twitter:image` all to `https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png` — Spotify's own press-kit logo, hotlinked from Spotify's asset bucket.
  - Trademark risk: presenting Spotify's logo as spotiPaper's own icon/social-card image can read as misuse of Spotify's brand assets (README already flags "Respeite termos e políticas do Spotify").
  - Fragility: it's an external URL the project doesn't control — if Spotify moves/removes it, favicon and all social-share previews silently break.
  - Weak preview: it doesn't show what spotiPaper actually does (a wallpaper generator), just a third-party logo.
  - Branded replacement assets have already been generated and added to `public/`: `favicon-32.png`, `apple-icon.png`, `icon-192.png`, `icon-512.png`, `og-image.png` (dark bg, portrait-phone silhouette with a Spotify-green gradient + palette swatches — no Spotify logo used, only the brand-associated green).
- **Where:** `index.html` lines 22, 31, 34 — swap:
  - `<link rel="icon" ...>` → `href="/favicon-32.png"` (add `<link rel="apple-touch-icon" href="/apple-icon.png">` too)
  - `og:image` → `/og-image.png` (absolute URL: `https://spotipaper.vercel.app/og-image.png`), update `og:image:width`/`height` stay 1200/630 (already match)
  - `twitter:image` → same `og-image.png` URL
- **Why:** Removes trademark exposure, removes external dependency, and gives a social-share image that actually represents the product.
- **Risk:** None functionally — assets already generated and verified (correct PNG dimensions). Only risk is aesthetic (auto-generated placeholder graphic, not designer-made) — see effort note.
- **Effort:** Low (three attribute swaps in `index.html` + one new `<link>` tag).

### Design a polished OG image (optional upgrade)
- **Source:** https://web.dev/articles/optimize-og-images
- **What:** `public/og-image.png` was generated with a raw pixel-drawing script (phone silhouette + gradient + color swatches), no text/title. A version with "spotiPaper" wordmark and tagline would convert better on social shares.
- **Where:** `public/og-image.png`
- **Why:** Higher click-through from shared links.
- **Risk:** None — visual-only swap.
- **Effort:** Medium (needs actual design pass, not a scripted placeholder).
