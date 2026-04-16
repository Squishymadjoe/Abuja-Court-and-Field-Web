## 2025-05-15 - Synchronized Memoization for SPA Performance
**Learning:** In a single-page application with a central router, preventing list re-renders during global state changes (like starting an audio player) requires a three-part synchronization:
1. Stabilizing callbacks passed to the page via `useCallback`.
2. Stabilizing the page component instance itself within the router using `useMemo`.
3. Wrapping the expensive list items in `React.memo`.
Failing any of these three steps causes the entire list to re-render because either the props changed, or the parent page itself was re-instantiated.
**Action:** Always verify SPA routing components are memoized if they hold expensive lists or children, and ensure all callbacks passed through the route are stable.
