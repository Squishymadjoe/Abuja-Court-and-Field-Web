# Bolt Performance Journal

This is Bolt's performance journal containing critical learnings, bottlenecks, and optimizations.

## 2026-08-04 - Stabilize manual routing renders
**Learning:** In React, updating a state property (like an audio player's play/pause state or active track) in a parent layout/app component triggers a full re-render of the parent. By default, this also re-renders all children, including the active page tree. While `React.memo` can be used on individual children, React's 'referential equality bail-out' (Same Element Reference optimization) is a much cleaner and more direct approach. By using `useMemo` on the switch-case manual routing node and dependency-tracking only page-related props, the page component tree's instantiations are fully memoized. When audio player state toggles, the parent `App` re-renders, but React sees the identical element reference for the page content and completely bails out of re-rendering that subtree.
**Action:** Wrap manual page-routing switches with `useMemo`, and stabilize nested callback props with `useCallback` to ensure Same Element Reference works seamlessly.
