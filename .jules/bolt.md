## 2026-05-21 - Manual Routing "Render Leaks"
**Learning:** In a manual routing architecture using a `switch` statement (e.g., `renderPage()`), global state changes in the parent (like playback toggles) cause the entire page tree to be re-instantiated on every render. This bypasses `React.memo` optimizations in child components because their parent component is always a new instance.
**Action:** Use `useMemo` to stabilize the output of the routing switch statement, ensuring that global state excluded from the dependencies array does not trigger a full page re-render.
