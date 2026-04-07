## 2025-05-14 - Stabilizing JSX branches in SPA routing
**Learning:** In a React SPA using a `switch` statement or similar logic to render pages in `App.tsx`, simply wrapping page components in `React.memo` is insufficient if the parent state changes. React sees a "new" element returned by the render function/branch on every parent render, bypassing memoization. `useMemo` must be used to stabilize the JSX element reference itself.
**Action:** When optimizing SPA routing hubs, always use `useMemo` to stabilize the returned page component branch in addition to `useCallback` for passed props.

## 2025-05-14 - Vite and Node.js engine compatibility in CI
**Learning:** `@vitejs/plugin-react@5.2.0` requires Node.js version '^20.19.0 || >=22.12.0'. CI workflows using Node 18.x will fail with an EBADENGINE warning and potential runtime issues. Additionally, using `npx webpack` in a Vite project without `webpack-cli` installed will cause interactive prompts that hang CI.
**Action:** Always verify the required Node.js version for the project's build tools and use the project's defined build scripts (e.g., `npm run build`) in CI to avoid interactive prompts and ensure compatibility.
