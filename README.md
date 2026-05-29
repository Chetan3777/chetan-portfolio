# Chetan Jha — Portfolio

Personal portfolio site for **Chetan Jha**, Senior Software Engineer (Java + Agentic AI).

Built with **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion**. Single-page, fully responsive, **warm-cream editorial** design with a floating pill nav, italic display headings, and a contrasting dark services section.

---

## Quick start

```bash
# 1. install
npm install

# 2. start dev server
npm run dev
# → http://localhost:5173

# 3. production build
npm run build

# 4. preview the production build locally
npm run preview
```

Requires **Node ≥ 18**.

---

## How to update content

**99% of your edits go to one file:** [`src/data/portfolio.ts`](./src/data/portfolio.ts).

Everything is typed, grouped by section, and commented. No component code changes needed for routine updates.

| What you want to change | Edit |
| --- | --- |
| Name, title, tagline, bio, social links | `profile` |
| Hero typewriter words | `profile.roles` |
| Hero portrait floating tag badges | `profile.floatingTags` |
| Hero quote on the testimonial card | `profile.heroQuote` |
| Hero stat block (Years, rating, etc.) | `heroStats` |
| Services (dark section, 3 cards) | `services` |
| Experience timeline jobs + bullets | `experience` |
| Skill chips, grouped | `skillGroups` |
| Project cards | `projects` |
| "What I Bring" value cards | `valueProps` |
| Nav links | `navLinks` |
| Education ribbon | `education` |
| Footer one-liner | `footer` |

### Adding a new job
Open `src/data/portfolio.ts`, find `experience`, and prepend a new entry. Set `current: true` on the most recent one to show the glowing **Current** badge — and remove it from the previous current job.

### Adding a new project
Append (or prepend) an entry to the `projects` array. Set `featured: true` to give the card the orange "AI Native" treatment.

### Updating the résumé
Drop your PDF at `public/resume.pdf`. The download buttons already point to `/resume.pdf`. If you change the filename, update `profile.resumeUrl` in `src/data/portfolio.ts`.

### Adding a real photo (optional)
The hero portrait uses a stylized "CJ" mark on the brand-orange circle by design. To replace it with a real photo:
1. Drop your portrait into `public/me.jpg` (square, ≥ 720 px works best).
2. In [`src/components/Hero.tsx`](./src/components/Hero.tsx) → find `PortraitCard` → replace the centered `<div>` with the `CJ` initials with an `<img src="/me.jpg" alt="Chetan Jha" className="…" />`.

### Changing the colour palette / fonts
- Colours: [`tailwind.config.js`](./tailwind.config.js) → `theme.extend.colors` (the `brand`, `cream`, and `ink` scales)
- Fonts: [`tailwind.config.js`](./tailwind.config.js) → `theme.extend.fontFamily`, plus the `<link>` in [`index.html`](./index.html)

---

## Design system

- **Aesthetic** — warm editorial portfolio: cream parchment background, refined orange accent (`#F26A1F`), high-contrast dark "Services" section.
- **Layout signature** — floating pill nav with centred logo, oversized italic display headings with one-word accent, portrait card with circle backdrop and floating tech badges.
- **Type** — `Instrument Serif` (italic display) · `Plus Jakarta Sans` (body) · `JetBrains Mono` (technical accents). Loaded from Google Fonts.
- **Motion** — Framer Motion with `viewport={{ once: true }}` for one-shot scroll reveals. Subtle tilt on project cards. Respects `prefers-reduced-motion`.

---

## Project structure

```
chetan-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf            ← drop your résumé here
├── src/
│   ├── components/
│   │   ├── ui/               ← shared primitives
│   │   ├── Navbar.tsx        ← pill nav with centred logo
│   │   ├── Hero.tsx          ← portrait card + stats
│   │   ├── Services.tsx      ← dark contrast section
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ValueProps.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts      ← ★ ALL CONTENT LIVES HERE
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── package.json
```

---

## Deploy to Vercel — step by step

### 1. Push this repo to GitHub

From the project root (`chetan-portfolio/`):

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"

# Create a new GitHub repo and push (uses your gh CLI auth)
gh repo create chetan-portfolio --public --source=. --remote=origin --push
```

You can also create the repo via [github.com/new](https://github.com/new), then run:

```bash
git remote add origin https://github.com/Chetan3777/chetan-portfolio.git
git branch -M main
git push -u origin main
```

### 2. Import the repo in Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Click **Import** next to `chetan-portfolio`.
3. Vercel auto-detects Vite — leave everything default. Click **Deploy**.

That's it. After ~60 seconds your site is live at `chetan-portfolio.vercel.app` (or whatever Vercel assigned).

### 3. (Optional) Custom domain

In your Vercel dashboard → **Settings → Domains** → add your domain (e.g. `chetanjha.dev`). Vercel will give you DNS records to point at — set them at your registrar (Namecheap, GoDaddy, Cloudflare) and the site goes live on your domain within minutes.

### 4. Auto-deploys after the first one

Every `git push` to `main` triggers a new Vercel build and deploy automatically. There's nothing else to configure.

### Alternatives

| Host | Build command | Output dir |
| --- | --- | --- |
| **Netlify** | `npm run build` | `dist` |
| **Cloudflare Pages** | `npm run build` | `dist` |
| **GitHub Pages** | `npx gh-pages -d dist` | (after build) |

---

## Your résumé — where to put it & how to update without redeploying

### Option A — Recommended: host on Google Drive (zero redeploys)

This is the simplest path. Upload once, replace the file whenever your résumé changes, the portfolio always serves the latest version with no rebuild.

1. Upload your résumé PDF to **Google Drive**.
2. Right-click the file → **Share** → **General access: Anyone with the link → Viewer** → **Copy link**. You'll get something like:
   `https://drive.google.com/file/d/1AbCdEfGhIjKlMnOp/view?usp=sharing`
3. Extract the **file ID** — the long string between `/d/` and `/view`. In the example above: `1AbCdEfGhIjKlMnOp`.
4. Open [`src/data/portfolio.ts`](./src/data/portfolio.ts) and set:

   ```ts
   resumeUrl: "https://drive.google.com/uc?export=download&id=1AbCdEfGhIjKlMnOp",
   ```

   (Direct download — the visitor's browser saves the PDF immediately when they click "Download Résumé".)

   Or use the **view URL** if you'd rather it open in a Drive preview tab first:

   ```ts
   resumeUrl: "https://drive.google.com/file/d/1AbCdEfGhIjKlMnOp/view",
   ```

5. Commit and push once. Done.

**When you update your résumé in the future:**

- Open the file in Drive → **File → Manage versions → Upload new version**.
- The URL stays the same. Your portfolio now serves the latest résumé immediately. **No code change, no git push, no redeploy.**

> Same approach works with Dropbox, OneDrive or any cloud storage that gives you a stable shareable link.

### Option B — Host the PDF in the repo (requires a push to update)

1. Save your résumé as `public/resume.pdf` inside this project. Anything in `public/` is served from the site root, so the file is automatically available at `your-site.com/resume.pdf`.
2. Make sure `resumeUrl` in `src/data/portfolio.ts` is `"/resume.pdf"` (this is the default).
3. Commit and push. Vercel deploys.

**When you update your résumé:**

```bash
# replace the file
cp ~/path/to/new-resume.pdf public/resume.pdf

# commit and push
git add public/resume.pdf
git commit -m "Update résumé"
git push
```

Vercel rebuilds automatically (~30 seconds) and the new PDF is live.

> Use Option A if you'd rather avoid touching git every time you tweak your résumé. Use Option B if you prefer the PDF to live in your own repo.

---

## Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`).
- All interactive elements are keyboard-reachable with visible focus rings (brand orange).
- ARIA labels on icon-only buttons and the mobile drawer.
- `prefers-reduced-motion` disables animations site-wide.

---

## Licence

Personal portfolio. All content © Chetan Jha.
