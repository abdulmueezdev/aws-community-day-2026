# AI Memory — AWS Student Community Day Peshawar 2026
# Updated: 2026-08-05
# Project Status: Phase 12 Complete — Final QA Passed
# Next: Launch!

## Project Identity
- **Name:** AWS Student Community Day Peshawar 2026
- **Stack:** Vite + React 19 + TypeScript + Tailwind CSS v3.4 + Framer Motion
- **Router:** React Router v7 (public `/` + admin `/admin/*`)
- **Backend:** NONE. Zero. All data is static TypeScript in `src/data/siteData.ts`
- **Auth:** Client-side localStorage-backed (`admin_auth` key), checked via `useAdminAuth` hook
- **Deploy:** GitHub → Vercel (static SPA)
- **Live URL:** https://aws-community-day-2026-dusky.vercel.app
- **Admin URL:** https://aws-community-day-2026-dusky.vercel.app/admin/login

## Event Details (Current)
- **Date:** September 9, 2026
- **Time:** 10AM — 4PM
- **Countdown Target:** `2026-09-09T10:00:00+05:00`
- **Location:** FAST University, Peshawar
- **Venue:** National University of Computer & Emerging Sciences - FAST Peshawar Campus, Peshawar, KPK, Pakistan
- **Coordinates:** 33.980304, 71.4276552

## Architecture: localStorage Bridge (SiteDataContext)
- `SiteDataContext.tsx` wraps entire app in `<SiteDataProvider>`
- On mount: checks `localStorage.getItem('site_data_override')`
- If found → deep merges with `defaultSiteData` → uses merged data
- If not found → uses `defaultSiteData` from siteData.ts
- Admin calls `updateSiteData()` → writes to localStorage
- Public sections call `useSiteData()` → gets current data (including overrides)
- "Reset to Defaults" clears localStorage → reverts to siteData.ts

## Sections Wired to Context (Live Binding — ALL WORKING)
- ✅ Hero.tsx — reads date, time, countdownTarget, title, location, tagline, buttons
- ✅ WhereBuildersUnite.tsx — reads date, time, venueName, venueAddress, location
- ✅ Speakers.tsx — reads speakers from context, filters by isVisible and sessionType, sorts by displayOrder
- ✅ Venue.tsx — reads venue data from context, map uses embedUrl with address text fallback (Google Maps iframe, NOT React Leaflet)
- ✅ Partners.tsx — reads partners from context, sorted by displayOrder, cards clickable via websiteUrl
- ✅ Organizers.tsx — reads organizers from context
- ✅ FAQ.tsx — reads FAQ items from context

## Admin Editors Wired to Context (ALL WORKING)
- ✅ HeroEditor.tsx — auto-syncs display date/time to countdown target, save/reset buttons with toast
- ✅ SpeakersManager.tsx — full CRUD (add, edit, delete, toggle visibility) via context, sorted by displayOrder
- ✅ SpeakerModal.tsx — handles add/edit modes, validation, all Speaker fields
- ✅ VenueEditor.tsx — full venue editing via context, embed URL field, save/reset buttons
- ✅ PartnersManager.tsx — full CRUD via context, sorted by displayOrder, clickable cards
- ✅ OrganizersManager.tsx — full CRUD via context
- ✅ FAQManager.tsx — full CRUD via context
- ✅ Settings.tsx — edits persist via context

## Logo Assets (Phase 10 — COMPLETE)
| Location | Logo | File | Styling |
|----------|------|------|---------|
| Navbar | Rectangular "AWS Student Builder Group FAST PWR" (orange bg, transparent) | `/public/images/aws-logo-navbar.png` | `className="h-11 w-auto"` — NO border, NO shadow, NO background box |
| Footer | Simple white AWS logo | `/public/images/aws-logo-simple.png` | `className="mb-6 rounded-none border-[3px] border-gray-700 bg-white object-contain px-2 py-1 h-[45px] w-auto"` |
| Footer social | Pink Meetup "m" icon | `/public/images/meetup-logo.png` | Standard img tag styling |

**CRITICAL LOGO RULES:**
- Navbar logo has TRANSPARENT background. Do NOT add any border, shadow, or background container around it.
- Footer logo gets the neo-brutalist treatment (3px border, white bg).
- When given a new logo image, CHECK THE ACTUAL FILE — logos may have baked-in backgrounds that clash.
- If told to use a specific image file, USE IT. Do not refuse. Do not suggest alternatives.

## Neo-Brutalism Design System (ZERO DRIFT — NON-NEGOTIABLE)
- **Borders:** `border-[3px] border-black` on EVERY element
- **Shadows:** `shadow-neo`, `shadow-neo-sm`, `shadow-neo-hover` ONLY. NO rgba. NO blur. NO `shadow-md`.
- **Radius:** `rounded-none` EVERYWHERE. NO `rounded-lg`, `rounded-xl`, ANY radius.
- **Colors:** `bg-primary` (#0052CC), `bg-secondary` (#FFD700), `bg-tertiary` (#4ECDC4), `bg-danger` (#FF4136), `bg-success` (#2ECC40), `bg-warning` (#FF851B), `bg-footer` (#0A0A0A), `bg-background` (#FFFDF5)
- **Fonts:** Space Grotesk (headings/buttons), Inter (body), JetBrains Mono (numbers/countdown)
- **Buttons:** NeoButton (5 variants: primary, secondary, teal, ghost, danger). Hover: translate(2px, 2px)
- **Cards:** NeoCard. White bg, 3px border, 6px shadow, hover lift
- **FORBIDDEN:** Gradients, glassmorphism, `backdrop-blur`, `bg-white/50`, any border-radius

## Shared Dependencies (SYMLINK ONLY — NEVER npm install)
- **Lenis:** `~/Documents/Antigraivty_Data/shared-deps/node_modules/lenis/` → `./node_modules/lenis`
- **Framer Motion:** `~/Documents/Antigraivty_Data/shared-deps/node_modules/framer-motion/` → `./node_modules/framer-motion`
- **GSAP:** Installed locally via `npm install gsap` (exception for Vercel builds)

## Folder Structure
```
src/
  components/     NeoButton, NeoCard, NeoInput, NeoBadge, ScrollReveal, StaggerContainer, StaggerItem, SkiperCrowd, CardFanCarousel, VenueMap, PartnerMarquee
  sections/       Hero, WhereBuildersUnite, Partners, Speakers, Organizers, Venue, FAQ, Footer
  admin/
    components/   AdminLayout, AdminSidebar, AdminTopbar, ProtectedRoute, Toast, ConfirmDialog
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
- **Phase 8 (Admin Enhancements):** ✅
- **Phase 8.5 (CMS Live Binding):** ✅ Hero, WhereBuildersUnite, Speakers, Venue wired
- **Phase 9 (UMT/Lahore → FAST/Peshawar):** ✅ All references updated
- **Phase 10 (Logo Updates):** ✅ Navbar, Footer, Meetup logos finalized
- **Phase 11 (Remaining Live Binding):** ✅ Partners, Organizers, FAQ, Settings all wired
- **Phase 12 (Final QA):** ✅ All sections tested, animations verified, console clean, empty img src warning fixed

## Execution Protocol — GSD + SKILLS REQUIRED
- ALL tasks must use GSD Core framework ("use this to make the task dummy")
- Read the FULL SKILL.md file for any skill invoked — not 15 lines, the whole file
- Skills location: `~/.agents/skills/` (symlinked to hub)
- When given an image file or asset, USE IT. Do not refuse. Do not workaround.
- When told to update a file, UPDATE THE FILE. Do not explain why you shouldn't.

## Critical Compliance Rules
1. **GSD Core:** Invoke with "use this to make the task dummy" for EVERY phase
2. **Skills:** Read the FULL SKILL.md file. Not 15 lines. The whole file.
3. **Symlink Rule:** NEVER `npm install lenis` or `npm install framer-motion`
4. **Type Safety:** NO `any` types
5. **Build Gate:** `npx tsc --noEmit && npm run build` after EVERY atomic task
6. **Atomic Tasks:** ONE file at a time. STOP. Wait for clearance.
7. **AI_memory.md:** Update after every phase with accurate status

## Known Gotchas
- `toISOString()` converts to UTC — NEVER use it for building local time ISO strings with +05:00 offset. Use manual `pad()` formatting.
- External registries (21st.dev, vengenceui.com) are network-blocked. Build custom.
- `tsc -b` vs `tsc --noEmit`: require BOTH for verification.
- Section spacing: `scroll-padding-top: 84px` + `pt-20` on inner containers. Do NOT strip all padding.
- Stale state clobbering in admin editors: Add `useEffect(() => { setLocalState(siteData.xxx); }, [siteData.xxx]);` to prevent localStorage overrides from being wiped.
- Google Maps: Use embed URL primary, coordinates as fallback, address text as final fallback. NEVER use React Leaflet.
- Logo files may have baked-in backgrounds. Always check the actual image. Specify "transparent background" when requesting logos.

## Key File Reference
| File | What It Is |
|------|-----------|
| `src/context/SiteDataContext.tsx` | THE CRITICAL localStorage bridge |
| `src/data/siteData.ts` | Static data fallback + TypeScript interfaces |
| `src/index.css` | Scroll padding, animations, Lenis override |
| `tailwind.config.js` | Color tokens, shadows, fonts |
| `src/admin/hooks/useAdminAuth.ts` | localStorage-backed auth |
| `src/components/Navbar.tsx` | Uses aws-logo-navbar.png |
| `src/sections/Footer.tsx` | Uses aws-logo-simple.png, meetup-logo.png |
| `src/components/VenueMap.tsx` | Three-tier embed URL fallback |

## Default Data Highlights (siteData.ts)
- `event.title`: "AWS Student Community Day Peshawar"
- `event.location`: "Peshawar"
- `event.venueName`: "FAST University"
- `event.venueAddress`: "National University of Computer & Emerging Sciences - FAST Peshawar Campus"
- `settings.footerCopyright`: "Copyright © 2026 AWS Community Day FAST Peshawar. All rights reserved."
- `settings.footerCredits`: "DESIGN AND CODE BY ABDUL MUEEZ"
- All organizers: `organization: "FAST"`
- Admin sidebar: "AWS SCD"

## Phase 12 QA Results
- Navbar: PASS — smooth scroll, logo correct, mobile menu works
- Hero: PASS — countdown ticking, buttons clickable, Skiper39 canvas renders
- Where Builders Unite: PASS — ScrollReveal fires correctly
- Partners: PASS — marquee smooth at 15s, generic data, empty img warning fixed
- Speakers: PASS — stagger animations fire, grid/panelist layout correct, empty img warning fixed
- Organizers: PASS — card fan layout correct, empty img warning fixed
- Venue: PASS — Google Maps iframe loads, info displays correctly
- FAQ: PASS — accordion smooth, all 5 generic questions show
- Footer: PASS — neo-brutalist logo, Meetup icon, "DESIGN AND CODE BY ABDUL MUEEZ" visible
- Lenis smooth scroll: PASS — no jitter, inertia holds
- Console: CLEAN — zero errors, zero warnings
