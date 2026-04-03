## 2025-05-15 - React SPA Optimization: Stabilization of JSX Branch and List Items

**Learning:** In a React single-page application where the main routing logic is in a `renderPage` style function, state updates in the parent (`App.tsx`) cause the entire returned JSX branch to be recreated. This effectively bypasses `React.memo` on child components (like `EpisodeCard`) because their parent page component (like `Episodes`) is re-instantiated on every render, even if the props to that page didn't change.

**Action:** Stabilize the routing JSX branch using `useMemo` in `App.tsx` and ensure all callbacks passed into the page tree (like `handlePlayEpisode`) are stabilized with `useCallback`. This, combined with `React.memo` on list items, allows React to successfully bail out of re-rendering deep component trees. This optimization reduced re-renders of the episode list from 14 to 2 (only App re-renders twice due to StrictMode) during a simple playback state toggle.
