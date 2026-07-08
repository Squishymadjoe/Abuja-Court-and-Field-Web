## 2025-03-24 - [Optimizing Manual Routing Re-renders]
**Learning:** In applications using a manual switch-case router at the top level, updates to global state (like an audio player) trigger full-page re-renders. Standard reconciliation is insufficient for large page trees.
**Action:** Use the 'Three-Part Synchronization' pattern: stabilize callbacks with `useCallback`, memoize the switch-case result with `useMemo`, and ensure child components receive stable props. This leverages React's 'Same Element Reference' optimization to bail out of re-rendering the entire page tree.
