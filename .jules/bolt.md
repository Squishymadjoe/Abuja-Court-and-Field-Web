## 2026-05-23 - Render Leaks in Manual Routing
**Learning:** Manual routing using switch statements in a parent component causes the entire page component to be re-instantiated on every parent render. This breaks `React.memo` for all child components on that page because their parent is always "new".
**Action:** Wrap the result of the routing switch statement in `useMemo` in `App.tsx`, excluding global UI state (like `isPlaying`) from the dependency array. This stabilizes the page component instance and allows `React.memo` in children to skip unnecessary re-renders.
