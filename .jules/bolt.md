## 2025-05-14 - [Manual Routing Render Leak]
**Learning:** In applications using manual routing (switch-case in App.tsx) where global state (like an audio player) exists alongside the route, every state update in the parent triggers a full re-render of the active page component tree.
**Action:** Use the "Same Element Reference" pattern by wrapping the routing logic in `useMemo` and stabilizing event handlers with `useCallback`. This allows React to bail out of rendering the entire child tree when unrelated parent state changes.
