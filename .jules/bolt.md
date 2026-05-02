
## 2026-04-12 - [Render Leak Prevention]
**Learning:** Manual routing via switch statements in React is a 'render leak' anti-pattern because it causes page components to be re-instantiated on every parent render unless the switch statement result is wrapped in `useMemo`. Stabilizing parent callbacks with `useCallback` and wrapping list items in `React.memo` is only effective if the page itself is also stabilized.
**Action:** Always wrap component routing logic in `useMemo` and stabilize child-passed callbacks with `useCallback` to achieve zero re-renders on state updates.

## 2026-04-12 - [CI Workflow Mismatch]
**Learning:** The project's CI was incorrectly configured to run `npx webpack`, which triggered interactive prompts for `webpack-cli` and failed. The project actually uses Vite as defined in `package.json`.
**Action:** Always verify that the CI workflow (`.github/workflows/...`) matches the build system defined in `package.json` (e.g., using `npm run build` instead of tool-specific commands).
