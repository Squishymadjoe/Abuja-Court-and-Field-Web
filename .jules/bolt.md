
## 2026-04-12 - [Render Leak Prevention]
**Learning:** Manual routing via switch statements in React is a 'render leak' anti-pattern because it causes page components to be re-instantiated on every parent render unless the switch statement result is wrapped in `useMemo`. Stabilizing parent callbacks with `useCallback` and wrapping list items in `React.memo` is only effective if the page itself is also stabilized.
**Action:** Always wrap component routing logic in `useMemo` and stabilize child-passed callbacks with `useCallback` to achieve zero re-renders on state updates.
