## 2025-05-15 - Stabilizing the Page Branch in SPA Router

**Learning:** In a single-page application with a custom routing function in `App.tsx`, wrapping child components in `React.memo` is insufficient if the routing function returns a new JSX element on every parent render. Even if the component props are stable, React treats the returned element as a new "type" if it's re-instantiated, forcing a full reconciliation and re-render of the entire page tree.

**Action:** Use `useMemo` to stabilize the JSX branch returned by the routing logic. Combine this with `useCallback` for parent-to-child callbacks and `React.memo` on the child components to achieve a "perfect" render cycle where only the necessary components update.
