## 2025-05-15 - Optimizing Global State Side-Effects

**Learning:** In a single-page application where global state (like a media player's `isPlaying` status) is managed at the root `App` level, every state update triggers a full re-render of the active page component and its entire sub-tree. In this repository, toggling playback caused all 6 `EpisodeCard` components to re-render twice (due to StrictMode), totaling 12 redundant renders.

**Action:** To solve this, a three-pronged approach is necessary:
1. Wrap the page rendering branch in `useMemo` within `App.tsx` to stabilize the component tree across state updates that don't affect the route.
2. Memoize callbacks passed to list items using `useCallback`.
3. Wrap expensive list items (like `EpisodeCard`) in `React.memo`.
This combination reduced re-renders of the episode list from 12 to 0 during playback toggles.
