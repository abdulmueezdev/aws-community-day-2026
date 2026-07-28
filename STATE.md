# STATE.md — Phase 3: Admin Panel

## Phase Loop: GSD Core
1. **Discuss:** Building 11-screen client-side admin panel. No backend. 
   Export-to-clipboard pattern for siteData.ts edits.
2. **Plan:** 11 files across 4 categories: Layout, Auth, Pages, Utilities.
   Neo-brutalism design system locked. Stitch screens are authority.
3. **Execute:** Build in order: Layout → Auth → Pages → Utilities.
4. **Verify:** tsc --noEmit, npm run build, auth flow test, export test.
5. **Ship:** Commit, await CTO approval for Phase 4.

## Status: PLAN COMPLETE → EXECUTE ACTIVE

## Files to Create
- src/components/admin/AdminLayout.tsx
- src/components/admin/AdminSidebar.tsx
- src/components/admin/AdminTopbar.tsx
- src/hooks/useAdminAuth.ts
- src/components/admin/ProtectedRoute.tsx
- src/pages/admin/Login.tsx
- src/pages/admin/Dashboard.tsx
- src/pages/admin/HeroEditor.tsx
- src/pages/admin/SpeakersManager.tsx
- src/pages/admin/PartnersManager.tsx
- src/pages/admin/FAQManager.tsx
- src/pages/admin/OrganizersManager.tsx
- src/pages/admin/VenueEditor.tsx
- src/pages/admin/Settings.tsx
- src/components/admin/ConfirmDialog.tsx
- src/components/admin/Toast.tsx
- src/components/admin/ExportConfig.tsx

## Compliance Verified
- [x] Stitch MCP: All 11 admin screens viewed
- [x] design-taste-frontend: SKILL.md read
- [x] ui-ux-pro-max: SKILL.md read (path issue fixed, using hub)
- [x] react-components: SKILL.md read (path issue fixed, using hub)
