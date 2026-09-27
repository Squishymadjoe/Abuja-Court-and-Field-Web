## 2025-02-18 - Manual Routing Render Leaks from Global Audio Player State
**Learning:** In App.tsx's manual routing setup, toggling global player state (e.g. isPlaying) triggered full re-renders of the active page tree because page elements were re-instantiated in renderPage().
**Action:** Wrap event handlers in `useCallback` and memoize the active route JSX element tree with `useMemo` so React bails out of re-rendering page components via Same Element Reference optimization.
