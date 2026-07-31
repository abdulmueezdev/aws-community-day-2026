# AI Memory — AWS Community Day Lahore 2026
# Updated: 2026-07-30
# Project Status: Phase 8.5e — HeroEditor Live Binding Complete

## Project Identity
- **Name:** AWS Student Community Day Lahore 2026
- **Stack:** Vite + React 19 + TypeScript + Tailwind CSS + Framer Motion
- **Router:** React Router v7 (public `/` + admin `/admin/*`)
- **Backend:** NONE. Zero. All data is static TypeScript in `src/data/siteData.ts`
- **Auth:** Client-side password check against `import.meta.env.VITE_ADMIN_PASSWORD`
- **Deploy:** GitHub → Vercel (static SPA)
- **Live URL:** https://aws-community-day-2026-dusky.vercel.app

## Architecture: localStorage Bridge (SiteDataContext)
- `SiteDataContext.tsx` wraps entire app
- On mount: checks `localStorage.getItem('site_data_override')`
- If found → deep merges with `defaultSiteData` → uses merged data
- If not found → uses `defaultSiteData` from siteData.ts
- Admin calls `updateSiteData()` → writes to localStorage
- Public sections call `useSiteData()` → gets current data (including overrides)
- "Reset to Defaults" clears localStorage → reverts to siteData.ts

## Sections Wired to Context (Live Binding)
- ✅ Hero.tsx — reads date, time, countdownTarget, title, location, tagline, buttons
- ✅ WhereBuildersUnite.tsx — reads date, time, venueName, venueAddress, location
- ✅ Speakers.tsx — reads speakers from context, filters by isVisible and sessionType
- 🔴 Partners.tsx — still uses defaultSiteData
- 🔴 Organizers.tsx — still uses defaultSiteData
- 🔴 FAQ.tsx — still uses defaultSiteData
- ✅ Venue.tsx — reads venue data from context, map updates with lat/lng props

## Admin Editors Wired to Context
- ✅ HeroEditor.tsx — auto-syncs display date/time to countdown target, save button with toast
- ✅ SpeakersManager.tsx — full CRUD (add, edit, delete, toggle visibility) via context
- ✅ SpeakerModal.tsx — handles add/edit modes, validation, all Speaker fields
- 🔴 PartnersManager.tsx — still uses local state only
- 🔴 OrganizersManager.tsx — still uses local state only
- 🔴 FAQManager.tsx — still uses local state only
- ✅ VenueEditor.tsx — full venue editing via context, lat/lng fields, save/reset buttons
- 🔴 Settings.tsx — still uses local state only

## HeroEditor Auto-Sync Logic
- Display Date + Display Time changes auto-update Countdown Target Date
- Parses "September 15th, 2026" → removes ordinal suffixes → Date object
- Parses "10AM — 4PM" → extracts start hour → sets hours
- Formats as local ISO string with +05:00 offset (NO toISOString — that causes 5-hour UTC bug)
- User can still manually override the Countdown Target field

## Neo-Brutalism Design System (ZERO DRIFT)
- **Borders:** `border-[3px] border-black` on EVERY element
- **Shadows:** `shadow-neo`, `shadow-neo-sm`, `shadow-neo-hover`. NO rgba. NO blur.
- **Radius:** `rounded-none` EVERYWHERE
- **Colors:** `bg-primary` (blue), `bg-secondary` (yellow), `bg-tertiary` (teal), `bg-danger` (red), `bg-success` (green), `bg-warning` (orange), `bg-footer` (black), `bg-background` (cream)
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (numbers)
- **Buttons:** NeoButton (5 variants). Hover: translate(2px, 2px)
- **Cards:** NeoCard. White bg, 3px border, 6px shadow, hover lift

## Shared Dependencies (SYMLINK ONLY — NEVER npm install)
- **Lenis:** `~/Documents/Antigraivty_Data/shared-deps/node_modules/lenis/` → `./node_modules/lenis`
- **Framer Motion:** `~/Documents/Antigraivty_Data/shared-deps/node_modules/framer-motion/` → `./node_modules/framer-motion`
- **GSAP:** Installed locally via `npm install gsap` (exception for Vercel)

## Folder Structure
```
src/
  components/     NeoButton, NeoCard, NeoInput, NeoBadge, ScrollReveal, StaggerContainer, StaggerItem, SkiperCrowd, CardFanCarousel, VenueMap, PartnerMarquee
  sections/       Hero, WhereBuildersUnite, Partners, Speakers, Organizers, Venue, FAQ, Footer
  admin/
    components/   AdminLayout, AdminSidebar, AdminTopbar, ProtectedRoute, Toast, ConfirmDialog, ExportConfig
    pages/        Login, Dashboard, HeroEditor, SpeakersManager, SpeakerModal, PartnersManager, FAQManager, OrganizersManager, VenueEditor, Settings
    hooks/        useAdminAuth
  context/        SiteDataContext.tsx
  data/           siteData.ts
  hooks/          useCountdown.ts
```

## Phase History
- **Phase 1 (Bootstrap):** ✅
- **Phase 2 (Public Site):** ✅
- **Phase 3 (Admin Panel):** ✅
- **Phase 4 (Animation):** ✅
- **Phase 5 (Responsive):** ✅
- **Phase 6 (Deploy):** ✅
- **Phase 7 (Public Polish):** ✅
- **Phase 8 (Admin Enhancements):** 🔴 Sub-agent working separately
- **Phase 8.5 (CMS Live Binding):** 🟡 Hero + WhereBuildersUnite wired. Rest pending.

## Critical Compliance Rules
1. **GSD Core:** Invoke with "use this to make the task dummy" for EVERY phase
2. **Skills:** Read the FULL SKILL.md file. Not 15 lines. The whole file.
3. **Symlink Rule:** NEVER `npm install lenis` or `npm install framer-motion`
4. **Type Safety:** NO `any` types
5. **Build Gate:** `npx tsc --noEmit && npm run build` after EVERY atomic task
6. **Atomic Tasks:** ONE file at a time. STOP. Wait for clearance.
7. **Browser Verification:** Use chromium-devtools-mcp to test changes visually
8. **AI_memory.md:** Update after every phase with accurate status

## Known Gotchas
- `toISOString()` converts to UTC — NEVER use it for building local time ISO strings with a fixed offset. It causes a 5-hour shift for PKT (+05:00). Use manual `pad()` formatting instead.
- External registries (21st.dev, vengenceui.com) are network-blocked. Build custom.
- Playwright driver is broken. Use chromium-devtools-mcp for browser testing.
- `tsc -b` vs `tsc --noEmit`: require BOTH for verification.
- Section spacing: `scroll-padding-top: 84px` + `pt-20` on inner containers. Do NOT strip all padding.

## Hub Locations
- **Master Guide:** `~/Documents/Antigraivty_Data/ANTIGRAIVTY_MASTER_GUIDE.md`
- **Skills:** `~/Documents/Antigraivty_Data/.agents/skills/`
- **GSD Core:** `~/Documents/Antigraivty_Data/gsd-core/`
