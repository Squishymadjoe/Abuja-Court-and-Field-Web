## 2025-03-31 - Stabilizing Component Trees with useMemo and React.memo

**Learning:** In a React application with a centralized page router (e.g., using a switch statement in `App.tsx`), any global state change (like playback status or current track) causes the router function to re-execute. This returns a *new* JSX element tree, which React treats as a different component instance, causing the entire page (and all its children like `EpisodeCard` lists) to unmount and remount or re-render, even if the components themselves are wrapped in `React.memo`.

**Action:** Stabilize the JSX branch of the active page using `useMemo` in the router logic. By combining `useMemo` for the page tree with `useCallback` for event handlers and `React.memo` for the leaf components, we can achieve true re-render isolation for unrelated global state updates.

## 2025-03-31 - Vite 6 and CI Compatibility

**Learning:** The project's CI was incorrectly using `npx webpack`, which failed because it's a Vite project. Additionally, Vite 6 (@vitejs/plugin-react@5.2.0) requires Node.js ^20.19.0 or >=22.12.0. Using Node 18.x in CI causes engine incompatibility warnings and potential failures.

**Action:** Update the CI workflow (`.github/workflows/webpack.yml`) to use `npm run build` and ensure the Node.js version matrix only includes supported versions (20.x, 22.x).
