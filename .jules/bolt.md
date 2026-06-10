## 2026-05-21 - [Three-Part Synchronization for Manual Routing]
**Learning:** Manual switch-case routing in a root component (like App.tsx) causes the entire page tree to re-render whenever global state (like playback) changes. To fix this "render leak", a three-part synchronization is required: stabilize parent callbacks with `useCallback`, wrap the router output in `useMemo`, and wrap terminal components in `React.memo`.
**Action:** Always apply the Three-Part Synchronization when using manual routing to prevent volatile global states from forcing full-page re-renders.
