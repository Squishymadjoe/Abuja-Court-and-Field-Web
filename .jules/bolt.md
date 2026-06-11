## 2026-05-22 - [Render Leaks in Manual Routing]
**Learning:** Manual switch-case routing in React (e.g., `renderPage()`) causes the entire page tree to re-render whenever the parent component's state updates, even if the state (like global playback) isn't used by the pages.
**Action:** Always wrap the manual routing logic in `useMemo` and stabilize parent callbacks with `useCallback` to ensure the page tree only re-renders when the actual route changes.
