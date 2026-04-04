## 2025-05-15 - React Component Stabilization in Single-Page Architecture

**Learning:** In this SPA, global state updates (like `isPlaying`) in `App.tsx` were triggering full tree re-renders, including the active page and all list items (e.g., 12 `EpisodeCard` renders per toggle). This was because the routing logic returned a fresh JSX branch on every render, bypassing `React.memo` on child components.

**Action:** Stabilized the `handlePlayEpisode` callback with `useCallback` and the routing logic with `useMemo`. Combined with wrapping all page components and `EpisodeCard` in `React.memo` (using named functions for DevTools), this reduced re-renders from 14+ down to 2 (App x2 in StrictMode), achieving a near 100% reduction in redundant component rendering.
