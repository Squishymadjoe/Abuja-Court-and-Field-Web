# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2025-05-14 - [React 19 Rendering & Strict Mode]
**Learning:** In React 19 Strict Mode, every component renders twice during the development phase. When profiling re-renders using console logs, a single logical update (like toggling a boolean) will result in double the expected logs. Additionally, in a Single Page Application (SPA) with a routing pattern that returns JSX from a function, using `useMemo` to stabilize the returned JSX branch is critical. Without it, the entire page content is treated as a new element on every parent state change, bypassing `React.memo` on any child components within that page.
**Action:** Always use `useMemo` to stabilize the JSX output of routing functions in the main `App` component before applying `React.memo` to child list items. Account for the Strict Mode double-render factor when calculating "before vs after" metrics.
