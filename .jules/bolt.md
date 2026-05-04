## 2026-04-12 - Component Re-render Optimization
**Learning:** Manual routing via switch statements in React is a 'render leak' anti-pattern. Even if children are memoized, they are re-instantiated on every parent render unless the switch statement result itself is memoized with useMemo.
**Action:** Always wrap the results of dynamic component selection (like routers) in useMemo and stabilize parent callbacks with useCallback to ensure memoized children can skip renders.
