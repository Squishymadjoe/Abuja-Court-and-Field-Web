## 2026-05-22 - [Manual Routing Render Leak]
**Learning:** Manual routing via `switch` or `if/else` statements in React is a "render leak" anti-pattern. Even if the current page component doesn't change, re-executing the routing logic in the parent render function creates a new React element, which causes the entire page tree to re-instantiate unless the result is wrapped in `useMemo`.
**Action:** Always memoize the result of manual routing logic and ensure child components like list items are wrapped in `React.memo` with stable callbacks from the parent.
