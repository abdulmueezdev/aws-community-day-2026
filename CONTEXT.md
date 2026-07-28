# Context: Phase 3 Admin Panel

## Architecture
- Client-side visual editor only. No backend.
- Data Flow: Form -> React State -> "Export" to clipboard -> user pastes into siteData.ts
- Authentication is client-side mock (`localStorage.getItem('admin_auth')`) checked against `VITE_ADMIN_PASSWORD` env var.

## Design
- Strict Neo-Brutalism: 3px solid black borders, 6px hard shadows, 0px border radius.
- Consistent with public site styling.
- Generic reusable components: NeoButton, NeoInput, NeoCard, NeoBadge.

## Routing
- `react-router-dom` used for routing.
- `/admin/login` -> Auth entry point.
- `/admin/*` protected routes using `AdminLayout` with `AdminSidebar` and `AdminTopbar`.
