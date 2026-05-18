## 2026-05-22 - [Optimizing Render Leaks in Manual Routing]
**Learning:** Manual routing using switch statements in React components can cause "render leaks" where the entire page component is re-instantiated on every parent render unless the switch result is wrapped in useMemo. This is because the JSX returned by the switch creates new component instances each time.
**Action:** When using manual switch-based routing, always memoize the resulting component using useMemo, and ensure child components in lists use React.memo and stable callbacks to fully prevent unnecessary re-renders.
