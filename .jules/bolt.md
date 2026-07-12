## 2025-05-14 - [Manual Routing Render Leak]
**Learning:** In this application, the manual routing switch in `App.tsx` causes the entire active page component tree to re-instantiate on every parent state change (like toggling the audio player) because the switch-case returns new JSX elements each time.
**Action:** Stabilize route handlers with `useCallback` and memoize the routing switch result with `useMemo` in `App.tsx` to leverage React's 'Same Element Reference' optimization.
