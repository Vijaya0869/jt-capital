# JT Capital — website

Vite + React + Tailwind. Single marketing page with anchor navigation; no
backend, no forms that collect data (mailto links only, deliberately).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Editing content (CMS)

Content is edited through [Decap CMS](https://decapcms.org) at **`/admin/`**.
It commits to the JSON files in `src/content/`; GitHub Actions redeploys on each commit to `main`.

- **Editorial workflow is on.** Saving creates a draft (a pull request).
  Nothing goes live until someone moves it to *Ready* and clicks *Publish*
  in the Workflow tab — use that step for figure and counsel review.
- **Not editable in the CMS, on purpose:** the footer disclaimer and the
  chapter numerals. Change those in `src/data/content.js` through a code review.
- Schema: `public/admin/config.yml`. If you add a field to a JSON file, add it
  to the schema too, or the CMS will drop it on the next save.

**Local editing** (no login, writes straight to disk):

```bash
npm run cms      # terminal 1 — local Decap proxy on :8081
npm run dev      # terminal 2 — then open http://localhost:5173/admin/index.html
```

**Hosting and sign-in**

The site is served by **GitHub Pages** at **https://www.jtcapitalgrp.com**
(`public/CNAME`). `.github/workflows/deploy.yml` builds and deploys every
push to `main`, including CMS publishes. Editors sign in to
`https://www.jtcapitalgrp.com/admin/` with GitHub; Netlify is used only to
handle that GitHub login.

One-time setup:

1. **Push** this folder as the root of `github.com/Vijaya0869/jt-capital`, branch `main`.
2. **GitHub Pages:** in the repo, go to Settings → Pages → Source and choose **GitHub Actions**.
   Set Custom domain to `www.jtcapitalgrp.com`, then tick *Enforce HTTPS* once
   the certificate is issued.
3. **DNS** at your domain registrar:
   - `www` → CNAME → `vijaya0869.github.io`
   - apex `jtcapitalgrp.com` → A records `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (GitHub redirects it to `www`)
4. **GitHub OAuth app:** go to GitHub → Settings → Developer settings → OAuth Apps → New.
   Homepage `https://www.jtcapitalgrp.com`, callback
   `https://api.netlify.com/auth/done`. Keep the client ID and secret.
5. **Netlify:** create a site from the same repo (free tier). Under Site configuration →
   Access & security → OAuth, install the **GitHub** provider with the ID
   and secret. Put that site's domain in `backend.site_domain` in
   `public/admin/config.yml`.
6. **Editors:** add each editor as a collaborator with write access to the repo.

The Netlify site also builds a copy of the site from `netlify.toml`. That copy
isn't needed, so you can turn off its builds.

## Where things live

| What | Where |
|---|---|
| **All copy and every figure** | `src/content/*.json` (edited via `/admin/`) |
| Content loader + disclaimer | `src/data/content.js` |
| CMS schema | `public/admin/config.yml` |
| Design tokens (both themes) | `src/index.css` |
| Tailwind colour/font names | `tailwind.config.js` |
| Chapter frame + roman-numeral motif | `src/components/ui/Chapter.jsx` |
| Table primitive | `src/components/ui/DataTable.jsx` |
| Theme switching | `src/hooks/useTheme.js` |

## Design system

A dark-first investment memo. Numbered chapters, a sticky roman numeral in a
keyline square, antique brass as the only accent.

- **Display** Spectral (300/400 + italics) · **Body** Archivo · **Utility** JetBrains Mono
- **Brass** `#C0A063` dark / `#8A6E31` light
- Radius never exceeds 2px. No shadows, no gradients.
- Tight bordered grids come from `.hairgrid` — a 1px gap over a rule-coloured
  ground — rather than separated cards.

The roman-numeral-in-a-keyline-square motif is shared with the offering deck.
If you change it here, change it there too.

### Theming — dark-first

This design commits to dark as its primary look, so the bare `:root` block
declares the **complete dark palette**, and light is the redefinition:

1. `:root` — the full dark palette.
2. `@media (prefers-color-scheme: light)`, guarded as `:root:not([data-theme='dark'])`.
3. `:root[data-theme='light']` so the toggle wins in both directions.

A viewer on "system" has no `data-theme` attribute at all, which is why every
token must exist on the bare `:root` first.

## Non-negotiable

- **Every financial figure is illustrative** and comes from the Ohio Value-Add
  Portfolio I model. Do not add a figure that is not in the model.
- **Do not remove the word "Illustrative"** from the offering section or the
  footer disclaimer. Both are there for securities reasons.
- **No data collection.** Mailto only. A form that collects investor details
  creates obligations that do not exist yet.
- **No testimonials, logo walls or "as seen in" strips.** On a capital-raise
  site those read as fabricated credibility.
- **No R&R Grandeur portfolio counts or years operating.** Internal.

## Before launch

- [ ] **Securities counsel review** — the affiliate fee structure (10%
      construction + 10% property management to R&R Grandeur) is what a reviewer
      will focus on. 506(b) vs 506(c) is undecided.
- [ ] Dedicated JT Capital email address and phone number
- [ ] Point the operating-arm link at rrgp.io (`firm.operatingArmUrl`)
- [ ] Replace illustrative figures with real underwriting once the Dana Heights
      purchase agreement and a lender term sheet exist
