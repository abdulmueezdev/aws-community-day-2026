# AI Memory — AWS Community Day Lahore 2026
# Created: 2026-07-28
# Project Status: Phase 8 In-Progress

## Current Phase
**PHASE 7e: EMERGENCY FIXES — COMPLETE**
- Fix 1: Navbar scroll gap ✅ (scroll-padding-top: 84px, all section padding removed)
- Fix 2: Partner marquee ✅ (auto-scroll left, pause on hover, smaller cards, first card no text)
- Fix 3: Card fan carousel ✅ (smaller: 180x220px cards, 120x140px images, LinkedIn buttons)
- Fix 4: Footer verification ✅ (animated background visible, creepy admin button present)

## Next Phase
**PHASE 8: ADMIN PANEL ENHANCEMENTS** (Ready to begin)

## Project Identity
- **Name:** AWS Student Community Day Lahore 2026
- **Type:** Single-page event website + client-side admin panel
- **Stack:** Vite + React 19 + TypeScript + Tailwind CSS
- **Router:** React Router v7 (public + /admin/* routes)
- **Deploy:** GitHub → Vercel (static SPA)
- **Event Date:** September 9, 2026
- **Countdown Target:** 2026-09-09T10:00:00+05:00

## Architecture (LOCKED — NEVER DEVIATE)
- **Backend:** NONE. Zero. All data lives in `src/data/siteData.ts`.
- **Database:** NONE. Static TypeScript objects only.
- **Auth:** Hidden 4×4px button → `/admin/login` → password check against `import.meta.env.VITE_ADMIN_PASSWORD` → localStorage.
- **Admin Panel:** Client-side visual editor. Edits React state. "Export Config" button copies valid TypeScript to clipboard. User pastes into `siteData.ts` and commits.
- **Images:** `placehold.co` placeholders with exact dimensions.
- **Design System:** Neo-Brutalism ONLY.

## Neo-Brutalism Design System (ZERO DRIFT)
- **Borders:** `border-[3px] border-black` on EVERYTHING.
- **Shadows:** `shadow-neo` (6px), `shadow-neo-sm` (4px), `shadow-neo-hover` (8px). NO rgba. NO blur.
- **Radius:** `rounded-none` EVERYWHERE. Zero exceptions.
- **Colors:** `bg-primary` (#0052CC blue), `bg-secondary` (#FFD700 yellow), `bg-tertiary` (#4ECDC4 teal), `bg-danger` (#FF4136 red), `bg-success` (#2ECC40 green), `bg-warning` (#FF851B orange), `bg-footer` (#0A0A0A black), `bg-background` (#FFFDF5 cream).
- **Fonts:** Space Grotesk (headings, 600/700), Inter (body, 400/500/600), JetBrains Mono (numbers, 400/700).
- **Buttons:** NeoButton with 5 variants (primary, secondary, teal, ghost, danger). Hover: translate(2px, 2px). Active: same.
- **Cards:** NeoCard (white bg, 3px border, 6px shadow, hover lift).
- **Inputs:** NeoInput (3px border, 6px shadow, focus teal).

## Shared Dependencies (SYMLINK ONLY — NEVER npm install)
- **Lenis:** `~/Documents/Antigraivty_Data/shared-deps/node_modules/lenis/` → `./node_modules/lenis`
- **Framer Motion:** `~/Documents/Antigraivty_Data/shared-deps/node_modules/framer-motion/` → `./node_modules/framer-motion`
- **Build Fix (Vite):** `vite.config.ts` uses `resolve.alias` to force path resolution for symlinked packages.
- **Build Fix (TS):** `tsconfig.app.json` uses `paths` mapping to resolve `.d.ts` definitions (`lenis/react` and `framer-motion`) during `tsc -b` (important for lazy-loaded chunks).

## Folder Structure
```
src/
  components/         NeoButton, NeoCard, NeoInput, NeoBadge, ScrollReveal, StaggerContainer, StaggerItem
  sections/           Hero, WhereBuildersUnite, Partners, Speakers, Organizers, Venue, FAQ, Footer
  admin/
    components/       AdminLayout, AdminSidebar, AdminTopbar, ProtectedRoute, Toast, ConfirmDialog, ExportConfig
    pages/            Login, Dashboard, HeroEditor, SpeakersManager, SpeakerModal, PartnersManager, FAQManager, OrganizersManager, VenueEditor, Settings
    hooks/            useAdminAuth
  data/               siteData.ts (single source of truth)
  hooks/              useCountdown.ts
```

## Phase History
- **Phase 1 (Bootstrap):** ✅ Vite + Tailwind + Fonts + Folder structure + vercel.json + .env
- **Phase 2 (Public Site):** ✅ All 9 sections built. Neo-brutalist. Data from siteData.ts. Countdown works. Mobile hamburger works.
- **Phase 3 (Admin Panel):** ✅ All 11 screens + 7 components built. Auth flow works. Export config works. Toast + ConfirmDialog work.
- **Phase 4 (Animation):** ✅ ScrollReveal, StaggerContainer, StaggerItem created. Applied to all 8 public sections. FAQ accordion animated. Button active states added.
- **Phase 5 (Responsive + QA):** ✅ Mobile-first audited and fixed. Perfect 100/100 Lighthouse score for A11y, Best Practices, and SEO. Image dimensions set. Admin routes lazy-loaded via `React.lazy` to cut bundle size.
- **Phase 6 (Deploy):** ✅ Git → Vercel → Live URL.
- **Phase 7 (Public Site Polish):** ✅ Component Enhancements (Skiper39 Canvas Crowd Hero, Animated Footer, Partner Marquee, Card Fan Carousel), layout fixes.
- **Phase 8 (Admin Panel):** ⏳ Pending. Enhancing admin panel UI/UX and data binding. (react-components, ui-ux-pro-max, design-taste-frontend).

## Critical Compliance Rules
1. GSD Core MUST be invoked for every phase ("use this to make the task dummy").
2. Skills MUST be read before coding (react-components, ui-ux-pro-max, design-taste-frontend).
3. Symlink rule is absolute. NEVER `npm install lenis` or `npm install framer-motion`.
4. No `any` types in TypeScript. Ever.
5. All text matches Handoff Section 3 exactly. No paraphrasing.
6. `npx tsc --noEmit` must pass after every change.
7. `npm run build` must pass before any phase submission.
8. Respect `prefers-reduced-motion` in all animations.

## Antigravity Master Guide
- **Location:** `~/Documents/Antigraivty_Data/ANTIGRAIVTY_MASTER_GUIDE.md`
- **Skills Hub:** `/home/alucard/Documents/Antigraivty_Data/.agents/skills/`
- **GSD Trigger:** "use this to make the task dummy"
- **Ralph Loop Trigger:** "use ralphloop to [task]"
- **MCP Config:** `~/Documents/Antigraivty_Data/MCPS/mcp_config.json`
```
