# PAVBLU® homepage — redesign concept

A responsive build of Aniket Kale's Figma redesign of the PAVBLU® (aflibercept-ayyh) healthcare-professional homepage. It's built with **Next.js + React + CSS Modules** and is ready for **GitHub → Vercel**.

> This is a design-assignment concept, not the official site. The page says so in a top bar and in the footer, and it tells search engines not to index it (`robots: noindex`). Please keep those in place, since the page uses Amgen's real brand.

## Structure

```
app/
  layout.tsx        Montserrat font, page metadata (noindex)
  page.tsx          Page = stack of sections
  globals.css       Design tokens (the Figma color styles), shared type
components/
  ConceptBar        "Redesign concept" notice
  Header            Logo, pill nav, mega-menu card, FOR PATIENTS button, mobile menu card
  navData.tsx       Menu sections, sub-pages, quick links and menu line icons
  Hero              Sky hero, headline, bouncing vial + shadow, lead copy
  WhyPavblu         Bento grid: intro + 4 Link Cards + decorative art
  LinkCard          Reusable card (blue / navy), hover arrow
  Stats             4 proof points
  SafetyTabs        Auto-advancing tabs for the Important Safety Information (see below)
  Footer            Logos, legal links, legal line
  icons.tsx         Inline SVG icons + bottle/syringe art
public/images/      Logos, card icons, hero images
```

Breakpoints: desktop ≥ 1024 px (the Figma layout), tablet 640–1023 px (2-column grid, hamburger menu), mobile < 640 px (single column, tabs scroll sideways).

## Hero animation

The hero uses two layers cut from the original hero image:

- `public/images/hero-sky.jpg`: the sky with the vial and shadow removed.
- `public/images/hero-vial.png`: the vial + syringe with a transparent background.

The motion lives in `Hero.module.css`:

- **Hover:** the vial rises and settles slowly (about 2–18 px) with a gentle 3D sway (`--hover`, 8 s, ease-in-out).
- **Shadow:** a soft, light, blurred CSS ellipse tinted navy so it sits naturally on the sky. It shrinks and fades as the vial rises and fills back in as it settles, using the same 8 s timing so it stays in sync. Adjust its strength with the alpha values in `.shadow`.

Users who turn on "reduce motion" in their system settings see a still vial resting on its shadow.

To use a sharper version, export the vial from Figma as a **transparent PNG at 2x** and replace `hero-vial.png` (keep the name).

## Navigation menu

- **Desktop:** hover (or click) a nav item and a rounded card drops down from the header. It shows the section's pages (icon, title, one-line description) and a Quick links column. The page behind dims. Moving to another nav item keeps the card open: the content swaps and the height adjusts smoothly.
- **Keyboard:** ← / → move between nav items, ↓ opens the menu and moves into it, Esc closes it and returns focus.
- **Mobile:** the hamburger drops the same rounded card, with expandable sections.
- **Content:** to change menu text, links or icons, edit `components/navData.tsx`.

## Safety tabs interaction

- **Progress line:** a thin blue line fills across the active tab (`--tab-duration`, 8 s in `SafetyTabs.module.css`), then the next tab opens automatically and it loops.
- **Click a tab:** opens it straight away and restarts its line. Arrow, Home and End keys also work.
- **Pause while reading:** the timer pauses while the pointer is over the tabs or keyboard focus is inside them. It only starts once the section is on screen.
- **Transitions:** content crossfades, and the panel height animates between tabs.
- **Reduce motion:** with "reduce motion" turned on, autoplay is off and the active tab shows a full line.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy: GitHub → Vercel

1. Create an empty repository on GitHub (for example `pavblu-redesign`). Don't add a README.
2. In this folder, run:
   ```bash
   git init
   git add .
   git commit -m "PAVBLU redesign concept"
   git branch -M main
   git remote add origin https://github.com/<your-username>/pavblu-redesign.git
   git push -u origin main
   ```
3. Go to vercel.com → **Add New… → Project** and import the repo. Vercel detects Next.js, so leave every setting as it is and click **Deploy**.
4. Every later `git push` redeploys automatically.
