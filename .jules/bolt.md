## 2025-05-15 - [React] Prevent Render Leaks in Manual Routing

**Learning:** In a manual routing architecture (switch-case in the parent), any state update in the parent (e.g., audio player toggle) re-instantiates the entire page component tree. Wrapping the routing logic in `useMemo` leverages React's 'Same Element Reference' optimization, effectively blocking re-renders for the entire subtree without requiring `React.memo` on child components.

**Action:** Stabilize event handlers with `useCallback` and memoize the rendered page element tree with `useMemo`, including only essential routing/interaction dependencies in the array.
