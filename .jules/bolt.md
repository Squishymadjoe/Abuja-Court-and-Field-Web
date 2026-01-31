# Bolt's Performance Journal ⚡

## 2025-05-14 - [React Component Re-render Optimization]
**Learning:** The application is a React SPA where the root `App` component manages global state (navigation, playback). Because many components are not memoized, any state change in `App` (like toggling play/pause or changing volume) causes a recursive re-render of the entire active component tree, even if the props for those components haven't changed.

**Action:** Implement `useCallback` for event handlers passed as props and apply `React.memo` to key components (EpisodeCard, Page components). This ensures that only components actually affected by a state change are re-rendered, significantly improving UI responsiveness and reducing CPU usage during playback interactions.
