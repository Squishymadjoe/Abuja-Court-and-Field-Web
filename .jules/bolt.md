# Bolt's Performance Journal

## 2025-03-02 - Three-Part Synchronization Pattern for Manual Routing
**Learning:** In React applications with stateful elements like persistent audio players, toggling player state triggers full parent component re-renders. If manual routing is used inside the parent, this re-renders the entire active page element tree on every play/pause or episode change. Stabilizing handlers with `useCallback` and memoizing the switch-case routing tree with `useMemo` exploits React's "Same Element Reference" optimization, eliminating these page-level render leaks entirely.
**Action:** Always check parent component routing mechanisms when high-frequency or global layout states change. Memoize the routing component tree using `useMemo` and stabilize all page callbacks with `useCallback`.
