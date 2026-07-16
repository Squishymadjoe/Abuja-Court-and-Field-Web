## 2025-05-15 - Fixing render leaks in manual routing

**Learning:** In applications using manual routing (switch-case in the main App component), toggling global state (like an audio player) triggers re-renders of the entire active page component tree. This is because the switch-case logic executes on every App render, creating "new" React elements even if the props haven't changed.

**Action:** Stabilize event handlers with `useCallback` and memoize the rendered page element with `useMemo`. This leverages React's 'Same Element Reference' optimization, preventing child re-renders without needing `React.memo` on every page component.
