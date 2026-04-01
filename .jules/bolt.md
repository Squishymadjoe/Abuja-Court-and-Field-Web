## 2025-05-14 - EpisodeCard Re-render Optimization
**Learning:** In a React 19 app with state-heavy root components, even small state changes (like toggling a play button) can trigger full re-renders of list items if function props aren't stable or if the routing logic re-instantiates the page component.
**Action:** Always pair `React.memo` on list items with `useCallback` for event handlers and `useMemo` for stabilizing the JSX branch of the active page in `App.tsx`.
