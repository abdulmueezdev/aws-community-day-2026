# GSD STATE: Settings Section (Phase 8.5l)

## Phase 1: Discuss & Diagnose
- **Status:** Complete

### Diagnosis
#### 5A — What does Settings.tsx currently do?
- **Fields exposed:** Current Registrations (display), Max Capacity, Registration Open, Twitter, LinkedIn, Instagram, GitHub, Site Title, Meta Description, Footer Copyright Text, Footer Credits Text.
- **State management:** Local `useState` initialized with `defaultSiteData.settings`.
- **Saving:** It does not save anything. State is purely local and lost on navigation/refresh.
- **Buttons/Feedback:** There is NO Save button, NO Reset to Defaults button, and NO Toast feedback.
- **Imports:** 
  - `useState` from `'react'`
  - `NeoCard` from `'../../components/NeoCard'`
  - `NeoInput` from `'../../components/NeoInput'`
  - `defaultSiteData` from `'../../data/siteData'`

#### 5B — What SHOULD Settings control?
- Reviewing `siteData.ts`, `SiteData.settings` contains exactly 11 fields: `registrationOpen`, `maxCapacity`, `currentRegistrations`, `socialInstagram`, `socialTwitter`, `socialLinkedin`, `socialGithub`, `footerCopyright`, `footerCredits`, `seoTitle`, `seoDescription`.
- Settings already has UI fields for all 11 of these. There are no other missing global configuration fields in the `SiteData` interface. 

#### 5C — What's broken?
- Uses `defaultSiteData` directly instead of `useSiteData()`.
- Uses local `useState` that doesn't persist, shadowing the context data.
- Missing functionality: no save button, no reset button, no toast feedback to confirm actions.
- The UI contains design system violations (e.g., missing `rounded-none`, incorrect border classes, shadow issues).

#### 5D — Type signature analysis
- **Signature:** `updateSiteData: (updates: Partial<SiteData>) => void;`
- **Expected argument:** An object where the keys are optional keys of `SiteData` (e.g., `event`, `settings`, etc.) and the values match the type for that key.
- **Correct way to call:** `updateSiteData({ settings: settingsData })` where `settingsData` is the full `SiteData["settings"]` object. Because `settingsData` contains all required properties for `settings`, no `as any` cast is necessary.

## Phase 2: Plan
- **Status:** In Progress
- [ ] Commit 1: Read and understand (no code change)
- [ ] Commit 2: Wire Settings.tsx to SiteDataContext
- [ ] Commit 3: Add Save button with toast
- [ ] Commit 4: Add Reset to Defaults button
- [ ] Commit 5: Expose ALL missing fields from data model
- [ ] Commit 6: Design system compliance pass
- [ ] Commit 7: Final STATE.md update

## Phase 3: Execute
- **Status:** Pending

## Phase 4: Verify
- **Status:** Pending

## Phase 5: Ship
- **Status:** Pending
