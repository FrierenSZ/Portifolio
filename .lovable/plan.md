

## Plan: Separate Experience into its own page + fix build error

### 1. Fix build error
Add `"build:dev": "vite build"` script to `package.json`.

### 2. Create Experience page (`src/pages/Experience.tsx`)
A dedicated page for the experience timeline, following the same pattern as the Skills pages (ParticlesBackground, CustomCursor, MouseGlow, Navbar, FloatingContact). Move the full timeline rendering and data there.

### 3. Simplify Experience in Education.tsx
Replace the full experience timeline in `Education.tsx` with a summary card (similar to how Skills shows category cards linking to `/skills/*`). It will show a preview with company names and a "Ver todas →" link to `/experience`.

### 4. Add route in App.tsx
Add `/experience` route pointing to the new Experience page.

### Files to change
- `package.json` — add `build:dev` script
- `src/pages/Experience.tsx` — new page with full timeline
- `src/components/Education.tsx` — replace inline experience with summary card linking to `/experience`
- `src/App.tsx` — add `/experience` route

