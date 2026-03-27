## 2026-03-27 - [Re-render Optimization in SPA Architecture]
**Learning:** Successfully reducing re-renders in this React 19 architecture requires a three-part synchronization: stabilizing callbacks with `useCallback`, stabilizing the JSX branch in the router with `useMemo`, and wrapping list items in `React.memo`. Without `useMemo` in the router, the entire page tree re-instantiates on parent state changes, bypassing child memoization.
**Action:** Always check the routing logic in `App.tsx` for stabilized JSX branches when optimizing child components.

## 2026-03-27 - [Essential index.html Entry Point]
**Learning:** In this Vite/React 19 environment, the production build can succeed even if the `index.tsx` entry point is missing from `index.html`, but it results in an empty shell.
**Action:** Ensure `<script type="module" src="/index.tsx"></script>` is present after the importmap block for both development and production parity.
