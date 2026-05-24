## 2026-05-24 - Manual routing 'render leak' stabilization
**Learning:** Manual routing via switch statements in React causes page components to be re-instantiated on every parent render unless memoized. This breaks React.memo optimizations in child components because the entire tree is recreated.
**Action:** Use useMemo to wrap the switch statement in the router and stabilize parent callbacks with useCallback to ensure child memoization remains effective during global state changes (e.g., audio playback updates).
