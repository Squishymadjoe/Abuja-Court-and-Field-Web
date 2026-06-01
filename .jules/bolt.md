## 2026-06-01 - [Manual Router Render Leaks]
**Learning:** Manual routing via `switch` statements in React is a 'render leak' anti-pattern. Even if children are memoized, the switch-case returns a new component instance on every parent render, breaking `React.memo` unless the entire router output is wrapped in `useMemo`.
**Action:** Always apply 'Three-Part Synchronization' for manual routers: 1. Stabilize parent callbacks (`useCallback`), 2. Stabilize page instances (`useMemo` in router), and 3. Wrap children in `React.memo`.
