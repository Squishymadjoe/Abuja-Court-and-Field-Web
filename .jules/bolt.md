## 2025-05-15 - React Render Leaks in Manual Routing
**Learning:** Manual switch-case routing in a root component causes the entire active page subtree to re-instantiate on every parent state change, even if the page props haven't changed.
**Action:** Use 'Three-Part Synchronization' (stable callbacks via `useCallback`, memoized routing logic via `useMemo`, and memoized child components via `React.memo`) to ensure stable element references and prevent unnecessary re-renders.
