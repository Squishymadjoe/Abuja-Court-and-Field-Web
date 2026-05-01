## 2026-05-01 - Render Leak Prevention
**Learning:** Manual routing via switch statements in React is a 'render leak' anti-pattern. Even if the state that changed is unrelated to the page content (e.g., playback state), the switch statement re-executes and returns a new React element tree, causing components to be re-instantiated and breaking React.memo optimizations in child components.
**Action:** Always wrap the results of manual routing switch statements in useMemo to stabilize the component tree across parent renders.
