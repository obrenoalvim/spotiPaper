# TODO SEO

> Last updated: 2026-07-04

## Pending Changes

### Design a polished OG image (optional upgrade)
- **Source:** https://web.dev/articles/optimize-og-images
- **What:** `public/og-image.png` was generated with a raw pixel-drawing script (phone silhouette + gradient + color swatches), no text/title. A version with "spotiPaper" wordmark and tagline would convert better on social shares.
- **Where:** `public/og-image.png`
- **Why:** Higher click-through from shared links.
- **Risk:** None — visual-only swap.
- **Effort:** Medium (needs actual design pass, not a scripted placeholder).

## Applied
- Replaced hotlinked Spotify press-kit logo (favicon, og:image, twitter:image) with the project's own branded assets (`favicon-32.png`, `icon-192.png`, `icon-512.png`, `apple-icon.png`, `og-image.png`) — removes trademark exposure and the external dependency on Spotify's asset bucket.
- Removed unused `javascript.svg` scaffold leftover from repo root.
