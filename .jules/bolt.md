## 2025-05-14 - [React 19 Memoization Pattern]
**Learning:** In React 19, the `renderPage` routing pattern in `App.tsx` returns a new element on every parent render. This bypasses `React.memo` on children unless the routing logic itself is wrapped in `useMemo` and callbacks are stabilized with `useCallback`.
**Action:** Always stabilize both the returned JSX branch via `useMemo` and any passed callbacks via `useCallback` when using conditional routing in the parent component.

## 2026-02-27 - Stabilizing React 19 Routing
**Learning:** In architectures using a centralized `renderPage()` pattern, even with `React.memo`, child components will re-render if the parent state changes because the returned JSX branch is a "new" element on every render.
**Action:** Use `useMemo` to stabilize the rendered page component in the parent to ensure memoization of child components works as intended.
