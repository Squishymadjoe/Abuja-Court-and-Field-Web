## 2026-05-20 - [Manual Routing Render Leak]
**Learning:** Manual routing using a `switch` statement in the parent component (`App.tsx`) is a significant source of "render leaks". Without `useMemo` wrapping the routing logic, the entire page component is re-instantiated on every parent state change (e.g., toggling playback), which causes all child components (like `EpisodeCard`) to re-render even if they are wrapped in `React.memo`.
**Action:** Always wrap manual routing branches in `useMemo` when they depend on stable props or state that doesn't change on every render.

## 2026-05-20 - [Preload Scanner & CSS Backgrounds]
**Learning:** Browser preload scanners cannot see image URLs defined in inline CSS `background-image` styles or external stylesheets until the CSS is parsed.
**Action:** Prefer `<img>` tags over CSS backgrounds for critical or above-the-fold content to improve LCP and overall loading performance.
