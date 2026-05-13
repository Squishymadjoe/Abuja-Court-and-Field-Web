## 2026-05-13 - [Preventing Render Leaks in Manual Routing]
**Learning:** In a Single Page Application using manual routing (switch statements in render), updating global state (like playback) causes the entire route branch to re-render. If child components depend on callbacks from the parent, they will all re-render unless those callbacks are stabilized and the components are memoized.
**Action:** Stabilize parent callbacks with `useCallback`, wrap the routing logic in `useMemo`, and use `React.memo` for list items to ensure state changes in the player don't trigger expensive list re-renders.

## 2026-05-13 - [Correcting CI for Vite Projects]
**Learning:** The original CI workflow incorrectly attempted to run `npx webpack` in a Vite-based project, leading to build timeouts and interactive prompts. Additionally, `@vitejs/plugin-react` version used requires Node.js >= 20.19.0.
**Action:** Update CI to use `npm run build` and restrict Node.js matrix to [20.x, 22.x] to ensure non-interactive, compatible builds.
