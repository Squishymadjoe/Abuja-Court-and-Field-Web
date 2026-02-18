## 2025-05-15 - [Unnecessary Re-renders During Audio Playback]
**Learning:** In this centralized state architecture, updating a global state like 'isPlaying' in App.tsx causes the entire page (Home or Episodes) and all its children (EpisodeCard) to re-render because the callback props (handlePlayEpisode) were being recreated on every render and components were not memoized.
**Action:** Use useCallback for play handlers in App.tsx and React.memo for page-level components and list items to stabilize the render tree.

**Learning:** The project's index.html is missing a module script entry point, which is required for Vite's build process to correctly bundle the application. However, fixing this is considered out-of-scope for performance PRs in this repository.
**Action:** Always verify if index.html changes are allowed before including them in a PR, even if they are necessary for a functional build.
