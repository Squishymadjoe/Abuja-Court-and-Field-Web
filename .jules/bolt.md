## 2025-05-14 - [React Render Leak in Manual Routing]
**Learning:** Toggling shared global state (like an audio player) in a top-level App component causes all child elements returned by a manual routing switch-case to re-render, because fresh React elements are created on every render cycle.
**Action:** Use `useMemo` to stabilize the manual routing result and `useCallback` for any handlers passed to those pages. This leverages React's internal 'Same Element Reference' optimization to bail out of child re-renders without needing `React.memo` on every page component.
