## 2025-05-18 - Audio player state updates trigger page re-renders
**Learning:** In App.tsx, toggling audio player state (`isPlaying` / `currentEpisode`) re-rendered `App` and caused `renderPage()` to re-instantiate page components (e.g., `Home` or `Episodes`).
**Action:** Stabilize event handlers using `useCallback` and memoize the switch-case page element tree using `useMemo` (`Three-Part Synchronization` pattern) to leverage React's Same Element Reference bail-out and prevent unnecessary child re-renders without adding redundant `React.memo` to child components.
