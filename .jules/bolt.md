## 2026-05-20 - [Manual Routing Render Leaks]
**Learning:** Manual switch-case routing in the main App component causes the entire page tree to re-render on every state update (like playback status), even if the page component itself hasn't changed.
**Action:** Stabilize parent callbacks with useCallback, wrap the router output in useMemo (excluding global playback state), and wrap child components in React.memo for a multi-part synchronization.
