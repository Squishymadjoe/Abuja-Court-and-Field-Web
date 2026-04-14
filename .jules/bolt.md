## 2025-05-14 - Multi-layered Re-render Prevention
**Learning:** In this SPA architecture, preventing list re-renders when global state (like playback) changes requires stabilizing the callback (`useCallback`), the page component branch (`useMemo` in the router), and the list items (`React.memo`). Stabilizing only one or two levels still results in redundant renders of the entire list.
**Action:** Always verify the entire chain from the state-holding parent down to the leaf components when optimizing for re-renders.

## 2025-05-14 - Vite Entry Point in index.html
**Learning:** Failing to include the `<script type="module" src="/index.tsx"></script>` in `index.html` allowed the production build to succeed but generated an empty shell. It also caused Playwright to timeout waiting for the `#root` element to be populated in development.
**Action:** Ensure the entry point script is present and correctly ordered (after importmap) in `index.html`.
