## 2026-05-22 - [Render Leaks in Manual Routing]
**Learning:** Manual switch-case routing in a shared parent component (like App.tsx) causes the entire page tree to re-render whenever global state (e.g., playback status) updates. This happens because the routing function/block is part of the parent's render cycle.
**Action:** Apply 'Three-Part Synchronization': stabilize parent callbacks with `useCallback`, wrap the router output in `useMemo` (excluding volatile global state), and wrap child page/card components in `React.memo`.
