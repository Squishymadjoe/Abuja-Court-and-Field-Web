## 2025-05-18 - Eliminating manual routing render leaks with Same Element Reference

**Learning:** When using a top-level switch-case manual router in React, triggering state updates in parent layout components (e.g., toggling audio player play/pause state in `Layout`) causes the entire active page element tree to re-instantiate on every render if the router function returns new JSX elements each time. Wrapping callback props in `useCallback` and memoizing the switch-case routing result with `useMemo` leverages React's 'Same Element Reference' optimization, preventing 100% of unnecessary page sub-tree re-renders without needing `React.memo` on every individual page component.

**Action:** For top-level state changes in layout or routing wrappers, memoize callback handlers and the rendered route JSX with `useMemo` so that state changes isolated to layout controls do not trigger page re-renders.
