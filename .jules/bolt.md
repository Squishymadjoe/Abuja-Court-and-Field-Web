## 2026-04-20 - Reducing Episode List Re-renders
**Learning:** In a single-page application with global state (like an audio player), toggling playback can cause the entire page tree to re-render. If the page contains a list of items (like EpisodeCards), every item re-renders even if its props haven't changed, leading to O(N) re-renders for a simple state change.
**Action:** Use a three-pronged approach: 1) Stabilize parent callbacks with `useCallback`, 2) Memoize the page branch in the router with `useMemo`, and 3) Wrap list item components in `React.memo()`. Combined, these reduce re-renders from N to 0 for unrelated state changes.

## 2026-04-20 - Vite Production Build Entry Point
**Learning:** A Vite-based project requires the entry point script (e.g., `<script type="module" src="/index.tsx"></script>`) to be explicitly present in `index.html`. If it's missing, `npm run build` might succeed but produce an empty application shell.
**Action:** Always verify the presence of the entry point script in `index.html` when debugging build or runtime issues in Vite environments.
