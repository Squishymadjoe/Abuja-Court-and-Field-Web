## 2025-05-14 - Redundant Page-Level Re-renders in SPA Router
**Learning:** In this SPA architecture, the `renderPage` pattern in `App.tsx` returns a fresh JSX branch on every `App` state change (like toggling `isPlaying`). This causes the entire page component tree to re-render, bypassing `React.memo` on list items because their parent page component is being re-instantiated.
**Action:** Stabilize the rendered page JSX using `useMemo` and wrap event handlers in `useCallback` to maintain reference stability across global state updates.
