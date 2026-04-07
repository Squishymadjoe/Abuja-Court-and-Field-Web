## 2025-05-14 - Stabilizing JSX branches in SPA routing
**Learning:** In a React SPA using a `switch` statement or similar logic to render pages in `App.tsx`, simply wrapping page components in `React.memo` is insufficient if the parent state changes. React sees a "new" element returned by the render function/branch on every parent render, bypassing memoization. `useMemo` must be used to stabilize the JSX element reference itself.
**Action:** When optimizing SPA routing hubs, always use `useMemo` to stabilize the returned page component branch in addition to `useCallback` for passed props.
