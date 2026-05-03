# Landing Page UI Implementation Plan

## Goal Description
Create a clean, scalable, and responsive frontend structure for the AI Study Assistant platform using Next.js (TypeScript) and Tailwind CSS. The UI will include a modern landing page with a Navbar, Hero section, Features section (4 cards), and Footer. No backend logic is added at this stage.

## User Review Required
> [!IMPORTANT]
> Review the proposed color palette and typography choices. Approve or suggest alternatives before we proceed.

## Open Questions
> [!WARNING]
> - Do you have a logo image (SVG/PNG) to use in the Navbar, or should we generate a placeholder logo?
> - Preferred primary accent color (e.g., teal, indigo, amber) for the SaaS palette?
> - Any specific font family from Google Fonts you’d like (e.g., Inter, Outfit, Roboto)?

## Proposed Changes
---
### Tailwind Configuration
- **[MODIFY]** `tailwind.config.js`
  - Extend the theme with a custom color palette (e.g., `brand` with shades).
  - Add `fontFamily` configuration for the chosen Google Font.
---
### Global Styles
- **[MODIFY]** `app/globals.css`
  - Import the Google Font via `@import`.
  - Ensure `@tailwind base; @tailwind components; @tailwind utilities;` are present.
---
### Layout Component
- **[NEW]** `components/Layout.tsx`
  - Wraps children with `<html>` and `<body>` tags, includes `<Navbar/>` and `<Footer/>`.
---
### Navbar Component
- **[NEW]** `components/Navbar.tsx`
  - Logo placeholder, links: Home, Features, Dashboard, Login.
  - Responsive hamburger menu for mobile.
---
### Hero Section Component
- **[NEW]** `components/Hero.tsx`
  - Strong headline, sub‑headline, two CTA buttons (Get Started, Learn More).
  - Optional hero illustration (generated image placeholder).
---
### Features Section Component
- **[NEW]** `components/Features.tsx`
  - Grid of 4 cards, each with an icon, title, and short description.
  - Cards: AI Chat Assistant, Note Summarizer, Quiz Generator, Saved Sessions.
---
### Footer Component
- **[NEW]** `components/Footer.tsx`
  - Minimal footer with copyright, links, and a subtle background.
---
### Home Page
- **[MODIFY]** `app/page.tsx`
  - Use `<Layout>` and include `<Hero/>` and `<Features/>` sections.
---
### Image Assets (optional)
- **[NEW]** `public/hero.png`
  - Generated abstract illustration for the hero section.
---
### Accessibility & SEO
- Add proper `<title>` and `<meta>` tags in `app/head.tsx`.
- Use semantic HTML elements (header, main, section, footer).
- Ensure all interactive elements have accessible names and focus styles.

## Verification Plan
### Automated Checks
- Run `npm run dev` and manually verify that the landing page renders correctly on desktop and mobile widths.
- Check Tailwind output for custom colors and fonts.

### Manual Verification
- Open http://localhost:3000 and confirm:
  - Navbar is sticky and responsive.
  - Hero headline and CTA buttons are visible.
  - Features grid displays four cards with proper hover effects.
  - Footer appears at the bottom.
  - No console errors.

Once you approve the palette, font, and logo approach, we will proceed with the implementation.
