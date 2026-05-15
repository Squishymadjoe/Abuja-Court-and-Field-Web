## 2026-05-22 - Stabilizing Render Leaks in Manual Routing
**Learning:** Manual routing via `switch` statements in React is a "render leak" anti-pattern because it causes page components to be re-instantiated (creating new DOM nodes) on every parent render unless the switch statement result is wrapped in `useMemo`. This instability breaks `React.memo` optimizations in child components.
**Action:** Always wrap the routing branch in `useMemo` and stabilize parent callbacks with `useCallback` to ensure pure components in the page subtree can actually skip re-renders.

## 2026-05-22 - React 19 JSX Attribute Naming
**Learning:** React 19 expects the 'fetchPriority' attribute to be camelCased in JSX; using the lowercase 'fetchpriority' triggers console warnings and may fail to apply correctly.
**Action:** Always use `fetchPriority` (camelCase) for image prioritization hints in React 19+.
