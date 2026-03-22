## 2026-03-22 - Stabilizing React Route Rendering

**Learning:** In SPAs where routing is handled by a switch-case or conditional function in `App.tsx`, returning JSX directly (e.g., `return <Home />`) causes the entire page tree to re-render on every parent update because the element reference is always new. This bypasses `React.memo` on the page components.

**Action:** Wrap the routing result in `useMemo`, keyed to the current route state. This stabilizes the element reference, allowing `React.memo` on pages to skip re-renders when global state (like audio playback) updates.

## 2026-03-22 - CI/CD Compatibility with Vite 6

**Learning:** Vite 6 requires Node.js ^20.19.0 or >=22.12.0. CI workflows using Node 18.x will fail due to engine incompatibility. Additionally, using `npx webpack` in a Vite project is incorrect and will fail if webpack is not a dependency.

**Action:** Update GitHub Action matrix to [20.x, 22.x] and replace build commands with `npm run build` to use the project's defined build scripts.
