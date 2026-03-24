## 2025-05-15 - Stabilizing Route-based Component Trees
**Learning:** In a single-page application with a `renderPage` switch-case pattern, state updates in the parent (like playback toggles) cause the entire page component to be re-instantiated if the JSX is returned directly from a function. This bypasses `React.memo` on the page component itself.
**Action:** Use `useMemo` to stabilize the JSX branch returned by the routing logic. Combine this with `useCallback` for parent-to-child callbacks and `React.memo` for leaf components to achieve maximum render efficiency.
