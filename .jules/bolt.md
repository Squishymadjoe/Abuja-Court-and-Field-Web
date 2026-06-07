## 2026-05-21 - Manual Routing Render Leaks
**Learning:** Manual switch-case routing in React components (like `App.tsx`) causes the selected page component to be re-instantiated on every parent render. This breaks `React.memo` optimizations in child components because the component tree is "new" from the router's perspective.
**Action:** Always apply the 'Three-Part Synchronization' for manual routing:
1. Stabilize parent callbacks with `useCallback`.
2. Wrap the router's output (the switch statement) in `useMemo`, depending only on the route state and stable callbacks.
3. Wrap page and child components in `React.memo`.
