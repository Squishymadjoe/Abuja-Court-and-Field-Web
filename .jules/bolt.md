## 2026-06-21 - Render Leaks in Manual Routing
**Learning:** In applications using manual switch-case routing (without a library like React Router), updating global state (like playback status) in the parent component triggers a full re-render of the current page's entire component tree.
**Action:** Stabilize parent callbacks with `useCallback`, wrap the router output in `useMemo` (excluding global playback state from dependencies), and wrap child page components in `React.memo` to ensure the page tree remains static during media playback updates.
