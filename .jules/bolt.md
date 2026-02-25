# Bolt's Performance Journal

## 2025-05-14 - Routing Pattern Re-renders
**Learning:** The `renderPage()` pattern in `App.tsx` that returns a JSX element directly causes all children to re-render whenever the parent state (like `isPlaying`) changes, even if the children are memoized. This is because the parent is returning a *new* React element on every render.
**Action:** Use `useMemo` to stabilize the output of the routing logic or ensure that callbacks passed to memoized children are wrapped in `useCallback`. In this codebase, combining `useMemo` for the page component and `useCallback` for the play handler is essential for zero re-renders during playback.
