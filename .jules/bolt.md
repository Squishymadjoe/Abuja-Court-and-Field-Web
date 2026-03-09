## 2025-05-15 - [React List Re-render Optimization]
**Learning:** In a SPA with a centralized state (e.g., `isPlaying` in `App.tsx`), toggling state causes the entire component tree to re-render. If the routing logic (e.g., `renderPage`) returns a new JSX branch every time, child components wrapped in `React.memo` will still re-render because their parent element reference has changed.
**Action:** Use `useMemo` to stabilize the JSX returned by the routing logic and `useCallback` for functions passed as props, in addition to `React.memo` for the list items.

## 2025-05-15 - [Vite Entry Point Requirement]
**Learning:** In this Vite configuration, if `index.html` lacks a `<script type="module" src="/index.tsx"></script>` tag, the production build may "succeed" while transforming only a couple of modules (e.g., the import map) and producing an empty application shell.
**Action:** Always ensure the entry point script is present in `index.html` after the `importmap` to enable correct bundling and measurement.
