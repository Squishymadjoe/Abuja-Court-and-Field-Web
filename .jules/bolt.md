## 2025-05-15 - Redundant Episode List Re-renders
**Learning:** In the SPA architecture of this app, state changes in the root `App` component (like toggling the audio player) trigger a full re-render of the entire active page. Specifically, on the Episodes page, every `EpisodeCard` re-renders because the `handlePlayEpisode` callback is unstable and the routing logic returns a new JSX branch every time.
**Action:** Use `useCallback` to stabilize event handlers, `React.memo` for list items, and `useMemo` to stabilize the rendered page component in `App.tsx`.
