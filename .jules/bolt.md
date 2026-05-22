## 2026-05-21 - Manual Routing "Render Leak"
**Learning:** Manual routing using a `switch` statement in a parent component (like `App.tsx`) causes the entire page component to be re-instantiated on every parent render. This bypasses `React.memo` on children because the child components are unmounted and remounted rather than updated.
**Action:** Wrap the routing logic in `useMemo` and exclude global state (like media player status) from its dependencies to stabilize the page instance and enable effective memoization of child components.
