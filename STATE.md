# STATE: Phase 8 - Admin Panel Enhancements

## Discuss
What needs improvement in the admin panel:
- Neo-brutalism design language is partially applied but missing on certain interactive elements and layouts.
- Type safety is mostly okay but `any` might be used in some places; proper data binding to `siteData.ts` is required.
- Form validation, error states, and empty states are lacking or very basic.
- Consistency across manager pages is needed (ensuring + ADD buttons and confirm dialogs function correctly).
- Accessibility issues (e.g., missing `aria-label`s on icon buttons).

## Plan
Files to review and improve:
1. `src/admin/pages/Dashboard.tsx`
2. `src/admin/pages/Login.tsx`
3. `src/admin/components/AdminSidebar.tsx`
4. `src/admin/components/ExportConfig.tsx`
5. `src/admin/pages/FAQManager.tsx`
6. `src/admin/pages/HeroEditor.tsx`
7. `src/admin/pages/OrganizersManager.tsx`
8. `src/admin/pages/PartnersManager.tsx`
9. `src/admin/pages/Settings.tsx`
10. `src/admin/pages/SpeakersManager.tsx`
11. `src/admin/pages/VenueEditor.tsx`
12. `src/admin/components/AdminLayout.tsx`
13. `src/admin/components/AdminTopbar.tsx`
14. `src/admin/components/ConfirmDialog.tsx`
15. `src/admin/components/ProtectedRoute.tsx`
16. `src/admin/components/SpeakerModal.tsx`
17. `src/admin/components/Toast.tsx`

## Execute
Fix one screen/component at a time, starting based on the audit.

## Verify
Build passes after every screen.

## Ship
Commit, push, redeploy.
