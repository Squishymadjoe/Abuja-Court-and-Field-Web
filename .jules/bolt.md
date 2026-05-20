## 2026-05-22 - Manual Routing Render Leak
**Learning:** Manual routing using a `switch` statement in a parent component (like `App.tsx`) causes the entire page component to be re-instantiated on every parent render, even if the route hasn't changed. This breaks `React.memo` optimizations in children because they are part of a fresh component tree.
**Action:** Always wrap manual routing logic (the `switch` or branch result) in `useMemo` to stabilize the page component instance across unrelated state changes.
