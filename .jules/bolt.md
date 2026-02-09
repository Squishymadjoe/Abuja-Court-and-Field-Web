## 2025-05-15 - React List Re-render Optimization
**Learning:** In this SPA, global state updates (like audio player status) in the root `App` component trigger a full re-render of all list items (e.g., `EpisodeCard` in `Episodes.tsx`) if child components aren't memoized and callbacks aren't stable.
**Action:** Always wrap bulk-rendered list components in `React.memo` and use `useCallback` for event handlers passed from the parent to ensure stable references.

## 2025-05-15 - Missing Vite Entry Point
**Learning:** The project's `index.html` was missing a module script entry point for `index.tsx`, causing the application to build but not load any JavaScript in the browser.
**Action:** Verify that `index.html` includes `<script type="module" src="/index.tsx"></script>` when setting up or debugging the environment.
