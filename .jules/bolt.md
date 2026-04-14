## 2025-05-14 - Multi-layered Re-render Prevention
**Learning:** In this SPA architecture, preventing list re-renders when global state (like playback) changes requires stabilizing the callback (`useCallback`), the page component branch (`useMemo` in the router), and the list items (`React.memo`). Stabilizing only one or two levels still results in redundant renders of the entire list.
**Action:** Always verify the entire chain from the state-holding parent down to the leaf components when optimizing for re-renders.

## 2025-05-14 - Vite Entry Point in index.html
**Learning:** Failing to include the `<script type="module" src="/index.tsx"></script>` in `index.html` allowed the production build to succeed but generated an empty shell. It also caused Playwright to timeout waiting for the `#root` element to be populated in development.
**Action:** Ensure the entry point script is present and correctly ordered (after importmap) in `index.html`.

## 2025-05-14 - Build System Mismatch in CI
**Learning:** The repository was using a legacy Webpack CI workflow for a project that has been migrated to Vite. This caused CI failures because it tried to run `npx webpack` which prompted for `webpack-cli` and hung/failed. Additionally, Node.js 18 was included in the matrix but is incompatible with `@vitejs/plugin-react@5`.
**Action:** Always check `.github/workflows` to ensure the CI steps match the current `package.json` scripts and environment requirements.
