## 2025-05-15 - Component Tree Stabilization in SPA Routers

**Learning:** In this application's architecture, wrapping list items in `React.memo` and callbacks in `useCallback` was insufficient to prevent re-renders when the global state in `App.tsx` changed. Because the `renderPage` function returned a new JSX branch on every `App` render, React treated the entire page as "new," bypassing child memoization. Stabilizing the page instance itself using `useMemo` in `App.tsx` was required to allow `React.memo` on `EpisodeCard` to function. Additionally, React 19 requires the camelCase `fetchPriority` attribute on images for LCP optimization.

**Action:** When optimizing re-renders in a component that uses a switch-case or function-based routing pattern, always memoize the resulting component tree (the "page") to maintain referential stability. Ensure `fetchPriority` uses correct React 19 casing.
