# Bolt's Performance Journal

## 2023-10-27 - [Unnecessary re-renders in Episode List]
**Learning:** Re-creating callback functions (like `handlePlayEpisode`) in `App.tsx` on every render causes all memoized child components (`Home`, `Episodes`, `EpisodeCard`) to re-render because the prop reference changes. Using `useCallback` for the callback and `React.memo` for the components is essential for maintaining performance in this state-heavy SPA.
**Action:** Always check for stable callback references when passing functions to memoized components.

## 2023-10-27 - [Missing Script Entry Point in index.html]
**Learning:** In this Vite environment, `index.html` was missing the module script for `index.tsx`. This caused the app to not load at all in the browser, making it impossible to profile or verify performance without fixing this first.
**Action:** Ensure the entry point script is present in `index.html` for proper Vite functioning.
