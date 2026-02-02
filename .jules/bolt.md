## 2026-02-02 - [Infrastructure Conflict and Re-render Bottleneck]
**Learning:** The project's `index.html` was missing a Vite entry point (`<script type="module" src="/index.tsx"></script>`) and contained an `importmap` for React/ReactDOM from CDN. Adding the entry point fixed the development environment, but removing the `importmap` was flagged as a major architectural change. Additionally, confirmed that re-renders of list items (EpisodeCard) occurred on every parent state change due to unstable callback references.
**Action:** Always verify the application's entry point if it fails to load, but be cautious about removing existing CDN-based loading logic (importmaps) in Vite projects. Use `useCallback` and `React.memo` to stabilize component renders in lists.

## 2026-02-02 - [CI Workflow Misconfiguration]
**Learning:** The project had a legacy `webpack.yml` that attempted to use `npx webpack` in a Vite-based environment. This caused CI failures as the project lacks a webpack configuration and uses different build tooling.
**Action:** When working in a Vite project, ensure CI workflows are updated to use `npm run build` and target compatible Node.js versions (>= 20.x).
