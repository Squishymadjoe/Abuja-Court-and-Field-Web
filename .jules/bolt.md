# Bolt's Performance Journal

## 2025-03-03 - [App Routing Re-render Leak Prevention]
**Learning:** In App.tsx, toggling audio player state (isPlaying/currentEpisode) triggers re-renders of the active page component tree. By stabilizing handlers with `useCallback` and memoizing the switch-case manual routing result with `useMemo`, we eliminate these unnecessary page re-renders completely using Same Element Reference optimization.
**Action:** Always wrap manual page switches in `useMemo` and stabilize event/state update handlers with `useCallback` when passing them down to page/layout components to stop render leaks.
