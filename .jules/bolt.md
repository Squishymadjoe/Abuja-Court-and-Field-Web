## 2026-05-22 - [Manual Router Render Leak]
**Learning:** Manual routing using a `switch` statement in the render body is a "render leak" anti-pattern. Even if children use `React.memo`, they will re-render if the component instance is re-created on every parent render.
**Action:** Always wrap the manual routing logic in `useMemo` (excluding frequently changing global state like playback status) and stabilize callbacks with `useCallback` to prevent cascading re-renders during global state updates.
