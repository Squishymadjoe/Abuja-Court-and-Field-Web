## 2026-04-18 - Preventing "Render Leaks" in Manual Routing
**Learning:** In SPAs using manual routing (e.g., via a switch statement in App.tsx), every state change in the parent component triggers a re-execution of the routing logic. This creates new instances of page components, bypassing React.memo and causing full-page re-renders even if the page content didn't change.
**Action:** Always wrap manual route branches in `useMemo` and stabilize parent callbacks with `useCallback` to ensure the component tree remains stable across unrelated global state updates (like playback or UI toggles).
