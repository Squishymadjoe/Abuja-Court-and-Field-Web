## 2026-05-03 - Manual Routing Render Leaks
**Learning:** Manual routing via switch statements in React is a "render leak" anti-pattern because it causes page components to be re-instantiated (creating new DOM nodes) on every parent render unless the switch statement result is wrapped in useMemo, which breaks React.memo optimizations in child components.
**Action:** When using manual routing, always stabilize the returned component with useMemo and stabilize parent callbacks passed as props with useCallback to ensure React.memo can skip redundant re-renders.
