# Bolt Performance Journal

This is a historical record of architectural learnings and performance observations for this repository.

## 2023-11-20 - [Manual Routing Render Leak Mitigation]
**Learning:** In App.tsx, toggling audio player state (isPlaying/currentEpisode) triggers re-renders of the active page component tree. Stabilizing handlers with `useCallback` and memoizing the switch-case result with `useMemo` eliminates these unnecessary renders by 100% (Same Element Reference optimization).
**Action:** When working on manual routing setups in this repository, always stabilize callbacks and memoize the rendered page component using `useMemo`.
