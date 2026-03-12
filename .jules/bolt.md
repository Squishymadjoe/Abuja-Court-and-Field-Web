## 2025-05-15 - Optimizing Re-renders in Centralized State Architecture

**Learning:** In a Single Page Application (SPA) where playback state is managed at the root (App.tsx), toggling playback can trigger re-renders of the entire component tree. This is especially impactful in large lists like an episode archive. A three-part synchronization is required to stop this:
1. Stabilize parent callbacks using `useCallback`.
2. Stabilize the rendered page component using `useMemo` in the routing logic.
3. Wrap list items and page components in `React.memo`.

Without `useMemo` in `App.tsx`'s `renderPage` function, React treats the returned JSX as a new element on every render, which bypasses `React.memo` on the child components because the element reference itself changed.

**Action:** Always check if the component being memoized is a direct child of a conditional rendering block (like a switch statement in App.tsx) and stabilize that block with `useMemo` if needed.
