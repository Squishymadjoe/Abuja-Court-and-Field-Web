## 2025-03-31 - Stabilizing Component Trees with useMemo and React.memo

**Learning:** In a React application with a centralized page router (e.g., using a switch statement in `App.tsx`), any global state change (like playback status or current track) causes the router function to re-execute. This returns a *new* JSX element tree, which React treats as a different component instance, causing the entire page (and all its children like `EpisodeCard` lists) to unmount and remount or re-render, even if the components themselves are wrapped in `React.memo`.

**Action:** Stabilize the JSX branch of the active page using `useMemo` in the router logic. By combining `useMemo` for the page tree with `useCallback` for event handlers and `React.memo` for the leaf components, we can achieve true re-render isolation for unrelated global state updates.
