
## 2026-05-20 - [Manual Routing Render Leak]
**Learning:** Manual routing via switch statements in React is a 'render leak' anti-pattern because it causes page components to be re-instantiated (creating new JSX elements) on every parent render unless the switch statement result is wrapped in useMemo. This breaks React.memo optimizations in child components because their parent is technically 'new' every time.
**Action:** Always wrap the results of a routing switch statement in useMemo when top-level state (like global playback) needs to trigger parent renders without affecting the page branch.
