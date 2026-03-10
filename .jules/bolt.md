## 2025-01-24 - [Entry Point & JSX Stabilization]
**Learning:** In this Vite-based React 19 repository, the missing `<script type="module" src="/index.tsx"></script>` in `index.html` was a critical bottleneck that prevented the app from loading and caused production builds to generate an empty shell. Furthermore, the routing pattern in `App.tsx` (using a `renderPage` function) caused entire page components to re-render on every state change because the JSX branch was not stabilized.

**Action:** Always verify the existence of the module entry point in `index.html` when an app fails to load or build correctly. Use `useMemo` to stabilize JSX branches in centralized routing logic to ensure `React.memo` on child components (like `EpisodeCard`) can effectively prevent redundant re-renders.
