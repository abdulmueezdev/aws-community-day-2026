# GSD STATE: Organizers Section (Phase 8.5j)

## Phase 1: Discuss & Diagnose
- **Status:** Complete

### Diagnosis
1. **Exactly why adding an organizer card fails:**
   In `OrganizersManager.tsx`, the `+ ADD ORGANIZER` button currently has no `onClick` handler. There is no modal or form wired up to collect organizer data. Furthermore, `OrganizersManager` relies on local `useState(defaultSiteData.organizers)` instead of global context, so even if the list were updated locally, it wouldn't persist or reach the public site.
2. **Exactly why the public section doesn't reflect admin changes:**
   `src/sections/Organizers.tsx` directly imports `defaultSiteData` and extracts `organizers` from it. It bypasses the `SiteDataContext` entirely, rendering it impossible to see dynamic updates made in the admin panel.
3. **Exactly what the current data flow looks like vs what it SHOULD look like:**
   - **Current Data Flow:** 
     - *Public:* `Organizers.tsx` -> Reads static `defaultSiteData.organizers`.
     - *Admin:* `OrganizersManager.tsx` -> Initializes `useState` with `defaultSiteData.organizers` and mutates local state only.
   - **Required Data Flow:**
     - Both public (`Organizers.tsx`) and admin (`OrganizersManager.tsx`) must consume `useSiteData()`.
     - Admin must call `updateSiteData({ organizers: newOrganizers })` to persist changes into the global context (which in turn uses `localStorage`).

## Phase 2: Plan
- **Status:** Complete
- Follow the EXACT pattern from `SpeakersManager.tsx` and `SpeakerModal.tsx`.
- Refactor `Organizers.tsx` to use `useSiteData()`.
- Create `OrganizerModal.tsx` to handle adding/editing organizer fields with proper validation and Neo-Brutalist styles.
- Refactor `OrganizersManager.tsx` to use `useSiteData()`, wire up the modal, and implement Add/Edit/Delete/ToggleVisibility/Reset operations.

## Phase 3: Execute
- **Status:** Complete
- [x] Fix `Organizers.tsx`
- [x] Create `OrganizerModal.tsx`
- [x] Fix `OrganizersManager.tsx`

## Phase 4: Verify
- **Status:** Complete
- [x] Run `npx tsc --noEmit`
- [x] Run `npm run build`
- [x] Perform browser verification (Screenshots)

## Phase 5: Ship
- **Status:** Complete
- Present all deliverables and outputs to the CTO.
