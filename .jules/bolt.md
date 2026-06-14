
## 2026-05-18 - Manual Routing Render Leak
**Learning:** Manual routing using a switch-case in `App.tsx` can cause the entire page tree to re-render whenever global state (like playback status) changes. Even if the page doesn't use the state, it's part of the same render branch.
**Action:** Apply 'Three-Part Synchronization': stabilize callbacks with `useCallback`, wrap the router output in `useMemo`, and wrap page components in `React.memo`.
