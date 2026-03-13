## 2025-05-15 - Redundant re-renders in centralized state architecture
**Learning:** In this SPA, toggling global audio playback state (isPlaying) in App.tsx triggers re-renders of the entire current page and all list items because the handlePlayEpisode callback and the page components themselves were not stabilized.
**Action:** Use `useCallback` for event handlers passed down to lists and wrap page components and list items in `React.memo` to ensure stable props and prevent redundant renders.

## 2025-05-15 - Scope creep and tangential fixes
**Learning:** Including functional fixes (like adding a missing entry point in index.html) or large artifacts (like package-lock.json) in a performance-focused PR can lead to rejection during code review.
**Action:** Focus strictly on the performance win. If a bug prevents measurement, fix it locally for profiling but revert it before final submission if it's out of scope.
