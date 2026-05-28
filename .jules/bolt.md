## 2026-05-21 - [Manual Routing Render Leaks]
**Learning:** Manual routing via switch statements in React is a 'render leak' anti-pattern. It causes page components to be re-instantiated (creating new DOM nodes) on every parent render unless the switch statement result is wrapped in `useMemo`. This re-instantiation also breaks `React.memo` optimizations in child components because the entire sub-tree is replaced.
**Action:** Always wrap manual routing logic in `useMemo` and stabilize parent callbacks with `useCallback` to allow `React.memo` to work effectively in child components.
