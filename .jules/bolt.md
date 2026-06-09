## 2026-05-22 - Stabilizing Manual Routing with useMemo and React.memo
**Learning:** Manual routing using switch-case in React causes "render leaks" where page components are re-instantiated on every parent render, losing DOM state and breaking React.memo optimizations in child components.
**Action:** Always wrap the manual routing switch result in `useMemo` and stabilize all callbacks passed to pages using `useCallback` to ensure `React.memo` effectively prevents unnecessary re-renders.
