## 2025-05-22 - [Episode List Re-render Cascade]
**Learning:** In this application's flat state structure within App.tsx, the `EpisodeCard` list triggers a full-list re-render on any audio player interaction due to the `handlePlayEpisode` callback stability. Combining `useCallback` with `React.memo` effectively isolates these interactions.
**Action:** Audit shared callbacks in `App.tsx` when passing them to list components to prevent interaction-driven render cascades.
