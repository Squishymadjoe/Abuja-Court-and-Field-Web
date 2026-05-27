## 2026-05-22 - [Render Leak Anti-pattern in Manual Routing]
**Learning:** Manual routing via `switch` statements in the parent component (e.g., `App.tsx`) causes the active page component to be re-instantiated on every parent render unless the switch result is wrapped in `useMemo`. This re-instantiation creates new DOM nodes and bypasses `React.memo` optimizations in child components.
**Action:** Always wrap the results of manual routing in `useMemo` and carefully manage its dependency array to exclude global state (like playback status) that should not trigger a page-wide re-render.
