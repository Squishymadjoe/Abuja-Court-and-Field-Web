# Bolt Performance Journal

## 2025-02-23 - Same Element Reference Optimization for Manual Routing
**Learning:** In manual switch-case routing patterns in React, updating parent state (such as an audio player's `isPlaying` or `currentEpisode` state) causes the switch block to return new JSX element references on every render. This bypasses React's referential equality bailout and re-renders the entire active page subtree. Wrapping the routing switch result in `useMemo` and stabilizing callbacks with `useCallback` achieves Same Element Reference optimization, completely stopping page re-renders on unrelated parent state changes.
**Action:** Always memoize the rendered element tree in parent routers when child pages don't depend on global media or player state.
