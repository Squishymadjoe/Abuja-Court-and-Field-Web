## 2025-05-14 - [React 19 Memoization Pattern]
**Learning:** In React 19, the `renderPage` routing pattern in `App.tsx` returns a new element on every parent render. This bypasses `React.memo` on children unless the routing logic itself is wrapped in `useMemo` and callbacks are stabilized with `useCallback`.
**Action:** Always stabilize both the returned JSX branch via `useMemo` and any passed callbacks via `useCallback` when using conditional routing in the parent component.
