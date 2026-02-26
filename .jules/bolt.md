## 2025-05-22 - [Stabilizing Page Components with useMemo]
**Learning:** In architectures where a routing function (like `renderPage`) returns JSX directly, `React.memo` on the child components is not enough because the parent returns a new element instance on every render.
**Action:** Use `useMemo` to stabilize the output of the routing function in addition to `useCallback` for props and `React.memo` for the components themselves.

## 2025-05-22 - [CI Misconfiguration with Vite]
**Learning:** This project uses Vite, but the initial GitHub Action was configured for Webpack and was attempting to run `npx webpack`. Additionally, `@vitejs/plugin-react` (v5+) requires Node 20 or higher.
**Action:** Ensure CI workflows use `npm run build` (triggering Vite) and target Node 20+, and verify that `index.html` contains the necessary module script entry point.
