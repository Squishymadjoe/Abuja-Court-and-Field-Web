# Bolt Performance Journal

This journal tracks critical architectural learnings, anti-patterns, and insights discovered during performance optimization.

## 2025-07-30 - Prevent manual routing render leaks in App.tsx
**Learning:** In applications using a custom, manual state-based router (e.g. `currentPage`), any state update in the root component (like toggling an audio player or updating play state) triggers a full re-render of the entire active page component tree. Wrapping the page component creation block inside `useMemo` leveraging React's Same Element Reference optimization, along with wrapping action callbacks in `useCallback`, completely eliminates these redundant re-renders without needing to memoize every single leaf component.
**Action:** Stabilize parent event callbacks using `useCallback` and memoize the router switch-case rendering block using `useMemo` with key router state dependencies.
