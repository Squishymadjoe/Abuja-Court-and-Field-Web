## 2025-05-15 - [Manual Routing Render Leaks]
**Learning:** Manual routing using a switch statement in the parent component (App.tsx) causes the entire active page component tree to re-instantiate on every parent state change (like toggling an audio player) if the routing logic is not memoized.
**Action:** Use `useMemo` to wrap the routing switch statement and `useCallback` for any event handlers passed to pages. Additionally, use `React.memo` on the page components to ensure they only re-render when their specific routing props change.
