## 2026-03-05 - Optimizing SPA Re-renders during Playback

**Learning:** In a React application with centralized state (like a global audio player in App.tsx), every state change (e.g., toggling `isPlaying`) triggers a full re-render of the component tree. Even if child components are wrapped in `React.memo`, they will still re-render if the page component containing them is recreated. Stabilizing the "rendered page" via `useMemo` in the router, combined with `useCallback` for props and `React.memo` for leaves, is necessary to achieve near-zero redundant re-renders.

**Action:** When implementing centralized state or routing, always check if the "page branch" is stable. Use `useMemo` for the router output and `React.memo` for both page-level and item-level components to prevent cascade re-renders.
