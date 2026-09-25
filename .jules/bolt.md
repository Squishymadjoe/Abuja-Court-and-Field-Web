## 2025-05-10 - Audio Player State Switch & Routing Render Leak
**Learning:** Toggling `isPlaying` or `currentEpisode` in `App.tsx` forces the whole page component hierarchy to re-render unless page routing is memoized via `useMemo` and event handlers are stabilized via `useCallback`.
**Action:** Use `useCallback` for event handlers like `handlePlayEpisode` and `useMemo` for the manual switch-case router in `App.tsx`.
