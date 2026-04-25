## 2026-04-12 - The Three-Part Stabilization Pattern
**Learning:** In this architecture, preventing re-renders of the episode list during playback state changes requires three concurrent optimizations: stabilizing parent callbacks with `useCallback`, stabilizing the router's branch with `useMemo`, and memoizing the child components with `React.memo`. Missing any one of these allows the render signal to leak through.
**Action:** Always verify that the entire chain from state owner to terminal component is stable when optimizing list renders.

## 2026-04-12 - Inaccurate CI Workflow
**Learning:** The project's CI workflow (`.github/workflows/webpack.yml`) was misconfigured, attempting to use `npx webpack` on a Vite project and targeting Node.js 18.x which is incompatible with the current `@vitejs/plugin-react` version.
**Action:** Always check the CI configuration if a PR fails on a "build" step that uses a different build tool than the one defined in `package.json`.
