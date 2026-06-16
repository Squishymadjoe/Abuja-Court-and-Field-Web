## 2026-05-20 - [Render Leaks in Manual Routing]
**Learning:** Manual switch-case routing in App.tsx causes the entire page tree to re-render on any state change (like isPlaying) even if the page component doesn't use that state. React 19's StrictMode doubles these renders in development.
**Action:** Apply 'Three-Part Synchronization': stabilize callbacks with `useCallback`, memoize the page tree with `useMemo`, and wrap components in `React.memo`.
