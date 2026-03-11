## 2025-03-24 - Stabilizing JSX branches for memoization

**Learning:** In a Single Page Application (SPA) where routing is handled via conditional rendering (e.g., a `renderPage` function), any state change in the parent (like toggling an audio player) causes the entire JSX branch to be recreated. This bypasses `React.memo` on child components because their immediate parent element is technically a new reference.

**Action:** Use `useMemo` to stabilize the JSX branch returned by the routing logic. This, combined with `useCallback` for parent-to-child callbacks and `React.memo` on the leaf components, ensures that child components only re-render when their specific props change, even if the root state changes frequently.
