## 2026-05-18 - [Manual Routing Render Leaks]
**Learning:** Manual switch-case routing in React creates "render leaks" where page components are re-instantiated on every parent render. This breaks `React.memo` for all child components (like list items) because they receive a new parent context.
**Action:** Always use a "Three-Part Synchronization" to fix:
1. Stabilize parent callbacks with `useCallback`.
2. Wrap the router's output (switch statement) in `useMemo`.
3. Apply `React.memo` to expensive leaf components.
