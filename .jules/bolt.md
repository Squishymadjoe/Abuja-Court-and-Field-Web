## 2026-04-30 - Component Re-rendering Optimization
**Learning:** Manual routing with a switch statement in App.tsx causes page components to be re-instantiated on every parent render, breaking React.memo child optimizations even if props are stable.
**Action:** Always wrap the result of routing logic in useMemo to maintain stable component instances across renders.
